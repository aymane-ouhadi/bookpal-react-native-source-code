import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import authActionButtonStyle from './authActionButtonStyle'
import { Fonts } from '../../utils/styles/fonts'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { THEME_PRIMARY } from '../../utils/constants/colors'

const AuthActionButton = ({title, iconName, navigation, to, onPress}) => {
  
  const handlePress = () => {
    if(navigation){
      navigation.navigate(to)
    }
  }

  return (
    <TouchableOpacity 
      style={authActionButtonStyle.loginRegisterWrapper}
      onPress={onPress || handlePress}
    >
        {
          iconName
          &&
          <View>
            <FontAwesome5
              style={authActionButtonStyle.actionIcon}
              name='google'
              color={THEME_PRIMARY}
            />
          </View>
        }
        <Text style={[
            Fonts.PoppinsSemiBold,
            authActionButtonStyle.loginRegister
        ]}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default AuthActionButton