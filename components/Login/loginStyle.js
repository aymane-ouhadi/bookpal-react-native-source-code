import { StyleSheet } from 'react-native'

const FONT_SIZE = 18
const LOGIN_BTN_SIZE = 70

export default StyleSheet.create({
    loginBody: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between'
    },
    loginTopWrapper: {
        width: '100%',
        height: '10%',
        backgroundColor: '#3f2e6d'
    },
    loginWelcome: {

    },
    loginFormWrapper: {
        width: '70%',
        padding: 10,
        backgroundColor: 'white',
        elevation: 10,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
},
    loginInputField: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    loginIcon: {
        fontSize: FONT_SIZE,
        marginRight: 10
    },
    loginTextInput: {
        fontSize: FONT_SIZE,
        width: '87%',
    },
    loginBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#00ffff',
        width: LOGIN_BTN_SIZE,
        height: LOGIN_BTN_SIZE,
        borderRadius: LOGIN_BTN_SIZE / 2,
    },
    loginBottomWrapper: {
        width: '100%',
        height: '10%',
        backgroundColor: '#3f2e6d',
    },
  })