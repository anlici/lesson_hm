<template>
    <div>
        mousePosX:{{ x }}
        mousePosY:{{ y }}
    </div>
</template>

<script setup>
import  {useMouse,useMemo } from '../hooks/useMouse'
import Hook from '../hooks/useMouse'

const { x,y } = useMouse()
useMemo()
console.log(Hook);

</script>

<style scoped>

</style>