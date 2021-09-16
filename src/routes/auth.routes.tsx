import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import defaultTheme from '../styles/theme/default';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RecoverPassword from '../pages/RecoverPassword';
import Terms from '../pages/Terms';
import Politics from '../pages/Politics';
import { AppRoutes } from './app.routes';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: defaultTheme.colors.background },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Home" component={AppRoutes} />
    <Auth.Screen name="RecoverPassword" component={RecoverPassword} />

    <Auth.Screen
      name="Terms"
      component={Terms}
      options={{
        headerShown: true,
        title: 'Termos de Uso',
        headerTitleAlign: 'center',
        cardStyle: { backgroundColor: defaultTheme.colors.backgroundColor },
        headerTitleStyle: {
          color: '#707070',
          fontFamily: defaultTheme.fonts.bold,
        },
      }}
    />

    <Auth.Screen
      name="Politics"
      component={Politics}
      options={{
        headerShown: true,
        title: 'Políticas de Privacidade',
        headerTitleAlign: 'center',
        cardStyle: { backgroundColor: defaultTheme.colors.backgroundColor },
        headerTitleStyle: {
          color: '#707070',
          fontFamily: defaultTheme.fonts.bold,
        },
      }}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
