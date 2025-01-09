import {defineStore } from 'pinia'
import {ref,reactive} from 'vue'
export const useUserStore = defineStore('user',{
    state:() => {
        return {
            isLogin:ref(false),
            userInfo:reactive({
                username:'',
                avatar:'', //头像
                message:0, //消息数
                uid:null
            })
        }
    },
    actions:{
        toLogin(){
            this.user.isLogin = true
        },
        toLogout(){
            this.user.isLogin = false
        },
        setUserInfo(){
            this.userInfo.username = 'ys指缝'
            this.userInfo.avatar = "hhtps://www.baidu.com"
            this.userInfo.message =10
            this.userInfo.uid = 123213123
        }
    }
})