// 向后端请求接口
import request from './request.js'

// 登入
// apifox 测试，server 响应
// post 不是明文传输
export const login = (body) => request.post('/api/login',body).then(res => {
    return res
}) 

// var obj = {
//     a:1,
//     b:2,
// }
// let vue = {}
// for (let k in obj) {
//     Object.defineProperty(vue,k,{
//         get() {
//             console.log("获取")
            
//             return data[k]
//         },
//         set(val) {
//             console.log("设置")
//             data[k] = val
//         }
//     })
// }
// console.log(vue);
// vue.c = 3
// console.log(2,vue.c);

// // new propxy
// let vue3 = new Proxy(obj,{
//     get(target,propkey,receiver) {
//         console.log("获取")
//         return Reflect.get(target,propkey,receiver)
//     },
//     set(target,propkey,value,receiver) {
//         console.log("设置")
//         return Reflect.set(target,propkey,value,receiver)
//     }
// })
// console.log(1,vue3);
// vue3.c = 3
// console.log(2,vue3);

