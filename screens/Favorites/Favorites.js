import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

import Header from '../../components/header/Header'
import SubHeader from '../../components/subHeader/SubHeader'

import favoritesStyle from './favoritesStyle'
import { testBooks } from '../../utils/constants/tests'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'
import SmallBookSkeleton from '../../components/smallBookSkeleton/SmallBookSkeleton'
import EmptyState from '../../components/emptyState/EmptyState'
import Images from '../../assets/images/images'


const Favorites = ({navigation}) => {
  
  const renderItem = ({item}) => <SmallBookCard book={item} navigation={navigation}/>

  const [books, setBooks] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const fetchBooks = async () => {
    try {
      setTimeout(() => {
        setBooks(testBooks)
        setIsFetching(false)
      }, 1000)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const SkeletonList = () => (
    testBooks.map((_) => (
      <SmallBookSkeleton />
    ))
  )

  return (
    <View style={favoritesStyle.body}>
      <SubHeader subtitle={'Favorites'}/>
      {
        isFetching
        ?
          <SkeletonList />
        :
          books.length ?
            <FlatList
              data={testBooks}
              renderItem={renderItem}
              keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
              showsVerticalScrollIndicator={false}
            />
          :
            <EmptyState 
              image={Images.empty_state.favorites} 
              imageDimensions={{ width: 150, height: 200 }}
              title={'You Don\'t Have Any Favorite Books'}
              titleSize={20}
              subTitle={'Mark some books as your favorite books to get recommendations'}
              style={{ flex: 1 }}
            />
        }
    </View>
  )
}

export default Favorites