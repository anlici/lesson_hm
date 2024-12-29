<!-- Son.vue -->
<template>
    <button @click="sendMessage">点击传递消息给父亲</button>
  </template>
  
  <script setup>
  const emit = defineEmits();
  // 
  function sendMessage() {
    emit('sendMessage', '我是Son组件');
  }
  </script>
  