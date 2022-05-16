import { StyleSheet } from 'react-native'
import { TEXT_PRIMARY, THEME_SECONDARY_LIGHT } from '../../utils/constants/colors'

const PROFILE_IMAGE_SIZE = 30

export default StyleSheet.create({
    body: {
      marginVertical: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    profileImageWrapper: {
        backgroundColor: THEME_SECONDARY_LIGHT,
        borderRadius: 50,
        overflow: 'hidden',
        width: PROFILE_IMAGE_SIZE,
        height: PROFILE_IMAGE_SIZE,
        marginRight: 15,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        marginTop: 2
    },
    reviewTop: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewBottom: {
        marginTop: 10,
    },  
    name: {
        color: TEXT_PRIMARY
    },
    createdAt: {
        fontSize: 12
    },
    description: {
        textAlign: 'justify',
        color: TEXT_PRIMARY
    },
})