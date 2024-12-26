# vue 哲学

- 前端刀耕火种 dom
  - 开发思想 底层api dom+事件机制
  - v8 引擎（js+单线程） + 渲染引擎（html+css）
  
- jQuery
   js 框架，dom 操作简单
    $ 等封装简化 js开发
- web 1.0(csdn )
  js 代码量增大

- vue / react 
  更关注业务开发（数据，响应式，组件化）不用在他jsdom ，框架封装

- todos 应用
  - .enter 回车
  - @keyup.enter = 'addTodo';输入框获得焦点并且回车键松开
  - 动态绑定业务
    ： v-bind 缩写，：class 绑定类名
    ：class="{}" 双引号内部是js 运行区域
