import axios from 'axios'
import { Toast } from 'zarm' // 错误或成功


axios.defaults.baseURL = '/api' // 设置请求地址
// 默认不带凭证
axios.defaults.withCredentials = true // /跨域请求，允许携带cookie
// 约定 告诉后端 是异步 前后端分离
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// jwt token Authorization 验证
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token')} || null`
// 
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 响应拦截器
axios.interceptors.response.use( res => {
    // 统一处理错误
    if (typeof res.data !== 'object') {
        Toast.show('服务端异常！') 
        return Promise.reject(res)
    }
    if(res.data.code !== 200) {
        if(res.data.message) Toast.show(res.data.msg)
        if(res.data.code === 401) { // 状态 401 跳转到登录页面
            window.location.href = '/login'
        }
        return Promise.reject(res)
    }
    return res.data
})

export default axios