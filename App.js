/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { createStackNavigator } from 'react-navigation'

import Home from './src/screens/home'
import About from './src/screens/about'
import Profile from './src/screens/profile'
import Login from './src/screens/login'
import Card from 'react-navigation/src/views/StackView/StackViewCard';

const AppNavigator = createStackNavigator(
//
{
  Home: {
    screen: Home,
    path: 'home/',
    navigationOptions: {
      title: 'Esta es la Home'
    }
  },
  About,
  Profile,
  Login
},
{
  initialRouteName: 'Login',
  navigationOptions: {
    title: 'Un título genérico',
    headerAllowFontScaling: true,
    //gesturesEnabled: true, // no anda
    headerBackTitle: 'Atrás', // funciona solo en iOS
    //headerBackImage: <Text>🇦🇷</Text>
    headerBackImage: <Text>{`<=`}</Text>
    // header: <Text>Esto es un Header</Text>,
  },
  initialRouteKey: 'login',
  initialRouteParams: {
    nombre: 'José Tuzin'
  },
  // headerMode: float screen none
  // screen: al navergar, también se anima el header
  // float: al navergar, el header queda fijo
  //headerMode: 'none' // default android screen - default iOS float
  headerMode: 'float',
  // mode: modal o card - default en ambos: card
  //mode: modal, // solo para iOS
  mode: 'card',
  cardStyle: {
    borderWidth: 5,
    // backgroundColor: 'red', // se aprecia el fondo con cards transparentes
  },
  // headerTransitionPreset: 'fade-in-place' 'uikit'
  headerTransitionPreset: 'uikit',
}
)

export default AppNavigator;
