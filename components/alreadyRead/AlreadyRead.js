import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

import { Fonts } from '../../utils/styles/fonts'
import { testBooks } from '../../utils/constants/tests'

import SmallBookCard from '../smallBookCard/SmallBookCard'
import SubHeader from '../subHeader/SubHeader'
import SmallBookSkeleton from '../smallBookSkeleton/SmallBookSkeleton'
import EmptyState from '../emptyState/EmptyState'
import Images from '../../assets/images/images'

import alreadyReadStyle from './alreadyReadStyle'


const AlreadyRead = ({navigation}) => {

  const [books, setBooks] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const fetchBooks = async () => {
    try {
      setBooks(testBooks)
      setIsFetching(false)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

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
              subTitle={'Keep track of the books by marking them'}
              style={{ marginTop: 15 }}
            />  
        }
      </View>
    </View>
  )
}

export default AlreadyRead