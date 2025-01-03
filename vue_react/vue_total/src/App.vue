<script setup>
const name = "小猪琪琪"

</script>

<template>
  <!-- 导航 -->
   <div class="page">
      <div class="page-header">
          <h3 class="brand">{{ name }}</h3>
          <header>
          <nav class="menu"> 
              <router-link to="/">首页</router-link><br>
              <router-link to="about">关于</router-link><br>
              <router-link to="posts">post</router-link><br>
          </nav>
          </header>
          <main class="page-body">
            <router-view />
          </main>
      </div>
   </div>
</template>

<style scoped>

</style>
