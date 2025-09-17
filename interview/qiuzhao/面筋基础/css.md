1. `display` 有哪些属性？`block`, `inline`, `inline-block` 有啥区别？
- none
- block 元素独占一行
- inline 元素可以和其他元素在同一行
- inline-block 元素可以和其他元素在同一行，但是可以设置宽高
2. 怎么让子元素宽度撑满父元素？
- width: 100% - 最直接
flex: 1 - 最灵活
Grid布局 - 最现代

## 隐藏元素有哪些方法？
- CSS隐藏元素主要有三种核心方法：display: none 完全移除元素且不占空间，常用于响应式布局；
- **visibility: hidden 隐藏元素但保留占位空间，避免布局抖动**；
- opacity: 0 设置透明度为0，元素仍可交互且支持过渡动画，通常配合 `pointer-events: none 禁用点击`。
- 其他方法包括 transform: scale(0) 用于缩放动画、
- position: absolute; left: -9999px 用于无障碍场景（屏幕阅读器仍可访问）
- clip-path: inset(100%) 用于裁剪动画等。
    在实际项目中，我会根据具体需求选择：需要完全移除用 display: none，
    需要动画效果用 opacity，需要保持布局稳定用 visibility: hidden。