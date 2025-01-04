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
              <router-link class="menu-item" to="/">首页</router-link>
              <router-link class="menu-item" to="about">关于</router-link>
              <router-link class="menu-item" :to="{name:'postIndex'}">post</router-link><br>
          </nav>
          </header>
          <main class="page-body">
            <router-view />
          </main>
      </div>
   </div>
</template>

<style lang="stylus" scoped>
.page
  display: flex
  padding 32px
</style>
