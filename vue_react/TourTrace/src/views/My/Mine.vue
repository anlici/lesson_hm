<template>
    <div class="mine h-100rem">
    <!-- 背景 -->
    <div
      class="minePage container h-[8rem] relative shadow-md
       bg-[url('https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067')] 
       bg-cover bg-center"
    >
      <div class="text-center text-lg text-white font-bold pt-[2rem] ">
        
        个人中心
      </div>
      <!-- 头像 -->
      <img
        src="https://img0.baidu.com/it/u=1547643615,3476109594&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
        alt=""
        class="rounded-full w-20 h-20 mx-auto border-2 border-white shadow-md shadow-gray-400 absolute bottom-0 left-5 transform translate-y-[3rem]"
      />
    </div>
    <!-- 页面主体 -->

    </div>
</template>

<script setup>
import { ref } from "vue"; // 为啥不用引入ref？
import { toRefs } from "vue";
import { useMineStore } from "@/stores/mineStore";

const mineStore = useMineStore();
const { topBarState } = toRefs(mineStore);
</script>

<style lang="scss" scoped>

</style>