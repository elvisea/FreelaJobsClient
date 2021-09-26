import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F7F7;
`;

export const ContainerChat = styled.View`
  flex: 1;
  padding: ${RFValue(16)}px ${RFValue(20)}px;
`;

export const ContainerCard = styled.View`
  height: ${RFValue(65)}px;
  width: ${RFValue(340)}px;
  border-radius: ${RFValue(17.33)}px;
  background-color: #fff;
  padding: 0 ${RFValue(12)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(8)}px;
`;

export const ContentLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageUser = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: ${RFValue(26)}px;
`;

export const Content = styled.View`
  margin-left: ${RFValue(12)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #0A3FA5;
  font-size: ${RFValue(11)}px;
`;

export const LastMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #0A3FA5;
  font-size: ${RFValue(11)}px;
`;
