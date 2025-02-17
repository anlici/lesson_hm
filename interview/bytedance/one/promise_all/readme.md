### react 性能优化
- useMemo 缓存
- useCallback 缓存

- useEffect 不是纯函数
  redux的 action是js对象，创建action的creator 可以是 纯函数
  纯函数是相同输入有相同输出，不会有副作用

- interface ts 
  '自定义类型'
  type '自定义类型' = 'xxx'
  - 子组件 props 父组件必须传递哪些数据
- 组件响应式
  - 改变 组件重新运行
  - 子组件 开销大，产生性能问题

- memo 依赖向 相关进行更新
- useCallback 缓存
