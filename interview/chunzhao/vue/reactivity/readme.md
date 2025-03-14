## vue 响应式
- 响应式原理：
- ref / reactive api
- proxy 能够代理一个对象或数组，通过get set 实现对新建对象的修改 
- Object.defineProperty 是vue2 响应式原理，通过get set 实现对对象的修改，
- reactive 是 Vue3 的响应式 API，它返回一个代理对象，这个代理对象可以代理一个对象或者一个数组。
- ref 是响应式对象，能处理对象，也可以处理简单类型

- vue 运行 run time，组件使用虚拟 dom，编译成真实 dom
  组件、响应式(mvvm)、虚拟dom
  适配各种UI 程序（网页、小程序、Nactive App）
- 响应式不依赖浏览器，可以在node环境
- reactive 包装了一个普通对象编程响应式对象


const arr = [[1,2,3],[4,5,6],[7,8,9]]
res = [1,2,3,6,9,8,7,4,5]
## 响应式机制主要功能
- 将**普通对象**封装成响应式对象，**拦截数据的获取和修改操作**(proxy 的get set)，实现依赖数据的自动化更新（{{}}）
- 专注于业务，实现视图更新，脱离dom 性能高。

- 步骤
- proxy 对象代理
- 收集依赖，订阅？（effect）

## 依赖地图 effect proxy优势
- 懒代理，默认代理第一层
  访问某个属性后触发get 拦截器，对嵌套对象的属性进行代理，实现嵌套数据的响应式
  if (isObject(res)) {
    return reactive(res); // 深代理
}
  递归 
- 为了性能，使用浅代理
  shallowReactive

- ref 简单数据类型，使用get set 进行响应拦截
  复杂数据类型，回到reactive 对象代理
  
- defineProperty 必须一次性完成深度代理

## vue 与 react 区别
- 设计理念与特性：
  - vue 渐进式框架:专注业务,程序员专注视图层，按需引入路由
  - vue 基于html 模版（也支持jsx但非主流），通过指令实现业务逻辑
  - vue 自动跟踪依赖（vue3 使用proxy，vue2 使用Object.defineProperty），数据变化时视图自动更新

  - react 专注 组件化，需要结合其他库（react-router、redux、axios）构建完整应用
  - 使用jsx 语法，将逻辑和标签混合
  - 不可变数据：状态更新显式调用setState或useState（类组件）,依赖手动控制渲染（如React.memo）
- 组件化与代码组织
  - vue 组件化：单文件（sfc）将模板、逻辑和样式集中管理，
    选项式组件options api，，将选项（data methods computed props）与模板分离;组合式组件composition api，将逻辑与模板分离
  - react ：useState等管理状态和副作用，强调逻辑复用和组合
    类组件：传统方式（逐渐被hooks 替代），依赖声明周期
- 数据流和状态管理
  - vue 使用v-model 实现数据双向绑定，依赖收集，数据变化时视图更新;简化表单处理，底层是单项数据流+事件监听语法糖
  - vuex 强耦合于vue生态，集成度高但灵活性差
  - react 单向数据流，父传子通过props，子传父通过回调函数更新父组件状态
    context api/redux：状态管理，解耦vue生态，灵活
- 渲染性能
    - vue 自动化优化，响应式系统追踪依赖，组件数更新更
    编译时，静态模板分析，生成优化后的虚拟dom
    - react 需要手动优化，比如使用useMemo、useCallback等，减少不必要的渲染
- 社区
    - vue 开箱即用，官方维护路由vue router，官方维护状态管理vuex
    可以快速迭代、如果团队偏好约定，可以快速开发
    - react 手动选择，社区庞大，js 优先
    大型项目，使用快平台开发，深度定制需求

    


- vue 源码：
  - compiler：编译模板，生成虚拟dom
  - runtime：运行时，渲染虚拟dom
  - sfc：单文件组件，编译成js
  - ssr: 服务端渲染，服务端渲染时，编译成js
  - server-renderer: 服务端渲染器，服务端渲染时，渲染成html

