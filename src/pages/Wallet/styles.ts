import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const TopContent = styled.View`
  align-items: center;
  margin: ${RFValue(16)}px 0;
  padding: 0 ${RFValue(16)}px;
`;

export const YourBalance = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(20.8)}px;
  margin: ${RFValue(8)}px 0;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Value = styled.Text`
  color: #0A3FA5;
  font-size: ${RFValue(46)}px;
  line-height: ${RFValue(59.8)}px;
  margin-bottom: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextFreelaCoins = styled.Text`
  color: #0A3FA5;
  text-align: center;
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(20.8)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const BlueContainer = styled.View`
  width: 100%;
  align-items: center;
  background-color: #0A3FA5;
  height: ${RFValue(124)}px;
  padding: ${RFValue(0)}px ${RFValue(24)}px;
`;

export const TopBlueContainer = styled.View`
  width: 100%; 
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${RFValue(8)}px ${RFValue(0)}px;
`;

export const LeftContent = styled.View`
  justify-content: flex-start;
`;

export const TitleBlueContainer = styled.Text`
  color: #fff;
  font-size: ${RFValue(12.5)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextBlueContainer = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16.25)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const RightContent = styled.View`
  
`;

export const TopValue = styled.Text`
  color: #fff;
  font-size: ${RFValue(46)}px;
  line-height: ${RFValue(59.8)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ShareButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: #FFBC00;
  height: ${RFValue(34)}px;
  width: ${RFValue(131)}px;
  border-radius: ${RFValue(26)}px;
`;

export const TextShareButton = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const YellowContainer = styled.View`
  width: 100%;
  background-color: #FFBC00;
  height: ${RFValue(77)}px;
  margin-top: ${RFValue(16)}px;
  padding: ${RFValue(0)} ${RFValue(24)}px;
`;

export const YellowContentLeft = styled.View`

`;

export const YellowContentRight = styled.View`

`;


export const TitleYellowContainer = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextYellowContainer = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
