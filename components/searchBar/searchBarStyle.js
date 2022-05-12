import { StyleSheet } from 'react-native'
import {Dimensions} from 'react-native'


//Window Size
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const HEIGHT = 60

export default StyleSheet.create({
    body: {
        zIndex: 1000,
    },
    header: {
        height: HEIGHT,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    headerInner: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon: {
        padding: 7,
        borderRadius: 20
    },
    inputBox: {
        height: HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        width: width - 100
    },
    backIcon: {
        marginRight: 7,
        padding: 7,
        borderRadius: 20
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 15,
    },
    content: {
        width: '100%',
        height: height,
        zIndex: 999,
        // backgroundColor: '#ddd'
    },
    contentInner: {
        flex: 1,
        // paddingTop: 50,
    },
    // separator: {
    //     marginTop: 40,
    //     height: 1,
    //     backgroundColor: '#000'

    // },
    imagePlaceholderContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '-50%',
    },
    imagePlaceholder: {
        width: 150,
        height: 113,
        alignSelf: 'center'
    },
    imagePlaceholderText: {
        textAlign: 'center',
        color: 'gray',
        marginTop: 5
    },
})