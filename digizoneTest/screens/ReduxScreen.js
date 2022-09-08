import React, { useEffect, useState } from "react";
import { Text, View,Image, StyleSheet, Dimensions, Pressable } from "react-native";
import {useStore, useDispatch, useSelector} from 'react-redux'


export default function ReduxScreen ({navigation}){

  let currentAnimal = useSelector((state) => state.changeAnimal.currentAnimal)

  return (
    
    <View style={styles.wrapper}>
      {currentAnimal.habitat ? 
      (
      <>
      <Text style={styles.title} >LAST ANIMAL</Text>
      <Text style={styles.name}>{currentAnimal.name}</Text>
      <Image source={{
        uri:currentAnimal.image_link }}
        style={styles.imagen}
         />
      <Text style={styles.habitat}>HABITAT</Text>
      <Text style={{alignSelf:'center'}}>{currentAnimal.habitat}</Text>
      </>
      ): (
        <>
      <Text style={styles.cuatro}>404</Text>
      <Text style={styles.noAnimal}>There is no animal yet...</Text>
      <Pressable
       style={styles.boton}
       onPress={() => navigation.navigate('Api Screen')
      }>
        <Text>Visit Our Zoo</Text>
      </Pressable>
      </>
      )}
      
    </View>
  )
}

const totalWidth = Dimensions.get('window').width
const totalHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    wrapper:{
      width:totalWidth,
      height:totalHeight,
      backgroundColor: '#DBD490'
    },
    title:{
      alignSelf:'center',
      marginTop:20,
      marginBottom:30,
      fontSize:24,
      color:'black'
    },
    imagen:{
      width:300,
      height:300,
      alignSelf:'center',
      borderRadius:4
    },
    name:{
      alignSelf:'center',
      marginTop:10,
      marginBottom:25,
      fontSize:24
    },
    habitat:{
      alignSelf:'center',
      marginTop:15,
      color:'black',
      fontSize:16,
    },
    cuatro:{
      fontSize: 120,
      color: '#182B04',
      marginTop:40,
      marginBottom:30,
      alignSelf:'center'
    },
    boton:{
      alignSelf:'center',
      marginTop:15,
      width:150,
      height:40,
      backgroundColor:'#A8E562',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      borderWidth:2,
      borderColor: '#1F3507'
    },
    noAnimal:{
      alignSelf:'center',
      fontSize:16
    }

})