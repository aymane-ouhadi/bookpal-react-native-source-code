import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import Home from './screens/Home/Home'
import BottomTabNavigator from './components/bottomTab/BottomTabNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />  
    </NavigationContainer>
  )
}

export default App