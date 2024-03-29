import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function ListContainer() {

    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
    ]

  const Item = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  return (
    <View>
      <Text style = {{fontSize: 30, textAlign: "center"}}>ListContainer</Text>

            <FlatList 
                data={data}
                renderItem={({item}) => <Item Title = {item.title}/>}
                keyExtractor={item => item.id}
            />
    </View>
  )
}