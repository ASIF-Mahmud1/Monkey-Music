import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({  // see 1.
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    signInReducer:  (state, action) => { state.user = action.payload },
  }
})

export const { signInReducer } = userSlice.actions

export default userSlice.reducer