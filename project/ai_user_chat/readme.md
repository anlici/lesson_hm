# AI全栈项目

 - 架构
   - frontend  前端
   
   - backend   后端 ,提供数据接口 user.json 作为数据文件
     文件型数据 
     通过http服务，从本地http:localhost:3000/users 提供数据接口
     json-server
     - 提供数据接口
     - npm i json-server 
       - http server 通过JSON 的api服务器，响应http请求 localhost:3000
       - json 文件，也就是user.json 
       - 修改package.json 增加启动命令 把scripts 增加
         "scripts":{"dev":"json-server --watch user.json --port 3000" }
       - npm run dev 启动json server

   
   - llm  ai server 大语言模型
    - 序列化 json.stringify(users) //users 是一个对象
    - 反序列化  JSON.parse(users) //users 是一个字符串

    - rag? 检索 增强 生成
    - ai与运维
