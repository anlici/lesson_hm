## form 表单
- form 表单
  收集用户输入的数据
  :model 收集表单数据；
- ref="formRef" 创建引用
  获取表单实例
  formRef = ref(null) 挂载前位null
  挂载后为form实例

- 表单校验
  - rules 校验规则
    - required 必输
    - min 最小值
    - max 最大值
    - message 错误提示信息
    - trigger 触发时机
      - blur 失去焦点
      - change 输入框的值发生改变
      - submit 提交表单
    - 校验规则可以是数组
    - 校验规则可以是函数
  - items prop 表单域的key
  - formRef.validate() 校验表单


- formItem 单个表单域，
  label 标签
  prop 表单域的key
  rules 表单域的校验规则
  
- 
= antd 组件库
