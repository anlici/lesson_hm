<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 class="text-3xl font-bold mb-6">登录</h1>
      <div class="bg-white rounded-lg p-8 max-w-md w-full">
        <div class="flex items-center justify-center mb-6">
          <img src="https://img0.baidu.com/it/u=2277984874,500467423&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1722099600&t=5f480d5dd4b60bca8be11e41c21ed488" alt="" class="rounded-full w-24 h-24">
        </div>
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                       :rules="[{ required: true, message: '请填写用户名' }]"/>
            <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                       :rules="[{ required: true, message: '请填写密码' }]"/>
          </van-cell-group>
          <div class="mt-4">
            <van-button round block type="primary" native-type="submit" class="w-full">登录</van-button>
          </div>
        </van-form>
      </div>
      <p class="mt-6 text-blue-600 cursor-pointer" @click="router.push('/register')">新用户？点击这里注册</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  
  const onSubmit = async (values) => {

    localStorage.setItem('userInfo', JSON.stringify(values));
    // console.log(localStorage.getItem('userInfo'));
    
    router.push('/account');
  };
  </script>