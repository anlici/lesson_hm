<template>
  <div>

  </div>
</template>

<script setup>
// import { reactive,effect } from '@vue/reactivity';
import {
  // effect, 
  reactive
} from './reactivity'
// 响应式机制：收集依赖，将数据改变后 依赖数据自动执行
const state = reactive({
  num:0
})
console.log(state.num);

let val;
// effect(() => {
//   // 依赖地图 tragetMap
//   val = state.num 
// })
console.log(val); // 0 effect 立即执行

</script>

<style  scoped>

</style>