## 版本号判断
- 

## 垃圾回收
- 自动回溯
- 标记
- 对象池复用，创建小对象考虑复用
- 分批处理：大量dom 分批，避免gc 频繁触发
- 手动解除引用，大型对象使用完毕改为null

## diff keys 
- set 去重，使用Object.keys 展开
- for of 去重，拿到新旧对象

## 轮询函数 polling 能够重新发送请求
- 轮询，购物平台，秒杀，抢票库存，掘金消息冒泡，进行轮询；
- 首页消息，webscoket 性能消耗大，
- 定时操作，

alert([].constructor === Object) // 

## 先小目标再大目标，捕获和冒泡
- 先从window开始，捕获到target，再从target开始冒泡
- 事件委托，冒泡阶段，让父元素一次性执行多个事件
- 事件代理机制，
- 默认冒泡，event.stopPropagation();停止

## ts 类型系统
- js的草鸡，添加静态类型和泛型、接口等其他功能
- 浏览器无法直接运行ts，需要编译成js
- ts编译成js后，会自动添加类型，但是不会添加其他功能，比如泛型，接口等
- 对象：
  {name:string,age:number}
  string[] // 数组 每一项
  (x:number,y:number) => number
- 泛型
- 联合类型， | 
- 交叉类型，& 
- 字母量 'get' | 'post' | 'put' | 'delete' 
- 类型别名 type 和 接口 interface
  - interface ： 描述对象，使用extends 继承
  - type ： 描述类型，支持元组、联合、交叉
- 泛型： <T> 
- 自动推导： <T=number>
- 元组类型： [string,number]
- function getPersonInfo(): [string,number] {
    return ['name',1]
}