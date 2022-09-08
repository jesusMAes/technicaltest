import React, { useState }from "react";
import { Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Video from 'react-native-video'


import { Dimensions } from "react-native";

export default function DiscoverReel (){
  //destiny videos
  const losAngeles = require('../videos/losAngeles.mp4')
  const hawai = require('../videos/hawai.mp4')
  const newyork = require('../videos/newyork.mp4')
  const roma = require('../videos/roma.mp4')
  const seatle = require('../videos/seatle.mp4')

  const pauseArray = [true,true,true,true,true];
  const buttonArray = [true,true,true,true,true]
  const [ispaused, setpaused] =useState(pauseArray)
  const [ispressed,setpressed] = useState(buttonArray)

  const videoData = [
    {
      uri:losAngeles,
      place: 'Los Angeles'
    },
    {
      uri:hawai,
      place: 'Hawaii'
    },
    {
      uri:newyork,
      place: 'New York'
    },
    {
      uri:roma,
      place: 'Roma'
    },
    {
      uri:seatle,
      place: 'Seattle'
    },
  ]

  const handleClick = (index) => {
    setpaused( pausedArray => {
      return pausedArray.map( (item, i) => {
        return i=== index ? item=false : item=true
      })
    })
    setpressed (buttons => {
      return buttons.map ( (button ,j) => {
        return j=== index ? button=false : item=true
      })
    })
  }

  return (
    <View style={styles.reelWrapper}>
    <FlatList
    data={videoData} 
    style={{height:220}}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({item, index}) => (
      <View style={styles.singleVideo}>
      <Video source={item.uri}
        controls={false}
        repeat={true}
        paused={ispaused[index]}
        resizeMode='cover'
        style={{height:200,width:130, marginRight:20, borderRadius:20}}
        ref={(ref) => {
          this.player = ref
          }}
       />
        <Pressable title='' style={ styles.playbutton}
         onPress={() => {
          handleClick(index)
         }}>
          <View 
          style={ispressed[index] ? styles.buttonCircle : styles.hideButton} >
          <Icon name="controller-play" size={40} color='white' style={{marginLeft:5}}/>
          </View>
        </Pressable>
        <View style={styles.titlewrapper}>
       <Text style={styles.videoTitle}>{item.place}</Text>
       </View>
          <View style={styles.infoWrapper}>
            <View style={styles.whiteCircle}>
              <Text style={{color:'white', fontSize:18}}>i</Text>
            </View>
          </View>
       </View>       
    )}
    />
   </View> 
  )
}

const anchoTotal = Dimensions.get('screen').width

const styles = StyleSheet.create({
  reelWrapper:{
    width:anchoTotal,
    marginLeft:30,

  },
   singleVideo:{
    position:'relative'
  },
  titlewrapper:{
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius:15,
    width:95,
    height:30,
    position:'absolute',
    left:20,
    right:0,
    bottom:46,
    marginLeft:'auto',
    marginRight:'auto',
    display:"flex",
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
    
    },
  videoTitle:{
    color:'white',
    fontWeight:'bold',
    fontSize:16
  },
  infoWrapper:{
    width:45,
    height:45,
    backgroundColor:'black',
    borderRadius:25,
    position:'absolute',
    bottom:0,
    left:45,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  whiteCircle:{
    width:30,
    height:30,
    borderColor:'white',
    borderWidth:2,
    borderRadius:15,
    display:'flex',
    alignItems:'center'
  },
  playbutton:{
    position:'absolute',
    top:50,
    left:40
  },
  buttonCircle:{
    backgroundColor:'rgba(0,0,0,.5)',
    width:60,
    height:60,
    borderRadius:30,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  hideButton:{
    display:'none'
  },
})