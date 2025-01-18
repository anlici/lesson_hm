// 向后端请求接口
import request from './request.js'

// 登入
// apifox 测试，server 响应
// post 不是明文传输
export const login = (body) => request.post('/api/login',body).then(res => {
    return res
}) 