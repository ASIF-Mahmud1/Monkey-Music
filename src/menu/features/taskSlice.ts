import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import Tasks from '../container/Task'

// Define a type for the slice state


interface CounterState {
  value: number;
  tasks: Task[],

}

type Task = {
  title: string
  status: string
  id: number
}
// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  tasks:[]
}


export const counterSlice = createSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    addTasks:(state, action: PayloadAction<Task>) => {

      state.tasks =[...state.tasks, action.payload] 
    },
  }
})

export const {  addTasks } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.tasks.value

export default counterSlice.reducer