import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'

import Images from '../../assets/images/images'
import SubHeader from '../../components/subHeader/SubHeader'
import { testBooks } from '../../utils/constants/tests'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'
import SmallBookSkeleton from '../../components/smallBookSkeleton/SmallBookSkeleton'

import readLaterStyle from './readLaterStyle'
import EmptyState from '../../components/emptyState/EmptyState'
import Axios from 'axios'
import { API_URL } from '../../utils/constants/backend'
import { AuthContext } from '../../context/Auth/AuthContext'
import { getMultipleBooksByISBN } from '../../utils/api/GoogleBooksAPICalls'


const ReadLater = ({navigation}) => {

  //Initializing the states
  const [books, setBooks] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [state, setState] = useContext(AuthContext)

  const renderItem = ({item}) => <SmallBookCard book={item} navigation={navigation}/>

  //Request Header
  const headers = {
    'Authorization': `Bearer ${state.idToken}`
  }

  //Fetching the books from read later collection
  const fetchBooks = async () => {
    try {
      const {data: books_array} = await Axios.get(`${API_URL}/user/readingLists?isRead=false`, {
        headers: headers
      })
      setBooks(await getMultipleBooksByISBN(...books_array.readingLists))
      setIsFetching(false)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  //Skeleton List Component
  const SkeletonList = () => (
    Array(4).fill(0).map((_, index) => (
      <SmallBookSkeleton key={index}/>
    ))
  )

  return (
    <View style={readLaterStyle.body}>
      <SubHeader subtitle={'Read Later'} />
      {
        isFetching ?
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
              image={Images.empty_state.read_later} 
              imageDimensions={{ width: 170, height: 200 }}
              title={'Nothing To Read Later'}
              titleSize={20}
              subTitle={'Add some books to your read later list in order to read them in your spare time'}
              style={{ flex: 1 }}
            />
      }
    </View>
  )
}

export default ReadLater