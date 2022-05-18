import { StyleSheet } from 'react-native'
import { TEXT_PRIMARY, TEXT_REVIEW } from '../../utils/constants/colors'

const BOOK_IMAGE_WRAPPER_WIDTH = 175
const BOOK_IMAGE_WRAPPER_HEIGHT = 240

export default StyleSheet.create({
    body: {
        marginRight: 40,
        marginTop: 20,
    },
    bookImageWrapper: {
        width: BOOK_IMAGE_WRAPPER_WIDTH,
        height: BOOK_IMAGE_WRAPPER_HEIGHT,
        borderRadius: 17,
    },
    bookImage: {
        width: BOOK_IMAGE_WRAPPER_WIDTH,
        height: BOOK_IMAGE_WRAPPER_HEIGHT,
        maxHeight: '100%',
        borderRadius: 17,
    },
    bookTitleWrapper: {
        marginTop: 10,
        width: '100%'
    },
    bookTitle: {
        width: '100%',
        height: 25,
        borderRadius: 10,
    },
    bookInfoWrapper: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bookAuthorWrapper: {
        width: 90,
        height: 20,
        borderRadius: 10
    },
    bookAvgRatingWrapper: {
        width: 50,
        height: 20,
        borderRadius: 10
    }
})