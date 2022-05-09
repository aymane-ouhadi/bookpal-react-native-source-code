import { StyleSheet} from 'react-native'

const LOGIN_BTN_SIZE = 70

export default StyleSheet.create({
    loginBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: LOGIN_BTN_SIZE,
        height: LOGIN_BTN_SIZE,
        borderRadius: LOGIN_BTN_SIZE / 2,
    },
})