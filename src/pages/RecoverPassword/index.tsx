import React from 'react';
import { Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import {
  Container, InfoRecoveryText, Recovery, Fields,
} from './styles';

import Input from '../../components/Input';

import registerImg from '../../assets/register.png';
import Button from '../../components/Button';

interface RecoverFormData {
  mail: string;
}

const RecoverPassword: React.FC = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  async function handleRecoverPassword(formData: RecoverFormData) {
    try {
      await fetch(
        'https://dev.database.freelajobs.com.br/mobile_partner/requisitions/ReqLostPassword.php',
        {
          body: JSON.stringify(formData.mail),
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      Alert.alert(
        'Recuperação de Senha realizada com sucesso!',
        'Verifique seu email.',
      );
      navigation.goBack();
    } catch (error) {
      Alert.alert(
        'Erro na recuperação de senha!',
        'Ocorreu um erro ao tentar recuperar sua senha, tente novamente.',
      );
    }
  }

  return (
    <Container>
      <Image style={{ marginTop: 62.2 }} source={registerImg} />
      <Recovery>
        Recuperar
        {'\n'}
        Senha
      </Recovery>

      <Fields>
        <InfoRecoveryText>
          Informe seu e-mail e enviaremos sua senha!
        </InfoRecoveryText>

        <Input
          name="mail"
          placeholder="Email"
          control={control}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </Fields>

      <Button onPress={handleSubmit(handleRecoverPassword)}>Enviar</Button>
    </Container>
  );
};

export default RecoverPassword;
