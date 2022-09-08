import React, {useState} from "react";
import { Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { Dimensions } from "react-native";
import Video from 'react-native-video'

export default function TrendingReel (){
  const aventure = require('../videos/aventure.mp4')
  const nature = require('../videos/nature.mp4')
  const party = require('../videos/party.mp4')
  const culture = require('../videos/culture.mp4')
  const food = require('../videos/food.mp4')

  const pauseTrend = [true,true,true,true,true];
  const [videoPaused, setVideoPaused] =useState(pauseTrend)

  const trendingData = [
    {
      label: 'ADVENTURE & SPORTS',
      uri: aventure
    },
    {
      label: 'NATURE',
      uri: nature
    },
    {
      label: 'PARTY',
      uri: party
    },
    {
      label: 'CULTURE',
      uri: culture
    },
    {
      label: 'FOOD',
      uri: food
    },
  ]


  const handleClickTrend = (index) =>{
    setVideoPaused( pausedArray => {
      return pausedArray.map( (item, i) => {
        return i=== index ? item=false : item=true
      })
    })

  }

  return (
    <FlatList
    data={trendingData}
    horizontal={true}
    style={{marginTop:0, height:225}}
    showsHorizontalScrollIndicator={false}
    renderItem= {({item,index}) => (
      <View style={{marginLeft:20, position:'relative'}}>
        <Video
          source={item.uri}
          controls={false}
          repeat={true}
          paused={videoPaused[index]}
          resizeMode={'cover'}
          style={{height:225, width:215}}
          ref={(ref) => {
            this.player =ref
          }} 
        />
        <Pressable title=''
          onPress={ () => {
            handleClickTrend(index)
          }} >
         <View style={videoPaused[index] ? styles.playWrapper: styles.hideButton}>
          <Icon name='controller-play' size={55} style={{marginLeft:5}} color='white'/>
         </View>
        </Pressable>

        <View style={styles.labelWrapper}> 
         <Text style={styles.label}>{item.label}</Text>
        </View>
      </View>
    )}
    />
  )
}

const styles = StyleSheet.create({
  playWrapper:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor: 'rgba(0,0,0,.3)',
    position:'absolute',
    bottom:110,
    left:0,
    right:0,
    left:80,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  labelWrapper:{
    width:165,
    height:60,
    backgroundColor: 'rgba(0,0,0,.6)',
    position:'absolute',
    bottom:35,
    left:25,
    borderWidth:1.5,
    borderColor:'#78EFC8',
    borderTopRightRadius:22,
    borderBottomLeftRadius:20,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  },

  label:{
    color:'white',
    fontSize:23,
    textAlign:'center',
    fontWeight: 'bold'
  }
})