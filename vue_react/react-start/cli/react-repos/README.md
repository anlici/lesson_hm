# react repos 项目列表

- 列出项目列表
  - repos 组件

- react 组件
  - .jsx 组件
  - components 组件 -> 挂载APP.jsx
  - 相比vue 组件 更简洁 react 函数即组件
    - 首字母大写
    - 返回一个jsx，html 结构
  
- 组件类
  - 封装组件 ，函数组件，return html是必须的
  - 渲染数据到页面，函数组件封装ui和数据，数据是state
  - 封装UI + 响应式数据 原生js
   
  
- vue/react 相同/区别
  - 组件化思想
  - 现代前端框架
  = 都要工程化配套
  - 响应式 数据驱动（局部更新数据） ，不需要dom 
  - 数据绑定 {{}} {} 模版
- 区别
  - .vue .jsx
  - 三件 函数组件
  - vue css 在组件内部，react css 单独文件
  - 组（html+ css + js）  完成一件功能

  - react jsx 语法
    - jsx 是react部分，在函数中，最方便的表达UI部分
      本身不可以在浏览器解析，需要babel转译，
      react回去解析jsx html（xml） 语法
      不用class 用className 不和css 冲突

    - jsx 需要闭合标签
      JSX 中，一组元素必须被包裹在一个闭合标签中返回；因此下面这种写法是不允许的：
jsx 代码解读复制代码// 错误写法 ❌
const render = () => (
  <div>Fragment</div>
  <span>yes</span>
)

正确做法是用一对闭合标签包裹：
jsx 代码解读复制代码// 正确写法 ✅
const render = () => (
  <div>
    <div>Fragment</div>
    <span>yes</span>
  </div>
)

那如果我们不想引入额外的标签该怎么办呢？可以用 <></> 来包裹我们想要返回的内容，如下：
jsx 代码解读复制代码const render = () => (
  <>
    <div>Fragment</div>
    <span>yes</span>
  </>
)

乍一看，你是不是觉得  <></> 和我们在使用模板写法时的 <template></template> 作用很相似？
但是实际上，JSX 中被 <></> 标签包裹的内容，会被当做 Fragment 来处理；并且针对 Fragment Vue 在编译和渲染时会有特定的优化策略。
而对于 <template></template>，Vue 只会将其作为一个普通的元素渲染；所以要注意别搞混咯。
