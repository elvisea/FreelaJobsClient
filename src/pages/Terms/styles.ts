import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: ${RFValue(0)} ${RFValue(25)}px;
`;

export const TermsText = styled.Text`
  color: #707070;
  line-height: ${RFValue(15.6)}px;
  font-size: ${RFValue(12)}px;
  margin-bottom: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
