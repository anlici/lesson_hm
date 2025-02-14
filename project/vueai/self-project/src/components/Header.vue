<template>
    <div class="top-bg absolute h-24 -z-40 
     w-screen bg-gradient-to-b from-green-200 to-green-10"></div>
    <div class="home pt-8 z-50">
        <van-search v-model="searchField" placeholder="请输入搜索关键字" show-action shape="round" background="transparent"
            class="">
            <template #action>
                <div class="text-white flex items-center">
                    <van-icon name="location-o" color="black" size="1.25rem"></van-icon><span
                        class="text-xs text-black">定位</span>
                </div>
            </template>
        </van-search>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchField = ref('')

</script>

<style lang="scss" scoped>

</style>