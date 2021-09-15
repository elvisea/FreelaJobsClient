import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 ${RFValue(24)}px;
`;

export const TermsText = styled.Text`
  color: #707070;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(15.6)}px;
  margin-bottom: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
