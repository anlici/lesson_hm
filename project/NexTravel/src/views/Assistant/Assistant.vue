<template>
  <Start v-if="showShadow" @click="showShadow = false" />
  <div
    class="chatPage container h-[calc(100vh-3rem)] relative bg-gradient-to-r from-blue-400 to-blue-200"
  >
    <!-- 顶部 -->
    <div
      class="chat-header h-[calc(10vh)] w-full flex items-center 
        justify-between bg-transparent px-4 border-b border-white rounded-xl"
    >
      <div class="talk flex items-center gap-2 cursor-pointer
       hover:bg-blue-300/50 px-3 py-1.5 rounded-lg transition-all duration-300" 
          @click="navigateToWrite" title="点击进入行程安排">
        <van-icon name="notes-o text-black" size="1.5rem" />
        <span class="text-sm font-medium text-black whitespace-nowrap">行程安排</span>
      </div>
      <div class="title">
        <h2>AI 旅小艺</h2>
      </div>
      <div class="avatar">
        <van-icon name="user-o text-black" size="2.5rem" />
      </div>
    </div>
    <!-- 聊天记录 -->
    <div class="chat_wrapper h-[calc(72vh)] overflow-y-auto mx-auto p-4 z-1">
      <div
        class="chat-item w-full"
        v-for="(item, index) in msgController"
        :key="index"
      >
        <component
          :is="item.type == 1 ? AIReply : UserQuery"
          :msg="item.content"
        />
      </div>
    </div>
    <!-- 底部提问栏 -->
    <div
      class="chat_footer h-16 w-full bottom-0 absolute z-999 border-t border-white rounded-xl"
      v-show="type"
    >
      <van-search
        v-model="searchField"
        placeholder="请输入..."
        show-action
        shape="round"
        background="transparent"
        class="mt-0.5"
        
        @search="SubmitEvent"
      >
        <template #action>
          <div class="text-white transform translate-y-1" @click="SubmitEvent">
            <van-icon name="guide-o" class="text-blue-500" size="1.25rem" />
          </div>
        </template>
      </van-search>
    </div>
    <div v-if="isLoading">
      <van-loading vertical class="text-black">
        <template #icon>
          <van-icon name="star-o" size="30" color="black" />
        </template>
        加载中...
      </van-loading>
    </div>
    <!-- 行程安排 -->
    <!-- <Write /> -->
  </div>
</template>

<script setup lang="ts">
import UserQuery from "@/components/AI/UserQuery.vue";
import AIReply from "@/components/AI/AIReply.vue";
import Start from "@/components/Assistant/Start.vue";
import Write from "@/components/Assistant/Write.vue";

import { ref, onMounted } from "vue";
import getCozeData from "@/apis/index";
import { showToast } from "vant";
import { useRouter } from "vue-router"; // 导入 useRouter

type msgItem = {
  type: number; // 1:AI 2:用户
  content: string;
};

const searchField = ref("");
// 控制进入组件
const showShadow = ref(true);
const isLoading = ref(false); // 加载中

const msgController = ref<msgItem[]>([
  {
    type: 1,
    content:
      "✨✨✨\n \t尊敬的旅者们👋，欢迎使用AI小助手！我是您的专属智能导游——小艺🤖。\n\t现在，我们一起踏上了这场激动人心的旅程吧！🚀",
  },
]);

const type = ref(true);
// 提交事件
const SubmitEvent = async () => {
  if (searchField.value == "") {
    msgController.value.push({
      type: 1, // 1:AI 2:用户
      content: "请输入您的问题",
    });
    return;
  }
  const msg = searchField.value;
  type.value = false; // 隐藏搜索框
  isLoading.value = true; // 开始加载
  msgController.value.push({
    type: 2,
    content: msg,
  });
  searchField.value = "";
  msgController.value.push({
    type: 1,
    content: "✨✨✨\n小痕收到！ 我已经了解到您的需求，请稍等片刻！！！🌟",
  });
  searchField.value = "";
  try {
    const datas = await getCozeData(msg);
    type.value = true;
    console.log(datas);
    const result = datas.data.message;
    // 每种输出结果
    result.forEach((item: any) => {
      if (item.type == 'answer') {
        msgController.value.push({
          type: 1,
          content: item.content,
        });
      }
    });

  } catch (error) {
    msgController.value.push({
      type: 1,
      content: "网络错误，请稍后再试！",
    });
    type.value = true;
    return;
  } finally {
    type.value = true;
    isLoading.value = false; // 结束加载
  }
}

const router = useRouter(); // 初始化 router

const navigateToWrite = () => {
  router.push({ name: 'Write' }); // 假设 Write 组件的路由名称为 'Write'
}
</script>

<style lang="less" scoped></style>