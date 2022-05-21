import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Fonts } from '../../utils/styles/fonts'

import { testBooks, testReviews } from '../../utils/constants/tests'
import bookStyle from './bookStyle'
import Category from '../../components/category/Category'
import Stars from '../../components/stars/Stars'
import { TEXT_REVIEW, THEME_SECONDARY_LIGHT } from '../../utils/constants/colors'
import nFormatter from '../../utils/custom/nFormatter'
import ReviewForm from '../../components/reviewsForm/ReviewForm'
import ReviewsList from '../../components/reviewsList/ReviewsList'
import RecommendedBookCard from '../../components/recommendedBookCard/RecommendedBookCard'

const Book = ({navigation, route}) => {
  
  const {book} = route.params

  const [reviews, setReviews] = useState([])
  const [isInFavorites, setIsInFavorites] = useState(false)
  const [isInReadLater, setIsInReadLater] = useState(false)

  useEffect(() => {
      const fetchReviews = async () => {
          try {
              setReviews(testReviews)
          } catch (error) {
              throw error
          }
      }
      fetchReviews()
  }, [])

  const handleFavoriteToggle = () => {
    setIsInFavorites((oldState) => !oldState)
  }

  const handleReadLaterToggle = () => {
    setIsInReadLater((oldState) => !oldState)
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
          {book.volumeInfo.title} {book.volumeInfo?.subtitle ? `: ${book.volumeInfo?.subtitle}` : null}
        </Text>
        <Text style={[
          Fonts.PoppinsRegular,
          bookStyle.bookAuthor
        ]}>
          by {book.volumeInfo.authors[0]}
        </Text>
        <View style={bookStyle.categoriesWrapper}>
          {
            book.volumeInfo.categories.map((bookCategory, index) => (
              <Category key={index} style={{ marginBottom: 5 }} categoryName={bookCategory}/>
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
              Fonts.PoppinsRegular,
              bookStyle.score
          ]}>
              /
          </Text>
          <Text style={[
              Fonts.PoppinsRegular,
              bookStyle.score
          ]}>
              {nFormatter(book.volumeInfo.ratingsCount, 1)} {book.volumeInfo.ratingsCount === 1 ? 'review' : 'reviews'}
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
          <TouchableOpacity style={isInFavorites ? bookStyle.actionWrapperHighlighted : bookStyle.actionWrapper} onPress={handleFavoriteToggle}>
            <AntDesign
              name='hearto'
              size={14}
              style={{ marginRight: 7 }}
              color={isInFavorites ? '#fff' : THEME_SECONDARY_LIGHT}
            />
            <Text style={[
              Fonts.PoppinsRegular,
              isInFavorites ? bookStyle.actionHighlighted : bookStyle.action
            ]}>
              {isInFavorites ? 'Remove From Favorites' : 'Add To Favorites'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={isInReadLater ? bookStyle.actionWrapperHighlighted : bookStyle.actionWrapper} onPress={handleReadLaterToggle}>
            <AntDesign
              name='clockcircleo'
              size={14}
              style={{ marginRight: 7 }}
              color={isInReadLater ? '#fff' : THEME_SECONDARY_LIGHT}
            />
            <Text style={[
              Fonts.PoppinsRegular,
              isInReadLater ? bookStyle.actionHighlighted : bookStyle.action
            ]}>
              {isInReadLater ? 'Remove From Read Later' : 'Read Later'}
            </Text>
          </TouchableOpacity>
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
        <Text style={[
          bookStyle.bookHeader,
          Fonts.PoppinsBold
        ]}>
          Other Information
        </Text>
        {/* Publisher */}
        <View style={bookStyle.bookExtraInfoWrapper}>
          <Text style={[
            bookStyle.bookExtraInfo,
            Fonts.PoppinsRegular
          ]}>
            <AntDesign
              name='book'
              style={bookStyle.bookExtraInfoIcon}
              size={17}
            />
          </Text>
          <Text style={[
            bookStyle.bookExtraInfoLabel,
            Fonts.PoppinsSemiBold
          ]}>Publisher :</Text>
          <Text style={[
            bookStyle.bookExtraInfo,
            Fonts.PoppinsRegular
          ]}>{book.volumeInfo.publisher}</Text>
        </View>
        {/* Publishing Date */}
        <View style={bookStyle.bookExtraInfoWrapper}>
          <Text style={[
            bookStyle.bookExtraInfo,
            Fonts.PoppinsRegular
          ]}>
            <Fontisto
              name='date'
              style={bookStyle.bookExtraInfoIcon}
              size={15}
            />
          </Text>
          <Text style={[
            bookStyle.bookExtraInfoLabel,
            Fonts.PoppinsSemiBold
          ]}>Published Date :</Text>
          <Text style={[
            bookStyle.bookExtraInfo,
            Fonts.PoppinsRegular
          ]}>{book.volumeInfo.publishedDate}</Text>
        </View>
        {/* Number of pages */}
        <View style={bookStyle.bookExtraInfoWrapper}>
          <Text style={[
            bookStyle.bookExtraInfo,
            Fonts.PoppinsRegular
          ]}>
            <Ionicons
              name='book-outline'
              style={bookStyle.bookExtraInfoIcon}
              size={17}
            />
          </Text>
          <Text style={[
            bookStyle.bookExtraInfoLabel,
            Fonts.PoppinsSemiBold
          ]}>Pages :</Text>
          <Text style={[
            bookStyle.bookExtraInfo,
            Fonts.PoppinsRegular
          ]}>{book.volumeInfo.pageCount}</Text>
        </View>
        {/* Number of pages */}
        <View style={bookStyle.bookExtraInfoWrapper}>
          <Text style={[
            bookStyle.bookExtraInfo,
            Fonts.PoppinsRegular
          ]}>
            <Ionicons
              name='language'
              style={bookStyle.bookExtraInfoIcon}
              size={17}
            />
          </Text>
          <Text style={[
            bookStyle.bookExtraInfoLabel,
            Fonts.PoppinsSemiBold
          ]}>Language :</Text>
          <Text style={[
            bookStyle.bookExtraInfo,
            Fonts.PoppinsRegular
          ]}>{book.volumeInfo.language.toUpperCase()}</Text>
        </View>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={[
          Fonts.PoppinsBold,
          bookStyle.bookHeader,
          {marginBottom: 0}
        ]}>
          Similar Books
        </Text>
        <ScrollView
          style={{ 
            display: 'flex', 
            flexDirection: 'row',
          }} 
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            testBooks.map((book, index) => (
              <RecommendedBookCard key={index} book={book} navigation={navigation}/>
            )) 
          }
        </ScrollView>
      </View>
      <View>
        <Text style={[
          bookStyle.bookHeader,
          Fonts.PoppinsBold
        ]}>
          Reviews
        </Text>
        <ReviewForm addReview={(review) => { setReviews((oldReviews) => [review, ...oldReviews]) } }/>
        <ReviewsList reviews={reviews}/>
      </View>
    </ScrollView>
  )
}

export default Book