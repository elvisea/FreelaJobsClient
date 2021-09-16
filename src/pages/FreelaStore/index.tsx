import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Button from '../../components/Button';
import { Header } from '../../components/Header';
import InputApp from '../../components/InputApp';
import ButtonStore from '../../components/ButtonStore';
import ButtonOptionCard from '../../components/ButtonOptionCard';
import SignatureButton from '../../components/SignatureButton';

import {
  Container,
  Text,
  OptionsContainer,
  PaymentOptionText,
  SignatureContainer,
  Label,
  ContainerInputs,
  TextMyCards,
  ContainerMyCards,
  HeaderMyCards,
  CheckboxContainer,
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
      <ScrollView>
        <Container>
          <Header>Freela Store</Header>
          <Text>Escolha um item:</Text>

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

          <Text>Assinaturas</Text>

          <SignatureContainer>
            <SignatureButton
              period="1 Mês"
              isActive={signature === 'mensal'}
              onPress={() => handleSelectSignature('mensal')}
            />
            <SignatureButton
              period="6 Meses"
              isActive={signature === 'semestral'}
              onPress={() => handleSelectSignature('semestral')}
            />
            <SignatureButton
              period="12 Meses"
              isActive={signature === 'anual'}
              onPress={() => handleSelectSignature('anual')}
            />
          </SignatureContainer>

          <PaymentOptionText>Selecione o método de pagamento</PaymentOptionText>

          <View style={{ paddingHorizontal: 20, width: '100%' }}>
            <ButtonOptionCard
              title="Débito"
              isActive={card === 'debit'}
              onPress={() => handleSelectCard('debit')}
            />

            <ButtonOptionCard
              title="Crédito"
              isActive={card === 'credit'}
              onPress={() => handleSelectCard('credit')}
            />
          </View>

          <ContainerMyCards>
            <HeaderMyCards>
              <TextMyCards>Meus Cartões</TextMyCards>
              <TextMyCards>CVV</TextMyCards>
            </HeaderMyCards>

            <CheckboxContainer>
              <BouncyCheckbox
                size={24}
                fillColor="#0a3fa5"
                unfillColor="#FFFFFF"
                text="**** **** **** 0123"
                iconStyle={{ borderColor: '#0a3fa5' }}
                textStyle={{ fontFamily: 'JosefinSans-Regular', color: '#0a3fa5' }}
                onPress={() => { }}
              />
              <TextMyCards>623</TextMyCards>
            </CheckboxContainer>

            <CheckboxContainer>
              <BouncyCheckbox
                size={24}
                fillColor="#0a3fa5"
                unfillColor="#FFFFFF"
                text="**** **** **** 8323"
                iconStyle={{ borderColor: '#0a3fa5' }}
                textStyle={{ fontFamily: 'JosefinSans-Regular', color: '#0a3fa5' }}
                onPress={() => { }}
              />
              <TextMyCards>431</TextMyCards>
            </CheckboxContainer>

            <CheckboxContainer>
              <BouncyCheckbox
                size={24}
                fillColor="#0a3fa5"
                unfillColor="#FFFFFF"
                text="**** **** **** 9743"
                iconStyle={{ borderColor: '#0a3fa5' }}
                textStyle={{ fontFamily: 'JosefinSans-Regular', color: '#0a3fa5' }}
                onPress={() => { }}
              />
              <TextMyCards>852</TextMyCards>
            </CheckboxContainer>
          </ContainerMyCards>

          <ContainerInputs>
            <Label>Número do Cartão</Label>
            <InputApp
              name=""
              control={control}
            />
            <Label>Validade</Label>
            <InputApp
              name=""
              control={control}
            />
            <Label>Cód. de Segurança</Label>
            <InputApp
              name=""
              control={control}
            />
            <Label>Nome do Titular</Label>
            <InputApp
              name=""
              control={control}
            />
            <Label>CPF/CNPJ</Label>
            <InputApp
              name=""
              control={control}
            />
          </ContainerInputs>

          <Button>Finalizar</Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default FreelaStore;
