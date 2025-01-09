<template>
    <div>
        <div>
            <p>CompSubA</p>
            <p>11：{{counterStore.count}}</p>
            <hr>
            <p>22：{{count}}</p>
            <button @click="add">带你小玩</button>
        </div>
    </div>
</template>

<script setup>

import {useCounterStore} from './store/counter'
const counterStore = useCounterStore()

// import { toRefs } from 'vue';
// const counterRefs = toRefs(counterStore)
// const {count,add} = counterRefs;

import {toRef} from 'vue';
const count = toRef(counterStore,'count')
const add = () => {
    counterStore.add()
}
// import { inject } from 'vue';
// const count = inject('count');
</script>

<style scoped>

</style>