## localStroge

- 本地储存
- 以上哪些属于h5特性
  - <!DOCTYPE html> h5 文档类型
  - <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover">
  - viewport 视口 1个css 像素相对1个像素

  - 移动时代早期，pc为主，页面的宽度是固定的，pc的分辨率是固定的
  - 不是很好体验，一般也不太需要
  - user-scalable=no 不允许用户缩放
  - placeholder="Item Name" 
      required>
  
- this.qs()
  - 性能优化，多个表单，直接在指定的表单上进行操作；沿着dom树向下查找；vue 虚拟dom？
  - 事件委托，指向父级元素，在父级元素上进行操作，减少事件的绑定
  - 上下文相关，在这个例子中，this 指的是表单 addItems，因此使用 this.querySelector 可以直接在表单的上下文中查找元素
- dom。还有任何父节点都可以，用qs

- 事件委托，当有多个元素需要绑定相同的事件时，可以使用事件委托来减少事件绑定的次数，提高性能。
  - 事件委托是一种将事件处理程序绑定到父级元素上，而不是绑定到每个子元素上的技术。

- 代码风格
  - 事件处理函数有占位符，在事件处理函数中使用占位符可以方便地进行调试和错误处理。
  - 性能优化
  - 函数名，可读性
  - es6 对象字面量 key:value 同名，省略

- 函数 就是一个功能，不过10行
- localStorage 本地不联网就可以使用，
- 浏览器开辟5mb 左右存储空间，
- localStorage 只能存储字符串，setItem，getItem，key value 
- JSON.stringify() JSON.parse() 反序列化，取出
- 

- 问题：选中的，在页面刷新后，还是选中的
  - 解决：在页面加载时，判断localStorage中是否有选中的项，如果有，就选中它
  - 事件委托机制，