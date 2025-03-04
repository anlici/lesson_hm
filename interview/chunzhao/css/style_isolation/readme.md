### 样式隔离
- 在**组件**开发中，确保每个组件样式不会影响其他组件，避免全局样式污染

- vue 是 scoped ；单文件组件（sfc）
  原理：属性选择器
  给组件class 添加一个唯一属性（data-v-hash 值），通过属性选择器实现。
  ~ 
  
  ```vue
  <div class="example" data-v-f3f3eg9>
  </div>
  .example[data-v-f3f3eg9] {
    color: red;
  }
  ```

- global 使用全局，让父组件样式影响子组件
  - >>> 样式穿透,实现**嵌套样式隔离**
  - vue也支持 css module
    :class="$style.text"
    **生成带有随机数的类名**

- react 使用module css
  style.module.css 使用模块化，避免样式冲突
- react 还有样式组件 style component
  pnpm i styled-components
  都是基于组件
### 总结
- 样式隔离，单组件文件下避免全局样式污染
- **主要通过属性选择器和动态生成类名解决**
  （加入随机数，也是hash 串）
- vue 使用scopyed 还有module css , >>> deep 支持嵌套样式
- react 使用module css ，其中css-in-js里面的styled-components
  类名唯一，样式和组件代码写一起，方便维护；

### css3 新特性
- 动画效果：
  - 支持css 属性改变的过渡动画，transition
  - 支持@keyframes 关键帧动画 animation
  - transition 简单，animation 复杂但动画可控
- 变基属性transform 
  translate 移动 roate 旋转 scale 缩放
  也支持3d 变形，比如translate(x,y,z)，设置z轴，性能好（gpu加速)
- 渐变和@font-face 图标字体库
  减少http 请求，优化网页性能
- 布局方式：
  flex 弹性布局
  grid 网格布局
  很好支持移动端适配
- @media 媒体查询 calc 计算属性
  自适应屏幕
- border-radius 圆角 box-shadow 阴影 text-shadow 文字阴影
  background-size 背景图片大小 等
- filter 滤镜效果，不用webgl
- 透明度 背景 rgba
- 属性选择器 伪元素选择器（:before ：after）
- 特别的属性：少 深入 
  backface-visibility 3d 切换
  

