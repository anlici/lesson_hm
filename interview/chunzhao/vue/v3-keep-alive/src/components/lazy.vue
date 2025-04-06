<template>
    <div>
      <h1>图片懒加载</h1>
      <div style="height: 1000px;"></div>
      <ul class="image-container">
        <li 
          class="image-item" 
          v-for="image in images" 
          :key="image.id"
        >
          <img v-lazy="image.url" class="lazy-image"/>
          <p>{{image.title}}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const images = ref([
    {
      id: 1,
      title: '大换血1年半后，字节游戏突然露面了：开局拿下Top1',
      url: 'https://img.36krcdn.com/hsossms/20250403/v2_a6def0120a344b919a0fb6bcb9b7adc3@000000_oswg163903oswg1080oswg608_img_000?x-oss-process=image/format,jpg/interlace,1'
    },
    {
      id: 2,
      title: '小米车祸后，智驾回归理性',
      url: 'https://img.36krcdn.com/hsossms/20250403/v2_f85e48d57c334ca8acb52ddafd0a3208@000000_oswg59119oswg1080oswg601_img_000?x-oss-process=image/format,jpg/interlace,1'
    }
  ])
  </script>
  
  <style scoped>
  
  </style>