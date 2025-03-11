# deepseek 页面
## scrollup 流式输出
  刘式输出：逐字符渲染模拟真实的打字效果，让用户感知到 AI 正在“思考”和“回复”，而不是一次性显示全部内容。这种渐进式的反馈更符合人类交互习惯，提升了真实感。
  平滑滚动：通过 behavior: 'smooth' 实现平滑滚动，避免生硬的跳转，增强视觉流畅性。
- 实时滚动：在流式输出过程中，自动滚动到最新消息，确保用户无需手动操作即可看到完整的回复内容。
  复制功能：在流式输出完成后，动态添加复制按钮，方便用户快速复制 AI 的回复内容
- 分步渲染：流式输出通过定时器分批渲染内容，避免一次性渲染大量文本导致页面卡顿。
  局部更新：只更新当前消息的 DOM 节点，减少对整个页面的重绘和回流。
## domContentLoaded 事件
- DOMContentLoaded 事件在文档解析完成时触发，表示文档已经加载完毕，但可能尚未加载完所有的外部资源，如图片、样式表等。
- 我们在事件回调中完成了以下操作：
  绑定了发送消息按钮的点击事件和输入框的回车键事件，确保用户可以正常发送消息。
  从 localStorage 中加载了用户的聊天记录，并将其渲染到页面上，让用户能够看到之前的对话内容。
  初始化了滚动条位置和对话历史列表，确保页面状态正确。
- window.onload：等待所有资源（包括图片、样式表等）加载完成，适合需要依赖完整资源的场景。
- 对于动态加载的内容，可以使用 MutationObserver 或事件委托来处理

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
        主轴：row 默认水平
      - flex-direction: row | column;
      - align-items 纵轴center
      - justify-content 横轴 flex-start space-between 两端对齐 
  - rgba()  a 透明度 rgba(0,0,0,0.5) 0.5是透明度
    背景叠加：在图片或视频上叠加半透明背景，增强文字可读性。
    视觉层次：通过透明度区分不同层级的元素（如模态框背景）。
  - responsive  自适应
    媒体查询：@media (min-width: 768px) { ... }
    响应式设计：根据设备宽度调整布局（百分比，视口单位，em/rem）  
    - 弹性布局：flex-wrap: wrap; 自动换行
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 动态分配列宽

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
  - onclick="startNewConversation() 指向window，不推荐使用；
    可以进行分离：模块化，addEventListener 指向对象，可以使用第三个参数管理传播；
  - dom level 0 事件：
    dom level 涉及event 对象，
  - 冒泡机制：事件小到大，找到根；大到小，找到事件；
    事件委托：提升性能，委托父元素，
    event.target 目标元素 data-index 数据属性

- 使用hashmap 存储事件，进行保存和删除历史对话

## javascript 高级程序设计
- 事件，冒泡等

- event 事件机制
  - onclick （内嵌 dom 0）addEventListener（事件监听 dom 2）
    button.addEventListener('click', () => {
        console.log(this.innerHTML);
    })

  - 事件冒泡 | 事件捕获 | 事件委托？ 
  - 暂时性死区，不使用var ，防止全局污染，
    let const 设定window. 暴露全局

  - 关注用户：产品需求，根据需求调整
    chat聊天，按照时间，进行排序，业务逻辑，

# AI Assistant 全栈项目
- 大前端全栈
- 后端驱动全栈为主
  - 设计模式
    大前端 前端 mvvm 思想  model(数据状态 useState, ref/reactive, api/axios 接口， pinia) view

    model 模型层 = 数据定义 + 数据处理 + 数据存储 + 数据管理 + 数据请求
    view 视图层 = component 组件  views  components
    vm 视图模型层 数据绑定{} {{}}  数据驱动界面（v-if/v-show/v-for）...  script 事件监听 @change  onChange props 


    写到哪算哪， 产品设计线框图 idear 亮点  10分钟 

    后端 mvc 思想  数据库 mysql table 简历模型
    model 数据库独立于后端的  数据模型文件 schema orm 
    view 视图层 = 前端页面 index.html about.html
    controller 控制器层

  - 并发数
  - 基础设施 
  - DDos 肉鸡攻击 qps 

## 后端全栈AI 项目 
- python flask 框架  node koa 
  app.py  单点入口
