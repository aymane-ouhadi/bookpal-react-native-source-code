import { Text, View } from 'react-native'
import React from 'react'
import homeStyle from './homeStyle'


const Home = () => {
  return (
    <View style={homeStyle.body}>
      <Text>Hello from home</Text>
    </View>
  )
}

export default Home