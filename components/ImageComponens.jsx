import { View, Image } from 'react-native'
import React from 'react'

export default function ImageComponens() {
  return (
    <View>
      <Image 
        source = {require('../assets/adaptive-icon.png')}
        style={{width:100, height:100}}
      />
      <Image 
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style = {{width:100,height:100,}}
      />
    </View>
  )
}