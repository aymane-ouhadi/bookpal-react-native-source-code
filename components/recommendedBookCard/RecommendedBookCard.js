import { View, TouchableWithoutFeedback, Text, Image } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import { Fonts } from '../../utils/styles/fonts'
import { TEXT_REVIEW } from '../../utils/constants/colors'
import cutText from '../../utils/custom/cutText'

import recommendedBookCardStyle from './recommendedBookCardStyle'
import Images from '../../assets/images/images'

const RecommendedBookCard = ({book, navigation}) => {

  const handlePress = () => {
    if(navigation?.navigate){
      navigation.push('Book', {
        book: book
      })
    }
  }

  // return (
  //   <TouchableWithoutFeedback onPress={handlePress}>
  //     <View style={recommendedBookCardStyle.body}>
  //       {/* <View style={recommendedBookCardStyle.bookImageWrapper}>
  //           <Image
  //             style={recommendedBookCardStyle.bookImage}
  //             source={
  //               book?.volumeInfo?.imageLinks?.thumbnail ?
  //               { uri: (book?.volumeInfo?.imageLinks?.thumbnail || Images.empty_state.book )}
  //               :
  //               Images.empty_state.book 
  //             }
  //           />
  //       </View> */}
  //       <Text>Book</Text>
  //     </View>
  //   </TouchableWithoutFeedback>
  // )
  // ============================ PROBLEMATIC ONE
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={recommendedBookCardStyle.body}>
        <View style={recommendedBookCardStyle.bookImageWrapper}>
            <Image
              style={recommendedBookCardStyle.bookImage}
              source={
                book?.volumeInfo?.imageLinks?.thumbnail ?
                { uri: (book?.volumeInfo?.imageLinks?.thumbnail || Images.empty_state.book )}
                :
                Images.empty_state.book 
              }
            />
        </View>
        <View style={recommendedBookCardStyle.bookTitleWrapper}>
            <Text style={[
              Fonts.PoppinsSemiBold,
              recommendedBookCardStyle.bookTitle
            ]}
            >
              {cutText(book?.volumeInfo?.title, 16)}
            </Text>
        </View>
        <View style={recommendedBookCardStyle.bookInfoWrapper}>
            <View style={recommendedBookCardStyle.bookAuthorWrapper}>
              <Text style={[
                Fonts.PoppinsRegular,
                recommendedBookCardStyle.bookAuthor
              ]}> by {cutText(book?.volumeInfo?.authors[0] ? book.volumeInfo.authors[0] : null, 9, 'Unknown')}
              </Text>
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
                {book?.volumeInfo?.averageRating ? book?.volumeInfo?.averageRating : 0}
              </Text>
            </View>
        </View> 
      </View>
    </TouchableWithoutFeedback>
  )

}

export default RecommendedBookCard