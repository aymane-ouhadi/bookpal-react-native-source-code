import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'


import EmptyState from '../../components/emptyState/EmptyState'
import SearchBar from '../../components/searchBar/SearchBar'
import { testBooks } from '../../utils/constants/tests'
import SmallBookCard from '../../components/smallBookCard/SmallBookCard'
import SubHeader from '../../components/subHeader/SubHeader'
import { TEXT_PRIMARY } from '../../utils/constants/colors'
import Images from '../../assets/images/images'

import searchStyle from './searchStyle'


const Search = ({navigation}) => {
  
  //Initializing state
  const [books, setBooks] = useState([])
  const [input, setInput] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const renderItem = ({item}) => <SmallBookCard book={item} navigation={navigation}/>

  return (
    <View style={searchStyle.body}>
      <SearchBar 
        isFetching={(fetchingStatus) => setIsFetching(fetchingStatus)}
        setBooks={(booksFound) => setBooks(booksFound) }
        setInput={(input) => setInput(input)}
      />
      {
        (input && input.length >= 3 ) 
        ?
          !isFetching
          ?
            <View>
              {books.length ? <SubHeader subtitle={"Search Results"}/> : null}
              {
                books.length ?
                <FlatList
                  data={books}
                  renderItem={renderItem}
                  keyExtractor = { item => item.id + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
                  showsVerticalScrollIndicator={false}
                />
                :
                <View style={{ height: '88%', justifyContent: 'center'}}>
                  <EmptyState 
                    image={Images.empty_state.search}
                    imageDimensions={{ width: 150, height: 150 }}
                    title='Nothing Was Found'
                    titleSize={23}
                    subTitle='No books match what you searched'
                    // style={{ backgroundColor: '#ddd' }}
                  />
                </View>
              }
            </View>
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
        :
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <EmptyState 
              image={Images.placehoder.search}
              imageDimensions={{ width: 200, height: 200 }}
              title='Search for books'
              titleSize={23}
            />
          </View>
      }
    </View>
  )
}

export default Search