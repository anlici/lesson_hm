<template>
  <div>
    <button @click="count++">Count is: {{ count }}</button>
    <h1>hello </h1>
  </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const count = ref(0)
</script>

<style >
.counter {
  font-weight: bold;
  text-align: center;
  margin-top: 50px; 
}
button {
  padding: 10px 20px;
}
</style>