import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import Tasks from '../container/Task'

// Define a type for the slice state


interface CounterState {
  tasks: Task[],

}

type Task = {
  title: string
  status: string
  id: number
}
// Define the initial state using that type
const initialState: CounterState = {
  tasks:[]
}


export const counterSlice = createSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    addTasks:(state, action: PayloadAction<Task>) => {

      state.tasks =[ action.payload, ...state.tasks,] 
    },
    updateStatus:(state, action: PayloadAction<Task>) => {
     
      let id= action.payload.id
      const result= state.tasks.map((item)=>{
        if(item.id===id)
        {
          return {
            ...item, 
            status: action.payload.status
          }
        }
        else 
        {
          return {
            ...item
          }
        }
      })
  
    state.tasks=[...result as [Task]]
    },
  }
})

export const {  addTasks, updateStatus } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.tasks

export default counterSlice.reducer