## css 样式设计
- transform: scaleY(0.5) 垂直方向缩小原来的一半
- border: 10px solid rgba(0,0,0,0.5); 边框 宽度为10px，颜色为半透明
- transform-origin: 50% 50%; 边框的起始点为50% 50%

- 伪元素和伪类
  - 伪元素：::before, ::after 在元素前后添加内容，一定有content属性 不会生成实际dom 节点，不能通过js 操作，但css 样式进行控制
  - 伪类：:hover, :active, :focus 鼠标移入，激活，获取焦点
    :nth-child(n) odd 奇数 even 偶数
- 绝对定位 参考点怎么选择
  - 父元素相对定位relative，子元素选择其他定位（absolute，fixed），子元素相对父元素绝对定位
  - 相对最近已经定位（非static）祖先进行定位
    如果没有祖先，则相对html 根元素进行定位
  

## 流式输出
- 思考：
  - completion/ chat stream:true
  - 大模型思考 输出流式数据
    基于token 神经网络一个一个token输出，后面基于前面token 的预测结果
- 网络层：
  http 0.9 
  1.0 
  1.1 
  2.0  服务器推送 服务器伺服状态
  3.0  
  
    
- AGI ：人工智能 多模态能力
  软件+硬件 + 算法 + 数据