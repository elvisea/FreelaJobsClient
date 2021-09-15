import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F7F7;
`;

export const ImageUser = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(6)}px;
  margin-top: ${RFValue(-110)}px;
`;

export const Name = styled.Text`
  color: #0a3fa5;
  height: ${RFValue(28)}px;
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Profession = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(3)}px;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InputArea = styled.TextInput`
  background-color: #fff;
  width: ${RFValue(340)}px;
  height: ${RFValue(196)}px;
  margin-top: ${RFValue(88)}px;
  margin-bottom: ${RFValue(16)}px;
  border-radius: ${RFValue(10)}px;
  border: ${RFValue(1)}px solid #787878;
  padding: ${RFValue(0)} ${RFValue(12)}px;
`;
