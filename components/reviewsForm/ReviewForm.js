import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Fonts } from '../../utils/styles/fonts'
import { TEXT_PRIMARY } from '../../utils/constants/colors'
import Axios from 'axios'
import { API_URL } from '../../utils/constants/backend'
import { AuthContext } from '../../context/Auth/AuthContext'

import reviewFormStyle from './reviewFormStyle'

const ReviewForm = ({ bookISBN, addReview }) => {

    const [content, setContent] = useState('')  
    const [state, setState] = useContext(AuthContext) 

    //Header object for the Axios Request
    const headers = {
        'Authorization': `Bearer ${state.idToken}`
    }

    const handleSubmit = async () => {
        if(content !== ''){
            try {
                await Axios.post(`${API_URL}/review/create`, 
                {
                    isbn: bookISBN,
                    content: content.trim(),
                },
                {headers: headers}
                )
                addReview({
                    uid: '7DhCIsnAJZUWmAjy4SaCFHZQpLQ2',
                    isbn: 'test_isbn',
                    content: content.trim(),
                    createdAt: Date.now()
                })
                setContent('')
            } catch (error) {
                throw error
            }
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