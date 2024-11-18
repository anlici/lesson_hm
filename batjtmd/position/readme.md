- 定位

- img行内元素，

- 行内元素有哪些，块级元素有哪些
  行内元素：a,b,span,img,input,select,textarea,label,br

## 文档流（文档流）
- 块级元素，从上到下，从左到右，占满一行，宽度默认100%，高度默认由内容决定
- 行内元素，从左到右，从上到下，宽度由内容决定，
- doucument html 文档 
  网页结构

  下载html，按照顺序从上到下，从里面到外
  如果块级元素，暂居整个宽度
  行内元素，下载img按照像素点渲染绘制，按照顺序，从左到右，一行排满，排不下，换行

- textarea 多行文本输入框
  
- 盒子模型
  - 内容（content）、内边距（padding）、边框（border）和外边距（margin）、
  - 首元素同外面盒子进行margin的重叠
  - 按文档流先绘制 #box1 dom?
    精确计算盒子大小 = 内容（width*height） + 内边距(padding) + 边框(border) + 外边距(margin)
    位置 在原来的位置给margin 间距

## position 属性和原理
  - relative 
    - 相对在原来本该的位置进行定位，默认位置 相对left和top，bottom .. 
    - 盒子原来的占位（文档流） 不受影响，其他元素只能按照文档流进行定位
    - fixed 固定一个位置不滚动


  - absolute
    - 离开文档流
    - 找到最近的 祖先有定位节点元素，如果没有，找body进行定位



如何实现水平和垂直居中对齐？

使用 Flexbox：

css
.container { display: flex; justify-content: center; align-items: center; }


plainText
- 使用 Grid：
```css
.container {
  display: grid;
  place-items: center;
}
使用绝对定位和负边距：

css
.container { position: relative; } .item { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }


plainText
如何实现响应式设计？

使用媒体查询：

css
@media (max-width: 768px) {
  /* 在小屏幕上应用的样式 */
}
使用 CSS 变量和 JavaScript 来动态调整样式。
如何使用 CSS 实现一个三角形？

使用 border 属性：

css
.triangle { width: 0; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid #555; }


plainText
如何使用 JavaScript 库（如 jQuery）来操作 DOM 元素的定位？

使用 jQuery 的 offset()、position() 和 css() 方法：

javascript
// 获取元素的偏移位置
var offset = $('#element').offset();

// 获取元素的相对位置
var position = $('#element').position();

// 设置元素的 CSS 样式
$('#element').css({
  'top': '100px',
  'left': '200px'
});
如何处理浏览器兼容性问题？

使用 CSS 前缀（如 -webkit-、-moz-、-ms-、-o-）来确保样式在不同浏览器中正常工作。
使用 JavaScript 库（如 Modernizr）来检测浏览器特性并提供相应的解决方案。