import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: ${RFValue(138.27)}px;
  width: 100%;
`;

export const ImageUser = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(6)}px;
  margin-top: ${RFValue(-110)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(20)}px;
  height: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #0a3fa5;
  margin-top: ${RFValue(8)}px;
`;

export const CustomerSince = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background};
  margin-top: ${RFValue(4)}px;
`;

export const ContainerInfo = styled.View`
  align-items: flex-start;
  margin-bottom: ${RFValue(24)}px;
  padding: 0 20px;
`;

export const InfoLine = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(12)}px;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #0a3fa5;
`;
