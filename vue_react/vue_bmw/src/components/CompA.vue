<template>
  <button @click="counterStore.add">A点我{{ counterStore.count }}</button>
  {{ counterStore.isLogin }}
  <CompSubA :count="count" v-if="isLogin"/> 
  <!-- <CompSubA /> -->
</template>

<script setup>
import { ref,defineEmits,defineProps } from 'vue'

import CompSubA from '../CompSubA.vue'
import {useCounterStore} from '../store/counter'

const counterStore = useCounterStore()

// const {count,add} = useCounterStore();

// const props = defineProps({
//   count: {
//     Number:String,
//     reactive:true
//   } 
// })
// const emit = defineEmits(['add'])
// const add = () => {
//   console.log('A点我');
//   emit('add')
// }
</script>

<style scoped>
</style>
