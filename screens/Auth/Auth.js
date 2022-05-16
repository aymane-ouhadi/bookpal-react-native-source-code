import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../Login/Login'
import Register from '../Register/Register'
import BottomTabNavigator from '../../components/bottomTab/BottomTabNavigator'

const Auth = () => {

    const Stack = createStackNavigator()

  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{ 
            header: () => null
         }}
    >
      <Stack.Screen
        name='Login'
        component={Login}
      />
      <Stack.Screen
        name='Register'
        component={Register}
      />
      <Stack.Screen
        name='Welcome'
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  )
}

export default Auth