// vue 可以在后端运行 reactivity模快

const {effect,reactive} = require('@vue/reactivity')
let dummy = null
const counter = reactive({
    count1: 1,
    count2: 2
})
effect(() => {
    // proxy get
    dummy = counter.count1 + counter.count2
    console.log(dummy)
})
effect(() => {
    console.log(counter.count1)
})
setInterval(() => {
    // set 
    counter.count1++
},1000)
setInterval(() => {
    // set 
    counter.count2++
},5000)