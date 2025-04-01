// 脱离文档流
const el = document.createElement('div');

el.style.display = 'none';
el.style.position = 'absolute'; // 绝对定位,移除屏幕外
// 多行操作
el.style.display = 'block'

// 获取元素位置
let top = el.offsetTop; // 相对已经定位的祖先元素offsetParent 顶部偏移量
// for (let i = 0; i < 100; i++) {
//   el.style.top = top + 1 +  'px';
// }
let finalTop = top + 100;
el.style.top = finalTop + 'px';// 一次重排

// transform 

el.style.left = '100px'; // 重排
el.style.transform = 'translateY(100px)'; // 不重排,重绘
