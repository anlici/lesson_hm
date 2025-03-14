<template>
  <div>

  </div>
</template>

<script setup>
// import { reactive,effect } from '@vue/reactivity';
import {
  effect,
  // effect, 
  reactive
} from './reactivity'
// 响应式机制：收集依赖，将数据改变后 依赖数据自动执行
const state = shallowReactive({
  num:0,
  age:1,
  num2: {
    a:1
  }
})

let val;
let val2;
effect(() => {
  // val = state.num2.a;
  val2 = state.num;
})
state.num2.a = 2
// state.num = 10 // 触发effect
console.log(val,val2);

// effect(() => {
//   // 依赖地图 tragetMap
//   val = state.num 
// })
// console.log(val); // 0 effect 立即执行

</script>

<style  scoped>

</style>