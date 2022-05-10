import { View, Text, FlatList } from 'react-native'
import React from 'react'

import Header from '../../components/header/Header'
import SubHeader from '../../components/subHeader/SubHeader'

import favoritesStyle from './favoritesStyle'
import { testBooks } from '../../utils/constants/tests'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'

const renderItem = ({item}) => <SmallBookCard book={item}/>

const Favorites = () => {
  return (
    <View style={favoritesStyle.body}>
      <Header />
      <SubHeader subtitle={'Favorites'}/>
      <FlatList
        data={testBooks}
        renderItem={renderItem}
        keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Favorites