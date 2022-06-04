import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'

import Header from '../../components/header/Header'
import SubHeader from '../../components/subHeader/SubHeader'

import favoritesStyle from './favoritesStyle'
import { testBooks } from '../../utils/constants/tests'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'
import SmallBookSkeleton from '../../components/smallBookSkeleton/SmallBookSkeleton'
import EmptyState from '../../components/emptyState/EmptyState'
import Images from '../../assets/images/images'
import { AuthContext } from '../../context/Auth/AuthContext'
import { getMultipleBooksByISBN } from '../../utils/api/GoogleBooksAPICalls'


const Favorites = ({navigation}) => {
  
  const renderItem = ({item}) => <SmallBookCard book={item} navigation={navigation}/>

  //Initializing the states
  const [books, setBooks] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [{user}, setState] = useContext(AuthContext)

  //Book fetching function
  const fetchBooks = async () => {
    try {
      const books_array = await getMultipleBooksByISBN(...user?.favorites)
      setBooks(books_array)
      setIsFetching(false)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const SkeletonList = () => (
    Array(4).fill(0).map((_, index) => (
      <SmallBookSkeleton key={index} />
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
              data={books}
              renderItem={renderItem}
              keyExtractor = { item => item.id }
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