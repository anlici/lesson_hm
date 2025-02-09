<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="captcha">验证码</label>
        <input type="text" id="captcha" v-model="captcha" required />
        <img id="captchaImage" :src="captchaImageSrc" @click="refreshCaptcha" alt="验证码" />
        <button type="button" @click="refreshCaptcha">刷新验证码</button>
      </div>
      <button type="submit">登录</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { login, getCaptcha } from '../api/login';

const username = ref('');
const password = ref('');
const captcha = ref('');
const error = ref('');
const captchaImageSrc = ref('');

const refreshCaptcha = async () => {
  try {
    const response = await getCaptcha();
    captchaImageSrc.value = `data:image/png;base64,${response.captcha}`;
  } catch (err) {
    error.value = err.message || '获取验证码失败';
  }
};

const handleLogin = async () => {
  try {
    const response = await login(username.value, password.value, captcha.value);
    const { token, role } = response;
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);

    // 根据角色重定向到不同的页面
    if (role === 'admin') {
      window.location.href = '/admin';
    } else if (role === 'user') {
      window.location.href = '/user';
    } else {
      error.value = '无效的角色';
    }
  } catch (err) {
    error.value = err.message || '用户名或密码错误';
  }
};

onMounted(() => {
  refreshCaptcha();
});
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}

#captchaImage {
  width: 80px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
}
</style>