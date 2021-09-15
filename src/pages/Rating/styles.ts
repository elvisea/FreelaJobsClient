import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #F7F7F7;
`;

export const ContentSearchResult = styled.SafeAreaView`
  padding: 0 ${RFValue(24)}px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${RFValue(24)}px;
`;

export const ContentHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageSearchResult = styled.Image`
  width: ${RFValue(54)}px;
  height: ${RFValue(54)}px;
  border-radius: ${RFValue(27)}px;
  margin-right: ${RFValue(16)}px;
`;

export const NameWorkAndStars = styled.View`
  margin-left: ${RFValue(0)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #0A3FA5;
  font-size: ${RFValue(12)}px;
`;

export const Stars = styled.View`
  flex-direction: row;
`;

export const Comment = styled.View`
  padding-left: 74px;
  width: 100%;
`;

export const TextComment = styled.Text`
  color: #707070;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16.8)}PX;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
