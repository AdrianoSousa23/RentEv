import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TelaDeInicio from './telas/TelaDeInicio';
import TelaDeLogin from './telas/TelaDeLogin';
import TelaDeCadastro from './telas/TelaDeCadastro';
import TelaMenu from './telas/TelaMenu';
import TelaFavorito from './telas/TelaFavorito';
import TelaAgenda from './telas/TelaAgenda';
import TelaReservaAntes from './telas/TelaReservaAntes';
import TelaPagamento from './telas/TelaPagamento';
import TelaConfirma from './telas/TelaConfirma';

import Telaleaf from './telas/TelaLeaf';
import TelaTesla from './telas/TelaTesla';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#5A5DBA',
          borderTopWidth: 0,
          bottom: 5,
          left: 10,
          right: 10,
          elevation: 0,
          borderRadius: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="menu"
        component={TelaMenu}
        options={{
          headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }

            return <Ionicons name="home-outline" size={size} color={color}/>
          }
        }}
      />
      <Tab.Screen
        name="favorito"
        component={TelaFavorito}
        options={{ 
          headerShown: false ,tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" size={size} color={color} />;
            }

            return <Ionicons name="heart-outline" size={size} color={color}/>
          }}}
      />
      <Tab.Screen
        name="agenda"
        component={TelaAgenda}
        options={{ headerShown: false ,tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="book" size={size} color={color} />;
            }

            return <Ionicons name="book-outline" size={size} color={color}/>
          }}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={TelaDeInicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={TelaDeLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cadastro"
          component={TelaDeCadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="menu"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="leaf"
          component={Telaleaf}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="tesla"
          component={TelaTesla}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="reserva"
          component={TelaReservaAntes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pagamento"
          component={TelaPagamento}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="confirma"
          component={TelaConfirma}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
