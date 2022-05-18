import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import alreadyReadStyle from './alreadyReadStyle'
import { testBooks } from '../../utils/constants/tests'
import SmallBookSkeleton from '../../components/smallBookSkeleton/SmallBookSkeleton'
import SubHeader from '../../components/subHeader/SubHeader'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'

const AlreadyRead = () => {
  const renderItem = ({item}) => <SmallBookCard book={item}/>

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
    <View style={alreadyReadStyle.body}>
      <SubHeader subtitle={'Already Read'}/>
      {
        isFetching
        ?
          <SkeletonList />
        :
          <FlatList
            data={testBooks}
            renderItem={renderItem}
            keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
            showsVerticalScrollIndicator={false}
          />
      }
    </View>
  )
}

export default AlreadyRead