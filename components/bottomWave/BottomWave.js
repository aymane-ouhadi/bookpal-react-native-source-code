import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

import bottomWaveStyle from './bottomWaveStyle'
import { THEME_SECONDARY } from '../../utils/constants/colors'

const BottomWave = () => {
  return (
    <View style={bottomWaveStyle.loginBottomWrapper}>
        <Svg
          viewBox='0 0 1440 240'
          preserveAspectRatio='none'
          width={'100%'}
          height={100}
          style={{ 
            position: 'absolute',
            bottom: 20
           }}
        >
          <Path
            fill={THEME_SECONDARY+'59'}
            d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,58.7C1120,21,1280,11,1360,5.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </Svg>
        <Svg
          viewBox='0 0 1440 240'
          preserveAspectRatio='none'
          width={'100%'}
          height={100}
        >
          <Path
            
            fill={THEME_SECONDARY}
            d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,58.7C1120,21,1280,11,1360,5.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </Svg>
    </View>
  )
}

export default BottomWave