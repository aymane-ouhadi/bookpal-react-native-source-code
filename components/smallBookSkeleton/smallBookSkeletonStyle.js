import { StyleSheet} from 'react-native'

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
        marginRight: 15,
        borderRadius: 17
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
    bookTitle: {
        marginRight: 15,
        width: 120,
        height: 20,
        borderRadius: 15,
    },
    bookAuthor: {
        width: 80,
        height: 20,
        borderRadius: 15,
    },
    bookCategory: {
        width: 80,
        height: 20,
        borderRadius: 15,
    },
    bookDescription: {
        width: '100%',
        height: 20,
        borderRadius: 15
    },
    smallBookCardRight: {

    }
})