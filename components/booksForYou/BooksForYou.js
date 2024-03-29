import { ScrollView, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
// import { useFocusEffect } from '@react-navigation/native';

import { getBookByISBN, getMultipleBooksByISBN } from '../../utils/api/GoogleBooksAPICalls';
import { testBooks } from '../../utils/constants/tests'
import Images from '../../assets/images/images'
import RecommendedBookCard from '../recommendedBookCard/RecommendedBookCard'
import RecommendedBookSkeleton from '../recommendedBookSkeleton/RecommendedBookSkeleton'
import SubHeader from '../subHeader/SubHeader'
import EmptyState from '../emptyState/EmptyState'
import { AuthContext } from '../../context/Auth/AuthContext';
import { API_URL } from '../../utils/constants/backend';
import Axios from 'axios';


const BooksForYou = ({navigation}) => {

  const [books, setBooks] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [{user}, setState] = useContext(AuthContext)
  
  const fetchBooks = async () => {
    try {
      const {data: {recommendations}} = await Axios.post(
        `${API_URL}/book/array/get`,
        { 
          items: user?.favorites
        }
      )
      // setBooks(await getMultipleBooksByISBN(...recommendations))
      console.log('Favorites: ', user?.favorites)
      setBooks(await getMultipleBooksByISBN(...(recommendations.length > 4 ? recommendations.slice(0, 4) : recommendations)))
      setIsFetching(false)
    } catch (error) {
      throw error
    }
  }
  
  useEffect(() => {
    fetchBooks()
  }, []);
  
  const SkeletonList = () => (
    Array(3).fill(null).map((_, index) => <RecommendedBookSkeleton key={index}/>)
  )

  return (
    <View>
      <SubHeader 
        subtitle={'Books For You'} 
        navigation={navigation} 
        to='Recommendations'
        seeAll
      />
      {
        !isFetching && !books.length
        ?
        <View>
          <EmptyState 
            image={Images.empty_state.recommendations} 
            imageDimensions={{ width: 120, height: 120 }}
            title={'No Recommendations Yet'}
            titleSize={20}
            subTitle={'Add some books to your favorites to get some recommendations'}
            style={{ marginTop: 15 }}
          />
        </View>
        :
        <ScrollView
          style={{ 
            display: 'flex', 
            flexDirection: 'row',
          }} 
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            isFetching
            ?
              <SkeletonList />
            :
              books.map((book, index) => (
                <RecommendedBookCard key={index} navigation={navigation} book={book}/>
              )) 
          }
        </ScrollView>
      }
    </View>
  )
}

export default BooksForYou