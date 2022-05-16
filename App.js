import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import BottomTabNavigator from './components/bottomTab/BottomTabNavigator'
import Auth from './screens/Auth/Auth';

const App = () => {
  return (
    <NavigationContainer>
      <Auth />  
    </NavigationContainer>
  )
}

export default App