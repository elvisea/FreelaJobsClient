import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F7F7;
`;

export const ContainerChat = styled.View`
  flex: 1;
  padding: ${RFValue(16)} ${RFValue(20)}px;
`;

export const ContainerCard = styled.View`
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  height: ${RFValue(82)}px;
  width: ${RFValue(370)}px;
  justify-content: space-between;
  padding: 0 ${RFValue(12)}px;
  margin-bottom: ${RFValue(8)}px;
  border-radius: ${RFValue(17.33)}px;
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
  color: #0A3FA5;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Message = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
