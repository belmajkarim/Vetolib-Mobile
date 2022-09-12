import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'http://localhost:4000/users',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;
