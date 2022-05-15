import { View, Text, FlatList } from 'react-native'
import React from 'react'

import Header from '../../components/header/Header'
import SubHeader from '../../components/subHeader/SubHeader'
import { testBooks } from '../../utils/constants/tests'
import readLaterStyle from './readLaterStyle'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'

const renderItem = ({item}) => <SmallBookCard book={item}/>

const ReadLater = () => {
  return (
    <View style={readLaterStyle.body}>
      <SubHeader subtitle={'Read Later'} />
      <FlatList
        data={testBooks}
        renderItem={renderItem}
        keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ReadLater