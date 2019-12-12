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
}
)

export default AppNavigator;
