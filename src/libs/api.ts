import Axios from 'axios';

export default (options) => Axios.create({
    ...options,
    baseURL: process.env.BASE_API_URL || 'http://test2.web4boss.ru:8001/api',
});
