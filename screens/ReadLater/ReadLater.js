import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

import Images from '../../assets/images/images'
import SubHeader from '../../components/subHeader/SubHeader'
import { testBooks } from '../../utils/constants/tests'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'
import SmallBookSkeleton from '../../components/smallBookSkeleton/SmallBookSkeleton'

import readLaterStyle from './readLaterStyle'
import EmptyState from '../../components/emptyState/EmptyState'


const ReadLater = ({navigation}) => {

  const renderItem = ({item}) => <SmallBookCard book={item} navigation={navigation}/>

  const [books, setBooks] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const fetchBooks = async () => {
    try {
      setTimeout(() => {
        setBooks([])
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
    testBooks.map((book) => (
      <SmallBookSkeleton />
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
              data={testBooks}
              renderItem={renderItem}
              keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
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