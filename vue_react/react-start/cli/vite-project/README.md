# 为啥最近学react
- 生态完善，从Facebook 复杂项目，
- 最近火了，UI 组件界面工程完善
- vue 上手快，语法简单；react因为AI的影响，语法复杂

- jsx 唯一标签，
  相比于vue，jsx 更灵活，不在原生js进行解析，使用babel进行解析
- vue 不用考虑太多性能优化问题
- fragment，作为根节点，不渲染；
  唯一标签，空标签，作为其他标签的容器，又会在挂载后不污染html
  createDocumentFragment 使用文档碎片
  如果直接使用div，频繁进行dom操作，造成重绘和回流，
  性能不好

- jsx 在vue 如何使用？
  高效工程化
  - 支持原生ES（script），不用想webpack把所有代码打包
  - 按需加载，不用想vue-router 路由懒加载 ？
  - 

- react 只能使用<></> 一个外层节点？
  
- {} 监听函数没有return，如果没有return，直接使用（），把整个作为返回值