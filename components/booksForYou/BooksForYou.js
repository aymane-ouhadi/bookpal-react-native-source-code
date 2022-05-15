import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { testBooks } from '../../utils/constants/tests'
import RecommendedBookCard from '../recommendedBookCard/RecommendedBookCard'
import SubHeader from '../subHeader/SubHeader'


const BooksForYou = ({navigation}) => {

  const renderItem = ({item}) => <RecommendedBookCard navigation={navigation} book={item}/>

  return (
    <View>
      <SubHeader subtitle={'Books For You'} seeAll/>
      <View>
        <FlatList 
          data={testBooks}
          renderItem={renderItem}
          //================== CHANGE iTO item => item.id
          keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
        />
      </View>
    </View>
  )
}

export default BooksForYou