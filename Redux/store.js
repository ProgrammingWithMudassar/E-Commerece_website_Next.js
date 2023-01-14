import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './Reducer.js'
import CartSlice from './CartSlice.js'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    cart: CartSlice,
  }
})

