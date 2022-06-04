import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import SubHeader from '../../components/subHeader/SubHeader'

import recommendationsStyle from './recommendationsStyle'
import SmallBookSkeleton from '../../components/smallBookSkeleton/SmallBookSkeleton'
import EmptyState from '../../components/emptyState/EmptyState'
import { testBooks } from '../../utils/constants/tests'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'
import { AuthContext } from '../../context/Auth/AuthContext'
import Axios from 'axios'
import { API_URL } from '../../utils/constants/backend'
import { getMultipleBooksByISBN } from '../../utils/api/GoogleBooksAPICalls'
import Images from '../../assets/images/images'


const Recommendations = ({navigation}) => {

  const renderItem = ({item}) => <SmallBookCard book={item} navigation={navigation}/>

  const [books, setBooks] = useState([])
  const [{user}, setState] = useContext(AuthContext)
  const [isFetching, setIsFetching] = useState(true)

  const fetchBooks = async () => {
    try {
      const {data: {recommendations}} = await Axios.post(
        `${API_URL}/book/array/get`,
        { 
          items: user?.favorites
        }
      )
      setBooks(await getMultipleBooksByISBN(...recommendations))
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
    <View style={recommendationsStyle.body}>
      <SubHeader subtitle={'Books For You'}/>
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
              image={Images.empty_state.recommendations} 
              imageDimensions={{ width: 120, height: 120 }}
              title={'No Recommendations Yet'}
              titleSize={20}
              subTitle={'Add some books to your favorites to get some recommendations'}
              style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
            />
      }
    </View>
  )
}

export default Recommendations