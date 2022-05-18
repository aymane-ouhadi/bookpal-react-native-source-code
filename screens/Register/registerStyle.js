import { StyleSheet } from 'react-native'
import { TEXT_PRIMARY } from '../../utils/constants/colors'

const FONT_SIZE = 15



export default StyleSheet.create({
    loginBody: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
    },
    loginSection: {
    },
    loginWelcomeWrapper: {
        alignSelf: 'center',
        marginBottom: 20
    },
    loginWelcome: {
        fontSize: 35,
        color: TEXT_PRIMARY
    },
    loginFormWrapper: {
        width: '80%',
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
        marginRight: 10,
    },
    loginTextInput: {
        fontSize: FONT_SIZE,
        width: '80%',
    },
  })