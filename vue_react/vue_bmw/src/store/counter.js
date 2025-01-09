// 中央管理store 
import {defineStore} from 'pinia'
import {ref,reactive} from 'vue'
export const useCounterStore = defineStore('counter',{
    state:()=>{
        return {
            count:ref(0),
            isLogin:ref(false),
        }
    },
    actions:{
        add(){
            this.count++
        }
    }
})


