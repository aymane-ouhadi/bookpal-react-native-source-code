import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'

import { Fonts } from '../../utils/styles/fonts'
import { testBooks } from '../../utils/constants/tests'

import SmallBookCard from '../smallBookCard/SmallBookCard'
import SubHeader from '../subHeader/SubHeader'
import SmallBookSkeleton from '../smallBookSkeleton/SmallBookSkeleton'
import EmptyState from '../emptyState/EmptyState'
import Images from '../../assets/images/images'

import alreadyReadStyle from './alreadyReadStyle'
import Axios from 'axios'
import { API_URL } from '../../utils/constants/backend'
import { getMultipleBooksByISBN } from '../../utils/api/GoogleBooksAPICalls'
import { AuthContext } from '../../context/Auth/AuthContext'


const AlreadyRead = ({navigation}) => {

  //Initializing states
  const [books, setBooks] = useState([])
  const [count, setCount] = useState(0)
  const [state, setState] = useContext(AuthContext)
  const [isFetching, setIsFetching] = useState(true)

  const fetchBooks = async () => {
    try {
      setBooks(await getMultipleBooksByISBN(...state.alreadyReadList))
      setIsFetching(false)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    if(count >= 1){
      fetchBooks()
    }
    else{
      setCount((oldState) => oldState + 1)
    }
  }, [state.alreadyReadList])

  const SkeletonList = () => (
    testBooks.map((_, index) => (
      <SmallBookSkeleton key={index}/>
    ))
  )

  return (
    <View>
      <SubHeader 
        subtitle={'Already Read'} 
        seeAll 
        navigation={navigation} 
        to='AlreadyRead'
      />
      <View>
        {
          isFetching ?
            <SkeletonList />
          :
            books.length ?
              books.map((book, index) => (
                <SmallBookCard key={index} book={book} navigation={navigation} />
              ))
            :
            <EmptyState 
              image={Images.empty_state.already_read} 
              imageDimensions={{ width: 120, height: 120 }}
              title={'You Haven\'t Read Anything Yet '}
              titleSize={20}
              subTitle={'Keep track of your reading progress by adding the books you already read to the list'}
              style={{ marginTop: 15 }}
            />  
        }
      </View>
    </View>
  )
}

export default AlreadyRead