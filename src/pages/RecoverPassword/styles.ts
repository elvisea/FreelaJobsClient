import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 ${RFValue(20)}px;
  background-color: #0e4ebb;
`;

export const Recovery = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #fff;
  margin-bottom: 39px;
  margin-top: 12px;
  text-align: center;
  line-height: 52px;
`;

export const Fields = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: ${RFValue(20)}px;
`;

export const InfoRecoveryText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #fff;
  margin-bottom: ${RFValue(16)}px;
`;
