- 简化办axios
    ```js
    function simpleAxios({baseURL = ''} = {}) {
        const interceptors = {
            request: [],
            response: []
        }
        // 拦截器管理
        const useRequestInterceptor = (fn) => {
            interceptors.request.push(fn)
        }
        const useResponseInterceptor = (fn) => {
            interceptors.response.push(fn)
        }

        const execute = (inter,config) => {
            return inter.reduce((chain,interceptor) => {
                return chain.then(interceptor)
            },Promise.resolve(config))
        }

        return {
            useRequestInterceptor,
            useResponseInterceptor,
            get(url) {},
            set(url,data) {},
            sendRequest(method,url,data) {}
        }
    }
    ```

## ajax fetch xmlhttpRequest
- ajax: 底层是依赖xhr，通过监听onreadystatechange 、onLoad、onprogress 等事件来处理请求的，而使用回调函数来处理异步请求结果。（基于xhr实现，基于事件驱动，基于回调函数）
- ajax 可以在不加载整个页面情况下，只更新部分内容，可以减少网络请求，提高性能。
- ajax 需要手动解析请求和响应格式
- ajax 使用状态码和readState 来判断请求是否成功，4 为请求和响应完成
（全局下reload 全部更新 window.location.reload()）


- fetch ：是新的api，基于promise实现，支持链式调用和async await，使用时比ajax 更方便，但是兼容性不好。
- 而且默认不会携带cookie，需要设置credentials: 'include‘。如果服务器需要验证，而没有设置credentials: 'include'，会返回401错误。如果同源，默认same-origin，
- 本身是支持跨域，（如果cors 支持，默认会携带cookie，如果cors 不支持，默认不会携带cookie）。默认不能监控请求进度（可以流式读取，因为没有onprogress事件）
- fetch 可以通过abortController 取消请求，abort

- axios 默认支持xsrf（跨站请求伪造）。服务器在响应中设置csrf-token，客户端在请求中携带csrf-token(添加到请求头中)，服务器验证通过，才能访问。
【xss 跨站脚本攻击，存储类型、dom类型、反射类型（url传给服务器后立即返回用户）】
- 结合 Promise.all 和缓存：对于多个请求，可以先检查缓存，如果缓存未命中再发起请求。