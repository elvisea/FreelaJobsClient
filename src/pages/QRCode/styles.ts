import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F7F7;
`;

export const Title = styled.Text`
  font-family:  ${({ theme }) => theme.fonts.bold};
  color: #0A3FA5;
  font-size: ${RFValue(14)}px;
  margin-top: 26.44px;
  margin-bottom: 27px;
  text-align: center;
`;

export const InputQrCode = styled.TextInput`
  background-color: #fff;
  border: 1px solid #787878;
  border-radius: 10px;
  height: 44px;
  width: 320px;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
  padding: 0 12px;
`;

export const TextInfo = styled.Text`
  font-family:  ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: #787878;
  margin-top: 10px;
`;
