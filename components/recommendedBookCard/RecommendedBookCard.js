import { View, Text, Image } from 'react-native'
import React from 'react'
import recommendedBookCardStyle from './recommendedBookCardStyle'
import { Fonts } from '../../utils/styles/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TEXT_REVIEW } from '../../utils/constants/colors'

const RecommendedBookCard = ({book}) => {
  return (
    <View style={recommendedBookCardStyle.body}>
      <View style={recommendedBookCardStyle.bookImageWrapper}>
          <Image
            style={recommendedBookCardStyle.bookImage}
            source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
          />
      </View>
      <View style={recommendedBookCardStyle.bookTitleWrapper}>
          <Text style={[
            Fonts.PoppinsSemiBold,
            recommendedBookCardStyle.bookTitle
          ]}
          >
            {book.volumeInfo.title}
          </Text>
      </View>
      <View style={recommendedBookCardStyle.bookInfoWrapper}>
          <View style={recommendedBookCardStyle.bookAuthorWrapper}>
            <Text style={[
              Fonts.PoppinsRegular,
              recommendedBookCardStyle.bookAuthor
            ]}>by {book.volumeInfo.authors[0]}</Text>
          </View>
          <View style={recommendedBookCardStyle.bookAvgRatingWrapper}>
            <AntDesign
              name='star'
              color={TEXT_REVIEW}
              size={14}
            />
            <Text style={[
              Fonts.PoppinsSemiBold,
              recommendedBookCardStyle.bookAvgRating
            ]}>
              {book.volumeInfo.averageRating}
            </Text>
          </View>
      </View>
    </View>
  )
}

export default RecommendedBookCard