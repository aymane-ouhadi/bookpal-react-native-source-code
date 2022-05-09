import { StyleSheet} from 'react-native'
import { TEXT_PRIMARY, THEME_SECONDARY, THEME_SECONDARY_LIGHT } from '../../utils/constants/colors'


export default StyleSheet.create({
    subTitleWrapper: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subTitle: {
        fontSize: 25,
        color: TEXT_PRIMARY
    },
    seeAll: {
        fontSize: 15,
        color: THEME_SECONDARY_LIGHT
    }
})