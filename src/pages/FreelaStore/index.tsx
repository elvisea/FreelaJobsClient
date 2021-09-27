import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/Header';
import ButtonStore from '../../components/ButtonStore';

import {
  Container,
  Text,
  InProgress,
  OptionsContainer,
} from './styles';

const FreelaStore: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const [item, setItem] = useState('');
  const [signature, setSignature] = useState('');
  const [card, setCard] = useState('');
  const [isSelected, setSelection] = useState(false);

  function handleSelectItem(value: '10' | '30' | '50' | '300') {
    setItem(value);
  }

  function handleSelectSignature(value: 'anual' | 'semestral' | 'mensal') {
    setSignature(value);
  }

  function handleSelectCard(value: 'debit' | 'credit') {
    setCard(value);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>Freela Store</Header>
        <Text>Escolha um item:</Text>
        <InProgress>Em andamento</InProgress>

        <OptionsContainer>
          <ButtonStore
            price={10}
            value="10"
            title="Freela Coins"
            isActive={item === '10'}
            onPress={() => handleSelectItem('10')}
          />
          <ButtonStore
            price={30}
            value="30"
            title="Freela Coins"
            isActive={item === '30'}
            onPress={() => handleSelectItem('30')}
          />
          <ButtonStore
            price={50}
            value="50"
            title="Freela Coins"
            isActive={item === '50'}
            onPress={() => handleSelectItem('50')}
          />
          <ButtonStore
            price={300}
            value="300"
            title="Freela Coins"
            isActive={item === '300'}
            onPress={() => handleSelectItem('300')}
          />
        </OptionsContainer>

      </Container>
    </SafeAreaView>
  );
};

export default FreelaStore;
