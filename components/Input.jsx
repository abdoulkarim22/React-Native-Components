import { View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Input() {

  const [text, onChangeText] = useState('');
  const [Number, onChangeNumber] = useState('Useless Text');
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style = {{height:40,margin:12,borderWidth:1,padding:10,width:300}}
      />
      <TextInput
        onChangeNumber={onChangeNumber}
        value={Number}
        style = {{height:40,margin:12,borderWidth:1,padding:10,width:300}}
      />
    </View>
  )
}