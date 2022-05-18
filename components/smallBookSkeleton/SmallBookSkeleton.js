import { View, Text } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import smallBookSkeletonStyle from './smallBookSkeletonStyle'


const SmallBookSkeleton = () => {
  
  return (
    <SkeletonPlaceholder >
      <View style={smallBookSkeletonStyle.smallBookCardWrapper}>
        <View style={smallBookSkeletonStyle.smallBookCardLeft}>
        </View>
        <View style={smallBookSkeletonStyle.smallBookCardMiddle}>
          <View style={smallBookSkeletonStyle.smallBookCardMiddleTop}>
            <View style={smallBookSkeletonStyle.bookTitle}>
            </View>
            <View style={smallBookSkeletonStyle.bookAuthor}>
            </View>
          </View>
          <View style={smallBookSkeletonStyle.bookCategory}>
          </View>
          <View style={smallBookSkeletonStyle.bookDescription}>
          </View>
          <View style={smallBookSkeletonStyle.bookDescription}>
          </View>
          <View style={smallBookSkeletonStyle.bookDescription}>
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  )
}

export default SmallBookSkeleton