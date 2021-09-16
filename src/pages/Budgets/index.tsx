import React from 'react';
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
  ContentLeft,
} from './styles';

const Budgets: React.FC = () => (
  <Container>
    <Header>Budgets</Header>
    <ContainerChat>
      <ContainerCard>
        <ContentLeft>
          <ImageUser source={{ uri: 'https://github.com/elvisea.png' }} />
          <Content>
            <Name>Armin Salahuddin</Name>
            <Message>Já estou a caminho</Message>
          </Content>
        </ContentLeft>
        <TouchableOpacity>
          <IconFeather name="more-vertical" color="#0A3FA5" size={28} />
        </TouchableOpacity>
      </ContainerCard>
    </ContainerChat>
  </Container>
);

export default Budgets;
