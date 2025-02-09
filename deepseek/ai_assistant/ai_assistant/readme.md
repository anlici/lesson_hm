

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