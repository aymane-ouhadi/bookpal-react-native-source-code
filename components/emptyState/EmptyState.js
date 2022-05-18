import { View, Text, Image } from 'react-native'
import React from 'react'
import emptyStateStyle from './emptyStateStyle'
import { Fonts } from '../../utils/styles/fonts'

const EmptyState = ({image, imageDimensions, title, titleSize, subTitle, subTitleSize, style}) => {
  return (
    <View style={[emptyStateStyle.body, style]}>
        <Image
            style={{ 
              width: imageDimensions.width,
              height: imageDimensions.height,
              ...emptyStateStyle.image
            }}
            // source={require(`../../assets/images/${image}`)}
            source={image}
        />
        <Text style={{ fontSize: titleSize, ...Fonts.PoppinsSemiBold,...emptyStateStyle.title }}>{title}</Text>
        {
            subTitle && <Text style={{ fontSize: subTitleSize, ...Fonts.PoppinsRegular,...emptyStateStyle.subTitle }}>{subTitle}</Text>
        }
      <Text></Text>
    </View>
  )
}

export default EmptyState