<template>
    <van-tabbar v-model="active" 
    class=" shadow-black shadow-2xl opacity-90"
    >
      <van-tabbar-item to="/assistant">
        <template #icon>
          <van-icon class="iconfont" class-prefix="icon" name="zhinengAIzhushou" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/shopping">商城</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </template>
  
  <script setup lang="ts">
  import { ref,watch } from 'vue' 
  import { useRoute } from 'vue-router'

  const active = ref(1)
  // 按路由切换tabbar
  const route = useRoute()
  watch(
    () => route.path,
    (path) => {
      if (path === '/assistant') {
        active.value = 0
      } else if (path === '/home') {
        active.value = 1
      } else if (path === '/shopping') {
        active.value = 2
      } else if (path === '/mine') {
        active.value = 3
      }
    }
  )

  
  </script>
  
  <style scoped>
  
  </style>