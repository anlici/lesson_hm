<!-- <!-- <template>
    <button @click="add">B点我{{ count }}</button>
  </template>
  
  <script setup>
  import { ref,defineEmits,defineProps } from 'vue'
  
  const props = defineProps({
    count: {
      Number:String,
      reactive:true
    } 
  })
  const emit = defineEmits(['add'])
  const add = () => {
    console.log('B点我');
    emit('add')
  }
  </script>
  
  <style scoped>
  </style>
   -->

<template>
  <div>
    {{ isLogin }}
  </div>
</template>

<script>
import  {User,toRefs} from './store/user'
const User = User()
const {isLogin} = toRefs(User)
</script>
