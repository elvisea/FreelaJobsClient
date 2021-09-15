import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(44)}px;
  padding: ${RFValue(0)} ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
  justify-content: center;
  border: ${RFValue(1)}px solid #787878;
  background: ${({ theme }) => theme.colors.inputs};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #787878;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
