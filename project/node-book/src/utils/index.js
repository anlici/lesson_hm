// 统一管理
import axios  from "axios";
export const get = axios.get;
export const post = axios.post;

// 拿到接口请求值
export const getUserInfo = async () => {
    return await get('/userInfo')
}