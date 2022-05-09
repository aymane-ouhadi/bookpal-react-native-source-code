import {  
   Text, 
   TextInput,
   View,
} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'

import { Fonts } from '../../utils/styles/fonts'
import loginStyle from './loginStyle'
import TopWave from '../../components/topWave/TopWave'
import BottomWave from '../../components/bottomWave/BottomWave'
import AuthActionButton from '../../components/authActionButton/AuthActionButton'
import AuthSubmitButton from '../../components/authSubmitButton/AuthSubmitButton'

const Login = () => {
  return (
    <View style={loginStyle.loginBody}>
      {/* ===================== LOGIN TOP ===================== */}
      <TopWave/>


        {/* ===================== LOGIN SECTION ===================== */}
        <View style={loginStyle.loginSection}>
          {/* ===================== LOGIN WELCOME ===================== */}
          <View style={loginStyle.loginWelcomeWrapper}>
            <Text style={[
              Fonts.PoppinsSemiBold,
              loginStyle.loginWelcome
            ]}>
              Login
            </Text>
          </View>
          {/* ===================== LOGIN FORM ===================== */}
          <View style={{ 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <View style={loginStyle.loginFormWrapper}>
                <View style={{ 
                  borderBottomWidth: 1, 
                  borderBottomColor: '#DDD',
                  ...loginStyle.loginInputField
                }}>
                  <FontAwesome5 
                      style={loginStyle.loginIcon}
                      name='user'
                    /> 
                  <TextInput 
                    style={[
                      loginStyle.loginTextInput,
                      Fonts.PoppinsRegular
                    ]}
                    placeholder='Email'
                  />
                </View>
                <View style={loginStyle.loginInputField}>
                  <Feather 
                    style={loginStyle.loginIcon}
                    name='lock'
                  /> 
                  <TextInput 
                    secureTextEntry
                    style={[
                      loginStyle.loginTextInput,
                      Fonts.PoppinsRegular
                    ]}
                    placeholder='Password'
                  />
                </View>
            </View>
            {/* ===================== LOGIN BUTTON ===================== */}
            <AuthSubmitButton iconName={'arrow-right'}/>
          </View>
          <AuthActionButton title={'Sign in with Google'} iconName='google'/>
          <AuthActionButton title={'Register'}/>
        </View>

        
      {/* ===================== LOGIN BOTTOM ===================== */}
      <BottomWave />

    </View>
  )
}

export default Login