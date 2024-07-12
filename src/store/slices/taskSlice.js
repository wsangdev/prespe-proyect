import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'globalTask',
  initialState: [],
  reducers: {
    setTask: (state, action) => {  // Llena el estado global
      return action.payload
    },
    addTask: (state, action) => {  // retorna array con un Nuevo Elemento 
      return [...state, action.payload]  
    },
    removeTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id) // retorana el ARRAY sin el ELEMENTO ESPEICIFO
    },
    updateTask: (state, action) => {
      const {id, newTask} = action.payload
      return state.map(item => item.id === id ? newTask : item )  // Mapea el estado Actual y Actualiza el Elemento correspondiente 
    }
  }
})

export const {setTask, addTask, removeTask, updateTask } = taskSlice.actions // Exporta las ACCTIONS para todos los Componentes 
export const taskReducer = taskSlice.reducer // exporta el reducer para Configure STORE 