<template>
    <div class="chat-box">
      <van-nav-bar
        title="福建当地指路人"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="chat-content">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <div class="avatar">{{ message.avatar }}</div>
          <div class="text">{{ message.text }}</div>
        </div>
      </div>
      <van-field
        v-model="inputText"
        placeholder="有问题随时问我~"
        @press-enter="sendMessage"
      />
      <div class="action-buttons">
        <van-button icon="photograph" @click="uploadFile" />
        <van-button icon="microphone" @click="startVoiceInput" />
      </div>
      
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Toast } from 'vant';
  
  const messages = ref([
    { avatar: 'AI分身', text: 'hi, 朋友，欢迎来依山傍水的福建。你计划几月来旅行呀?' },
  ]);
  const inputText = ref('');
  
  const sendMessage = () => {
    if (inputText.value.trim()) {
      messages.value.push({ avatar: '用户', text: inputText.value });
      inputText.value = '';
    }
  };
  
  const uploadFile = () => {
    // 文件上传逻辑
    Toast('文件上传功能');
  };
  
  const startVoiceInput = () => {
    // 语音输入逻辑
    Toast('语音输入功能');
  };
  
  const onClickLeft = () => {
    // 返回逻辑
    Toast('返回功能');
  };
  </script>
  
 <style scoped>
  .chat-box {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .chat-content {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }
  
  .message {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 10px;
  }
  
  .text {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
  }
  
  .action-buttons {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  </style>