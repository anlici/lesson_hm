<!-- Son.vue -->
<template>
    <p>来自父亲的消息: {{ title }}</p>
    <br>
    <button @click="sendMessage">点击传递消息给父亲</button>
    <div>
      <!-- 插槽 -->
      <slot></slot>
    </div>
    <br>
    
    
  </template>
  
  <script setup>
   import { 
    defineProps,
    defineEmits,
    ref 
   } from 'vue';
   const props = defineProps({
    title: String
  });
  // props 接收，emit 发送，ref 自有属性
  // const childrenMessage = ref('hello Parent');
  const char = reactive({
    name: '张三',
    age: 20
  })
  const emit = defineEmits(['child-message'])
  // 自定义事件，监听，子组件调用child-message 告知父组件
  function sendMessage() {
    emit('child-message', ...char);
  }
  </script>
  