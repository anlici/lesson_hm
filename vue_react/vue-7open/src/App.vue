<template>
  <!-- <div>
    <MousePos v-if="showMouse"/>
    <button @click="toggleMouse" >切换显示</button>
  </div> -->
  <Watch/>

</template>

<script setup>
// import MousePos from './components/MousePos.vue';
import Watch from './components/watch.vue'; 
import {ref} from 'vue'

const showMouse = ref(true)
const toggleMouse = () => {
  showMouse.value = !showMouse.value
}
</script>

<style scoped>

</style>