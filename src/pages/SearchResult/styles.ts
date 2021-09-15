import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

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

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: ${RFValue(36.8)}px;
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

export const ContainerFilterButtons = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(14.86)}px;
  width: 100%;
`;

export const FilterButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 50%;
  height: ${RFValue(25.23)}px;
  margin-right: ${RFValue(8.5)}px;
  border-radius: ${RFValue(21)}px;
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const TextFilterButton = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContentSearchResult = styled.SafeAreaView`
  flex: 1;
  padding: 0 ${RFValue(24)}px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(24)}px;
`;

export const ContentHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.View`
  flex-direction: row;
  margin-left: 12px;
  align-items: center;
  justify-content: center;
`;

export const ImageSearchResult = styled.Image`
  width: ${RFValue(54)}px;
  height: ${RFValue(54)}px;
  border-radius: ${RFValue(27)}px;
`;

export const NameAndWork = styled.View`
  margin-left: ${RFValue(0)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #0A3FA5;
  font-size: ${RFValue(12)}px;
`;

export const Work = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #0A3FA5;
  font-size: ${RFValue(12)}px;
`;

export const Stars = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(4)}px;
`;

export const Resume = styled.View`
  padding-left: 74px;
  width: 100%;
  margin-top: ${RFValue(8)}px;
`;

export const TextResume = styled.Text`
  color: #707070;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16.8)}PX;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const HeaderButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: ${RFValue(22)}px;
  width: ${RFValue(60)}px;
  background-color: #0A3FA5;
  border-radius: ${RFValue(21)}px;
`;

export const TextHeaderButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #fff;
  font-size: ${RFValue(11)}px;
`;







