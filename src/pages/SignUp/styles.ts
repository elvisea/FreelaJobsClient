import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 ${RFValue(20)}px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  height: ${RFValue(56)}px;
  margin-top: ${RFValue(4)}px;
  font-size: ${RFValue(40)}px;
  margin-bottom: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerTerms = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(4)}px;
  margin-bottom: ${RFValue(24)}px;
`;

export const TermsText = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TermsButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  /* border-color: ${({ theme }) => theme.colors.inputs}; */
`;

export const TermsButtonText = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
