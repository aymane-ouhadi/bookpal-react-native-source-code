import { StyleSheet } from 'react-native'
import { TEXT_PRIMARY } from '../../utils/constants/colors'

export default StyleSheet.create({
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: TEXT_PRIMARY,
    },
    subTitle: {
        marginTop: 10,
        textAlign: 'center'
    }
})