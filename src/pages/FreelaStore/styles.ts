import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F7F7;
  padding-bottom: 32px;
`;

export const Text = styled.Text`
  color: #0a3fa5;
  text-align: center;
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(2)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const InProgress = styled.Text`
  color: #FF0000;
  text-align: center;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const OptionsContainer = styled.View`
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${RFValue(6)}px;
  padding: 0 ${RFValue(20)}px;
`;

export const Signature = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  margin-top: ${RFValue(8)}px;
  border-radius: ${RFValue(10)}px;
  background: ${({ theme }) => theme.colors.orange};
`;

export const OptionCard = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${RFValue(44)}px;
  margin-top: ${RFValue(8)}px;
  background-color: #0a3fa5;
  border-radius: ${RFValue(10)}px;
`;

export const TextOptionCard = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
