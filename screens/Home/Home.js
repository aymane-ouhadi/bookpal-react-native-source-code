import { Text, ScrollView } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import Header from '../../components/header/Header'
import BooksForYou from '../../components/booksForYou/BooksForYou'
import AlreadyRead from '../../components/alreadyRead/AlreadyRead'
import AlreadyReadScreen from '../AlreadyRead/AlreadyRead'
import Book from '../Book/Book'
import Recommendations from '../Recommendations/Recommendations'

import homeStyle from './homeStyle'

const Home = ({navigation}) => {

  const Stack = createStackNavigator()

  const HomeCombined = ({navigation}) => {
    return (
      <ScrollView style={homeStyle.body}>
        <BooksForYou navigation={navigation}/>
        <AlreadyRead navigation={navigation}/>
      </ScrollView>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='HomeCombined'
        component={HomeCombined}
        options={{ 
          header: () => null
        }}
      />
      <Stack.Screen 
        name='Book'
        component={Book}
        options={{ 
          header: () => null
        }}
      />
      <Stack.Screen 
        name='Recommendations'
        component={Recommendations}
        options={{ 
          header: () => null
        }}
      />
      <Stack.Screen 
        name='AlreadyRead'
        component={AlreadyReadScreen}
        options={{ 
          header: () => null
        }}
      />
    </Stack.Navigator>
  )
}

export default Home