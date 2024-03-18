import { View, Text,Animated } from 'react-native'
import React from 'react'

export default function animeted() {
    const  fadeIn =  () => {
   Animated.timing(fadeAnim , {
     toValue:0,
     duration: 100,
     useNativeDriver: true
    }).start();
    }
    const  fadeOut =  () => {
        Animated.timing(fadeAnim , {
            toValue:0,
            duration: 100,
            useNativeDriver: true
           }).reset();
    }
  return (
    <View>
      <Text style = {{fontSize:30,textAlign: "center"}}>animeted</Text>

      <Animated.View style = {[{opacity : fadeAnim}]}>
      <Text>Fading View!</Text>
      </Animated.View>

      <View>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </View>

  )
}