import React, { useEffect, useState } from 'react';
import uuid from 'react-native-uuid';
import { Controller, useForm } from 'react-hook-form';
import { Alert, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  sub_category: string;
}

export default function Talk() {
  const route = useRoute();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const [chat, setChat] = useState<IChat>();
  const [messages, setMessages] = useState<Array<string>>([]);

  const params = route.params as IRouteParams;
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

    const data: IAddMessage = {
      type: 'add_message',
      pk_mobile: params.pk_mobile.toString(),
      pk_employee: params.pk_employee.toString(),
      id_message: uuid.v4().toString(),
      message: dataMessage.message,
      sender: 'client',
      time: new Date(),
      status: 'Received',
    };

    const response = await api.post('/mobile/requisitions/ReqChat.php', data);
    console.log('RESPONSE =>', response.data);
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
