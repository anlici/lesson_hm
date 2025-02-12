

- ip 安装 openai、Flask 和 python-dotenv 这三个 Python 包，并且指定了一个国内的 Python 包镜像源（https://mirrors.aliyun.com/pypi/simple/）
- pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/

- 没有前后端分离 mvc 开发模式
  - 前端 static 目录下
  - 路由 / 

- 静态服务器
  - 启动静态服务器

## nextjs
- 最佳用户体验seo
- 基于react 框架，内置静态服务器，支持路由；
  react 支持客户端渲染，从服务器下载；
  页面，不包含数据，访问服务器得到；ssr
- 被搜索引擎蜘蛛爬取到，得到数据，可以使用浏览器渲染，得到数据，渲染页面；
- npm js包管理器
- mkdir 项目名
- 

## 状态码
   - 1XX 请求中
   - 2xx 成功
   - 3xx 重定向
   - 4xx 客户端错误
     - 405 请求方法不支持
     @app.route('/chat', methods=['POST'])
   - 5xx 服务器错误

## 业务页面
- 首页
  -  分栏，注释
  - 图标字体库，性能好（如果图片向服务器并发请求）
    - font-awesome 不提供选择，
    - iconfont
    - fas fa-user 
  - css 样式
    - tailwindcss
    - 使用textarea，多行文本输入
    - 语义化标签
  - 弹性布局
    - flex：1 全拿，3个属性集合：
      - flex-grow: 1; 0 不拿，0.5 拿一半 
        1 ：其他子元素没有设置，主元素占完后，其他
      - flex-shrink: 1;
      - flex-basis: 
    - 居中 
      - flex-direction: row | column;
      - align-items 纵轴
      - justify-content 横轴 flex-start space-between 
  - rgba()  a 透明度
    responsive  自适应

  - grid: 网格
    display: grid;
    grid-template-columns: 3fr 1fr; 2列，3:1
    grid-template-rows: 1fr 1fr;
  - gap: 32px; 这是一个单元格之间的间隔
  - transition: all 0.3s ease; 动画 过度，ease 先慢后快再慢，all 改变所有属性、
    多个属性
  - animation 循环动画，桢 关键帧（keyframes）
    animation：
    @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-50px);
            }
    }
  - outline: none; /* 轮廓线*/
    不占盒子模型大小 
  - 面向对象
    - 封装 多态 继承
    - button 基础样式 样式重用
    - 组合业务逻辑
    - UI风格 
      - primary 默认样式 default -> tailwindcss 原子类
      - calc() 内置计算，calc(100% - 32px) 总体-32px
        可能影响重绘重排
      - 滚动条，单页应用，
        10000条数据，滚动条
    - 
  - overflow-y: auto; /* 溢出滚动 垂直方向*/
    滚动条
    overflow: hidden;
    移动端使用 rem font-size
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1); 
    inset 向内 rgba 
    word-wrap:break-word; 多行
  - transition: background-color 0.3s ease, transform 0.3s ease;
  背景或变换属性，过渡平滑

## 响应式布局
- scrollToTop 滚动到顶部;使用br 测试，显示滚动条
- 界面布局
  - grid 布局
  - transition 过渡
  - css 面向对象
- js 
  - 用户体验
    - 阻止默认行为，
      - e.preventDefault();
  - promise 使用
    - async await 后面是 promise 或是实例；
      fetch 返回Promise
   - then 的链式调用，
   - es6+
     promise + async await
     处理函数返回是promise 链式调用
     不是，promise.resolve 
   - 阻止默认行为，表单submit，
   - slice 数组截取，

- html5
  - 语义化标签
  - form 增强 number range text 
  - placeholder 提示
  - 无障碍访问： label for 绑定 id值
- 剪贴板功能 
## BOM 
- 声音录制等
- navigator 浏览器信息
  navigator.userAgent 
  带有 操作系统 浏览器版本 内核
  navigator.clipboard 剪贴板
- localStorage 浏览器缓存
  5M 4096kb 
  4M cookie kb 一般请求都带上
  getItem(null) null 

### 设想需求
- 先输出一段内容，后面用户可以自己输入

- 聊天历史：localStorage
  - 保存：
  