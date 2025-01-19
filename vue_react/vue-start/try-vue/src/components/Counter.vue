<!-- Parent.vue -->
<template>
  <Son @sendMessage="receiveMessage" />
  <p>{{ message }}</p>
</template>

<script setup>
import { ref } from 'vue';
import Son from './Son.vue';

const message = ref('');

function receiveMessage(msg) {
  message.value = msg;
}
</script>
