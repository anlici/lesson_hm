import React ,{
  useState,
  useRef, // useRef 不会引起组件重新渲染,dom 或 对象ref
  useCallback,
  useEffect,
} from 'react'
import {
  Cell,
  Input,
  Button,
  Checkbox,
  Toast,
} from 'zarm'
import s from './login.module.less'
import CustomIcon from '@/components/CustomIcon';
import cx from 'classnames'; // 类似于 css 模块化
const Login = () => {
  const [type, setType] = useState('login'); // login register
  const [username, setUsername] = useState(''); // 用户名
  const [password, setPassword] = useState(''); // 密码
  
  const onSubmit = useCallback(() => {
    if(!username || !password) {
      Toast.show('请输入用户名或密码')
      return
    }
  })
  useEffect(() => {
     document.title = type === 'login' ? '登录' : '注册'
  },[type])
 
  return (
    <>
      <div className={s.auth}>
        <div className={s.head}>
        </div>
        <div className={s.tab}>
          <span className={cx({ [ s.active ]: type== 'login'})} 
            onClick={() => setType('login')}>登录</span>
          <span className={cx({ [ s.active ]: type== 'register'})}
            onClick={() => setType('register')}>注册</span>
        </div>
        <div className={s.form}>
          <Cell icon={<CustomIcon type={'zhanghao'} />}>
            <Input
              placeholder="请输入用户名"
              value={username}
              type="text"
              onChange={(val) => setUsername(val)}
            />
          </Cell>
          <Cell icon={<CustomIcon type={'mima'} />}>
            <Input
                placeholder="请输入密码"
                value={password}
                type="password"
                onChange={(val) => setPassword(val)}
              />
          </Cell>
          <Input
            clearable
            type='password'
            placeholder='请输入验证码'
            onChange={(value) => setPassword(value)}
          />
        </div>
        <div className={s.operation}>
          {
            type == 'register' ? (<div className={s.agree}>
            <Checkbox />
            <label className='text-light'>阅读并同意<a>《使用条款》</a></label>
          </div>) : null
          }
          <Button onClick={onSubmit} block theme='primary' >
            {type == 'login' ? '登录' : '注册'}
          </Button>
        </div>
      </div>
      
    </>
  )
}

export default Login