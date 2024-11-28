### 前端出海

  - 在国内大厂做全球业务
    - 英语 ai翻译
    - 
  - for of 和for in
    - for of  简洁，代码可读性提升
      遍历可迭代对象值，按固定顺序，
      使用symbol.iterator接口可迭代对象
    let 块级，
    - for in 遍历键值，包含原型链上属性、
     不适用数组索引
    ```js
    const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key); // 输出: a, b, c
  console.log(obj[key]); // 输出: 1, 2, 3
}

const arr = ['apple', 'banana', 'orange'];

for (const index in arr) {
  console.log(index); // 输出: 0, 1, 2
  console.log(arr[index]); // 输出: apple, banana, orange
}
```

   - 局部main 执行上下文
     - 词法环境 