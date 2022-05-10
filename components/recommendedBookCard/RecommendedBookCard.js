import { View, Text, Image } from 'react-native'
import React from 'react'
import recommendedBookCardStyle from './recommendedBookCardStyle'
import { Fonts } from '../../utils/styles/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TEXT_REVIEW } from '../../utils/constants/colors'
import cutText from '../../utils/custom/cutText'

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
            {cutText(book.volumeInfo.title, 14)}
          </Text>
      </View>
      <View style={recommendedBookCardStyle.bookInfoWrapper}>
          <View style={recommendedBookCardStyle.bookAuthorWrapper}>
            <Text style={[
              Fonts.PoppinsRegular,
              recommendedBookCardStyle.bookAuthor
            ]}>by {cutText(book.volumeInfo.authors[0], 9)}</Text>
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