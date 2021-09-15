import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  height: ${RFValue(138.27)}px;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(26)}px;
  margin-bottom: ${RFValue(18.56)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

