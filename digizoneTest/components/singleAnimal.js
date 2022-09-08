import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";


export default function SingleAnimal ({animal}){
  

  return (
    <View key={animal.name} style={styles.wrapper}>
      
      <Text style={styles.animalName}> {animal.name}</Text>
      <Image source={{
        uri:animal.image_link }}
        style={{width:130, height:110, borderRadius:10}}
         />
      <Text style={styles.habitat}>Habitat</Text>
      <Text style={{marginLeft:10, marginRight:10}}>{animal.habitat}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    alignSelf:'center',
    backgroundColor:'#AEE870',
    width:220,
    height:260,
    marginBottom:20,
    borderRadius:24,
    display:'flex',
    alignItems:'center',
    
  },
  animalName:{
    marginTop:20,
    marginBottom:10,
    fontSize:20,
    color: 'black',
    textAlign:'center'
  },
  habitat:{
    fontSize:18,
    color:'black'
  }
})