import { View, Text } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthAPI from '@react-native-firebase/auth'

import Login from '../Login/Login'
import Register from '../Register/Register'
import BottomTabNavigator from '../../components/bottomTab/BottomTabNavigator'
import { AuthContext } from '../../context/Auth/AuthContext'

const Auth = () => {

  //Initializing states
  const [initializing, setInitializing] = useState(true)
  const [state, setState] = useContext(AuthContext)

  // Handle user state changes
  useEffect(() => {
    const subscriber = AuthAPI().onAuthStateChanged((user) => {
      // console.log('INSIDE ON AUTH STATE CHANGED')
      // console.log('AuthState User : ', AuthAPI().currentUser)
      setState({...state, user})
      if(initializing) setInitializing(false)
    })
    return () => subscriber()
  }, [])

  // useEffect(() => {
  //   console.log('User : ', state.user)
  // }, [state])

  const Stack = createStackNavigator()

  if(initializing)
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    )

  return (
    <Stack.Navigator
        initialRouteName={AuthAPI().currentUser ? 'Welcome' : 'Login'}
        screenOptions={{ 
            header: () => null
         }}
    >
      <Stack.Screen
        name='Login'
        component={AuthAPI().currentUser ? BottomTabNavigator : Login}
      />
      <Stack.Screen
        name='Register'
        component={AuthAPI().currentUser ? BottomTabNavigator : Register}
      />
      <Stack.Screen
        name='Welcome'
        component={AuthAPI().currentUser ? BottomTabNavigator : Login}
      />
    </Stack.Navigator>
  )
}

export default Auth