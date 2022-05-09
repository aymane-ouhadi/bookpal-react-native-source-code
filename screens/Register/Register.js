import {  
    Text, 
    TextInput,
    View,
 } from 'react-native'
 import React from 'react'
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 import Feather from 'react-native-vector-icons/Feather'
 
 import { Fonts } from '../../utils/styles/fonts'
 import TopWave from '../../components/topWave/TopWave'
 import BottomWave from '../../components/bottomWave/BottomWave'
 import AuthActionButton from '../../components/authActionButton/AuthActionButton'
 import AuthSubmitButton from '../../components/authSubmitButton/AuthSubmitButton'
 
 import registerStyle from './registerStyle'
 
 const Register = () => {
   return (
     <View style={registerStyle.loginBody}>
       {/* ===================== LOGIN TOP ===================== */}
       <TopWave/>
 
 
         {/* ===================== LOGIN SECTION ===================== */}
         <View style={registerStyle.loginSection}>
           {/* ===================== LOGIN WELCOME ===================== */}
           <View style={registerStyle.loginWelcomeWrapper}>
             <Text style={[
               Fonts.PoppinsSemiBold,
               registerStyle.loginWelcome
             ]}>
               Register
             </Text>
           </View>
           {/* ===================== LOGIN FORM ===================== */}
           <View style={{ 
             display: 'flex',
             flexDirection: 'row',
             alignItems: 'center'
           }}>
             <View style={registerStyle.loginFormWrapper}>
                 <View style={{ 
                   borderBottomWidth: 1, 
                   borderBottomColor: '#DDD',
                   ...registerStyle.loginInputField
                 }}>
                   <FontAwesome5 
                       style={registerStyle.loginIcon}
                       name='user'
                     /> 
                   <TextInput 
                     style={[
                       registerStyle.loginTextInput,
                       Fonts.PoppinsRegular
                     ]}
                     placeholder='First Name'
                   />
                 </View>
                 <View style={{ 
                   borderBottomWidth: 1, 
                   borderBottomColor: '#DDD',
                   ...registerStyle.loginInputField
                 }}>
                   <FontAwesome5 
                       style={registerStyle.loginIcon}
                       name='user'
                     /> 
                   <TextInput 
                     style={[
                       registerStyle.loginTextInput,
                       Fonts.PoppinsRegular
                     ]}
                     placeholder='Last Name'
                   />
                 </View>
                 <View style={{ 
                   borderBottomWidth: 1, 
                   borderBottomColor: '#DDD',
                   ...registerStyle.loginInputField
                 }}>
                   <MaterialCommunityIcons
                        style={registerStyle.loginIcon}
                        name='email-outline'
                    />
                   <TextInput 
                     style={[
                       registerStyle.loginTextInput,
                       Fonts.PoppinsRegular
                     ]}
                     placeholder='Email'
                   />
                 </View>
                 <View style={{ 
                   borderBottomWidth: 1, 
                   borderBottomColor: '#DDD',
                   ...registerStyle.loginInputField
                 }}>
                   <Feather 
                       style={registerStyle.loginIcon}
                       name='lock'
                     /> 
                   <TextInput 
                     style={[
                       registerStyle.loginTextInput,
                       Fonts.PoppinsRegular
                     ]}
                     placeholder='Password'
                   />
                 </View>
                 <View style={registerStyle.loginInputField}>
                   <Feather 
                     style={registerStyle.loginIcon}
                     name='lock'
                   /> 
                   <TextInput 
                     secureTextEntry
                     style={[
                       registerStyle.loginTextInput,
                       Fonts.PoppinsRegular
                     ]}
                     placeholder='Confirm Password'
                   />
                 </View>
             </View>
             {/* ===================== LOGIN BUTTON ===================== */}
             <AuthSubmitButton iconName={'check'}/>
           </View>
           <AuthActionButton title={'Login'}/>
         </View>
 
         
       {/* ===================== LOGIN BOTTOM ===================== */}
       <BottomWave />
 
     </View>
   )
 }
 
 export default Register