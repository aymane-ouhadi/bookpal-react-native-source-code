import { View, Text } from 'react-native'
import React from 'react'
import subHeaderStyle from './subHeaderStyle'
import { Fonts } from '../../utils/styles/fonts'

const SubHeader = ({subtitle, seeAll}) => {
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
        <View>
            <Text style={[
                Fonts.PoppinsSemiBold,
                subHeaderStyle.seeAll
            ]}>
            {seeAll && 'See All'}
            </Text>
        </View>
    </View>
  )
}

export default SubHeader