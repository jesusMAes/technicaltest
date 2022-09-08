import React from "react";
import { Button, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({navigation}){

  const logo = require('../logo.jpg')

  return (
    <SafeAreaView style={styles.wrapper}>
      <Image source={logo} 
        style={styles.logo}
      />
      <Text style={styles.title}>
        Technical Test
      </Text>
      <View style={styles.underline}></View>
    <ScrollView style={{marginTop:30}}>
    <Pressable title='First navigate'
      style={styles.button}
      onPress={() => navigation.navigate('Api Screen') } >
        <Text style={styles.buttonText}>Our Zoo</Text>
    </Pressable>
    <Pressable title='Second navigate'
      style={styles.button}
      onPress={() => navigation.navigate('Redux Screen')} >
        <Text style={styles.buttonText}>Last Animal</Text>
    </Pressable>
    <Pressable title='Third navigate'
      style={styles.button}
      onPress={() => navigation.navigate('Design Screen')} >
        <Text style={styles.buttonText}>Design</Text>
    </Pressable>
    </ScrollView>
    </SafeAreaView>
  )
}

const totalheight = Dimensions.get('window').height

const styles = StyleSheet.create({
    wrapper:{
      height:totalheight,
      backgroundColor:'white'
    },  
    logo:{
      width:150,
      height:150,
      alignSelf:'center'
    },
    title:{
      marginTop:-15,
      fontSize:14,
      color:'black',
      alignSelf:'center'
    },
    underline:{
      alignSelf:'center',
      width:100,
      borderWidth:0.2,
      borderColor:'black'
    },

    button:{
      width:130,
      height:40,
      marginTop:10,
      backgroundColor: '#135FBA',
      alignSelf:'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5
    },

    buttonText:{
      color:'white',
      fontSize:16,
      fontWeight:'700'
    }

})