// 手写 加载更多的hook， 基于IntersectionObserver
import { Ref,ref, watch } from 'vue' 
export const useLoadMore = (
    // Ref类型
    // HTMLElement DOM节点
    // HTMLElement | null ts 联合类型
    nodeRef:Ref<HTMLElement | null>,
    loadMore:()=>void
) => {
    let observer:IntersectionObserver | null = null
    const hasMore = ref(true)
    // 监听最后元素的改变，observe 新的元素
    watch(nodeRef, (newNodeRef,oldNodeRef)=> {
        // 之前就有值, observer已经实例化过了
        if(oldNodeRef && observer) {
            observer.unobserve(oldNodeRef)
        }
        if(newNodeRef) {
            observer = new IntersectionObserver(([entry]) =>{
                // 只有一个
                if(entry.isIntersecting) {
                    loadMore()
                    // nextTick()
                }
             })
             observer.observe(newNodeRef)
        }
    })

    watch(hasMore,(value) => {
        // 后面又有了
        if(value && nodeRef.value) {
            observer?.observe(nodeRef.value)
        }else {
            // 释放observer 对象 的
            observer?.disconnect()
        }
    })


    return {
        hasMore,
        setHasMore:(value:boolean)=> {
            hasMore.value = value
        }
    }


}