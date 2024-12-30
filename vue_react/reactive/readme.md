## 响应式

- getter

- setter

Object.defineProperty(obj, propertyName, descriptor);
obj：要定义或修改属性的目标对象。
propertyName：需要定义或修改的属性名（字符串）。
descriptor：属性描述符，用于定义属性的行为。
## 属性描述符的主要字段
value：属性的值。
writable：是否允许修改 value。
enumerable：是否允许枚举属性。
configurable：是否允许删除属性或修改属性描述符。
get：一个返回属性值的函数（getter）。
set：一个设置属性值的函数（setter）。

- 数据业务 value count -> 包装响应式对象 ref => 代理 proxy,被拦截去更新依赖的数据的地方

   - 声明 数据（value）
   - es5 Object.defineProperty(obj,propertyName,descriptor)
   - 