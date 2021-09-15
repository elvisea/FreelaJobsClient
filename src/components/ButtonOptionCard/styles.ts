import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
  isActive: boolean;
}

export const Container = styled(RectButton) <Props>`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${RFValue(44)}px;
  margin-top: ${RFValue(8)}px;
  border-radius: ${RFValue(10)}px;
  background: ${({ isActive }) => isActive ? '#0a3fa5' : '#FDBC25'};
`;

export const TextCard = styled.Text<Props>`
  color: #fff;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;


