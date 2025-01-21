## babel 有了解？原理和
  
   babel 编译原理 ，实现计算表格公式执行器
- babel 用来做什么
  - 将高版本的 js 语法转化为低版本的 js 
  - 将ts 转为js
  - 降级处理，polyfill ，vite rollup
- 连接现代js，适应老式浏览器；解析，转换，生成
- babel 是一个工具链，主要包括：
  1，解析器：将代码解析成抽象语法树
  2，转换器：对抽象语法树进行转换
  3，生成器：将转换后的抽象语法树生成代码
- 配置文件：.babelrc
  预设：babel-preset-env
  插件系统：babel-plugin-transform-runtime
  
- babel ，webpack 都有两种使用途径：
  1，命令行 2，配置文件

- 编译原理，底层
  let x = 1+2
  转成：var x = 1+2

  1分词：大 家 好 ， 我 是 张 三
  tokenizer 分词器，将句子劈开
  2分词连接，语法分析 parser
  语法分析：将词法单元转化成抽象语法树 
   大家 好 ， 我 是 张三
   3理解，语义分析
   4表达：生成generator 或是执行 interpretor 

- json 描述
- 消费平台数据->低代码平台 dsl 
- 

- watch 