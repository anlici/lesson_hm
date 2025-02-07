<template>
    <van-form @submit="onSubmit">
      <van-field v-model="itinerary" label="行程安排" placeholder="请输入您的行程安排" />
      <div style="margin: 16px;">
        <van-button type="info" block native-type="submit">提交</van-button>
      </div>
    </van-form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { Toast } from 'vant';
  
  export default {
    setup() {
      const itinerary = ref('');
  
      const onSubmit = () => {
        if (itinerary.value.trim() === '') {
          Toast('请输入行程安排');
          return;
        }
        // 存储行程安排到数据库或其他地方
        console.log('行程安排:', itinerary.value);
        Toast('提交成功');
      };
  
      return {
        itinerary,
        onSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  /* ... existing code ... */
  </style>