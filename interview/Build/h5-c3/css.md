## tailwindcss 与css 区别
### tailwindcss 优缺点
- 缺点：打包体积大，classname类名长
  - 使用postcss 插件可以减少体积
  - 使用@apply 将多个tailwindcss 类合并成一个类

- react-Content-loader
- 渐进式：@keyframes animation 实现动画效果
- line-clamp：现在文本行数，并且通话vertical 滚动
  overflow 为hidden  ，line-clamp: 3;

## 动态调整文件分片大小和并发数量
- 检测网络速度：navigator.connection api
- getServerLoad 获取服务器负载，再动态调整分片大小和并发数量

## bfc
- 块级格式化上下文，形成一个隔绝渲染区域
- 只要块级盒子参与，内部布局不会影响外部
- 作用：清除浮动，浮动元素脱离文档流，
  导致父元素高度坍塌
  - 处理边距重叠，当相邻块级盒子垂直外边距padding 合并
    使用bfc 可以并发顺序排
  - 多栏布局：实现两栏布局，自适应宽度
- 触发：
  - overflow: hidden|auto|scroll
  - position：absolute|fixed （绝对位置|固定位置）
）
  - float：left|right（左右浮动）
  - display：inline-block（行内块元素）
  - flex 或 grid 

## position 和z-index
- positon： relative|absolute|fixed|static （相对位置|绝对位置|固定位置|静态位置）
- relative 相对定位：正常文档流排序。通过top 、left 等 时视觉位置偏移
- absolute 绝对定位：脱离文档流，通过top。right等属性
  *相对最近已经定位的祖先元素进行位置计算*
- 中心布局（父relative，子absolute）
，弹窗（绝对）
- z-index： 同一层叠上下文堆叠顺序
  只要定位元素或flex/grid 才有效
  只在同一个层叠上下文比较，不同的则各自独立
- 大的在上面
- z-index：999，可能被包在父层叠上下文，
  再大也没用
