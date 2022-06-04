import { View, Text, Image} from 'react-native'
import React from 'react'
import moment from 'moment'

import { Fonts } from '../../utils/styles/fonts'

import reviewCardStyle from './reviewCardStyle'

const ReviewCard = ({review}) => {
  
    return (
    <View style={reviewCardStyle.body}>
        <View>
            <View style={reviewCardStyle.profileImageWrapper}>
                <Image
                    source={require('../../assets/images/avatar_female.png')}
                    style={reviewCardStyle.profileImage}
                />
            </View>
        </View>
        <View style={{ flex: 1 }}>
            <View style={reviewCardStyle.reviewTop}>
                <Text style={[
                    Fonts.PoppinsSemiBold,
                    reviewCardStyle.name
                ]}>
                    {}
                </Text>
                <Text style={[
                    Fonts.PoppinsRegular,
                    reviewCardStyle.createdAt
                ]}>
                   {moment(review.createdAt).fromNow()}
                   {/* {myDate.getDay()} */}
                </Text>
            </View>
            <View style={reviewCardStyle.reviewBottom}>
                <Text style={[
                    Fonts.PoppinsRegular,
                    reviewCardStyle.description
                ]}>
                    {/* It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. */}
                    {review.content}
                </Text>
            </View>
        </View>
    </View>
  )
}

export default ReviewCard