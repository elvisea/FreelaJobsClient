import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  ContainerCard,
  ContainerChat,
  ImageUser,
  Content,
  Name,
  LastMessage,
  ContentLeft,
} from './styles';
import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';

interface Conversations {
  status: boolean;
  error: string | null;
  data: [
    {
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
      last_message: {
        time: string;
        sender: string;
        status: string;
        message: string;
        id_message: string;
      }
    }
  ]
}

const Chat: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [conversations, setConversations] = useState<Conversations>();
  conversations && console.log("=> => =>", conversations)

  useEffect(() => {
    const data = {
      type: 'get_chat_list',
      pk_mobile: user.data.pk,
    };

    const response = api.post('/mobile/requisitions/ReqChat.php', data)
      .then((response) => setConversations(response.data));

    console.log(conversations?.data)
  }, []);

  function handleTalk(pk_employee: string) {
    const data = {
      type: "get_chat_history",
      // pk_mobile: user.data.pk,
      pk_employee: pk_employee,
    };

    console.log("Dados Repassados => ", data)
    navigation.navigate('Talk', data)
  }

  return (
    <Container>
      <Header>Conversas</Header>
      <ContainerChat>
        {conversations &&
          <FlatList
            style={{ width: "100%" }}
            data={conversations.data}
            keyExtractor={(item) => item.last_message.id_message}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: chat }) => (
              <ContainerCard>
                <ContentLeft>
                  <ImageUser source={{ uri: chat.mobile_user.url_picture }} />
                  <Content>
                    <Name>
                      {chat.mobile_user.name
                        ? chat.mobile_user.name
                        : 'NOME VAZIO'
                      }
                    </Name>
                    <LastMessage>
                      {
                        chat.last_message.message
                          ? chat.last_message.message.slice(0, 28)
                          : 'Ultima Mensagem Vazia...'
                      }
                    </LastMessage>
                  </Content>
                </ContentLeft>
                <TouchableOpacity onPress={() => handleTalk(chat.employee_user.pk)}>
                  <IconFeather name="more-vertical" color="#0A3FA5" size={28} />
                </TouchableOpacity>
              </ContainerCard>
            )}
          />
        }
      </ContainerChat>
    </Container>
  );
};

export default Chat;
