import {  
   Text, 
   TextInput,
   View,
} from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import { Fonts } from '../../utils/styles/fonts'

import loginStyle from './loginStyle'
import TopWave from '../../components/topWave/TopWave'
import BottomWave from '../../components/bottomWave/BottomWave'
import AuthActionButton from '../../components/authActionButton/AuthActionButton'
import AuthSubmitButton from '../../components/authSubmitButton/AuthSubmitButton'
import ErrorBlock from '../../components/errorBlock/ErrorBlock'

const Login = ({navigation}) => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })

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
          {/* <ErrorBlock message={'hh'}/> */}
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
                    value={data.email}
                    onChangeText={(value) => setData({...data, email: value})}
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
                    value={data.password}
                    onChangeText={(value) => setData({...data, password: value})}
                  />
                </View>
            </View>
            {/* ===================== LOGIN BUTTON ===================== */}
            <AuthSubmitButton 
              iconName={'arrow-right'}
              data={data}
              navigation={navigation}
              to='Welcome'
            />
          </View>
          <AuthActionButton 
            title={'Sign in with Google'} 
            iconName='google'/>
          <AuthActionButton 
            title={'Register'} 
            navigation={navigation}
            to='Register'
          />
        </View>

        
      {/* ===================== LOGIN BOTTOM ===================== */}
      <BottomWave />

    </View>
  )
}

export default Login