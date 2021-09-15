import { useNavigation } from '@react-navigation/native';
import React from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import defaultTheme from '../../styles/theme/default';

import {
  Container,
  ContainerInfo,
  CustomerSince,
  Header,
  Info,
  InfoLine,
  Name,
  ImageUser,
} from './styles';

const Profile: React.FC = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <ImageUser source={{ uri: user?.data.url_picture }} />
      <Name>{user?.data.name} {user?.data.surname}</Name>
      <CustomerSince>Cliente desde {user?.data.registration_date}</CustomerSince>

      <ContainerInfo>

        <InfoLine>
          <IconFeather
            name="mail"
            size={24}
            color={defaultTheme.colors.background}
            style={{ marginRight: 14 }}
          />
          <Info>{user?.data.mail}</Info>
        </InfoLine>


        <InfoLine>
          <IconFeather
            name="sliders"
            size={24}
            color={defaultTheme.colors.background}
            style={{ marginRight: 14 }}
          />
          <Info>0010010001-01</Info>
        </InfoLine>

        <InfoLine>
          <IconFeather
            name="user"
            size={24}
            color={defaultTheme.colors.background}
            style={{ marginRight: 14 }}
          />
          <Info>{user?.data.nick_name}</Info>
        </InfoLine>

        <InfoLine>
          <IconFeather
            name="smartphone"
            size={24}
            color={defaultTheme.colors.background}
            style={{ marginRight: 14 }}
          />
          <Info>{user?.data.ddd_contact} {user?.data.phone_contact}</Info>
        </InfoLine>

        <InfoLine>
          <IconFeather
            name="calendar"
            size={24}
            color={defaultTheme.colors.background}
            style={{ marginRight: 14 }}
          />
          <Info>{user.data.birthdate}</Info>
        </InfoLine>

        <InfoLine>
          <IconFeather
            name="map-pin"
            size={24}
            color={defaultTheme.colors.background}
            style={{ marginRight: 14 }}
          />
          <Info>Rua , 2022 - apto 22</Info>
        </InfoLine>
        <InfoLine>
          <IconFeather
            name="lock"
            size={24}
            color={defaultTheme.colors.background}
            style={{ marginRight: 14 }}
          />
          <Info>E*******</Info>
        </InfoLine>
      </ContainerInfo>

      <Button onPress={() => navigation.navigate('EditProfile')}>Editar</Button>
    </Container>
  );
};

export default Profile;
