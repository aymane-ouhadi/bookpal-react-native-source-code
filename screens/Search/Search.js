import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../../components/searchBar/SearchBar'

import searchStyle from './searchStyle'

const Search = () => {
  return (
    <View style={searchStyle.body}>
      <SearchBar />
    </View>
  )
}

export default Search