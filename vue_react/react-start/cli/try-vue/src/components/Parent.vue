<template>
    <div>
        <Child ref="cmp"/> <!-- 模版中标记，直接访问dom元素，或是子组件的实例 -->
        <button @click="handleClick">按钮</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import Child from './Child.vue';

const text = ref('ddd');
const cmp = ref(null); // null表示未挂载
function handleClick() {
     cmp.value.foo();
     cmp.value.childName = '修改了子组件的属性';
    console.log(cmp.value);
}
// console.log(cmp, text);


</script>
