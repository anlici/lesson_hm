##


- 盒子（本身）大小
- box-sizing : border+padding+content ,content-box
- 标准盒模型，ie盒模型
  - 标准盒模型：content-box（默认，计算内容）
    - width = content
    - height = content
  - ie盒模型：border-box
    - width = content + padding + border
    - height = content + padding + border

- 文档流
  - body 块级

- ie 浏览器
  - 怪异模式，本身有
  - 标准模式

- 认标签，也转变 display 
- block 块级
- 行内inline 本身不能设置宽高，只又内容决定；
- 块级可以
  
  - 块级为何默认宽度100%？
    - html 是第一个bfc 元素，body 参与html的bfc
    - 页面布局是html负责，页面布局 
    - 块级元素是从上到下，行内从左到右
  
  - html是根元素，BFC block formatting context 块级格式化上下文
    - html是最顶的bfc

  - 格式化上下文？ Formatting Context
    - 为何弹性布局 打破html bfc ？
      - bfc 不是某个元素特例。弹性布局，创立 ffc Flex Formatting Context
      - bfc 独立 全新独立渲染区域
      - flex 听 flex-direction : row|column 
    - GFC 网格布局
      - 
- BFC
  - 独立渲染区域，互不干扰
  - block level box 垂直方向，一个接一个。且宽度100%

  - 盒子垂直方向距离是margin决定，同一个bfc 上下margin 会发生重叠
   大的bfc 包含小的bfc
    - overflow: hidden，auto,scollor.. 不为visible
    - 每个元素margin 左边，与包含快border 左边相接触，即使存在浮动一样
    - bfc 区域不会与float box 重叠
    - 计算bfc高度时，浮动也参与计算

- 如何新建立一个bfc 

- margin 外边距