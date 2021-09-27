import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

interface PropsItem {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity) <PropsItem>`
  width: 48%;
  align-items: center;
  justify-content: center;
  height: ${RFValue(100)}px;
  margin-bottom: ${RFValue(32)}px;
  border-radius: ${RFValue(10)}px;
  border-color: #787878;
  border-style: solid;
  border-width: ${RFValue(1)}px;
  background: ${({ theme, isActive }) => isActive ? theme.colors.orange : theme.colors.backgroundColor};
`;

export const Value = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};  
  line-height: ${RFValue(39)}px;
`;

export const Coins = styled.Text`
  color: #0A3FA5;
  line-height: ${RFValue(15.6)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};  
`;

export const Price = styled.Text`
  color: #0A3FA5;
  line-height: ${RFValue(15.6)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold}; 
  
`;

export const Tip = styled.View`
  height: ${RFValue(25)}px;
  width: ${RFValue(112)}px;
  background-color: #FB1716;
  margin-bottom: -${RFValue(46)}px;
  border-radius: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.orange};
`;

