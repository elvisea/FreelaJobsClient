import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;
  align-items: center;
  padding-bottom: ${RFValue(16)}px;
`;

export const ImageUser = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  margin-top: ${RFValue(-110)}px;
  border-radius: ${RFValue(6)}px;
`;

export const Name = styled.Text`
  color: #0a3fa5;
  height: ${RFValue(28)}px;
  margin-top: ${RFValue(8)}px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Work = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(3)}px;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Stars = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Description = styled.Text`
  color: #0a3fa5;
  text-align: center;
  padding: 0 ${RFValue(24)}px;
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(16)}px;
  line-height: ${RFValue(19.6)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ImageContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(8)}px; 
  margin-top: ${RFValue(20)}px;
  width: 100%;
`;

export const ImagePortfolio = styled.Image`
  width: ${RFValue(110)}px;
  height: ${RFValue(86)}px;
  margin-top: ${RFValue(8)}px;
  border-radius: ${RFValue(6)}px;
`;




