import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import reviewFormStyle from './reviewFormStyle'
import { Fonts } from '../../utils/styles/fonts'
import { TEXT_PRIMARY } from '../../utils/constants/colors'

const ReviewForm = ({ addReview }) => {

    const [content, setContent] = useState('')    

    const handleSubmit = () => {
        if(content !== ''){
            addReview({
                uid: '7DhCIsnAJZUWmAjy4SaCFHZQpLQ2',
                isbn: 'test_isbn',
                content: content.trim(),
                createdAt: Date.now()
            })
            setContent('')
        }
    }

    return (
    <View style={reviewFormStyle.body}>
        <View style={reviewFormStyle.reviewLeft}>
            <View style={reviewFormStyle.profileImageWrapper}>
                <Image
                source={require('../../assets/images/avatar_female.png')}
                style={reviewFormStyle.profileImage}
                />
            </View>
            <View style={reviewFormStyle.reviewInputWrapper} >
                <TextInput
                    style={[
                        Fonts.PoppinsRegular,
                        reviewFormStyle.reviewInput
                    ]} 
                    placeholder='Enter your review here ...'
                    value={content}
                    onChangeText={(value) => setContent(value)}
                    multiline
                />
            </View>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={reviewFormStyle.reviewRight}>
            <Ionicons 
                name='send'
                size={20}
                color={TEXT_PRIMARY}
            />
        </TouchableOpacity>
    </View>
    )
}

export default ReviewForm