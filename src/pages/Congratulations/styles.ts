import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F7F7;
`;

export const TextCredits = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  margin-top: ${RFValue(16)}px;
  font-size: ${RFValue(20)}px;
  color: #0a3fa5;
`;
