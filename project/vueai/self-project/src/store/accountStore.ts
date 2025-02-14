import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { accountMessageItem,accountFuncItem } from '../types/account'
export const useAccount = defineStore('account',()=>{
    const accountMessageState = ref<accountMessageItem[]>([
        {
            detail:2,
            title: '浏览历史',
        },
        {
            detail:0,
            title:'收藏关注'
        },
        {
            detail:0,
            title:'预约看房'
        },
        {
            detail:4,
            title:'联系人'
        }
    ])
    const accountFuncState = ref<accountFuncItem[]>([
        {
            title: '装修建材',
            icon: 'like'
        },
        {
            title:'找小区',
            icon: 'star'
        },
        {
            title: '出租',
            icon: 'comment'
        },
        {
            title: '搬家',
            icon: 'fire'
        },
        {
            title: '房贷计算',
            icon: 'gold-coin'
        },
        {
            title: '装修建材',
            icon: 'like'
        },
        {
            title:'找小区',
            icon: 'star'
        },
        {
            title: '出租',
            icon: 'comment'
        },
        {
            title: '搬家',
            icon: 'fire'
        },
        {
            title: '房贷计算',
            icon: 'gold-coin'
        }
    ])
    return {accountMessageState,accountFuncState}
})