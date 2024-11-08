# 星球大战
- 先写结构，再写样式
- DOCTYPE 是声明文档类型的
  <!DOCTYPE html> 声明这是一个html5文档
- head 是头部
content="width=device-width, initial-scale=1.0"：这是 viewport 标签的具体设置内容。width=device-width 表示视口宽度等于设备宽度，initial-scale=1.0 表示初始缩放比例为 1.0，即不缩放。

  viewport 视口 视口是浏览器显示页面的区域，在移动端，视口宽度和设备宽度一致
- * css 通配符，表示所有元素
  margin: 0;padding:0 外边距和内边距为0
  因为不同浏览器厂商默认样式不一样，需要在页面中重置样式reset
  任何浏览器都是“白纸”，在所有浏览器体验一致
  * 性能不好

- 居中
  flex 弹性布局
  - 绝对路径 position：absolute
    - 百分比 相对于父元素
  - transform 变基属性
    - translate 位移
      x 
      y 上移动 负 下 正
  - 背景大法
    盒子在页面占位会准确表示

- css动画
  - animation 动画
  - keyframes 关键帧
  - transform scale 缩放 translateZ 深度
  - 飞船模拟动画
  - 1% 时间差
  - transform-style:perspective-3d 3d支持 
  - perspective :800px 眼睛离屏幕距离，视点
  
  - inline 内联 行内元素 不支持transform，display 属性切换为inline-block 


- 高并发