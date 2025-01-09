// 中央管理store 
import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useCounterStore = defineStore('counter',{
    state:()=>{
        return {
            count:ref(0)
        }
    },
    actions:{
        add(){
            this.count++
        }
    }
})