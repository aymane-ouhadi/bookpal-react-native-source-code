import { View, Text } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthAPI from '@react-native-firebase/auth'

import Login from '../Login/Login'
import Register from '../Register/Register'
import BottomTabNavigator from '../../components/bottomTab/BottomTabNavigator'
import { AuthContext } from '../../context/Auth/AuthContext'
import Axios from 'axios'
import { API_URL } from '../../utils/constants/backend'
import SplashScreen from '../Splash/SplashScreen'

const Auth = () => {

  //Initializing states
  const [initializing, setInitializing] = useState(true)
  const [state, setState] = useContext(AuthContext)

  // Handle user state changes
  useEffect(() => {
    const subscriber = AuthAPI().onAuthStateChanged(async (user) => {
      try {
        const { data: { uid, data }} = await Axios.get(`${API_URL}/user/user/${user?.uid}`)
        setState({
          ...state, 
          user: data,
          idToken: await AuthAPI().currentUser?.getIdToken()
        })
        if(initializing) setInitializing(false)
      } catch (error) {
        throw error
      }
    })
    return () => subscriber()
  }, [])


  useEffect(() => {
    
    const fetchReadingLists = async () => {
      try {
        if(state.idToken){
          //Header object for the Axios Request
          const headers = {
            'Authorization': `Bearer ${state.idToken}`
          }
          const {data: {readingLists: readLaterList}} = await Axios.get(`${API_URL}/user/readingLists?isRead=false`, {
            headers: headers
          })
          const {data: {readingLists: alreadyReadList}} = await Axios.get(`${API_URL}/user/readingLists?isRead=true`, {
            headers: headers
          })
          setState({
            ...state,
            alreadyReadList: alreadyReadList, 
            readLaterList: readLaterList
          })
        }
      } catch (error) {
        throw error
      }
    }
    fetchReadingLists()
  }, [state.idToken])

  // useEffect(() => {
  //   console.log('User : ', state.user)
  // }, [state])

  useEffect(() => {
    const fn = () => {
      // console.log('User : ', state.user)
      // console.log('idToken : ', state.idToken)
      console.log('Already Read : ', state.alreadyReadList)
      console.log('Read Later : ', state.readLaterList)
    }
    fn()
  }, [state])

  const Stack = createStackNavigator()

  if(initializing)
    return (
      <SplashScreen />
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