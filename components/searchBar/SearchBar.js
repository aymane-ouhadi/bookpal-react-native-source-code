import { 
  View, 
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native'
import React, { useState, useRef } from 'react'

import AntDesign from "react-native-vector-icons/AntDesign";

import Animated, { EasingNode } from 'react-native-reanimated'
const {Value, timing} = Animated

import { Fonts } from '../../utils/styles/fonts'

import searchBarStyle from './searchBarStyle'

//Window Size
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

//Animation values
const _input_box_translate_x = new Value(width)
const _back_button_opacity = new Value(0)
const _content_translate_y = new Value(height)
const _content_opacity = new Value(0)


const SearchBar = () => {
  
  //Setting the ref
  const textInputRef = useRef({})

  //Initializing state
  const [isFocused, setIsFocused] = useState(false)
  const [input, setInput] = useState('')

  //Handling search bar focus event
  const handleFocus = () => {
    setIsFocused(true)

    const input_box_translate_x_config = {
      duration: 200,
      toValue: 0,
      easing: EasingNode.inOut(EasingNode.ease)
    }

    const back_button_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: EasingNode.inOut(EasingNode.ease)
    }

    const content_translate_y_config = {
      duration: 200,
      toValue: 0,
      easing: EasingNode.inOut(EasingNode.ease)
    }

    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: EasingNode.inOut(EasingNode.ease)
    }

    timing(_input_box_translate_x, input_box_translate_x_config).start()
    timing(_back_button_opacity, back_button_opacity_config).start()
    timing(_content_translate_y, content_translate_y_config).start()
    timing(_content_opacity, content_opacity_config).start()

    if(textInputRef.current.focus()) textInputRef.current.focus()
  }
  //Handling search bar blur event
  const handleBlur = () => {
    setIsFocused(false)

    const input_box_translate_x_config = {
      duration: 200,
      toValue: width,
      easing: EasingNode.inOut(EasingNode.ease)
    }

    const back_button_opacity_config = {
      duration: 50,
      toValue: 0,
      easing: EasingNode.inOut(EasingNode.ease)
    }

    const content_translate_y_config = {
      duration: 50,
      toValue: height,
      easing: EasingNode.inOut(EasingNode.ease)
    }

    const content_opacity_config = {
      duration: 200,
      toValue: 0,
      easing: EasingNode.inOut(EasingNode.ease)
    }

    timing(_input_box_translate_x, input_box_translate_x_config).start()
    timing(_back_button_opacity, back_button_opacity_config).start()
    timing(_content_translate_y, content_translate_y_config).start()
    timing(_content_opacity, content_opacity_config).start()

    
  }

  return (
    <>
      <View style={searchBarStyle.body}>
        <View style={searchBarStyle.header}>
          <View style={searchBarStyle.headerInner}>
            <View>
              <Text>Logo</Text>
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={"#eee"}
              onPress={handleFocus}
              style={searchBarStyle.searchIcon}
            >
              <AntDesign name='search1' size={25}/>
            </TouchableHighlight>
            <Animated.View
              style={[
                searchBarStyle.inputBox,
                {transform: [{translateX: _input_box_translate_x}]}
              ]}
            >
              <Animated.View style={{ opacity: _back_button_opacity }}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor={'#eee'}
                  onPress={handleBlur}
                  style={searchBarStyle.backIcon}
                >
                  <AntDesign name='left' size={25}/>
                </TouchableHighlight>
              </Animated.View>
              <TextInput 
                placeholder='Search for books here...'
                clearButtonMode='always'
                value={input}
                onChangeText={(value) => setInput(value)}
                style={[Fonts.PoppinsRegular, searchBarStyle.input]}
                ref={textInputRef}
              />
            </Animated.View>
          </View>
        </View>
      </View>
      <Animated.View style={[
        searchBarStyle.content, 
        {
          opacity: _content_opacity,
          transform: [{
            translateY: _content_translate_y
          }]
        }
      ]}>
        <View style={searchBarStyle.contentInner}>
          {/* <View style={searchBarStyle.separator} /> */}
          {
            input === ''
            ?
              <View style={searchBarStyle.imagePlaceholderContainer}> 
                  {/* <Image source={require('')} style={searchBarStyle.imagePlaceholder}/> */}
                  <Text style={searchBarStyle.imagePlaceholderText}>Enter the name of the book</Text>
              </View>
            :
              <View>
                <Text>Content</Text>
              </View>
          }
        </View>

      </Animated.View>
    </>
  )
}

export default SearchBar