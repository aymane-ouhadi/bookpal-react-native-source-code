import { StyleSheet } from 'react-native'
import { TEXT_PRIMARY, THEME_SECONDARY_LIGHT } from '../../utils/constants/colors'

const ASPECT_RATIO = 200/300
const COVER_HEIGHT = 300
const SIZE = 17

export default StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        overflow: 'visible'
    },
    bookCoverBackGroundWrapper: {
        height: 300,
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
        // borderBottomWidth: 1,
        // borderBottomColor: '#ddd',
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
    },
    bookExtraInfoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    bookExtraInfoLabel: {
        marginRight: 10,
        color: TEXT_PRIMARY
    }, 
    bookExtraInfo: {
        marginRight: 10,
    },
    bookExtraInfoIcon: {
        color: TEXT_PRIMARY
    },  
    actionWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: THEME_SECONDARY_LIGHT
    },
    actionWrapperHighlighted: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: THEME_SECONDARY_LIGHT,
        backgroundColor: THEME_SECONDARY_LIGHT
    },
    action: {
        color: THEME_SECONDARY_LIGHT
    },
    actionHighlighted: {
        color: '#fff'
    },
})