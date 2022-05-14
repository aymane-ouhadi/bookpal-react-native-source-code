import { View, Text, FlatList } from 'react-native'
import React from 'react'

import SmallBookCard from '../smallBookCard/SmallBookCard'
import { Fonts } from '../../utils/styles/fonts'
import { testBooks } from '../../utils/constants/tests'

import alreadyReadStyle from './alreadyReadStyle'
import SubHeader from '../subHeader/SubHeader'

const renderItem = ({item}) => <SmallBookCard book={item}/>

const AlreadyRead = () => {
  return (
    <View>
      <SubHeader subtitle={'Already Read'} seeAll/>
      <View>
        <FlatList 
          data={testBooks}
          renderItem={renderItem}
          keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
          // scrollEnabled={true}
        />
      </View>
    </View>
  )
}

export default AlreadyRead