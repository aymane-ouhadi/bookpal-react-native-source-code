import { View, Text, Image } from 'react-native'
import React from 'react'

import smallBookCardStyle from './smallBookCardStyle'
import { Fonts } from '../../utils/styles/fonts'
import Category from '../category/Category'

const SmallBookCard = ({book}) => {
  return (
    <View style={smallBookCardStyle.smallBookCardWrapper}>
      <View style={smallBookCardStyle.smallBookCardLeft}>
        <Image
          style={smallBookCardStyle.bookImage}
          source={{ 
            uri: book.volumeInfo.imageLinks.thumbnail 
          }}
        />
      </View>
      <View style={smallBookCardStyle.smallBookCardMiddle}>
        <View style={smallBookCardStyle.smallBookCardMiddleTop}>
          <Text style={[
            Fonts.PoppinsSemiBold,
            smallBookCardStyle.bookTitle
          ]}>
            {book.volumeInfo.title}
          </Text>
          <Text style={[
            Fonts.PoppinsRegular,
            smallBookCardStyle.bookAuthor
          ]}>
            by {book.volumeInfo.authors[0]}
          </Text>
        </View>
        <Category categoryName={book.volumeInfo.categories[0]}/>
        <Text style={[
          Fonts.PoppinsRegular,
          smallBookCardStyle.bookDescription
        ]}>
          {
            book.volumeInfo.description > 90 
            ?
            book.volumeInfo.description
            :
            book.volumeInfo.description.substring(0, 90) + '...'
          }
        </Text>
      </View>
      {/* <View style={smallBookCardStyle.smallBookCardRight}>

      </View> */}
    </View>
  )
}

export default SmallBookCard