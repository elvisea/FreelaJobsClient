import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface SignInCredentials {
  mail: string;
  password: string;
  type: string;
  imei: string;
  facebook_user_id: string;
}

interface User {
  data: {
    pk: number;
    token: string;
    name: string;
    master_token: string;
    account_status: string;
    mail: string;
    zipcode: string;
    surname: string;
    nick_name: string;
    gender: string;
    age: number;
    birthdate: string;
    ddd: number;
    phone: number;
    rg: string;
    cpf: string;
    address: string;
    address_number: string;
    registration_date: string;
    is_active: true;
    is_premium: boolean;
    have_plan: boolean;
    have_wire: boolean;
    url_picture: string;
    url_document: string;
    url_document_back: string;
  };
  status: boolean;
  error: string;
}

interface AuthContextData {
  user: User;
  // loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  // updateUser(user: User): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  // const [data, setData] = useState<AuthState>({} as AuthState);
  const [user, setUser] = useState<User>(Object);
  console.log("USER LOGADO => ", user)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const userStorage = await AsyncStorage.getItem('@FreelaJobs:user');

      if (userStorage) {
        setUser(JSON.parse(userStorage));
      }
    }

    loadStorageData();
  }, []);

  async function signIn({
    mail,
    password,
    imei,
    type,
    facebook_user_id,
  }: SignInCredentials) {
    const data = {
      mail,
      password,
      type,
      imei,
      facebook_user_id,
    };

    const response = await api
      .post('/mobile/requisitions/ReqLogin.php', data);
    setUser(response.data);

    if (response.data.status === false) {
      Alert.alert('Falha ao realizar o Login', 'Email ou Senha inválidos. Tente Novamente');
      return;
    }

    await AsyncStorage.setItem(
      '@FreelaJobs:user', JSON.stringify(response.data),
    );
  }

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@FreelaJobs:user');
  }, []);

  // const updateUser = useCallback(
  //   async (user: User) => {
  //     await AsyncStorage.setItem('@GoBarber:user', JSON.stringify(user));

  //     setData({
  //       token: data.token,
  //       user,
  //     });
  //   },
  //   [setData, data.token],
  // );

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
