import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Alert, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';
import { Header } from '../../components/Header';

import {
  Container,
  Work,
  Name,
  ImageUser,
  Stars,
  Description,
  ImageContainer,
  ImagePortfolio,
} from './styles';

interface Profile {
  data: {
    pk: number;
    mail: string;
    name: string;
    surname: string;
    gender: string;
    age: number;
    ddd_contact: string;
    phone_contact: string;
    address: string;
    latitude: string;
    longitude: string;
    category: string;
    sub_category: string;
    description: string;
    rank: number;
    url_picture: string;
    portfolio: [] | null | undefined;
  }
}

export interface RouteParamsPartner {
  partner: {
    pk: number;
    sub_category: string;
    name: string;
    surname: string;
    description: string;
    latitude: string;
    longitude: string;
    is_home_office: boolean;
    is_local_office: boolean;
    min_price: string;
    rank: number;
    url_picture: string;
  }
}

const PartnerProfile: React.FC = () => {
  const route = useRoute();
  const { user } = useAuth();
  const navigation = useNavigation();
  const { partner } = route.params as RouteParamsPartner;
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    api
      .post('/mobile/requisitions/ReqEmployees.php', {
        type: 'get',
        pk: partner.pk.toString(),
      })
      .then((res) => setProfile(res.data));
  }, []);

  // PKS HARDCODE - Retirar Negação !
  function handleChatOrStore() {
    if (!user?.data.have_plan) {
      const data = {
        type: "get_chat_history",
        pk_mobile: user.data.pk,
        pk_employee: partner.pk,
      };

      navigation.navigate('Talk', data);
    } else {
      Alert.alert('Créditos insuficientes.', 'Adicione creditos para continuar',
        [
          {
            text: 'Inserir',
            onPress: () => navigation.navigate('FreelaStore'),
          },
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]);
    }
  }

  async function handleNavigateRating() {
    const data = {
      type: 'get_employee',
      pk: partner.pk,
    };

    const response = await api
      .post('/mobile/requisitions/ReqComments.php', data);

    if (response.data.data.length === 0) {
      Alert.alert(
        'Não possui avaliações!',
        'Este parceiro ainda não tem avaliações',
      );
    } else {
      navigation.navigate('Rating', response.data);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#f7f7f7' }}>
        <Container>
          <Header />
          <ImageUser source={{ uri: partner?.url_picture }} />
          <Name>
            {partner?.name}
            {' '}
            {partner?.surname}
          </Name>
          <Work>{partner?.sub_category.toUpperCase()}</Work>

          <Stars>
            <IconFeather
              name="star"
              color="#FFBC00"
              size={18}
              style={{ marginLeft: 4 }}
            />
            <IconFeather
              name="star"
              color="#FFBC00"
              size={18}
              style={{ marginLeft: 4 }}
            />
            <IconFeather
              name="star"
              color="#FFBC00"
              size={18}
              style={{ marginLeft: 4 }}
            />
            <IconFeather
              name="star"
              color="#FFBC00"
              size={18}
              style={{ marginLeft: 4 }}
            />
            <IconFeather
              name="star"
              color="#FFBC00"
              size={18}
              style={{ marginLeft: 4 }}
            />
          </Stars>

          <TouchableOpacity onPress={handleNavigateRating}>
            <Text>Ver Avaliações</Text>
          </TouchableOpacity>

          <Button onPress={handleChatOrStore}>Chat</Button>

          <Description>{partner?.description}</Description>

          <ImageContainer>
            {profile?.data.portfolio?.map((url_portfolio) => (
              <ImagePortfolio
                key={url_portfolio}
                source={{ uri: url_portfolio }}
              />
            ))}
          </ImageContainer>

        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PartnerProfile;
