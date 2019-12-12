/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createStackNavigator } from 'react-navigation'

import Home from './src/screens/home'
import About from './src/screens/about'
import Profile from './src/screens/profile'
import Login from './src/screens/login'

const AppNavigator = createStackNavigator({
  Home: Home,
  About,
  Profile,
  Login
})

export default AppNavigator;
