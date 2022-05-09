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
        width: null,
        height: null,
        aspectRatio: BOOK_IMAGE_WRAPPER_WIDTH / BOOK_IMAGE_WRAPPER_HEIGHT,
        maxHeight: '100%',
        borderRadius: 17,
        resizeMode: 'contain'
    },
    bookTitleWrapper: {
        width: '100%',
        paddingVertical: 10,
    },
    bookTitle: {
        fontSize: 20,
        color: TEXT_PRIMARY
    },
    bookInfoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bookAvgRatingWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bookAvgRating: {
        color: TEXT_REVIEW,
        marginLeft: 4
    }
})