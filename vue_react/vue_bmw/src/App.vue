<template>
  <div>
    <!-- <CompB :count="count" @add="add" />
    <CompA :count="count" /> -->
    <!-- <CompA /> -->
    
  </div>
  <div id="app">
    <ChatBox />
    <Itinerary />
  <van-router>
    
    <!-- <van-route path="/chat" component="ChatBox" />
    <van-route path="/itinerary" component="Itinerary" /> -->
  </van-router>
</div>
</template>
  
<script setup>
import { ref } from 'vue'

import ChatBox from './components/ChatBox.vue';
import Itinerary from './components/Itinerary.vue';

import { provide } from 'vue'

//    const count = ref(0)
//     const add = () => {
//     count.value++
//     }
//   provide('count',count)

  
</script>
  

  