- 纯js
- deepseek 在线api 


## 写文章(ts + next.js + react 思想) + leetcode 150 
  面试

## 项目准备
- 安装python 
  3.10.6

- 配置虚拟环境
  python -m venv name
  本地项目项目依赖 不受全局影响，不影响全局 
  项目下有了项目依赖包
  source ai_assistant/bin/activate
- 安装依赖

  pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/

  openai 已经成为了aigc LLM 的事实标准 
  /completion /chat 
  base_url deepseek 

  Flask koa 后端框架

  - 没有做前后端分离 mvc 开发模式 
    - 前端 static 目录下
    - 路由 /  显示index.html 

- 静态文件
  - js/css/img FE 
  - 启动静态服务器

- 状态码
  1XX 请求中...
  2XX 成功  201 Created 
  3XX 重定向
  4XX 客户端错误 
    405 Method Not Allowed 方法不允许
    代码不会出问题
  5XX 服务器错误

  响应头第一个数据包 浏览器或程序 就通过状态码知道怎么处理
  程序逻辑的一部分

- env

## 界面

- html 结构
  - 写注释
  - 图标字体库 font-awesome iconfont
    - 性能优化
    - 小图标都用图片，http 请求数的暴涨，网页同时并发请求数是有上限的
    - 下载一个图标字体文件 
    - fas fa-comment-alt  
    - font-awesome 不提供选择， 都是一样的 
  - css 样式的组合 面向对象特性 多态 方便复用和维护
    tailwindcss 原子类
  - textarea LLM 支持比较多的tokens 出入长度 kimi deepseek
  - html5 
    - 语义化标签
    - 无障碍访问 
      label + for 
    - form 表达增强功能
      input  type [number|range....]
      placeholder 
- css 
  - 弹性布局
    - 居中
    - flex-direction: row|column
    - align-items 纵轴
    - justify-content 横轴 flex-start space-between 
  - grid 布局
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap 24px
  - 响应式布局
    width max-width 
    @media screen and (max-width: 768px) {
      
    }
  - transition animation 
    - width transition ipad 旋转屏幕
    - transition: 多个属性分别设置
  - 面向对象思想
    - 封装 多态 继承
    - button 样式组件 基础样式
      UI风格 antd 
    - 组合业务样式
      primary secondary default -> tailwindcss 原子类
  - calc
    CSS中执行简单的数学运算,用于动态布局设计中精确控制元素大小与位置。
    性能有一点的问题， 不能滥用， 涉及不必要的重绘重排
  - flex: 1;
    flex-grow 1 其他子元素没有设置， 主元素，其他元素占完后，剩下的都归他来grow ; 多个子元素都设置 按比例划分。
    flex-basis
    flex-shrink

- js 
  - 用户体验
    - keydown enter 阻止默认行为
    - event.preventDefault
  - promise 的使用
    await 后面的肯定是promise 或返回promise实例的函数 
    then 链式调用
      处理函数返回的任然是promise 链式调用
      如果不是呢？ promise.resolve()包一下
  - BOM
    - navigator.userAgent
    操作系统 浏览器版本 内核 
    - navigator.clipboard 
  - localStorage
    - 本地存储 
    - 本地存储的大小 5M 4096kb  4096 * 1024 4M  cookie kb 带上
    - getItem(null) null  
    - setItem
  - array, string 方法强化一下
    slice 负数 
  - event 事件机制
    - onclick(内嵌 DOM 0) addEventListener(事件监听 DOM 2 )
    - 小红书（JS高级程序设计）
    - 事件冒泡| 捕获
    - 事件委托

- 产品需求
  - 产品经理提出产品需求
  - 设计师 界面设计 
  - 前端 vue/react 完成需求
    - 分析
    - 技术设计
    - 代码实现
    - debug 
    - 交付上线
  - 后端 数据和mvc 提供api

- 代码风格
  - 注释
  - 封装 
    - 一个函数只做一件事
    - 一个函数不超过10行
  - es6+ 风格
    promise + async/await 
## 业务
  - 界面业务
    - grid布局
    - transition
    - css 面向对象
  - scrollToTop 业务
  - 发消息业务
  - 流式输出
  - 剪贴版功能
  - 聊天历史分组功能
    - localStorage chatLog