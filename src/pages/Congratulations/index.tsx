import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import Button from '../../components/Button';
import { Header } from '../../components/Header';

import {
  Container, TextCredits,
} from './styles';

const Congratulations: React.FC = () => {
  const navigation = useNavigation();

  function handleCarregar() {
    Alert.alert('Créditos carregados com sucesso', 'Você já pode entrar em contato com o Freela!',
      [
        {
          text: 'Buscar por Freelas',
          onPress: () => navigation.navigate('SearchResult'),
        },
        {
          text: 'Ir para o Chat',
          onPress: () => navigation.navigate('Talk'),
        },
      ]);
  }

  return (
    <Container>
      <Header>Congratulations</Header>
      <TextCredits>
        Parabéns!
      </TextCredits>

      <TextCredits>
        Insira 5 creditos para abrir o chat
      </TextCredits>
      <Button onPress={handleCarregar}>Carregar</Button>

      <TextCredits>
        Voltar para a busca
      </TextCredits>
      <Button onPress={() => { navigation.navigate('SearchResult'); }}>
        Ou Nao Carregar
      </Button>
    </Container>
  );
};

export default Congratulations;
// 11991713297
