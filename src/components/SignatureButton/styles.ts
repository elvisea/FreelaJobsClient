import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

interface Props {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity) <Props>`
  align-items: center;
  padding: 4px;
  justify-content: center;
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border: 1px solid #787878;
  margin-top: ${RFValue(8)}px;
  border-radius: ${RFValue(10)}px;
  background: ${({ theme, isActive }) => isActive ? theme.colors.orange : theme.colors.backgroundColor};
`;

export const Period = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};  
  line-height: ${RFValue(22)}px;
  `;

export const Price = styled.Text<Props>`
  color: ${({ isActive }) => isActive ? '#0A3FA5' : '#FFBC00'} ;
  line-height: ${RFValue(15.6)}px;
  font-size: ${RFValue(12.5)}px;
  font-family: ${({ theme }) => theme.fonts.bold};  
`;

export const Details = styled.Text`
  color: #0A3FA5;
  line-height: ${RFValue(15.6)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};  
`;



