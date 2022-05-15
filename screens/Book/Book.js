import { View, ScrollView, Text, Image } from 'react-native'
import React from 'react'

import { Fonts } from '../../utils/styles/fonts'

import bookStyle from './bookStyle'
import Category from '../../components/category/Category'
import Stars from '../../components/stars/Stars'
import { TEXT_REVIEW } from '../../utils/constants/colors'

const Book = ({route}) => {
  
  const { book } = route.params

  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }

  return (
    <ScrollView style={bookStyle.body} showsVerticalScrollIndicator={false}>
      <View style={bookStyle.bookCoverBackGroundWrapper}>
        <Image 
          style={bookStyle.bookCoverBackGround}
          source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
          blurRadius={6}
        />
      </View>
      <View style={bookStyle.bookCoverWrapper}>
        <Image 
          style={bookStyle.bookCover}
          source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
        />
      </View>
      <View style={bookStyle.topInfo}>
        <Text style={[
          Fonts.PoppinsBold,
          bookStyle.bookTitle
        ]}>
          {book.volumeInfo.title}
        </Text>
        <Text style={[
          Fonts.PoppinsRegular,
          bookStyle.bookAuthor
        ]}>
          by {book.volumeInfo.authors[0]}
        </Text>
        <View style={bookStyle.categoriesWrapper}>
          {
            book.volumeInfo.categories.map((bookCategory) => (
              <Category style={{ marginBottom: 5 }} categoryName={bookCategory}/>
            ))
          }
        </View>
        <View style={bookStyle.reviewWrapper}>
          <Stars score={Math.floor(book.volumeInfo.averageRating)} />
          
          <Text style={[
                Fonts.PoppinsSemiBold,
                {color: TEXT_REVIEW},
                bookStyle.score
            ]}>
                {book.volumeInfo.averageRating}
            </Text>
            <Text style={[
                Fonts.PoppinsSemiBold,
                bookStyle.score
            ]}>
                /
            </Text>
            <Text style={[
                Fonts.PoppinsSemiBold,
                bookStyle.score
            ]}>
                {nFormatter(book.volumeInfo.ratingsCount, 1)} {book.volumeInfo.ratingsCount === 1 ? 'review' : 'reviews'}
            </Text>
        </View>
      </View>
      <View>
        <Text style={[
          bookStyle.bookHeader,
          Fonts.PoppinsBold
        ]}>
          Description
        </Text>
        <Text style={[
          bookStyle.bookDescription,
          Fonts.PoppinsRegular
        ]}>
          {book.volumeInfo.description}
        </Text>
      </View>
    </ScrollView>
  )
}

export default Book