import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F7F7F7;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(138.27)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ImageUser = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(6)}px;
  margin-top: ${RFValue(-110)}px;
`;

export const Name = styled.Text`
  color: #0a3fa5;
  height: ${RFValue(28)}px;
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const CustomerSince = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(3)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background};
`;

export const ContainerInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(0)} ${RFValue(26)}px;
`;

export const InfoLine = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: ${RFValue(12)}px;
`;

export const Info = styled.Text`
  color: #0a3fa5;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(IconFeather)`
`;
