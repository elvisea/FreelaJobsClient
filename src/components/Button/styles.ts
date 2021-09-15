import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: ${RFValue(45)}px;
  width: ${RFValue(274)}px;
  margin-top: ${RFValue(8)}px;
  border-radius: ${RFValue(23)}px;
  background: ${({ theme }) => theme.colors.orange};
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
`;
