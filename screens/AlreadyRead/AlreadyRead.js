import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'

import EmptyState from '../../components/emptyState/EmptyState'
import alreadyReadStyle from './alreadyReadStyle'
import { testBooks } from '../../utils/constants/tests'
import SmallBookSkeleton from '../../components/smallBookSkeleton/SmallBookSkeleton'
import SubHeader from '../../components/subHeader/SubHeader'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'
import { API_URL } from '../../utils/constants/backend'
import { AuthContext } from '../../context/Auth/AuthContext'
import Images from '../../assets/images/images'
import { getMultipleBooksByISBN } from '../../utils/api/GoogleBooksAPICalls'

const AlreadyRead = ({navigation}) => {
  const renderItem = ({item}) => <SmallBookCard book={item} navigation={navigation}/>

  const [books, setBooks] = useState([])
  const [{user, alreadyReadList}, setState] = useContext(AuthContext)
  const [isFetching, setIsFetching] = useState(true)

  const fetchBooks = async () => {
    try {
      setBooks(await getMultipleBooksByISBN(...alreadyReadList))
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
    <View style={alreadyReadStyle.body}>
      <SubHeader subtitle={'Already Read'}/>
      {
        isFetching
        ?
          <SkeletonList />
        :
          books.length ?
            <FlatList
              data={books}
              renderItem={renderItem}
              keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
              showsVerticalScrollIndicator={false}
            />
          :
          <EmptyState 
            image={Images.empty_state.already_read} 
            imageDimensions={{ width: 120, height: 120 }}
            title={'You Haven\'t Read Anything Yet '}
            titleSize={20}
            subTitle={'Keep track of your reading progress by adding the books you already read to the list'}
            style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          />
      }
    </View>
  )
}

export default AlreadyRead