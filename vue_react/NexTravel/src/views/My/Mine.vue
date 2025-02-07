<template>
  <div class="mine h-100rem">
    <!-- 背景 -->
    <div
      class="minePage container h-[8rem] relative shadow-md
       bg-[url('https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&amp;h=1067')] 
       bg-cover bg-center"
    >
      <div class="text-center text-lg text-white font-bold pt-[2rem] ">
        
        个人中心
      </div v-if="imgUrl">
      <!-- 头像 -->
      <!-- <img
        @click="openFilePicker"
        
        :src="imgUrl"
        alt=""
        class="rounded-full w-20 h-20 mx-auto border-2 border-white shadow-md shadow-gray-400 absolute bottom-0 left-5 transform translate-y-[3rem]"
      /> -->
      <!-- <Image /> -->
    </div>
    <!-- 页面主体 -->
    <main class="mine-main">
      <!-- 登录注册 -->
        如果没有登入，需要先登入体验更多功能
        isLagin && <Lagin />
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
          <van-button round type="success" @click="uploadRecord"
            >立即发布</van-button
          >
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
            name="a-dizhi"
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
            name="a-shezhi"
          />
          设置</div>
        <div class="text-[0.8rem] text-gray-500 mt-4">管理你的个人信息</div>
        <div class="absolute right-0 top-0 mt-5 mr-3">
          <van-button round type="danger" @click="showSettings"
            >设置</van-button
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import Lagin from '@/components/My/Lagin.vue';
import { ref } from 'vue';
import Image from '@/components/My/Image.vue';
  const topBarState=  [
    { title: '我的订单', icon: 'a-dingdan' },
    { title: '我的优惠', icon: 'a-youhui' },
    { title: '福利中心', icon: 'a-fuwu' },
    { title: '我的收藏', icon: 'a-shoucang' }
  ];
  const isLagin = false;
  const settingsVisible= false;
  const imgUrl = ref('');
    function openFilePicker() {
      // 打开文件选择器的逻辑
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*'; // 只接受图片文件
      input.onchange = (event) => { // 选择文件后的回调
        const file = event.target.files[0];
        // 处理选择的文件
        console.log('Selected file:', file);
      };
      input.click(); // 触发文件选择器
      console.log('Open file picker');
    }
    function uploadRecord() {
      // 上传记录的逻辑
      console.log('Upload record');
    }
    function showSettings() {
      this.settingsVisible = true;
    }
    function logout() {
      // 退出登录的逻辑
      console.log('Logout');
    }
    function switchAccount() {
      // 切换账号的逻辑
      console.log('Switch account');
    }

</script>

<style scoped>
</style>