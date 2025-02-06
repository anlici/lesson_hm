import { useState } from 'react';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // 处理登录或注册逻辑
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{isLogin ? '登录' : '注册'}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">账号/手机号</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">密码</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="rememberMe">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              记住我
            </label>
          </div>
          <button type="submit">{isLogin ? '登录' : '注册'}</button>
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? '还没有账号？注册' : '已有账号？登录'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;