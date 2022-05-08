import { 
  Dimensions,
   StyleSheet, 
   Text, 
   TextInput,
   View,
   Pressable
} from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

import loginStyle from './loginStyle'

const Login = () => {
  return (
    <View style={loginStyle.loginBody}>
      {/* ===================== LOGIN TOP ===================== */}
      <View style={loginStyle.loginTopWrapper}>
        {/* <Svg
          viewBox='0 0 1050 320'
          width={Dimensions.get('screen').width}
          height={3}
        >
          <Path
            fill={'#3f2e6d'}
            d="M0,224L1440,160L1440,0L0,0Z"
          />
        </Svg> */}
      </View>

        {/* ===================== LOGIN SECTION ===================== */}
        <View>
          {/* ===================== LOGIN WELCOME ===================== */}
          <View style={loginStyle.loginWelcome}>
          
          </View>
          <View style={{ 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            {/* ===================== LOGIN FORM ===================== */}
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
                    style={loginStyle.loginTextInput}
                    placeholder='Email'
                  />
                </View>
                <View style={loginStyle.loginInputField}>
                  <FontAwesome5 
                    style={loginStyle.loginIcon}
                    name='lock'
                  /> 
                  <TextInput 
                    style={loginStyle.loginTextInput}
                    placeholder='Password'
                  />
                </View>
            </View>
            {/* ===================== LOGIN BUTTON ===================== */}
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
                  '#3f2e6d',
                ]}
                angle={30}
              >
                <Pressable 
                  android_ripple={{ 
                    color: '#00022',
                    borderless: false
                  }} 
                  style={loginStyle.loginBtn}
                >
                  <FontAwesome5
                    size={25}
                    color='#fff'
                    name='arrow-right'
                  /> 
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        </View>

      {/* ===================== LOGIN BOTTOM ===================== */}
      <View style={loginStyle.loginBottomWrapper}>
        {/* <Svg
          viewBox='0 0 1050 320'
          width={Dimensions.get('screen').width}
          height={3}
        >
          <Path
            fill={'#3f2e6d'}
            d="M0,224L1440,160L1440,0L0,0Z"
          />
        </Svg> */}
      </View>

    </View>
  )
}

export default Login