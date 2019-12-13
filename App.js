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
  //Login  //sacon login y la agrego al stack Main
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    title: 'Un título genérico',
    headerAllowFontScaling: true,
    headerBackTitle: 'Atrás',
    headerBackImage: <Text>{`<=`}</Text>
  },
  initialRouteKey: 'home',
  initialRouteParams: {
    nombre: 'José Tuzin'
  },
  headerMode: 'float',
  mode: 'card',
  cardStyle: {
    borderWidth: 5,
  },
  headerTransitionPreset: 'uikit',
}
)

const Main = createStackNavigator(
  {
    Main: {
      screen: AppNavigator
    },
    Login: {
      screen: Login,
    }
  },
  {
    mode: 'modal', // solo para iOS
    headerMode: 'none',
  }
)

export default Main;
