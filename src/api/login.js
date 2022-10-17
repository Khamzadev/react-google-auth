import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from '../utils/axiosConfig';

export const login = createAsyncThunk(
    'auth/login',
    async(data, { rejectWithValue }) => {
        try {
            const response = await API.post('auth/login', data);
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.response.data.message);
        }
    }
)
export const register = createAsyncThunk(
    'auth/register',
    async(data, { rejectWithValue }) => {
        try {
            const response = await API.post('auth/register', data);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)