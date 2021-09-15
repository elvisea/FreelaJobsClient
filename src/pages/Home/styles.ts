import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #F7F7F7;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  padding: 0 ${RFValue(24)}px;
  height: ${RFValue(138.27)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const HeaderInput = styled.TextInput`
  color: #787878;
  background-color: #fff;
  height: ${RFValue(41)}px;
  width: 88%;
  margin-right: ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(0)} ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Title = styled.Text`
  color: #0A3FA5;
  text-align: center;
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const CategoryContainer = styled.View`
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${RFValue(8)}px;
  padding: 0 ${RFValue(20)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const CategoryButton = styled(TouchableOpacity)`
  width: 31.5%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: ${RFValue(58)}px;
  margin-bottom: ${RFValue(8)}px;
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(4)}px;
`;

export const CategoryButtonText = styled.Text`
  color: #0A3FA5;
  text-align: center;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

