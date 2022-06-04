import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin'

import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import BottomTabNavigator from './components/bottomTab/BottomTabNavigator'
import Auth from './screens/Auth/Auth';
import { AuthContextProvider } from './context/Auth/AuthContext';

GoogleSignin.configure({
  webClientId: "144681503238-qmiai9esu909gs9bsvacq7l21u5lrf4m.apps.googleusercontent.com"
})

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Auth />  
      </NavigationContainer>
    </AuthContextProvider>
  )
}

export default App