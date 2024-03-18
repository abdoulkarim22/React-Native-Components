import { View, Text ,StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Touchableopacity() {


   const [count , setCount] = useState(0)
   const  handlePress= ()=>{
     setCount( count + 1)
   }
  return (
    <View>
      <Text style={{fontSize:30,textAlign:"center"}} onPress={handlePress}>Touchableopacity</Text>
      <Text>
        Compteur {count}
      </Text>
        <Touchableopacity style = {styles.button}>
          <Text>Press Here</Text>
        </Touchableopacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button : {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
    
    }
})