import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import axios from "axios";
import SingleAnimal from "../components/singleAnimal";
import {useStore, useDispatch, useSelector} from 'react-redux'
import { animalReducer } from "../redux/animalreducer";

export default function ApiScreen (){
  
  const [animals, setAnimals] = useState([])
  const dispatch = useDispatch()
  let store = useStore()



  useEffect(() => {
    const getAnimal = async () => {
      setAnimals([''])
      //retrieve animals
      const retrieveAnimals = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand/10')
      
        setAnimals(retrieveAnimals.data)
       dispatch(animalReducer.actions.changeAnimal(retrieveAnimals.data))
    }
    
    getAnimal()   
  },[])


  return (
    <ScrollView>
      <Text style={styles.title}>ZOO</Text>
      {animals.map((animal, index) => <SingleAnimal animal={animal} key={index} />)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    fontSize:36
  }
})