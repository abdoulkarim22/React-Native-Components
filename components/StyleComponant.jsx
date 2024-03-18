import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StyleComponant() {
  return (
    <View  style={styles.containerTwo}>
        <Text style = {{textAlign:"center",fontSize:20}}>
           StyleComponant
       </Text>
      <Text style = {styles.container}>React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        fontFamily:  'Arial',
        fontSize: 40,
        fontWeight:  "bold",
        padding:10,
    },
    containerTwo:{
        backgroundColor: '#61dafb',
        borderRadius:10,
        borderWidth: 2,
    }

})