## reactive 与 ref 响应式api
- reactive 是借助es6 打造的proxy 代理作用来实现，代理一个引用类型的对象。当该属性被读取值时，返回改属性的值并且为该属性添加一个effect 副作用函数；当属性被修改时，会调用该属性的effect 副作用函数，并更新该属性的值。
- ref 既可以代理原始类型也可以代理引用类型，当代理是原始类型，返回一个RefImpl实例，通过类身上get set 属性读取和修改值；当代理是引用类型时，走的还是reactive 调用机制

## 垃圾回收机制 garbage collection gc
- js 内存管理：
  - 标记-清除
  - 引用计数

- weakMap / weakSet 弱引用 避免内存泄漏
  - 弱引用：键对象，垃圾回收器回收这个对象内存
  - 
  
## get post 区别
- 形式上：get 是将信息使用查询字符串query string 放在URL中，post 是讲信息放在请求体body中，post 请求可以包含更复杂的数据，如文件上传等。
- 安全性：get 请求信息在url 中明文暴露，post 在请求体中加密，使用抓包才能查看到
- get 上传信息可能受到浏览器截断，post 理论上没有限制，但服务器会对请求体有限制
- get 请求可以缓存，下一次浏览器访问同一个页面先会再缓存中查找，post 不可以缓存

## 深拷贝 节流，手写
```js
// 节流：利用闭包存放上一次点击按钮时间，比较当前点击和上一次是否大于设定时间，如果大于设定时间，则执行回调函数，否则不执行
function throttle(fn,delay=1000) {
    let preTime = 0
    return function(..args) {
        let nowTime = new Date();
        if(nowTime - preTime > delay) {
            fn.call(this,...args)
            preTime = nowTime
        }   
    }
}
```
- 浅拷贝，加上递归
  复杂对象或数组，包含嵌套属性
```js
function deepClone() {
  let clone = obj instanceof Array ? []:{}
  for(let key in obj) {
    // 判断是否是自身属性
    if(obj.defineProperty(key)) {
      // 判断是否是引用类型（数组、对象）
      if(obj[key] instanceof Object) {
        clone[key] = deepClone(obj[key])
      } else{
        clone[key] = obj[key]
      }
    }
  }
  return clone
}
```
```js
function deepClone(obj) {
    let clone = obj instaceof Array ? []:{}
    for(let key in obj) {
        // 判断是否是自身属性
        if(obj.hasOwnProperty(key) ) {
            // 判断是否是引用类型（数组、对象）
            if(obj[key] instaceof Object) {
                clone[key] = deepClone(obj[key])
            } else {
                // 简单类型
                clone[key] = obj[key]
            }
        }
    }
    return clone
}
```
## hash 和 history 路由
- hash 使用 '#' 作为路由标识符，通过监听hashchange 事件，获取当hash变化，
- history 使用history.pushState() 用于修改url 地址，并且不触发页面刷新；通过监听popstate事件，监听浏览器前进和后退操作，动态更新页面内容
- hash 路由通话url 中 # 实现，不会发生到服务器；
  history 路由通过js 里面使用query string 查询字符串操作url，会到服务器；url 美观，支持seo，兼容性差

## 跨域
- 同源策略：浏览器的安全机制，禁止不同源进行访问
  如：协议、端口、域名不同，http https
- 解决：1，jsonp：利用script 标签不受同源策略影响，通过动态创建src 属性向服务端提供接口，并且带上回调函数名，服务器返回回调函数并且携带js代码
- 2，cors： 设置请求头（Access-Control-Allow-Origin） 
  浏览器发起跨域请求检查响应头是否允许本次请求
- 3，nginx：设置代理，将请求转发到目标服务器，并且设置允许跨域请求

## http与https
HTTPS协议需要到CA申请证书，一般免费的证书比较少，因而需要一定费用。

2、HTTP是超文本传输协议，信息是明文传输，HTTPS则是具有安全性的SSL加密传输协议。

3、HTTP和HTTPS使用的是完全不同的链接方式，用的端口也不一样，前者是80端口，后者是443端口。

4、HTTP的链接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP协议安全。

