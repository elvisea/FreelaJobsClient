import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chat from '../pages/Chat';
import Home from '../pages/Home';
import Talk from '../pages/Talk';
import Wallet from '../pages/Wallet';
import QrCode from '../pages/QRCode';
import Rating from '../pages/Rating';
import Profile from '../pages/Profile';
import Freelas from '../pages/Freelas';
import Assessment from '../pages/Assessment';
import EditProfile from '../pages/EditProfile';
import FreelaStore from '../pages/FreelaStore';
import SearchResult from '../pages/SearchResult';
import PartnerProfile from '../pages/PartnerProfile';
import Congratulations from '../pages/Congratulations';

import HomeIcon from '../assets/home-icon.svg';
import ProfileIcon from '../assets/profile.svg';
import WalletIcon from '../assets/wallet.svg';
import FreelasIcon from '../assets/freelas.svg';
import ChatIcon from '../assets/chat.svg';
import QRCode from '../assets/qrcode.svg';

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#0A3FA5',
        inactiveTintColor: '#0A3FA5',
        labelStyle: { fontSize: 12, fontFamily: 'Poppins-Regular' },
        style: {
          height: 70,
          paddingVertical: 0,
        },
      }}
    >
      <Screen
        name="Home"
        options={{
          tabBarIcon: (({ color }) =>
            <HomeIcon height={26} width={26} color={color} />
          )
        }}
      >
        {() => (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ animationEnabled: false }}
          >
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={Home}
            />

            <Stack.Screen
              name="SearchResult"
              options={{ headerShown: false }}
              component={SearchResult}
            />

            <Stack.Screen
              name="PartnerProfile"
              options={{ headerShown: false }}
              component={PartnerProfile}
            />

            <Stack.Screen
              name="Rating"
              options={{ headerShown: false }}
              component={Rating}
            />

            <Stack.Screen
              name="Talk"
              options={{ headerShown: false }}
              component={Talk}
            />

            <Stack.Screen
              name="Assessment"
              options={{ headerShown: false }}
              component={Assessment}
            />

            {/* <Stack.Screen
              name="Assessment"
              options={{ headerShown: false }}
              component={Assessment}
            /> */}

            <Stack.Screen
              name="FreelaStore"
              options={{ headerShown: false }}
              component={FreelaStore}
            />

            <Stack.Screen
              name="Congratulations"
              options={{ headerShown: false }}
              component={Congratulations}
            />

          </Stack.Navigator>
        )}
      </Screen>

      <Screen
        name="Profile"
        options={{
          tabBarIcon: (({ color }) => (
            <ProfileIcon height={26} width={26} color={color} />
          )),
        }}
      >
        {() => (
          <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{ animationEnabled: false }}
          >
            <Stack.Screen
              name="Profile"
              options={{ headerShown: false }}
              component={Profile}
            />

            <Stack.Screen
              name="EditProfile"
              options={{ headerShown: false }}
              component={EditProfile}
            />
          </Stack.Navigator>
        )}
      </Screen>

      <Screen
        name="Carteira"
        options={{
          tabBarIcon: (({ color }) => (
            <WalletIcon height={26} width={26} color={color} />
          )),
        }}
        component={Wallet}
      />

      <Screen
        name="Freelas"
        options={{
          tabBarIcon: (({ color }) => (
            <FreelasIcon height={26} width={26} color={color} />
          )),
        }}
      >
        {() => (
          <Stack.Navigator
            initialRouteName="Freelas"
            screenOptions={{ animationEnabled: false }}
          >
            <Stack.Screen
              name="Freelas"
              options={{ headerShown: false }}
              component={Freelas}
            />
            <Stack.Screen
              name="Assessment"
              options={{ headerShown: false }}
              component={Assessment}
            />
          </Stack.Navigator>
        )}
      </Screen>

      <Screen
        name="Chat"
        options={{
          tabBarIcon: (({ color }) => (
            <ChatIcon height={26} width={26} color={color} />
          )),
        }}
      >
        {() => (
          <Stack.Navigator
            initialRouteName="Chat"
            screenOptions={{ animationEnabled: false }}
          >
            <Stack.Screen
              name="Chat"
              options={{ headerShown: false }}
              component={Chat}
            />
            <Stack.Screen
              name="Talk"
              options={{ headerShown: false }}
              component={Talk}
            />

            <Stack.Screen
              name="FreelaStore"
              options={{ headerShown: false }}
              component={FreelaStore}
            />
          </Stack.Navigator>
        )}
      </Screen>

      <Screen
        name="QR Code"
        options={{
          tabBarIcon: (({ color }) => (
            <QRCode height={26} width={26} color={color} />
          )),
        }}
        component={QrCode}
      />
    </Navigator>
  );
}
