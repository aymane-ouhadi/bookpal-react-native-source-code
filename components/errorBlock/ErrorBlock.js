import { View, Text } from 'react-native'
import React from 'react'

import { Fonts } from '../../utils/styles/fonts'

import { TEXT_ERROR } from '../../utils/constants/colors'

const ErrorBlock = ({message}) => {
  return (
    <View style={{ marginVertical: 15, marginHorizontal: 10,}}>
        <Text style={[
            Fonts.PoppinsRegular, 
            { color: TEXT_ERROR }
        ]}>
            {message}
        </Text>
    </View>
  )
}

export default ErrorBlock