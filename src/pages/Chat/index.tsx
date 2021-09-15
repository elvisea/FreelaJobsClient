import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { Header } from '../../components/Header';

import {
  Container,
  ContainerCard,
  ContainerChat,
  ImageUser,
  Content,
  Name,
  Message,
  ContentLeft
} from './styles';
import { useAuth } from '../../hooks/auth';

const Chat: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  return (
    <Container>
      <Header>Conversas</Header>
      <ContainerChat>
        <ContainerCard>
          <ContentLeft>
            <ImageUser source={{ uri: user?.data.url_picture }} />
            <Content>
              <Name>Armin Salahuddin</Name>
              <Message>Já estou a caminho</Message>
            </Content>
          </ContentLeft>
          <TouchableOpacity onPress={() => navigation.navigate('Talk')}>
            <IconFeather name='more-vertical' color="#0A3FA5" size={28} />
          </TouchableOpacity>
        </ContainerCard>
      </ContainerChat>
    </Container>
  );
};

export default Chat;
