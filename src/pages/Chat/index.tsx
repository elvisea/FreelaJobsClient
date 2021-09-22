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
  Message,
  ContentLeft,
} from './styles';

interface Conversations {
  chats?: [
    {
      chat_id: string;
      mobile_user: {
        name: string;
        pk: string;
        surname: string;
        url_picture: string;
      }
    }
  ];
}

const Chat: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [conversations, setConversations] = useState<Conversations>();
  // console.log("conversations =>", conversations)

  useEffect(() => {
    async function getData() {
      const subscriber = await firestore()
        .collection('users_chats')
        .doc(`employer_user${user?.data.pk}`)
        .get()
      setConversations(subscriber.data())
      console.log("=>", subscriber.data());
    }
    getData()
  }, []);

  return (
    <Container>
      <Header>Conversas</Header>
      <ContainerChat>
        {conversations?.chats?.map((chat) => (
          <ContainerCard key={chat.chat_id}>
            <ContentLeft>
              <ImageUser source={{ uri: chat.mobile_user.url_picture }} />
              <Content>
                <Name>{chat.mobile_user.name}</Name>
                <Message>Já estou a caminho</Message>
              </Content>
            </ContentLeft>
            <TouchableOpacity onPress={() => navigation.navigate('Talk')}>
              <IconFeather name="more-vertical" color="#0A3FA5" size={28} />
            </TouchableOpacity>
          </ContainerCard>
        ))}
      </ContainerChat>
    </Container>
  );
};

export default Chat;
