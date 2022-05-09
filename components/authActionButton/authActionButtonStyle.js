import { StyleSheet} from 'react-native'
import { THEME_PRIMARY, THEME_SECONDARY } from '../../utils/constants/colors'

export default StyleSheet.create({
    loginRegisterWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        alignSelf: 'flex-start',
        padding: 15,
        paddingRight: 30,
        backgroundColor: '#fff',
        elevation: 10,
    },
    loginRegister: {
        fontSize: 18,
        color: THEME_PRIMARY,
    },
    actionIcon: {
        // backgroundColor: THEME_SECONDARY,
        fontSize: 13,     
        marginRight: 10,
    }
})