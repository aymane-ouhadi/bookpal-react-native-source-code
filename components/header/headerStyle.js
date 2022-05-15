import { StyleSheet} from 'react-native'
import { THEME_SECONDARY_LIGHT } from '../../utils/constants/colors'

const PROFILE_IMAGE_SIZE = 45

export default StyleSheet.create({
    body: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        // borderBottomWidth: 1,
        // borderBottomColor: '#eee'
    },
    profileImageWrapper: {
        backgroundColor: THEME_SECONDARY_LIGHT,
        borderRadius: 50,
        overflow: 'hidden',
        width: PROFILE_IMAGE_SIZE,
        height: PROFILE_IMAGE_SIZE
    },
    profileImage: {
        width: '100%',
        height: '100%',
        marginTop: 2
    },
})