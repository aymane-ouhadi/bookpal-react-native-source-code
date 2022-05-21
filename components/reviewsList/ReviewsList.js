import { View } from 'react-native'
import React from 'react'

import ReviewCard from '../reviewCard/ReviewCard'

const ReviewsList = ({reviews}) => {

    const renderItem = ({item}) => <ReviewCard book={item}/>

    return (
    <View>
        {reviews.map((review, index) => (
            <ReviewCard key={index} review={review}/>
        ))}
    </View>
    )
}

export default ReviewsList