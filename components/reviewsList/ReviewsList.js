import { View, ActivityIndicator } from 'react-native'
import React from 'react'

import ReviewCard from '../reviewCard/ReviewCard'
import { TEXT_PRIMARY } from '../../utils/constants/colors'

const ReviewsList = ({reviews, isFetching}) => {

    const renderItem = ({item}) => <ReviewCard book={item}/>

    return (
    <View>
        {
            isFetching 
            ?
                <ActivityIndicator 
                    color={TEXT_PRIMARY}
                    size={40}
                />
            :
                reviews.map((review, index) => (
                    <ReviewCard key={index} review={review}/>
                ))
        }
    </View>
    )
}

export default ReviewsList