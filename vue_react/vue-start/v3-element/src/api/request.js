// http 请求标配axios；内置模版 node_modules/axios
import axios from 'axios';

const request = axios.create({
    baseURL:"h", // 基础路径
    timeout:5000 // 请求超时时间
})
// 请求拦截器


export default request