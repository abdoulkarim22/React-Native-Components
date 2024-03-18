import { View, Text, Button, Alert, SafeAreaView } from 'react-native'
import React from 'react'

export default function UserInterface() {
  return (
    <SafeAreaView>
        <View>
      <Text>UserInterface</Text>
         <Text>
            Button
         </Text>
         <Button
            title='Click'
            color={"#f194ff"}
            onPress={() => Alert.alert("Codeloccol Voleur")}
            hasTVPreferredFocus = {false}
         />
    </View>
    </SafeAreaView>
  )
}
