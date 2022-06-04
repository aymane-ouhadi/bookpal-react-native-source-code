import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import { Fonts } from '../../utils/styles/fonts'
import Category from '../category/Category'
import cutText from '../../utils/custom/cutText'

import smallBookCardStyle from './smallBookCardStyle'
import Images from '../../assets/images/images'

const SmallBookCard = ({navigation, book}) => {

  const handlePress = () => {
    navigation.navigate('Book', {
      book: book
    })
  }
  
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={smallBookCardStyle.smallBookCardWrapper}>
        <View style={smallBookCardStyle.smallBookCardLeft}>
          <Image
            style={smallBookCardStyle.bookImage}
            source={
              book?.volumeInfo?.imageLinks?.thumbnail ?
              { uri: (book?.volumeInfo?.imageLinks?.thumbnail || Images.empty_state.book )}
              :
              Images.empty_state.book
            }
          />
        </View>
        <View style={smallBookCardStyle.smallBookCardMiddle}>
          <View style={smallBookCardStyle.smallBookCardMiddleTop}>
            <Text style={[
              Fonts.PoppinsSemiBold,
              smallBookCardStyle.bookTitle
            ]}>
              {cutText(book?.volumeInfo?.title, 10)}
            </Text>
            <Text style={[
              Fonts.PoppinsRegular,
              smallBookCardStyle.bookAuthor
            ]}>
              by {cutText(book?.volumeInfo?.authors[0], 7)}
            </Text>
          </View>
          <View>
            <Category categoryName={book.volumeInfo.categories[0]}/>
          </View>
          <Text style={[
            Fonts.PoppinsRegular,
            smallBookCardStyle.bookDescription
          ]}>
            {cutText(book?.volumeInfo?.description, 105)}
          </Text>
        </View>
        {/* <View style={smallBookCardStyle.smallBookCardRight}>

        </View> */}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SmallBookCard