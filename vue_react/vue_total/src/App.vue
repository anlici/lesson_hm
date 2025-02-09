<template>
  <div class="page">
    <header class="page-header">
      <h3 class="brand">{{ name }}</h3>
      <nav class="menu">
        <router-link class="menu-item" to="/">首页</router-link>
        <router-link class="menu-item" to="/about">关于</router-link>
        <router-link class="menu-item" :to="{ name: 'postIndex' }">Post</router-link>
      </nav>
    </header>
    <main class="page-body">
      <router-view />
    </main>
  </div>
</template>

<script setup>
const name = "小猪琪琪"
</script>

<style lang="stylus" scoped>
.page
  display flex
  flex-direction column
  min-height 100vh

.page-header
  display flex
  align-items center
  justify-content space-between
  padding 16px
  background-color #f0f2f5
  border-bottom 1px solid #d9d9d9

.brand
  font-size 24px
  font-weight bold

.menu
  display flex
  gap 16px

.menu-item
  display inline-block
  text-decoration none
  color #585858
  padding 8px 16px
  border-radius 5px
  transition all 0.3s ease

  &.router-link-active
    color #505050
    background-color #eeeeee

.page-body
  flex 1
  padding 24px
  margin-top 16px
</style>