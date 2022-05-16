import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

import ReviewCard from '../reviewCard/ReviewCard'

const ReviewsList = ({reviews}) => {

    const renderItem = ({item}) => <ReviewCard book={item}/>

    return (
    <View>
        {reviews.map((review, index) => (
            <ReviewCard key={index} review={review}/>
        ))}
        {/* <FlatList 
            data={testReviews}
            renderItem={renderItem}
            keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
            scrollEnabled={false}
        /> */}
    </View>
    )
}

export default ReviewsList