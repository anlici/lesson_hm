import { create  } from "zustand";
import {persist} from "zustand/middleware" // 持久化
// 创建一个store callBack函数一set get 为参数，返回一个对象，使用 ，分割
const useStore = create(
    persist(
        (set,get) => ({
    count:0,
    increment:()=>set((state)=>({count:state.count+1})),
    decrement:()=>set((state)=>({count:state.count-1})),
    reset:()=>set({count:0}), // 重置,
    // get 获取当前或其他action
    double:() => {
        const currentCount = get().count; // 
        set({count:currentCount*2})
    }        
    }),{
        name: 'count-storage', // 持久化键名
        partialize:(state) => ({count:state.count}), // 持久化字段
    }
   )
);
export default useStore;
// subscribe 监听变化
useStore.subscribe(
    (state) => state.count, // 监听字段
    (count) => console.log(count), // 回调函数
)


// async 
// 不可变 
// 深度 使用state，要使用浅拷贝；如果深度就使用展开运算符
// immer middleware 中间件 
// npm install immer 
// 如果全部使用状态，解构；
// 部分使用，解构造成 重渲染，使用Math.random()
// 使用selector 进行交互状态；
// 官方提供createSelector 在utils 里面引入
