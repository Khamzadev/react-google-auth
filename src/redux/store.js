import { configureStore } from '@reduxjs/toolkit'
import generaSlice from './reducers/generaSlice'

export const store = configureStore({
    reducer: {
        general: generaSlice
    },
})