import { View, Text,SectionList } from 'react-native'
import React from 'react'

export default function SectionList() {

    const data = [
        {
          title: 'Main dishes',
          data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
          title: 'Sides',
          data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
          title: 'Drinks',
          data: ['Water', 'Coke', 'Beer'],
        },
        {
          title: 'Desserts',
          data: ['Cheese Cake', 'Ice Cream'],
        },
      ];
      
  return (
    <View>
      <Text style = {{fontSize: 30, textAlign: "center"}}>SectionList</Text>

     <SectionList
        section={data}
        keyExtractor = {(item , index) => item + index}
        renderItem = {({item}) => (
            <Text>{item}</Text>
        )}
        renderSectionHeader = {({section : {title} }) => (
            <Text>{title}</Text>
        )}
     />

    </View>
  )
}