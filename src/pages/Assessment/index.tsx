import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { Alert, View } from 'react-native';

import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { Header } from '../../components/Header';
import { IRouteParams } from '../Talk';
import {
  Container, ImageUser, InputArea, Name, Profession,
} from './styles';

interface ITextArea {
  comment: string;
}

export default function Assessment() {
  const route = useRoute();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const params = route.params as IRouteParams;

  async function addComment({ comment }: ITextArea) {
    const data = {
      type: 'add',
      pk: params.pk_employee,
      comment,
      rate: 5,
    };

    // const response = await api.post('/mobile/requisitions/ReqEmployees.php', data);
    Alert
      .alert(
        'Avaliação Finalizada com Sucesso!',
        'O Chat ficará aberto por mais 24hrs',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => navigation.navigate('Freelas'),
          },
        ],
      );
  }

  return (
    <Container>
      <Header />
      <ImageUser source={{ uri: params.url_picture }} />
      <Name>{params.name}</Name>
      <Profession>{params.sub_category}</Profession>
      <View>

        <Controller
          name="comment"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <InputArea
              value={value}
              autoCorrect={false}
              onChangeText={onChange}
              placeholder="Conte como foi a sua experiência com esse Freela."
            />
          )}
        />

      </View>
      <Button onPress={handleSubmit(addComment)}>Enviar</Button>
    </Container>
  );
}
