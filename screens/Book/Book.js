import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AuthAPI from '@react-native-firebase/auth'

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
import { AuthContext } from '../../context/Auth/AuthContext'
import Axios from 'axios'
import { API_URL } from '../../utils/constants/backend'
import { getMultipleBooksByISBN } from '../../utils/api/GoogleBooksAPICalls'
import Images from '../../assets/images/images'
import RecommendedBookSkeleton from '../../components/recommendedBookSkeleton/RecommendedBookSkeleton'

const Book = ({navigation, route}) => {
  
  
  //Initializing states
  const [reviews, setReviews] = useState([])
  const [state, setState] = useContext(AuthContext)
  const [similarBooks, setSimilarBooks] = useState([])
  const [isFetchingSimilarBooks, setIsFetchingSimilarBooks] = useState(true)
  const [isFetchingReviews, setIsFetchingReviews] = useState(true)
  const [isDisabled, setIsDisabled] = useState(true)
  const [workingOnIt, setWorkingOnIt] = useState(false)
  
  //Book object
  const {book} = route.params

  //Header object for the Axios Request
  const headers = {
    'Authorization': `Bearer ${state.idToken}`
  }

  //Fetching functions
  const fetchReviews = async () => {
      try {
        const {data: {reviews}} = await Axios.get(`${API_URL}/book/${book.volumeInfo.ISBN}`)
        setReviews(reviews)
        setIsFetchingReviews(false)
      } catch (error) {
        throw error
      }
  }

  const fetchReadingLists = async () => {
    try {
      const {data: {readingLists: readLaterList}} = await Axios.get(`${API_URL}/user/readingLists?isRead=false`, {
        headers: headers
      })
      setState({...state, readLaterList})
      const {data: {readingLists: alreadyReadList}} = await Axios.get(`${API_URL}/user/readingLists?isRead=true`, {
        headers: headers
      })
      setState({...state, alreadyReadList})
    } catch (error) {
      throw error
    }
  }

  const fetchSimilarBooks = async () => {
    try {
      const {data: {recommendations}} = await Axios.post(
        `${API_URL}/book/array/get`,
        { 
          items: [book.volumeInfo.ISBN]
        }
      )
      console.log(recommendations)
      const books_array = await getMultipleBooksByISBN(...recommendations)
      setSimilarBooks(books_array)
      setIsFetchingSimilarBooks(false)
      setIsDisabled(false)
    } catch (error) {
      throw error
    }
  }
  
  //Handling Toggles
  const handleFavoriteToggle = async () => {
    try {
      setWorkingOnIt(true)
      setState({
        ...state, 
        user: {
          favorites: state.user?.favorites.includes(book.volumeInfo.ISBN) ?
            state.user?.favorites.filter((isbn) => isbn !== book.volumeInfo.ISBN)
          :
            [...state.user?.favorites, book.volumeInfo.ISBN]

        }
      })
      await Axios.post(
        `${API_URL}/user/toggleFavorite`,
        { isbn:  book.volumeInfo.ISBN },
        { headers: headers }
      )
      setWorkingOnIt(false)
    } catch (error) {
      console.log('Error favorite')
    }
  }

  const handleReadLaterToggle = async () => {
    try {
      setWorkingOnIt(true)
      setState({
        ...state, 
        readLaterList: 
          state?.readLaterList.includes(book.volumeInfo.ISBN) ?
            state?.readLaterList.filter((isbn) => isbn !== book.volumeInfo.ISBN)
          :
            [...state?.readLaterList, book.volumeInfo.ISBN]
      })
      if(state?.readLaterList.includes((book.volumeInfo.ISBN))){
        //Removing the book from the reading lists
        await Axios.post(
          `${API_URL}/user/manageReadingLists`,
          {
            isbn: book.volumeInfo.ISBN,
            isRead: false,
            currentIsRead: false,
            delete: true
          },
          {
            headers: headers
          }
        )
      }
      else{
        //Adding the book to the reading lists
        await Axios.post(
          `${API_URL}/user/manageReadingLists`,
          {
            isbn: book.volumeInfo.ISBN,
            isRead: false
          },
          {
            headers: headers
          }
        )
      }
      setWorkingOnIt(false)
    } catch (error) {
      console.log('Error readlater')
    }
  }

  const handleAlreadyReadToggle = async () => {
    try {
      setWorkingOnIt(true)
      setWorkingOnIt(false)
    } catch (error) {
      console.log('Error already read')
    }
  }

  //Skeleton component
  const SkeletonList = () => (
    Array(3).fill(null).map((_, index) => <RecommendedBookSkeleton key={index}/>)
  )

  useEffect(() => {
      fetchSimilarBooks()
      fetchReadingLists()
      fetchReviews()
  }, [])


  return (
    <ScrollView style={bookStyle.body} showsVerticalScrollIndicator={false}>
      {/* ===================== BOOK COVER BACKGROUND ===================== */}
      <View style={bookStyle.bookCoverBackGroundWrapper}>
        <Image 
          style={bookStyle.bookCoverBackGround}
          source={
            book?.volumeInfo?.imageLinks?.thumbnail ?
            { uri: book?.volumeInfo?.imageLinks?.thumbnail }
            :
            Images.empty_state.book
          }
          blurRadius={6}
        />
      </View>
      {/* ===================== BOOK COVER ===================== */}
      <View style={bookStyle.bookCoverWrapper}>
        <Image 
          style={bookStyle.bookCover}
          source={
            book?.volumeInfo?.imageLinks?.thumbnail ?
            { uri: book?.volumeInfo?.imageLinks?.thumbnail }
            :
            Images.empty_state.book
          }
        />
      </View>
      {/* ===================== TOP INFO ===================== */}
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
          <TouchableOpacity 
            style={state.user?.favorites.includes(book.volumeInfo.ISBN) ? bookStyle.actionWrapperHighlighted : bookStyle.actionWrapper} 
            onPress={handleFavoriteToggle}
            disabled={workingOnIt || isDisabled}
          >
            <AntDesign
              name='hearto'
              size={14}
              style={{ marginRight: 7 }}
              color={state.user?.favorites.includes(book.volumeInfo.ISBN) ? '#fff' : THEME_SECONDARY_LIGHT}
            />
            <Text style={[
              Fonts.PoppinsRegular,
              state.user?.favorites.includes(book.volumeInfo.ISBN) ? bookStyle.actionHighlighted : bookStyle.action
            ]}>
              {state.user?.favorites.includes(book.volumeInfo.ISBN) ? 'Remove From Favorites' : 'Add To Favorites'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={state?.alreadyReadList.includes(book.volumeInfo.ISBN) ? bookStyle.actionWrapperHighlighted : bookStyle.actionWrapper} 
            onPress={handleAlreadyReadToggle}
            disabled={workingOnIt || isDisabled}
          >
            <AntDesign
              name='checkcircleo'
              size={14}
              style={{ marginRight: 7 }}
              color={state?.alreadyReadList.includes(book.volumeInfo.ISBN) ? '#fff' : THEME_SECONDARY_LIGHT}
            />
            <Text style={[
              Fonts.PoppinsRegular,
              state?.alreadyReadList.includes(book.volumeInfo.ISBN) ? bookStyle.actionHighlighted : bookStyle.action
            ]}>
              {state?.alreadyReadList.includes(book.volumeInfo.ISBN) ? 'Remove From Already Read' : 'Already Read'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={state?.readLaterList.includes(book.volumeInfo.ISBN) ? bookStyle.actionWrapperHighlighted : bookStyle.actionWrapper} 
            onPress={handleReadLaterToggle}
            disabled={workingOnIt || isDisabled}
          >
            <AntDesign
              name='clockcircleo'
              size={14}
              style={{ marginRight: 7 }}
              color={state?.readLaterList.includes(book.volumeInfo.ISBN) ? '#fff' : THEME_SECONDARY_LIGHT}
            />
            <Text style={[
              Fonts.PoppinsRegular,
              state?.readLaterList.includes(book.volumeInfo.ISBN) ? bookStyle.actionHighlighted : bookStyle.action
            ]}>
              {state?.readLaterList.includes(book.volumeInfo.ISBN) ? 'Remove From Read Later' : 'Read Later'}
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
      {/* ===================== SIMILAR BOOKS ===================== */}
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
            isFetchingSimilarBooks?
            <SkeletonList />
            :
            similarBooks.map((book) => (
              <RecommendedBookCard key={book.id} book={book} navigation={navigation}/>
            )) 
          }
        </ScrollView>
      </View>
      {/* ===================== REVIEWS ===================== */}
      <View>
        <Text style={[
          bookStyle.bookHeader,
          Fonts.PoppinsBold
        ]}>
          Reviews
        </Text>
        <ReviewForm bookISBN={book.volumeInfo.ISBN} addReview={(review) => { setReviews((oldReviews) => [review, ...oldReviews]) } }/>
        <ReviewsList reviews={reviews} isFetching={isFetchingReviews}/>
      </View>
    </ScrollView>
  )
}

export default Book