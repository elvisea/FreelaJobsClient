import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 ${RFValue(20)}px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const LogoFreelaJobs = styled.Image`
  margin-top: ${RFValue(62)}px;
  margin-bottom: ${RFValue(29.82)}px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  align-self: center;
  margin-top: ${RFValue(9)}px;
  margin-bottom: ${RFValue(7)}px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LoginSocialText = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(-6)}px;;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContainerRegister = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RegisterText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CreateAccountButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const CreateAccountButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
