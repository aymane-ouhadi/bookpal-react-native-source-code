import { Text, ScrollView } from 'react-native'
import React from 'react'

import Header from '../../components/header/Header'
import BooksForYou from '../../components/booksForYou/BooksForYou'
import AlreadyRead from '../../components/alreadyRead/AlreadyRead'

import homeStyle from './homeStyle'

const Home = () => {
  return (
    <ScrollView style={homeStyle.body}>
      <Header />
      <BooksForYou />
      <AlreadyRead />
    </ScrollView>
  )
}

export default Home