import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({  // see 1.
  name: 'user',
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

export const { increment, decrement, incrementByAmount, signUpReducer } = userSlice.actions

export default userSlice.reducer