import React, { useEffect, useState } from 'react';
import uuid from 'react-native-uuid';
import { Controller, useForm } from 'react-hook-form';
import { Alert, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';
import { Header } from '../../components/Header';

import {
  ChatContainer,
  Container,
  EndChat,
  InputChat,
  InputContainer,
  MessageContainer,
  MessageContent,
  MessageText,
  TextEndChat,
} from './styles';
import { useAuth } from '../../hooks/auth';
import { firebase } from '@react-native-firebase/messaging';

interface IDataMessage {
  message: string;
}

interface IMessages {
  message: Array<string>;
}

interface IAddMessage {
  type: 'add_message';
  pk_mobile: string;
  pk_employee: string;
  id_message: string;
  message: string;
  sender: 'client' | 'partner';
  time: Date;
  status: string;
}

interface IChat {
  status: boolean;
  error: string;
  data: {
    mobile_user: {
      pk: string;
      name: string;
      surname: string;
      url_picture: string;
    },
    employee_user: {
      pk: string;
      name: string;
      surname: string;
      nickname: string;
      url_picture: string;
    },
    chat_history: [
      {
        time: string;
        sender: 'client' | 'partner';
        status: string;
        message: string;
        id_message: string;
      }
    ]
  }
}

export interface IRouteParams {
  pk_mobile: string;
  pk_employee: string;
  url_picture: string;
  name: string;
  surname: string;
  sub_category: string;
}

export default function Talk() {
  const route = useRoute();
  const { user } = useAuth();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const [chat, setChat] = useState<IChat>();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Array<string>>([]);

  const params = route.params as IRouteParams;
  console.log("PARAMS RECEBIDOS =>", params);

  useEffect(() => {
    const data = {
      pk_employee: params.pk_employee.toString(),
      pk_mobile: params.pk_mobile.toString(),
      type: 'get_chat_history',
    };

    api.post('/mobile/requisitions/ReqChat.php', data)
      .then((response) => setChat(response.data));
  }, []);

  async function sendMessage(dataMessage: IDataMessage) {
    setMessages([...messages, dataMessage.message]);

    // const data: IAddMessage = {
    //   type: 'add_message',
    //   pk_mobile: params.pk_mobile.toString(),
    //   pk_employee: params.pk_employee.toString(),
    //   id_message: uuid.v4().toString(),
    //   message: dataMessage.message,
    //   sender: 'client',
    //   time: new Date(),
    //   status: 'Received',
    // };

    // const response = await api.post('/mobile/requisitions/ReqChat.php', data);
    // console.log('RESPONSE =>', response.data);

    const id = `employer_user${user.data.pk}_mobile_user${params.pk_mobile}`;

    const chatExists = (
      await
        firestore()
          .collection('chats')
          .doc(id)
          .get()
    ).exists;

    const id_message = uuid.v4();
    console.log("id_message", id_message)

    if (!chatExists) {

      // Cria o Chat
      await firestore()
        .collection('chats')
        .doc(id)
        .set({
          data: {
            mobile_user: {
              pk: params.pk_mobile,
              name: params.name,
              surname: params.surname,
              url_picture: params.url_picture,
            },
            employer_user: {
              pk: user.data.pk,
              name: user.data.name,
              surname: user.data.surname,
              url_picture: user.data.url_picture,
            },
            chat_history: []
          }
        })

      await firestore()
        .collection('chats')
        .doc(id)
        .update({
          'data.chat_history': firebase.firestore.FieldValue.arrayUnion({
            time: new Date(),
            sender: 'client',
            status: 'Received',
            message: dataMessage.message,
            id_message: id_message,
          })
        })


      const chat_id = uuid.v4();
      const employerChat = (
        await
          firestore()
            .collection('users_chats')
            .doc(`employer_user${user.data.pk}`)
            .get()
      ).exists;

      const mobileChat = (
        await
          firestore()
            .collection('users_chats')
            .doc(`mobile_user${params.pk_mobile}`)
            .get()
      ).exists;

      console.log('mobileChat =>', mobileChat)

      // Referencia o Chat aos participantes
      if (!employerChat && !mobileChat) {
        await firestore()
          .collection('users_chats')
          .doc(`employer_user${user.data.pk}`)
          .set({
            chats: [
              {
                chat_id: chat_id,
                mobile_user: {
                  pk: params.pk_mobile,
                  name: params.name,
                  surname: params.surname,
                  url_picture: params.url_picture,
                },
              }
            ]
          })

        await firestore()
          .collection('users_chats')
          .doc(`mobile_user${params.pk_mobile}`)
          .set({
            chats: [
              {
                chat_id: chat_id,
                employer_user: {
                  pk: user.data.pk,
                  name: user.data.name,
                  surname: user.data.surname,
                  url_picture: user.data.url_picture,
                },
              }
            ]
          })
      } else {
        await firestore()
          .collection('users_chats')
          .doc(`employer_user${user.data.pk}`)
          .update({
            chats: firebase.firestore.FieldValue.arrayUnion({
              chat_id: chat_id,
              employer_user: {
                pk: user.data.pk,
                name: user.data.name,
                surname: user.data.surname,
                url_picture: user.data.url_picture,
              },
            })
          })

        await firestore()
          .collection('users_chats')
          .doc(`mobile_user${params.pk_mobile}`)
          .update({
            chats: firebase.firestore.FieldValue.arrayUnion({
              chat_id: chat_id,
              mobile_user: {
                pk: params.pk_mobile,
                name: params.name,
                surname: params.surname,
                url_picture: params.url_picture,
              },
            })
          })
      }

    } else {
      await firestore()
        .collection('chats')
        .doc(id)
        .update({
          'data.chat_history': firebase.firestore.FieldValue.arrayUnion({
            time: new Date(),
            sender: 'client',
            status: 'Received',
            message: dataMessage.message,
            id_message: id_message,
          })
        })
    }
  }

  function handleEndChat() {
    Alert
      .alert(
        'Finalizar Conversa?',
        'Deseja mesmo finalizar esta conversa?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Finalizar e Avaliar',
            onPress: () => navigation.navigate('Assessment', params),
          },
        ],
      );
  }

  return (
    <Container>
      <Header>Chat</Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatContainer>
          {chat?.data.chat_history.map((message) => (
            <MessageContainer sender={message.sender} key={message.id_message}>
              <MessageContent sender={message.sender}>
                <MessageText sender={message.sender}>
                  {message.message}
                </MessageText>
              </MessageContent>
            </MessageContainer>
          ))}
        </ChatContainer>
      </ScrollView>

      <EndChat onPress={handleEndChat}>
        <TextEndChat>Finalizar Chat</TextEndChat>
      </EndChat>

      <InputContainer>
        <TouchableOpacity>
          <IconFeather
            name="camera"
            color="#2099FD"
            size={26}
          />
        </TouchableOpacity>

        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <InputChat
              value={value}
              onChangeText={onChange}
              autoCorrect={false}
            />
          )}
        />

        <TouchableOpacity onPress={handleSubmit(sendMessage)}>
          <IconFeather
            name="chevron-right"
            color="#2099FD"
            size={30}
          />
        </TouchableOpacity>
      </InputContainer>
    </Container>
  );
}
