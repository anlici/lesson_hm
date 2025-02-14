<template>
    <div class="w-screen space-x-4 ">
        <van-swipe class="my-swipe " :autoplay="3000" indicator-color="rgb(190 242 100)" >
            <van-swipe-item class="pb-7 ">
                <div class="flex border rounded-lg mx-4 shadow-md  bg-gradient-to-tr from-green-200 to-white">
                    <span class="ml-2 mt-3 text-xl font-bold  whitespace-nowrap">房情头条</span>
                    <div>
                        <div class="" v-for="(item) in items">
                            <van-text-ellipsis v-for="(title,index) in item.newsTitle" :content="title" class="text-sm mt-4 pl-3 mb-2" @click="toPage(item.newsLink[index])" />
                           
                        </div>

                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item class="pb-5">
                <div class="flex border rounded-lg h-[86.4px] mx-4 items-center shadow-md bg-gradient-to-tr from-green-200 to-white" v-for="(item,index) in items" :key="index">
                    <span class="ml-3  text-xl font-bold ">今日房价</span>
                    <div class="oldhouse grid grid-row ml-10 items-center">
                        <span class="price font-bold text-3xl">{{ item.oldPrice }}</span>
                        <span class="text text-xs text-center">二手房</span>
                    </div>
                    <div class="oldhouse grid grid-row ml-14 items-center">
                        <span class="price font-bold text-3xl">{{ item.newPrice }}</span>
                        <span class="text text-xs text-center">新房</span>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { newsCards } from '../types/news';
import { useRouter } from 'vue-router'

interface Props {
    items: newsCards[]
}

defineProps<Props>()

const router=useRouter()

const toPage=(name:string)=>{
    
    router.push(name)
}

</script>

<style lang="scss" scoped></style>