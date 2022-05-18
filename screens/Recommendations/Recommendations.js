import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import SubHeader from '../../components/subHeader/SubHeader'

import recommendationsStyle from './recommendationsStyle'
import SmallBookSkeleton from '../../components/smallBookSkeleton/SmallBookSkeleton'
import { testBooks } from '../../utils/constants/tests'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'

const Recommendations = () => {

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
    <View style={recommendationsStyle.body}>
      <SubHeader subtitle={'Books For You'}/>
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

export default Recommendations