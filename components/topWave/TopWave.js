import { StyleSheet, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import React from 'react'

import topWaveStyle from './topWaveStyle'
import { THEME_PRIMARY } from '../../utils/constants/colors'

const TopWave = () => {
  return (
    <View style={topWaveStyle.loginTopWrapper}>
        <Svg
          viewBox='0 0 1440 240'
          preserveAspectRatio='none'
          width={'100%'}
          height={100}
          style={{ 
            position: 'absolute',
            top: 20,
          }}
        >
          <Path
            fill={THEME_PRIMARY+'59'}
            d="M0,224L80,213.3C160,203,320,181,480,149.3C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
        <Svg
          viewBox='0 0 1440 240'
          preserveAspectRatio='none'
          width={'100%'}
          height={100}
        >
          <Path
            fill={THEME_PRIMARY}
            d="M0,224L80,213.3C160,203,320,181,480,149.3C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
      </View>
  )
}

export default TopWave