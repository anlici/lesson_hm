- package.json
  - 项目描述文件
  - dependencies 依赖部分
  - devDependencies 开发期间依赖
  - scripts 脚本

  - 版本号 意义
    - 1.0.0 稳定版 1主版本 0次更新 0补丁
    - 0.0.1 测试版
    > 1.0.0 正式版 商业 成熟
    - 2.0.0 新功能 大改动
- 解构{}
  -  解构是一种按照key从数组[下标]或对象{key}中提取value数据的简洁方式，
  - 
  - ```javascript
    let arr = [1, 2, 3];
    let [a, b, c] = arr;
    console.log(a); // 输出 1
    ```
- let [competion,...likes] = ['vue','react','angular']
  - 剩余运算符 放到likes中
- const highlyHTML = await page.$eval(targetSelctor, (el) => el.innerHTML);：使用 $eval 方法在页面上执行一个函数，该函数接收元素 el 并返回其 innerHTML，将结果存储在 highlyHTML 中。