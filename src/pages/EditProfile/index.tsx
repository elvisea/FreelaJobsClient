import React from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';
import api from '../../services/api';
import InputApp from '../../components/InputApp';

import {
  Container,
  ContainerInfo,
  Header,
  Name,
  ImageUser,
  CustomerSince,
} from './styles';

interface EditData {
  nick_name: string;
  phone: string;
  birthdate: string;
  address: string;
  password?: string;
}

const EditProfile: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  async function handleEditProfile(editData: EditData) {
    // Telefone, endereço e senha
    // retirar apelido e aniversário
    const data = {
      type: 'update',
      pk: user.data.pk,
      name: user.data.name,
      surname: user.data.surname,
      ddd: user.data.ddd,
      phone: editData.phone,
      address: editData.address,
      zipcode: user.data.zipcode,
      address_number: user.data.address_number,
      complement: 'Casa',
      latitude: '-25.43169',
      longitude: '-49.22403',
    };
    console.log(data)
    const response = await api
      .post('/mobile/requisitions/ReqUserRegister.php', data);

    console.log("RESPONSE=>", response.data)
    if (response.data.status === false) {
      Alert.alert('Edit Profile Error', 'Tente novamente!');
    } else {
      Alert.alert('Profile editado com sucesso!', 'Você editou seu perfil.',
        [
          {
            text: 'Buscar por Freelas',
            onPress: () => navigation.navigate('Home'),
          }
        ]
      );
    }
  }
  return (
    <>
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* <TouchableWithoutFeedback style={{ flex: 1, }} onPress={Keyboard.dismiss}> */}

        <ScrollView
          style={{ flex: 1, }}
        // keyboardShouldPersistTaps="handled"
        >
          <Container style={{ flex: 1, }}>
            <Header />
            <ImageUser source={{ uri: user?.data.url_picture }} />
            <Name>
              {user?.data.name}
              {' '}
              {user?.data.surname}
            </Name>
            <CustomerSince>
              Cliente desde
              {' '}
              {user?.data.registration_date}
            </CustomerSince>

            <CustomerSince>
              {user?.data.mail}
            </CustomerSince>

            <CustomerSince>
              {user?.data.cpf}
            </CustomerSince>

            <ContainerInfo>
              {/* <View style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginBottom: 16
              }}>

                <InfoLine>
                  <Icon
                    name="mail"
                    size={24}
                    color={defaultTheme.colors.background}
                    style={{ marginRight: 14 }}
                  />
                  <Info>{user?.data.mail}</Info>
                </InfoLine>

                <InfoLine>
                  <Icon
                    name="sliders"
                    size={24}
                    color={defaultTheme.colors.background}
                    style={{ marginRight: 14 }}
                  />
                  <Info>{user?.data.cpf}</Info>
                </InfoLine>
              </View> */}

              {/* <InputApp
                name="nick_name"
                placeholder="Apelido"
                control={control}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
              /> */}

              <InputApp
                name="phone"
                placeholder="Phone"
                control={control}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                returnKeyType="next"
              />

              {/* <InputApp
                name="birthdate"
                placeholder="Birth Date"
                control={control}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                returnKeyType="next"
              /> */}

              <InputApp
                name="address"
                placeholder="Address"
                control={control}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
              />

              <InputApp
                name="password"
                placeholder="Senha"
                control={control}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="visible-password"
                returnKeyType="next"
              />

            </ContainerInfo>

            <Button onPress={handleSubmit(handleEditProfile)}>Salvar</Button>
          </Container>
        </ScrollView>
        {/* </TouchableWithoutFeedback> */}
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
