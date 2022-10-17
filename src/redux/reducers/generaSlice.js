import { createSlice } from '@reduxjs/toolkit'
import { loginExtra, registerExtra } from '../extraReducers/authExtra';

const initialState = {
    isLogged: false,
    user: null,
    status: 'Active',
    error: null
}

export const counterSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLogout: (state) => {
            state.isLogged = false;
            state.user = null;
            localStorage.removeItem('jwt-token');
        },
        setLoginByGoogle: (state, action) => {
            state.isLogged = true;
            state.user = action.payload.user;
            localStorage.setItem('jwt-token', action.payload.token);
        }
    },
    extraReducers: {
        ...loginExtra,
        ...registerExtra
    }
})

export const { setLogout, setLoginByGoogle } = counterSlice.actions

export default counterSlice.reducer