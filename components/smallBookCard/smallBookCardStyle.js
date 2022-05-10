import { StyleSheet} from 'react-native'
import { TEXT_PRIMARY, THEME_SECONDARY, THEME_SECONDARY_LIGHT } from '../../utils/constants/colors'

const BOOK_IMAGE_WRAPPER_WIDTH = 100
const BOOK_IMAGE_WRAPPER_HEIGHT = 150

export default StyleSheet.create({
    smallBookCardWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        marginVertical: 20,
    },
    smallBookCardLeft: {
        width: BOOK_IMAGE_WRAPPER_WIDTH,
        height: BOOK_IMAGE_WRAPPER_HEIGHT,
        marginRight: 15
    },
    bookImage: {
        width: null,
        height: null,
        aspectRatio: BOOK_IMAGE_WRAPPER_WIDTH / BOOK_IMAGE_WRAPPER_HEIGHT,
        maxHeight: '100%',
        borderRadius: 10,
        resizeMode: 'contain'
    },
    smallBookCardMiddle: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        // backgroundColor: '#777'
    },
    smallBookCardMiddleTop: {
    //   flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    //   backgroundColor: '#aaa'
    },
    bookAuthor: {
        // flex: 1,
        color: TEXT_PRIMARY
    },
    bookTitle: {
        // flex: 1,
        marginRight: 15,
        fontSize: 17,
        color: TEXT_PRIMARY,
    },
    bookDescription: {
        color: TEXT_PRIMARY
    },
    smallBookCardRight: {

    }
})