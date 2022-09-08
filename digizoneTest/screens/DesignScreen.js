import React, { useState } from "react";
import { Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

import DiscoverReel from "../components/discoverReel";
import ProfileReel from "../components/profileReel";
import TrendingReel from "../components/trendingReel";


export default function DesignScreen (){

  return (
    <ScrollView>
      <View style={styles.titleContainer}>
    <Text style={[styles.title, styles.firstwo]}>be</Text>
    <Text style={[styles.title]}>der </Text>
      <View style={styles.icon} >
      <Icon name="heart-outlined" size={45} color='#212121' />
          <View style={styles.circle}/>
      </View>
     </View>
     <View style={styles.searchBar}>
     <Icon name="magnifying-glass" size={25} color='#9B9B9B' style={styles.searchIcon}/>
     <TextInput
     placeholder="Search for Destinations, People"
     style={{fontSize:18}}
     />
     </View>

     <Text style={styles.discoverTitle}>DISCOVER</Text>
     <DiscoverReel />

     <View style={styles.communityWrapper}>
     <Text style={styles.communityTitle}>MY COMMUNITY</Text>
     <ProfileReel />
     </View>
     
    <View style={{marginTop:20, marginLeft:5}}>
      <Text style={styles.trendingTitle}>TRENDING NOW</Text>
     <TrendingReel />
    </View>

    </ScrollView>
  ) 
}


const styles = StyleSheet.create({
  titleContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'

   
  },
  title:{
    display:'flex',
    alignSelf:'center',
    color:'#6CE2BC',
    fontFamily: 'Comfortaa-Bold',
    fontSize:65
  },
  firstwo:{
    color: '#212121',
    marginLeft:'auto'
  },
  icon:{
    marginLeft:10,
    position:'relative',
    marginRight:20,
    color:'#212121'
  },

  circle:{
    width:10,
    height:10,
    borderRadius:10000,
    backgroundColor:'red',
    position:'absolute',
    bottom:10,
    right:12
  },

  searchBar:{
   borderWidth: 1,
   borderColor:'#78EFC8',
   display:'flex',
   alignItems:'center',
   flexDirection:'row',
   borderRadius:30
  },
  searchIcon:{
    marginLeft:10
  },

  discoverTitle:{
    fontSize:30,
    marginTop:15,
    marginLeft:5,
    color:'black',
    fontWeight:'bold'
  },

  communityWrapper:{
    backgroundColor:'black',
    height:200,
    marginTop:50
  },
  communityTitle:{
    color:'white',
    marginTop:10,
    marginLeft:20,
    fontSize:20,
    fontWeight:'bold'
  },
  trendingTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginLeft:25,
    marginBottom:10,

  },

})