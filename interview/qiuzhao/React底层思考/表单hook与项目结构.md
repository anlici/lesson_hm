# 项目结构与表单
## 项目结构
- 每增加一个新的功能，整个应用程序的复杂度不应该明显上升。这样才能保证我们的应用程序始终可扩展，可维护
- 如何降低依赖，让整个大型应用的复杂度始终在可控范围内？
    源代码没有按照业务功能组织在一起，而是从技术角度进行了拆分
    将这些技术部件分散到不同的领域文件夹中，而每个领域文件夹都有自己的 compoents、routing、actions、store
    把依赖从技术层面提升到业务层面，也就是一个业务功能对另外一个业务功能的依赖
    删除一个功能，就像删除一个文件夹那么简单
- 全局另设一个store文件，组合all reducer 
## 表单
- React 都是状态驱动，而表单却是事件驱动
  独立的事件转换成一定的应用程序状态，最终来完成表单的交互
- 因为用户每输入一个字符，React 的状态都会发生变化，那么整个组件就会重新渲染。所以如果表单比较复杂，那么每次都重新渲染，就可能会引起输入的卡顿。在这个时候，我们就可以将一些表单元素使用非受控组件去实现，从而避免性能问题。
- **把表单的状态管理单独提取出来，成为一个可重用的 Hook**
一个表单处理必备的业务逻辑：表单验证；把表单的状态逻辑和 UI 展示逻辑基于 Hooks 进行分离
- 重置就是回到初始状态，需要同时清空 values 和 errors
    - 保存初始值：需要用 useRef 保存初始值，避免闭包问题
    - 全量重置：同时重置表单数据和错误信息
- 异步验证的复杂性
    时序问题：用户快速输入时，多个异步请求的返回顺序不确定
    性能问题：频繁的 API 调用

```js
// 伪代码：完整表单 Hook（包含重置和异步验证）
const useForm = (initialValues, validators, asyncValidators) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [validating, setValidating] = useState({});
  const initialValuesRef = useRef(initialValues);

  // 重置功能
  const reset = useCallback(() => {
    setValues(initialValuesRef.current);
    setErrors({});
  }, []);

  // 防抖异步验证
  const debouncedAsyncValidate = useMemo(
    () => debounce(async (name, value) => {
      if (!asyncValidators?.[name]) return;

      setValidating(prev => ({ ...prev, [name]: true }));
      try {
        const error = await asyncValidators[name](value);
        setErrors(prev => ({ ...prev, [name]: error }));
      } finally {
        setValidating(prev => ({ ...prev, [name]: false }));
      }
    }, 500),
    [asyncValidators]
  );

  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));

    // 同步验证
    if (validators?.[name]) {
      const errMsg = validators[name](value);
      setErrors(prev => ({ ...prev, [name]: errMsg || null }));
    }

    // 异步验证
    if (asyncValidators?.[name]) {
      debouncedAsyncValidate(name, value);
    }
  }, [validators, asyncValidators, debouncedAsyncValidate]);

  return { values, errors, validating, setFieldValue, reset };
};

// 使用示例
function MyForm() {
  const validators = useMemo(() => ({
    name: (value) => value.length < 2 ? "Name too short" : null,
    email: (value) => !value.includes("@") ? "Invalid email" : null
  }), []);

  const asyncValidators = useMemo(() => ({
    username: async (value) => {
      const response = await fetch(`/api/check-username/${value}`);
      const { exists } = await response.json();
      return exists ? 'Username already exists' : null;
    }
  }), []);

  const { values, errors, validating, setFieldValue, reset } = useForm(
    { name: '', email: '', username: '' },
    validators,
    asyncValidators
  );

  return (
    <form>
      <input
        value={values.username}
        onChange={(e) => setFieldValue('username', e.target.value)}
      />
      {validating.username && <span>Checking...</span>}
      {errors.username && <span>{errors.username}</span>}

      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
}
```
