import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function Switch() {
    const  [isEnabled, setIsEnabled] = useState();

    const toggleSwitch = () =>{
        setIsEnabled(previousState => !previousState)
    }
  return (
    <View>
      <Text style = {{fontSize:50, textAlign: "center"}}>Switch</Text>

      <Switch 
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    </View>
  )
}