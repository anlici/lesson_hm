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
              <router-link class="menu-item" :to="{name:'postIndex'}">post</router-link>
          </nav>
          </header>
          <main class="page-body">
            <!-- 路由出口 动态渲染组件 -->
            <router-view />
          </main>
      </div>
   </div>
</template>

<style lang="stylus" scoped>
.page
  padding 32px
.page-header
  display flex
  align-items center
  border-bottom 1px solid #e1e1e1
.brand
  margin-right 32px
.menu-item
  display inline-block
  text-decoration none
  color #585858
  margin 8px
  padding 8px 16px
.page-body
  margin 24px 0
.router-link-active
  color #505050
  background #eeeeee
  border-radius 5px

</style>
