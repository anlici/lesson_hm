<script setup name="App">
import { useRoute } from 'vue-router'
const route = useRoute()
// const test = () => {
//   console.log(route)
// }
</script>

<template>
  <div>
   碳化深度

   <!-- <el-button type="primary" @click="test">测试</el-button> -->
   <!-- 主视图容器，更新对应组件 -->
   <router-view />
  </div>
 
</template>


