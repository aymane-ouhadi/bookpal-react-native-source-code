import { View, Text, Image } from 'react-native'
import React from 'react'
import headerStyle from './headerStyle'

const Header = () => {
  return (
    <View style={headerStyle.body}>
      <View>
          <Text>Logo</Text>
      </View>
      <View style={headerStyle.profileImageWrapper}>
          <Image
            source={require('../../assets/images/avatar_female.png')}
            style={headerStyle.profileImage}
          />
      </View>
    </View>
  )
}

export default Header