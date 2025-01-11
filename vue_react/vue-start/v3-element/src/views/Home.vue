<template>
    <div>
       <el-container>
           <el-header>
            <el-menu 
             :default-active="1"
             class="el-menu-demo"
             mode="horizontal" 
             background-color="#fff"
             active-text-color="#ffd04b"
            >
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-menu-item index="2">消息中心</el-menu-item>
                <ElSubMenu index="3">
                    <template #title>
                        我的
                    </template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                </ElSubMenu>
            </el-menu>
           </el-header>
           <el-container style="padding: 20px;">
                <el-aside width="200px">
                    <div style="padding: 20px;">
                    <router-link to="/">
                        Home
                    </router-link>
                    </div>
                    <div>
                    <router-link to="/article">
                        文章
                    </router-link>
                    </div>
                </el-aside>
                <el-container>
                    <el-main>
                    <router-view />
                    </el-main>
                </el-container>
            </el-container>
       </el-container>
    </div>
</template>

<script setup>

import { ElSubMenu } from 'element-plus';
console.log('我是home');
</script>

<style lang="scss" scoped>

</style>