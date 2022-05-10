import { 
  View, 
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";

import searchBarStyle from './searchBarStyle'

const SearchBar = () => {
  return (
    <View style={searchBarStyle.body}>
      <Text>SearchBar</Text>
    </View>
  )
}

export default SearchBar