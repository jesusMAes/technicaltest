import { configureStore } from '@reduxjs/toolkit'
import animalReducer from './animalreducer'

 const store = configureStore({
  reducer:{
    changeAnimal: animalReducer
  }
})
export default store