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
    <main class="mine-main">
      <!-- 登录注册 -->
      <div class="login-register container text-right px-5 pt-2">
        <van-button round type="success" color="#00BFFF" class="font-bold"
          >&nbsp;&nbsp;登录&nbsp;&nbsp;</van-button
        >
      </div>
      <!-- 菜单栏 -->
      <section
        class="rounded-xl mt-[1rem] pb-[0.5rem] shadow-md bg-gray-90 mx-2 border"
      >
        <div class="topbar flex justify-around mt-[1.5rem]">
          <div
            class="topbar-item flex flex-col items-center"
            v-for="item in topBarState"
            :key="item.title"
          >
            <div class="topbar-item__icon">
              <van-icon
                class="iconfont text-[1.5rem]"
                color="#87CEFA"
                class-prefix="icon"
                :name="item.icon"
              />
            </div>
            <div class="topbar-item__text">{{ item.title }}</div>
          </div>
        </div>
      </section>
      <!-- 发布记录 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="a-lvhanglvyoujilu"
          />
          旅行记录</div>
        <div class="text-[0.8rem] text-gray-500 mt-4">分享你的专属旅行记忆</div>
        <div class="absolute right-0 top-0 mt-5 mr-3">
          <van-button round type="success" color="#00BFFF">立即发布</van-button>
        </div>
      </section>
      <!-- 足迹 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="zuji2"
          />
          足迹</div>
        <div class="text-[0.8rem] text-gray-500 mt-4">记录你走过的地方</div>
      </section>
      <!-- 设置 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="shezhi"
          />
          设置
        </div>
        <div class="text-[0.8rem] text-gray-500 mt-4">管理你的个人信息</div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { toRefs } from "vue";
import { useMineStore } from "@/stores/mineStore";

const mineStore = useMineStore();
const { topBarState } = toRefs(mineStore);
</script>

<style lang="scss" scoped></style>
