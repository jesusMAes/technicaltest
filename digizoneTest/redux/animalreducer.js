import { createSlice } from '@reduxjs/toolkit'

export const animalReducer = createSlice({
  name:'changeAnimal',
  initialState: {
    currentAnimal:[],

  },
  reducers:{
    changeAnimal: (state, action) => {
      state.currentAnimal = []
      let animals = action.payload
      let index = animals.length
      state.currentAnimal = action.payload[index-1]
    }
  }
})

export const {changeAnimal} = animalReducer.actions
export default animalReducer.reducer