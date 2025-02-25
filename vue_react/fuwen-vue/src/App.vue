<script setup>
import Editor1 from './components/Editor1.vue';
import { ref } from 'vue';

const text = ref('');
</script>

<template>
  <div class="demo">
    <Editor1 v-model="text" />
  </div>
</template>

<style scoped>
.demo {
  width: 100%;
}
</style>
