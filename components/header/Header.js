import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import headerStyle from './headerStyle'
import Svg, { G, Path } from 'react-native-svg'
import AuthAPI from '@react-native-firebase/auth'
import { THEME_PRIMARY, THEME_SECONDARY_LIGHT } from '../../utils/constants/colors'
import { AuthContext } from '../../context/Auth/AuthContext'
import images from '../../assets/images/images'

const Header = () => {

  //Initializing the states
  const [{user}, setState] = useContext(AuthContext)

  const handleProfilePress = async () => {
    await AuthAPI().signOut()
  }

  return (
    <View style={headerStyle.body}>
      {/* <Svg width={50} height={25} viewBox="0 0 351.000000 153.000000" preserveAspectRatio="xMidYMid meet">
        <G 
          transform="translate(0.000000,153.000000) scale(0.100000,-0.100000)"
          fill={THEME_SECONDARY_LIGHT} 
          stroke="none"
        >
          <Path 
            d="M805 1370 c-120 -25 -237 -91 -331 -186 -57 -57 -82 -93 -122 -175 l-51 -103 -60 3 c-75 3 -124 -12 -151 -46 -17 -21 -20 -41 -20 -115 0 -141 24 -168 154 -168 l73 0 21 -60 c67 -197 220 -351 418 -421 83 -30 264 -37 359 -15 236 56 435 252 488 481 18 79 40 118 80 149 97 74 272 15 291 -99 45 -265 262 -488 526 -537 30 -6 102 -8 160 -6 175 8 309 67 430 189 76 78 126 157 157 248 l22 66 73 6 c40 3 81 9 91 13 33 15 47 60 47 153 0 129 -22 153 -148 162 l-73 6 -24 59 c-70 173 -212 307 -397 374 -67 25 -85 27 -218 27 -140 -1 -148 -2 -226 -33 -205 -82 -355 -249 -409 -457 -8 -32 -15 -67 -15 -77 0 -23 -2 -23 -53 4 -27 13 -68 23 -113 26 -62 4 -80 1 -128 -21 -31 -14 -56 -23 -56 -19 0 4 -7 37 -15 74 -49 234 -249 437 -485 492 -69 17 -227 19 -295 6z m291 -101 c110 -34 164 -67 245 -148 179 -180 219 -420 107 -651 -38 -79 -160 -205 -233 -242 -235 -119 -490 -80 -674 101 l-66 66 163 5 c130 4 165 8 172 20 14 22 12 47 -6 64 -13 13 -45 16 -199 16 l-184 0 -22 70 c-34 112 -46 105 190 108 130 1 209 6 218 13 19 17 16 57 -6 69 -12 6 -101 10 -220 10 -186 0 -201 1 -201 18 0 28 30 135 42 149 8 10 55 13 192 13 128 0 186 4 194 12 18 18 14 56 -7 68 -11 5 -86 10 -170 10 -96 0 -151 4 -151 10 0 22 129 137 190 170 136 72 293 90 426 49z m1639 6 c211 -54 378 -222 421 -424 45 -214 -26 -422 -191 -561 -221 -185 -550 -171 -756 32 -32 32 -59 62 -59 68 0 6 57 10 152 10 127 0 154 3 170 17 24 22 23 49 -4 67 -18 13 -56 16 -205 16 l-182 0 -16 52 c-8 28 -15 69 -15 90 l0 38 209 0 c227 0 240 3 227 54 -8 34 -35 38 -259 34 l-189 -3 7 43 c3 24 13 65 21 93 l15 49 192 0 c199 0 217 3 217 41 0 43 -23 49 -191 49 -93 0 -159 4 -159 9 0 6 29 39 65 75 68 68 166 125 260 151 68 18 198 18 270 0z m-2450 -532 l-4 -68 -58 0 -58 0 -3 68 -3 67 65 0 65 0 -4 -67z m3083 0 l-3 -68 -50 0 -50 0 -3 68 -3 67 56 0 56 0 -3 -67z"
          />
        </G>
      </Svg> */}
      <Image
        style={headerStyle.logo}
        source={images.placehoder.logo}
      />

      <TouchableOpacity 
        style={headerStyle.profileImageWrapper} 
        onPress={handleProfilePress}
      >
          <Image
            source={user?.gender === 'male' ? images.avatar.male : images.avatar.female}
            style={headerStyle.profileImage}
          />
      </TouchableOpacity>
    </View>
  )
}

export default Header