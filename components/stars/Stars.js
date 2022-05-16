import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

import starsStyle from './starsStyle'
import { TEXT_REVIEW } from '../../utils/constants/colors';
import { Fonts } from '../../utils/styles/fonts';

const Stars = ({score}) => {

    const SIZE = 17

    return (
        <View style={starsStyle.body}>
        {
            Array(5).fill(0).map((_, index) => (
                index < score
                ? 
                    <View style={starsStyle.star} key={index}>
                        <AntDesign 
                            name='star'
                            color={TEXT_REVIEW}
                            size={SIZE}
                        />
                    </View>
                :
                    <View style={starsStyle.star} key={index}>
                        <AntDesign 
                            name='staro'
                            color={TEXT_REVIEW}
                            size={SIZE}
                        />
                    </View>
            ))
        }
        </View>
    )
}

export default Stars