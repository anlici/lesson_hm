# 开发天气

- 组件思想
- 切页面
  - 先写template{{占位}}
  - h5 语义化
  - bem 命名

- BFC Block Formating Context 块级格式化上下文
  
  - nav 里面使用flow，不用overflow:auto/hidden
  - 浮动脱离文档流，不占位置；父级nav 不设置高度，高度自适应，为0
  - 问题：
    - 子元素离开文档流，父元素高度塌陷
```css
.nav {
    overflow: auto;
    padding: 10px;
}
.nav li {
    float: left;
    margin-right: 10px;
}
```
- 浮动和绝对定位区别
  - 定位脱离文档流，不占位置；后面元素直接占
  - position 是四个方向上的定位；完全离开文档流
  - float 没有完全脱离文档流，影响周边文字，形成环绕效果

- overflow属性会创建一个新的块格式化上下文（BFC），BFC会包含浮动元素，使得容器能够正确计算其内容的高度
- 强制包含nav 里面的子元素

- nav 块级元素 不等于 块格式化上下文
  - BFC 是
  - display: flex 