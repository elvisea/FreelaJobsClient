import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Alert,
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import facebookImg from '../../assets/facebook.png';

import {
  Container,
  LogoFreelaJobs,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  LoginSocialText,
  ContainerRegister,
  RegisterText,
} from './styles';

interface FormData {
  mail: string;
  password: string;
  type: string;
  facebook_user_id: string;
  imei: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { signIn, user } = useAuth();
  const { control, handleSubmit } = useForm();

  const handleSignInAxios = useCallback(
    async (data: FormData) => {
      try {
        await signIn({
          mail: data.mail,
          password: data.password,
          type: 'mail',
          facebook_user_id: '',
          imei: '',
        });
      } catch (err) {
        if (user?.status === false) {
          console.log(user.error);
          Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login');
        }

        Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login');
      }
    },
    [signIn],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Container>
            <LogoFreelaJobs
              source={logoImg}
            />

            <Input
              name="mail"
              placeholder="Email"
              control={control}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
            />

            <Input
              name="password"
              placeholder="Senha"
              control={control}
              secureTextEntry
              returnKeyType="send"
            />

            <ForgotPassword
              onPress={() => navigation.navigate('RecoverPassword')}
            >
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>

            <View style={{ alignItems: 'center' }}>
              <Button onPress={handleSubmit(handleSignInAxios)}>Login</Button>
            </View>

            <LoginSocialText>Ou Login com</LoginSocialText>
            <Image source={facebookImg} />

            <ContainerRegister>
              <RegisterText>Não tem conta? </RegisterText>
              <CreateAccountButton
                onPress={() => navigation.navigate('SignUp')}
              >
                <CreateAccountButtonText>Cadastra-se</CreateAccountButtonText>
              </CreateAccountButton>
            </ContainerRegister>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
