import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/user.slice'

export default configureStore({
  reducer: {
    counter: counterReducer  // see 1. 
  }
})