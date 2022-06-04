import {  
    Text, 
    TextInput,
    View,
    Pressable,
 } from 'react-native'
 import { Picker } from '@react-native-picker/picker';
 import React, { useState, useRef, useContext } from 'react'
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
 import FontAwesome from 'react-native-vector-icons/FontAwesome'
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 import Feather from 'react-native-vector-icons/Feather'
 import AuthAPI from '@react-native-firebase/auth'
 import { API_URL } from '../../utils/constants/backend'
 
 import { Fonts } from '../../utils/styles/fonts'
 import TopWave from '../../components/topWave/TopWave'
 import BottomWave from '../../components/bottomWave/BottomWave'
 import AuthActionButton from '../../components/authActionButton/AuthActionButton'
 import AuthSubmitButton from '../../components/authSubmitButton/AuthSubmitButton'
 import ErrorBlock from '../../components/errorBlock/ErrorBlock';
 import { AuthContext } from '../../context/Auth/AuthContext';
 
 import registerStyle from './registerStyle'
import Axios from 'axios';
 
 const Register = ({navigation}) => {

    const [data, setData] = useState({
      firstName: '',
      lastName: '',
      gender: null,
      email: '',
      password: '',
      confirmPassword: '', 
    })
    const [error, setError] = useState('')
    const [state, setState] = useContext(AuthContext)

    const pickerRef = useRef()

    const handleRegisterPress = async () => {
      try {
        if(data.email && data.password){
          if(data.password === data.confirmPassword && data.password){
            setState({...state, isFetching: true})
            const {user: {uid}} = await AuthAPI().createUserWithEmailAndPassword(data.email, data.password)
            Axios.post(`${API_URL}/user/create/${uid}`, {
              firstName: data.firstName,
              lastName: data.lastName,
              gender: data.gender,
              birthday: "2008-09-15T15:53:00+05:00",
              email: 'email',
              password: 'pass'
            })
            setState({...state, isFetching: false})
          }
          else{
            setData({...data, confirmPassword: ''})
            setError('Passwords don\'t match')
          }
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setData({...data, email: ''})
            setError('This email is already taken')
            break;
          case 'auth/invalid-email':
            setData({...data, email: ''})
            setError('This email is not valid')
            break;
          case 'auth/weak-password':
            setData({...data, password: '', confirmPassword: ''})
            setError('This password is weak')
            break;
          default:
            setError(error.code)
            break;
        }
        throw error
      }
    }

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
           {error ? <ErrorBlock message={error}/> : null}
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
                    <Picker.Item label="male" value="male" />
                    <Picker.Item label="female" value="female" />
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
              onPress={handleRegisterPress}
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