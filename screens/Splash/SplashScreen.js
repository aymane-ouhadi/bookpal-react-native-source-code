import { View, Text, Image } from 'react-native'
import React from 'react'


import splashScreenStyle from './splashScreenStyle'
import images from '../../assets/images/images'

const ICON_SIZE = 400

const SplashScreen = () => {
  return (
    <View style={splashScreenStyle.body}>
      <Image
        source={images.placehoder.icon}
        style={{ 
          width: ICON_SIZE,
          height: ICON_SIZE
        }}
      />
    </View>
  )
}

export default SplashScreen