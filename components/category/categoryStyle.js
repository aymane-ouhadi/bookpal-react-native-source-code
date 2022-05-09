import { StyleSheet } from 'react-native';
import { TEXT_PRIMARY, THEME_SECONDARY_LIGHT, THEME_SECONDARY_LIGHTER } from '../../utils/constants/colors';

export default StyleSheet.create({
    categoryWrapper: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 100,
        backgroundColor: THEME_SECONDARY_LIGHTER,
        alignSelf: 'flex-start'
    },
    category: {
        color: THEME_SECONDARY_LIGHT
    }
})
