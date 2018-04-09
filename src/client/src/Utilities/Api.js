import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:1337/api/'
});

Api.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


export default Api;