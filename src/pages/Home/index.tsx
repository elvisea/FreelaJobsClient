import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Alert,
} from 'react-native';

import api from '../../services/api';
import searchIcon from '../../assets/search-icon.png';

import {
  CategoryButton,
  CategoryButtonText,
  CategoryContainer,
  Container,
  Header,
  HeaderInput,
  HeaderTitle,
  InputContainer,
  Title,
} from './styles';
import { useAuth } from '../../hooks/auth';

interface IDataInput {
  category: string;
}

interface Categories {
  status: boolean;
  error: string | null;
  data: [
    {
      token: string;
      category: string;
      sub_category: string;
      icon_url: string;
    }
  ]
}

export interface IPartnersByCategory {
  status: boolean;
  error: string | null;
  data: [
    {
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
  ] | [];
}

const Home: React.FC = () => {
  const { user } = useAuth();
  console.log(user)
  const [categories, setCategories] = useState<Categories>();

  const navigation = useNavigation();
  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    const data = {
      type: 'list_category_values',
    };
    api.post('/mobile/requisitions/ReqEmployees.php ', data)
      .then((response) => setCategories(response.data));
  }, []);

  // Input Search
  async function searchCategory({ category }: IDataInput) {
    const data = {
      type: 'list_category',
      category: '',
      sub_category: '',
      is_home_office: '',
      is_local_office: '',
      max_price: '',
      rank: '',
      max_distance: '150',
      latitude: '-25.43169',
      longitude: '-49.22403',
    };

    data.category = category;

    const response = await api
      .post('/mobile/requisitions/ReqEmployees.php', data);

    reset(); // reset input

    if (response.data.data.length === 0) {
      Alert.alert(
        'Categoria Vazia',
        'Categoria não possui parceiros. Tente novamente',
      );
    } else {
      navigation.navigate('SearchResult', response.data);
    }
  }

  // Button Cards
  async function handlePartnersLoad(category: string) {
    const data = {
      type: 'list_category',
      category: '',
      sub_category: '',
      is_home_office: '',
      is_local_office: '',
      max_price: '',
      rank: '',
      max_distance: '150',
      latitude: '-25.43169',
      longitude: '-49.22403',
    };

    data.category = category;

    const response = await api
      .post('/mobile/requisitions/ReqEmployees.php', data);

    if (response.data.data.length === 0) {
      Alert.alert(
        'Categoria Vazia',
        'Categoria não possui parceiros. Tente novamente',
      );
    } else {
      navigation.navigate('SearchResult', response.data);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <Container>
        <Header>
          <HeaderTitle>Seja bem vindo!</HeaderTitle>
          <InputContainer>

            <Controller
              name="category"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <HeaderInput
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor="#787878"
                  autoCorrect={false}
                />
              )}
            />

            <TouchableOpacity onPress={handleSubmit(searchCategory)}>
              <Image source={searchIcon} />
            </TouchableOpacity>

          </InputContainer>
        </Header>

        <Title>Os mais procurados</Title>

        <CategoryContainer>
          {categories?.data.slice(0, 9).map((category) => (
            <CategoryButton
              key={category.token}
              onPress={() => handlePartnersLoad(category.sub_category)}
            >
              <CategoryButtonText>
                {category.sub_category.toUpperCase()}
              </CategoryButtonText>
            </CategoryButton>
          ))}
        </CategoryContainer>

      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
