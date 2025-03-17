<template>
  <!-- <ChildrenComponet >
    <template #header>
      <div> # 是v-slot: 简写，用了定义具名插槽</div>
    </template>
    
    <template v-slot:default="footerData">
      <div>接收并使用子组件数据- {{ footerData.message }} - {{ footerData.value }}</div>
    </template>
  </ChildrenComponet> -->
  <div>{{count}}</div>
</template>

<script setup>
import {ref,watch} from 'vue'
const count = ref(0)
watch(count,(newValue,oldValue)=>{
  console.log(`count from ${newValue} to ${oldValue}`);
},{
  immediate:true
})

setTimeout(()=>{
  count.value++;
},1000)

</script>

<style lang="scss" scoped>

</style>