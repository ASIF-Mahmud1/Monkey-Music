import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({  // see 1.
  name: 'counter',
  initialState: {
    value: 0,
    user: null
  },
  reducers: {
    increment: state => { state.value += 1  },
    decrement: state => { state.value -= 1  },
    incrementByAmount: (state, action) => { state.value += action.payload },
    signUpReducer:  (state, action) => { state.user = action.payload },
  }
})

export const { increment, decrement, incrementByAmount, signUpReducer } = counterSlice.actions

export default counterSlice.reducer
