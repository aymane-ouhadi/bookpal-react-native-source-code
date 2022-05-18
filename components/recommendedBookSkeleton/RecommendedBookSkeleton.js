import { View, Text } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

import recommendBookSkeletonStyle from './recommendBookSkeletonStyle'

const RecommendedBookSkeleton = () => {
  
    return (
        <SkeletonPlaceholder speed={1000}>
            <View style={recommendBookSkeletonStyle.body}>
                <View style={recommendBookSkeletonStyle.bookImageWrapper} >
                    <View
                        style={recommendBookSkeletonStyle.bookImage}
                    />
                </View>
                <View style={recommendBookSkeletonStyle.bookTitleWrapper}>
                    <View style={recommendBookSkeletonStyle.bookTitle}>
                    </View>
                </View>
                <View style={recommendBookSkeletonStyle.bookInfoWrapper}>
                    <View style={recommendBookSkeletonStyle.bookAuthorWrapper}>
                    </View>
                    <View style={recommendBookSkeletonStyle.bookAvgRatingWrapper}>
                    </View>
                </View> 
            </View>
        </SkeletonPlaceholder>
  )
}

export default RecommendedBookSkeleton