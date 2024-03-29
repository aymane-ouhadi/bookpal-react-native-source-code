import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import subHeaderStyle from './subHeaderStyle'
import { Fonts } from '../../utils/styles/fonts'

const SubHeader = ({navigation, to, subtitle, seeAll}) => {

    const handlePress = () => {
        if(navigation && to) navigation.navigate(to)
    }

  return (
    <View style={subHeaderStyle.subTitleWrapper}>
        <View>
            <Text style={[
                Fonts.PoppinsBold,
                subHeaderStyle.subTitle
            ]}>
            {subtitle}
            </Text>
        </View>
        <TouchableOpacity onPress={handlePress}>
            <Text style={[
                Fonts.PoppinsSemiBold,
                subHeaderStyle.seeAll
            ]}>
            {seeAll && 'See All'}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default SubHeader