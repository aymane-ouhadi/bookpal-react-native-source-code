import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'

import searchStyle from './searchStyle'
import { testBooks } from '../../utils/constants/tests'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'
import SubHeader from '../../components/subHeader/SubHeader'
import { TEXT_PRIMARY } from '../../utils/constants/colors'

const renderItem = ({item}) => <SmallBookCard book={item}/>

const Search = () => {

  //Initializing state
  const [isFetching, setIsFetching] = useState(false)

  return (
    <View style={searchStyle.body}>
      <SearchBar isFetching={(fetchingStatus) => setIsFetching(fetchingStatus)}/>
      <SubHeader subtitle={"Search"}/>
      {
        !isFetching
        ?
        <FlatList
          data={testBooks}
          renderItem={renderItem}
          keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
          showsVerticalScrollIndicator={false}
        />
        :
        <View style={{ 
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center' 
        }}>
          <ActivityIndicator 
            color={TEXT_PRIMARY}
            size={80}
          />
        </View>
      }
    </View>
  )
}

export default Search