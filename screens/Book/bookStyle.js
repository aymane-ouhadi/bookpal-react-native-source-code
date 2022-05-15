import { StyleSheet } from 'react-native'
import { TEXT_PRIMARY } from '../../utils/constants/colors'

const ASPECT_RATIO = 200/300
const COVER_HEIGHT = 300

export default StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    bookCoverBackGroundWrapper: {
        height: 270,
        width: '100%',
        position: 'absolute',
        top: 0
    },
    bookCoverBackGround: {
        height: '100%',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    bookCoverWrapper: {
        marginTop: 60,
        width: COVER_HEIGHT * ASPECT_RATIO,
        height: COVER_HEIGHT,
        // borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 20
    },
    bookCover: {
        width: '100%',
        height: '100%',
    },
    topInfo: {
        marginTop: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    bookTitle: {
        fontSize: 22,
        textAlign: 'center',
        color: TEXT_PRIMARY
    },
    bookAuthor: {
        marginVertical: 5,
        fontSize: 14,
        textAlign: 'center',
    },
    bookHeader: {
        fontSize: 21,
        marginVertical: 14,
        color: TEXT_PRIMARY
    },
    bookDescription: {
        textAlign: 'justify'
    },
    categoriesWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginVertical: 15,
    },
    reviewWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    score: {
        marginHorizontal: 3
    }
})