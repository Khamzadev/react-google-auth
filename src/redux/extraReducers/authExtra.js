import { login, register } from "../../api/login";
import jwt_decode from 'jwt-decode';

export const loginExtra = {
    [login.pending]: (state) => {
        state.status = 'Loggin in';
        state.error = null;
    },
    [login.fulfilled]: (state, action) => {
        state.status = 'Active';
        state.error = null;
        state.isLogged = true;
        localStorage.setItem('jwt-token', action.payload.token);
        state.user = jwt_decode(action.payload.token);
    },
    [login.rejected]: (state, action) => {
        state.status = 'Rejected login';
        state.error = action.payload;
    }
}

export const registerExtra = {
    [register.pending]: (state) => {
        state.status = 'Restering';
        state.error = null;
    },
    [register.fulfilled]: (state, action) => {
        state.status = 'Registered succesfully';
        state.error = null;
    },
    [register.rejected]: (state, action) => {
        state.status = 'Rejected register';
        state.error = action.payload;
    }
}