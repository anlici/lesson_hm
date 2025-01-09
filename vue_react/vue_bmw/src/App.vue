<template>
    <div>
      <!-- <CompB :count="count" @add="add" />
      <CompA :count="count" /> -->
      <CompA />
      
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import CompA from './components/CompA.vue'
  import CompB from './components/CompB.vue'
  
  import { provide } from 'vue'

//    const count = ref(0)
//     const add = () => {
//     count.value++
//     }
//   provide('count',count)

   
  </script>
  
  <style scoped>
  </style>
  