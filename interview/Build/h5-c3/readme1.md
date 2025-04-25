# 前端面试 CSS 和 HTML 考点总结

## CSS 考点

### 1. CSS 基础与选择器

- **选择器类型与优先级**
  - 属性选择器：`ul[class]`, `ol[class]` 等
  - 伪类选择器：`:hover`, `:active`, `:focus`, `:nth-child(n)`, `:nth-of-type(n)`, `:only-of-type`
  - 伪元素选择器：`::before`, `::after` (必须有 `content` 属性)

- **CSS 选择器示例**
  ```css
  /* 选择父元素下的第二个 p 元素 */
  .parent > p:nth-of-type(2)
  
  /* 选择父元素唯一子元素 */
  .parent > p:only-of-type
  ```

### 2. 布局技术

- **盒模型**
  - `box-sizing: border-box` 使元素的宽高包含 padding 和 border
  - 影响重排的盒模型属性：width、height、margin、padding、border

- **定位方式**
  - 相对定位 `position: relative`
  - 绝对定位 `position: absolute`
  - 固定定位 `position: fixed`
  - 绝对定位参考点：相对于最近的已定位（非 static）祖先元素，若无则相对于 html 根元素

- **弹性布局 Flexbox**
  - 主轴与交叉轴
  - `display: flex`
  - `flex-direction`, `justify-content`, `align-items` 等

- **网格布局 Grid**
  - `display: grid`
  - 适合复杂二维布局

### 3. 响应式设计

- **媒体查询**
  ```css
  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
  }
  ```

- **响应式适配方案**
  - 媒体查询 `@media` 根据屏幕宽高设置样式
  - 百分比布局，根据父元素自动调整
  - Flexbox 弹性布局
  - Grid 网格布局
  - rem 单位 (相对于根元素字体大小)
  - vw/vh/vmin/vmax (视口单位)
  - lib-flexible 适配库

### 4. CSS3 新特性

- **过渡与动画**
  - `transition`: 简单过渡效果
  - `animation` 与 `@keyframes`: 复杂可控动画
  - `requestAnimationFrame`: 优化动画性能

- **变换与 3D**
  - `transform`: translate(移动)、rotate(旋转)、scale(缩放)
  - 3D 变换: `translate3d`, `rotate3d`
  - `transform-origin`: 变换原点
  - `backface-visibility`: 3D 切换效果

- **渐变与阴影**
  - 线性渐变、径向渐变
  - `box-shadow`: 盒子阴影
  - `text-shadow`: 文字阴影

- **其他特性**
  - `border-radius`: 圆角
  - `background-size`: 背景图片大小控制
  - `filter`: 滤镜效果
  - `rgba`: 透明度颜色
  - `calc()`: CSS 计算函数

### 5. 样式隔离与模块化

- **样式隔离方案**
  - 通过属性选择器和动态生成类名解决
  - Vue: scoped、CSS Modules、`>>>` (deep) 选择器
  - React: CSS Modules、CSS-in-JS (styled-components)

### 6. 文本处理

- **多行文本截断**
  ```css
  .truncate-multiline {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* 显示行数 */
  }
  ```

## HTML 考点

### 1. 语义化标签

- 合理使用 `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>` 等
- 提高可访问性和 SEO 效果

### 2. 表单与交互

- 表单元素: `<input>`, `<textarea>`, `<select>` 等
- 表单验证与提交
- 继承字体: `font: inherit;`

### 3. 多媒体

- 图片优化: `<img>` 的 `max-width: 100%`
- 响应式图片: `srcset` 属性
- 图片懒加载技术

### 4. 性能优化

#### 重绘与重排

- **重排(回流)**: 几何属性变化导致的布局重新计算
  - 影响因素: width、height、margin、padding、border、position 等
  - 内容修改: textContent、innerHTML
  - 布局信息读取: offsetWidth、offsetHeight、getComputedStyle

- **重绘**: 样式改变但不影响布局
  - 颜色、背景、阴影等变化

- **优化策略**:
  - 批量修改 DOM: 使用类名切换或 cssText
  - 使用文档碎片: `document.createDocumentFragment()`
  - 脱离文档流操作: 先设置 `display: none`，修改后再恢复
  - 使用 `transform` 代替位置变化
  - 缓存布局信息

#### 资源优化

- 图片优化:
  - 裁剪与压缩
  - 使用 WebP 格式
  - 小图标使用字体图标 (如 iconfont)
  - 简单小图使用 base64 编码

- CSS 优化:
  - 使用 CSS 阴影代替图片
  - 合理使用 GPU 加速 (transform, opacity)

### 5. 浏览器渲染流程

1. 解析 HTML 生成 DOM 树
2. 解析 CSS 生成 CSSOM 树
3. 合并 DOM 和 CSSOM 形成渲染树
4. 布局计算 (Layout/Reflow)
5. 绘制 (Paint)
6. 合成 (Composite)

## 实际应用案例

### 1px 边框问题解决方案

```css
.box::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border: 1px solid red;
    transform: scaleY(0.5);
    transform-origin: bottom center;
    box-sizing: border-box;
}
```
