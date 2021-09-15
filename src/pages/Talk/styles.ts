import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface IPropsSender {
  sender: 'client' | 'partner';
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ChatContainer = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
`;

export const MessageContainer = styled.View<IPropsSender>`
  align-items: ${({ sender }) => sender === 'client' ? 'flex-end' : 'flex-start'};
`;

export const MessageContent = styled.View<IPropsSender>`
  max-width: 90%;
  padding: ${RFValue(8)}px;
  border-radius: ${RFValue(6)}px;
  margin-bottom: ${RFValue(8)}px;
  background-color: ${({ sender, theme }) => sender === 'client' ? '#2099FD' : '#F7F7F7'};
`;

export const MessageText = styled.Text<IPropsSender>`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(15.6)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ sender }) => sender === 'client' ? '#fff' : '#787878'};
`;

export const EndChat = styled(RectButton)`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const TextEndChat = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const InputContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  height: ${RFValue(56.5)}px;
  padding: 0 ${RFValue(16)}px;
  justify-content: space-between;
`;

export const InputChat = styled.TextInput`
  color: #787878;
  height: ${RFValue(36)}px;
  width: ${RFValue(258)}px;
  background-color: #F7F7F7;
  padding: 0 ${RFValue(12)}px;
  border-radius: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
