import { View, Text } from 'react-native'
import React from 'react'

import { Fonts } from '../../utils/styles/fonts'
import categoryStyle from './categoryStyle'


const Category = ({style, categoryName}) => {
  return (
    <View style={{...style ,...categoryStyle.categoryWrapper }}>
      <Text style={[
        Fonts.PoppinsSemiBold,
        categoryStyle.category
      ]}>{categoryName}</Text>
    </View>
  )
}

export default Category