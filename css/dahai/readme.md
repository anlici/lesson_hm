## css 底层
   
   - ruleset 规则集
   - selector 选择器
   - declaration 声明 ：property 属性 value 值
   
   -  什么是css？
- css 层叠样式表，是用来描述页面样式的
  - HTML Dom ，css 选择dom元素运用样式规则
  - css 怎么引入：
    - style 内联样式
    - link   外部样式
    - 行内样式 <p style="color:red;"></p>
  - 一般在代码最上面：
    - 先下载样式，再解析dom 应用样式
    - dom + css = render tree 渲染树（显示页面 数据结构）
      -> 浏览器渲染引擎 -> 渲染到页面上
    - 根 body ，叶是标签，有层级关系（优先级）


- 优先级 (计算规则，每个都是乘以10)
  - ！import（最大） > id（100） > 类名（10） > 标签（1） > 通配符（0）  
  - 加分 odd 奇数 偶数 even
    例如：.container ul li:nth-child(odd)  
    一定选择最后一个元素！！

- css 选择器分为几类
  - 基础选择器：
    - 标签选择器
    - 类选择器
    - id 选择器
    - 通配符选择器 * 性能不太好
  - 组合选择器
    - 后代选择器    空格
    - 子元素选择器   >
    - 相邻兄弟选择器 +
    - 通用兄弟选择器 ~

  - 伪类选择器
    ::active ::hover ::selection  鼠标事件,可交互
  - 伪元素选择器
    ::before ::after
