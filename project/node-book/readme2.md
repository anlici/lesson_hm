### props 与 state
- state 用了存储组件内部状态值，必须 setState() 进行修改
  state 状态改变会造成组件重新渲染，所以尽量减少 state 的使用，尽量使用 props 传递数据
- props 用了传递组件外部状态值，不能 setState() 进行修改，具有可读性和不可变性
  不会造成外部组件重新渲染
  因为单项数据流，props 只可读，状态可预测

## 父子组件通信
- ref 类组件通过ref 直接获取组件实例，实现组件通信
  函数式组件通过 useRef() 获取组件实例，实现组件通信？
- props 和 callBack 方式
  父组件 通过自身state 改变，重新渲染，专递props给子组件
  子组件需要修改，就通知父组件修改，父组件修改后，重新渲染，传递props给子组件

- 类组件 setState 和 函数useState 

- 函数式组件，使用js 函数定义react 组件，接收props 作为参数，返回jsx 元素
- 纯函数，相同输入返回相同结果，不会产生任何副作用

### css 单位
- rem 
- vh viewport height 浏览器视图高度 1vh = 视图高度1%
- vw viewport width 浏览器视图宽度 1vw = 视图宽度1%
- rem 相对根元素<html>字体大小 （默认通常是16px）
- em 相对父元素 1em = 父元素字体大小

- width: calc（100px-100%）
- pnpm i postcss-pxtorem -D 将像素转化为rem

### 组件封装
- 公用