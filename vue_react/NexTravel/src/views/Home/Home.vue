<template>
   <div class="home">
    <!-- 背景 -->
     <div 
        class="top-bg absolute h-[35rem] w-full -z-10 w-screen
        bg-[url('https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067')] 
        bg-cover bg-center"
     ></div>
    <!-- 搜索+头部 -->
    <div class="search flex items-center px-5 text-sm py-4">
      <div
        class="title font-bold text-gray-900
        text-lg w-[6rem] text-center font-serif mr-5 bg-gray-200 rounded-full bg-opacity-50" 
      >
        homeKit
      </div>
    </div>
    <van-search
        v-model="searchField"
        placeholder="请输入搜索关键字"
        show-action
        shape="round"
        background="transparent"
        class="w-full"
      >
        <template #action>
          <div class="text-white justify-center items-center flex">
            <van-icon name="like" size="1.25rem" />
          </div>
        </template>
      </van-search>
    <!-- 主体 -->
    <main class="flex flex-col space-y-4">
      <!-- 导航栏 -->
      <header
        class="w-[calc(100vw-2rem)] min-h-18 rounded-2xl p-2 shadow-md self-center bg-white bg-opacity-50"
      >
        <section class="topbar flex justify-around my-[0.5rem]">
          <div
            class="topbar-item flex flex-col items-center"
            v-for="item in topBarState"
            :key="item.title"
          >
            <div class="topbar-item__icon">
              <van-icon :name="item.icon" size="2rem" />
            </div>
            <div class="topbar-item__text text-xs font-bold">{{ item.title }}</div>
          </div>
        </section>
      </header>
      <!-- 导航栏 -->
      <section class="navbar flex justify-around px-4 py-2 rounded-2xl">
        <div
          class="navbar-item flex flex-col rounded-lg bg-white flex-[0_0_auto] w-24 h-24 items-center justify-center mr-2 border-dashed border-2 border-gray-300"
          v-for="item in navBarState"
          :key="item.title"
        >
          <div class="navbar-item__text text-sm p-2 pb-0 font-bold">
            {{ item.title }}
            <div class="text-xs font-normal text-gray-500">{{ item.msg }}</div>
          </div>
          <div class="navbar-item__icon self-end p-2">
            <van-icon :name="item.icon" size="1.5rem" color="#969696" />
          </div>
        </div>
      </section>
      <!-- 旅游推荐 -->
      <section>
        <div class="flex justify-between items-center px-6 text-sm text-white">
          <h2 class="title font-bold text-lg">热门目的地</h2>
          <span
            class="flex flex-row items-center justify-center text-xs "
          >
            查看更多
            <van-icon name="arrow" size="1rem" class="ml-1" />
          </span>
        </div>
        <PopularDestinationsCard :items="PopularDestinations" />
      </section>
      <!-- 旅游分享 -->
      <section>
        <div class="flex justify-between items-center px-6 text-sm">
          <h2 class="title font-bold text-lg font-mono">MyTrace</h2>
        </div>
        <ShareTourTraceCard :items="ShareTour" />
      </section>
    </main>
    
   </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from "@/stores/homeStore";
import PopularDestinationsCard from "@/components/Home/PopularDestinationsCard.vue";
import ShareTourTraceCard from "@/components/Home/ShareTourTraceCard.vue";
import { ref,toRefs } from 'vue'

const homeStore = useHomeStore()
const { topBarState, navBarState, PopularDestinations, ShareTour } = toRefs(homeStore)

const searchField = ref('')
</script>

<style lang="scss" scoped>

</style>