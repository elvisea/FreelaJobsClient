import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';

import Routes from './routes';
import defaultTheme from './styles/theme/default';

import Purchases from 'react-native-purchases';
import { API_KEY } from './constants';

const App: React.FC = () => {

  useEffect(() => {
    Purchases.setDebugLogsEnabled(true)
    Purchases.setup(API_KEY)
    console.log("Entrou no UseEffect")
  }, [])

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <StatusBar
            barStyle="light-content"
            backgroundColor={defaultTheme.colors.background}
          />
          <AppProvider>
            <View
              style={{
                backgroundColor: defaultTheme.colors.background,
                flex: 1,
              }}
            >
              <Routes />
            </View>
          </AppProvider>
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
};

export default App;
