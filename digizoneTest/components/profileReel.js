import React, {useState} from "react";
import { Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";



export default function ProfileReel(){
  const profile1 = require('../profileImages/profile1.jpg')
  const profile2 = require('../profileImages/profile2.jpg')
  const profile3 = require('../profileImages/profile3.jpg')
  const profile4 = require('../profileImages/profile4.jpg')
  const profile5 = require('../profileImages/profile5.jpg')

  const profileData = [
    {
      username: 'Jane_Smith',
      uri:profile1
    },
    {
      username: 'Sara_Parker',
      uri: profile2
    },
    {
      username: 'James_Frd',
      uri: profile3
    },
    {
      username: 'Mike_Sants',
      uri: profile4
    },
    {
      username: 'Annah_Russ',
      uri: profile5
    }
  ]

  return (
    <FlatList
    data={profileData}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem ={({item, index}) => (
     <View style={index != 4 ? styles.singleProfile: styles.lastProfile}>
      
     <Image 
     style ={styles.profileStyle }
     source={item.uri} />
    <Text style={{color:'white'}}>{item.username}</Text>
    </View>
    )}
     />
  )
}

const styles = StyleSheet.create({
  singleProfile:{
    width:105,
    height:190,
    marginTop:15,
    marginLeft:20,
    display:'flex',
    alignItems:'center',
  },
  lastProfile: {
    width:155,
    height:190,
    marginTop:15,
    display:'flex',
    alignItems:'center',
  },
  profileStyle:{
    width:105,
    height:105,
    borderRadius:55,
    borderWidth:4,
    borderColor:'#78EFC8'
  },
})