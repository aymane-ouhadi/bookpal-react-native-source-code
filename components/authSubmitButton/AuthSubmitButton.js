import { View, Pressable } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

import authSubmitButtonStyle from './authSubmitButtonStyle'
import { THEME_PRIMARY } from '../../utils/constants/colors'

const AuthSubmitButton = ({iconName}) => {
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
          android_ripple={{ 
            color: '#aaa',
            borderless: false
          }} 
          style={authSubmitButtonStyle.loginBtn}
        >
          <FontAwesome5
            size={25}
            color='#fff'
            name={iconName}
          /> 
        </Pressable>
      </LinearGradient>
    </View>
  )
}

export default AuthSubmitButton