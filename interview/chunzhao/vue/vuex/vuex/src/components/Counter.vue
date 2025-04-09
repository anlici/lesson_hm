<template>
    <h2>App.vue:</h2>
    <div>
      count: {{ store.state.count }}
    </div>
    <button @click="increment">+</button>
    {{ count }}
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { computed } from 'vue'

  const store=useStore()
  
  const count = computed(() => store.state.counter)
  const increment = () => {
    //使用dispatch派出increment  action的方法
    store.dispatch('increment')
  }
  </script>
  