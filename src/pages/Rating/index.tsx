import React from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import IconFeather from 'react-native-vector-icons/Feather';

import { Header } from '../../components/Header';

import {
  Comment,
  Container,
  Content,
  ContentHeader,
  ContentSearchResult,
  ImageSearchResult,
  Name,
  NameWorkAndStars,
  Stars,
  TextComment,
} from './styles';

export interface IRouteParams {
  status: string;
  error: string;
  data: [
    {
      pk: number;
      name: string;
      surname: string;
      comment: string;
      rank: string;
      url_picture: string;
    }
  ] | [];
}

export default function Rating(): JSX.Element {
  const route = useRoute();

  const params = route.params as IRouteParams;

  return (
    <Container>
      <Header>Avaliações</Header>
      <ContentSearchResult>

        <FlatList
          data={params.data}

          keyExtractor={(item) => item.pk}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: data }) => (
            <Content>
              <ContentHeader>
                <ImageSearchResult source={{ uri: data.url_picture }} />
                <NameWorkAndStars>
                  <Name>
                    {data.name}
                    {' '}
                    {data.surname}
                  </Name>
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
                </NameWorkAndStars>

              </ContentHeader>
              <Comment>
                <TextComment>{data.comment}</TextComment>
              </Comment>
            </Content>
          )}
        />
      </ContentSearchResult>

    </Container>
  );
}
