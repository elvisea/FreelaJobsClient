import React from 'react';
import { Alert, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import searchIcon from '../../assets/search-icon.png';

import {
  Container,
  Header,
  HeaderInput,
  InputContainer,
  FilterButton,
  TextFilterButton,
  ContainerFilterButtons,
  ContentSearchResult,
  Content,
  ContentHeader,
  ImageSearchResult,
  Buttons,
  Resume,
  Name,
  Work,
  TextResume,
  Stars,
  HeaderButton,
  TextHeaderButton,
  NameAndWork,
} from './styles';

export interface RouteParams {
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

interface IDataInput {
  category: string;
}

const SearchResult: React.FC = () => {
  const route = useRoute();
  const { user } = useAuth();
  const navigation = useNavigation();
  const { control, handleSubmit, reset } = useForm();
  const { data } = route.params as RouteParams;

  async function searchCategory({ category }: IDataInput) {
    const dataSearch = {
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

    dataSearch.category = category;

    await api.post('/mobile/requisitions/ReqEmployees.php', dataSearch)
      .then((response) => navigation.navigate('SearchResult', response.data));

    reset(); // reset input
  }

  function handleChatOrProfile() {
    if (user?.data.have_plan) {
      navigation.navigate('Talk');
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

  return (
    <Container>
      <Header>
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
              />
            )}
          />

          <TouchableOpacity onPress={handleSubmit(searchCategory)}>
            <Image source={searchIcon} />
          </TouchableOpacity>
        </InputContainer>

        <ContainerFilterButtons>
          <FilterButton>
            <TextFilterButton>Filtro</TextFilterButton>
          </FilterButton>

          <FilterButton>
            <TextFilterButton>Ordenar</TextFilterButton>
          </FilterButton>
        </ContainerFilterButtons>
      </Header>

      <ContentSearchResult>

        {data
          && (
            <FlatList
              data={data}
              keyExtractor={(item) => item.pk}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: partner }) => (
                <Content>
                  <ContentHeader>
                    <ImageSearchResult source={{ uri: partner.url_picture }} />
                    <NameAndWork>
                      <Name>{partner.name}</Name>
                      <Work>{partner.sub_category}</Work>
                      <Stars>
                        <IconFeather
                          name="star"
                          color="#FFBC00"
                          size={15}
                          style={{ marginRight: 4 }}
                        />
                        <IconFeather
                          name="star"
                          color="#FFBC00"
                          size={15}
                          style={{ marginRight: 4 }}
                        />
                        <IconFeather
                          name="star"
                          color="#FFBC00"
                          size={15}
                          style={{ marginRight: 4 }}
                        />
                        <IconFeather
                          name="star"
                          color="#FFBC00"
                          size={15}
                          style={{ marginRight: 4 }}
                        />
                        <IconFeather
                          name="star"
                          color="#FFBC00"
                          size={15}
                          style={{ marginRight: 4 }}
                        />
                      </Stars>
                    </NameAndWork>

                    <Buttons>
                      <HeaderButton
                        style={{ marginRight: 8 }}
                        onPress={handleChatOrProfile}
                      >
                        <TextHeaderButton>Chat</TextHeaderButton>
                      </HeaderButton>

                      <HeaderButton
                        onPress={() => navigation.navigate('PartnerProfile', { partner })}
                      >
                        <TextHeaderButton>Perfil</TextHeaderButton>
                      </HeaderButton>
                    </Buttons>
                  </ContentHeader>
                  <Resume>
                    <TextResume>{partner.description.slice(0, 100).concat('...')}</TextResume>
                  </Resume>
                </Content>
              )}
            />
          )}
      </ContentSearchResult>
    </Container>
  );
};

export default SearchResult;
