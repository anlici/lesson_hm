# batjtmd

## 腾讯
### WEUI 前端框架

- 微信小程序的 UI 框架   基于 flex 布局  移动端开发
### BEM 国际命名规范
> 简单，可复用根据页面结构和功能区块 
  .weui-cells Block 块级
  Element 区块由元素构成
  BE 可以嵌套
  
- 先写结构
  - 总结构 page 盒子
  - 上下结构
  - title + desc
  - button 按钮

- 页面结构套路
  - .page>.page__hd>.page__bd>.page__ft   上下结构
  - .page  Block  块级
    - .page_hd  标题 Element  元素
    - .page_bd  内容
    - .page_ft  底部
  
  - .weui-btn
    项目代号 + 元素

  - cells 是一个集合，可以嵌套多个cell相关div

- css 
  