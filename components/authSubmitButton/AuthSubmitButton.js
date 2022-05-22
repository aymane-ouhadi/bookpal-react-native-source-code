import { View, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useContext } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

import authSubmitButtonStyle from './authSubmitButtonStyle'
import { THEME_PRIMARY } from '../../utils/constants/colors'
import { AuthContext } from '../../context/Auth/AuthContext'

const AuthSubmitButton = ({data, iconName, navigation, to, onPress}) => {

  const [state, setState] = useContext(AuthContext)

  // const handlePress = async () => {
  //   try {
  //     setIsFetching(true)
  //     setTimeout(() => {
  //       setIsFetching(false)
  //       navigation.navigate(to)
  //     }, 2000)
  //   } catch (error) {
      
  //   }
  // }

  return (
    <View style={{ 
        width: 70,
        height: 70,
        borderRadius: 35,
        elevation: 11,
        overflow: 'hidden',
        position: 'relative',
        right: 35  
    }}>
      <LinearGradient
        colors={[
          '#5c449d',
          THEME_PRIMARY
        ]}
        angle={30}
      >
        <Pressable
          onPress={onPress} 
          android_ripple={{ 
            color: '#aaa',
            borderless: false
          }} 
          style={authSubmitButtonStyle.loginBtn}
        >
          {
            state.isFetching ?
              <ActivityIndicator
                size={40}
                color='#fff'
              />
            :
              <FontAwesome5
                size={25}
                color='#fff'
                name={iconName}
              /> 
          }
        </Pressable>
      </LinearGradient>
    </View>
  )
}

export default AuthSubmitButton