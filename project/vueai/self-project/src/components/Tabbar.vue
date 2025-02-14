<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/message">消息</van-tabbar-item>
            <van-tabbar-item icon="smile-comment-o" to="/ai">AI问答</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/account">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref<number>(0)

</script>

<style lang="scss" scoped></style>