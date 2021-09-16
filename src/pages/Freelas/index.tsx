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
  ContentLeft,
} from './styles';

export default function Freelas(): JSX.Element {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>Freelas </Header>
      <ContainerChat>
        <ContainerCard>
          <ContentLeft>
            <ImageUser source={{ uri: 'https://github.com/elvisea.png' }} />
            <Content>
              <Name>Armin Salahuddin</Name>
              <Message>Já estou a caminho</Message>
            </Content>
          </ContentLeft>
          <TouchableOpacity onPress={() => navigation.navigate('Assessment')}>
            <IconFeather name="more-vertical" color="#0A3FA5" size={28} />
          </TouchableOpacity>
        </ContainerCard>
      </ContainerChat>
    </Container>
  );
}
