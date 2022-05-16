import { StyleSheet } from 'react-native'
import { THEME_SECONDARY_LIGHT } from '../../utils/constants/colors'

const PROFILE_IMAGE_SIZE = 30

export default StyleSheet.create({
    body: {
    //   minHeight: 100,
    //   maxWidth: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 10,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    //   backgroundColor: '#ddd'
    },
    reviewLeft: {
        flex: 1,
        // height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        // borderWidth: 1,
    },
    profileImageWrapper: {
        backgroundColor: THEME_SECONDARY_LIGHT,
        borderRadius: 50,
        overflow: 'hidden',
        width: PROFILE_IMAGE_SIZE,
        height: PROFILE_IMAGE_SIZE,
        marginRight: 15
    },
    profileImage: {
        width: '100%',
        height: '100%',
        marginTop: 2
    },
    reviewInputWrapper: {
        flex: 1,
        paddingRight: 10,
        paddingTop: 0,
        // backgroundColor: '#eee'
    },
    reviewInput: {
        // height: '100%',
        textAlignVertical: 'top',
        paddingBottom: 5,
        // backgroundColor: '#ddd',
        paddingTop: 0
    },
    reviewRight: {
        // flex:1,
        paddingHorizontal: 7,
        paddingTop: 10,
        // borderWidth: 1
    }
})