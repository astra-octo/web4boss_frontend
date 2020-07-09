import Axios from 'axios';

export default (options) => {
    const axios = Axios.create({
        ...options,
        baseURL: process.env.BASE_API_URL || 'http://test2.web4boss.ru:8001/api',
    });

    axios.interceptors.request.use((config) => {
        const token = localStorage.getItem('access_token');

        if (token) {
            config.headers.Authorization = `JWT ${token}`;
        }

        return config;
    });

    return axios;
};
