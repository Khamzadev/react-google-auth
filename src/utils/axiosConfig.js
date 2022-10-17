import axios from 'axios';

export const API = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        ContentType: 'application/json'
    }
})

API.interceptors.request.use(
    async req => {
        req.headers['Authorization'] = 'Bearer ' + localStorage.getItem('jwt-token');
        return req;
    }
)