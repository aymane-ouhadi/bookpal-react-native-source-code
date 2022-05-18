import {  
    Text, 
    TextInput,
    View,
    Pressable,
 } from 'react-native'
 import { Picker } from '@react-native-picker/picker';
 import React, { useState, useRef } from 'react'
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
 import FontAwesome from 'react-native-vector-icons/FontAwesome'
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 import Feather from 'react-native-vector-icons/Feather'
 
 import { Fonts } from '../../utils/styles/fonts'
 import TopWave from '../../components/topWave/TopWave'
 import BottomWave from '../../components/bottomWave/BottomWave'
 import AuthActionButton from '../../components/authActionButton/AuthActionButton'
 import AuthSubmitButton from '../../components/authSubmitButton/AuthSubmitButton'
 
 import registerStyle from './registerStyle'
import ErrorBlock from '../../components/errorBlock/ErrorBlock';
 
 const Register = ({navigation}) => {

    const [data, setData] = useState({
      firstName: '',
      lastName: '',
      gender: null,
      email: '',
      password: '',
      confirmPassword: '', 
    })

    const pickerRef = useRef()

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
           {/* <ErrorBlock message={'hh'}/> */}
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
                     value={data.firstName}
                     onChangeText={(value) => setData({...data, firstName: value})}
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
                     value={data.lastName}
                     onChangeText={(value) => setData({...data, lastName: value})}
                   />
                 </View>
                 <Pressable style={{ 
                   borderBottomWidth: 1, 
                   borderBottomColor: '#DDD',
                   ...registerStyle.loginInputField
                 }}
                  onPress={() => { pickerRef.current.focus() }}
                 >
                   <FontAwesome
                        style={registerStyle.loginIcon}
                        name='transgender'
                    />
                   <TextInput 
                     style={[
                       registerStyle.loginTextInput,
                       Fonts.PoppinsRegular
                     ]}
                     placeholder='Gender'
                     editable={false}
                     value={data.gender}
                   />
                 </Pressable>
                  <Picker
                    ref={pickerRef}
                    style={{ display: 'none' }}
                    selectedValue={data.gender}
                    onValueChange={(itemValue, itemIndex) =>
                      setData({...data, gender: itemValue})
                    }>
                    <Picker.Item label="Select Gender"/>
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                  </Picker>
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
                     value={data.email}
                     onChangeText={(value) => setData({...data, email: value})}
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
                     secureTextEntry
                     placeholder='Password'
                     value={data.password}
                     onChangeText={(value) => setData({...data, password: value})}
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
                     value={data.confirmPassword}
                     onChangeText={(value) => setData({...data, confirmPassword: value})}
                   />
                 </View>
             </View>
             {/* ===================== LOGIN BUTTON ===================== */}
             <AuthSubmitButton 
              iconName={'check'}
              navigation={navigation}
              data={data}
              to='Login'
              />
           </View>
           <AuthActionButton 
            title={'Login'}
            navigation={navigation}
            to='Login'
            />
         </View>
 
         
       {/* ===================== LOGIN BOTTOM ===================== */}
       <BottomWave />
 
     </View>
   )
 }
 
 export default Register