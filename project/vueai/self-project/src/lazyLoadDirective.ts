import { onUnmounted, ref, watch } from "vue";
import type { Ref } from "vue";

/**
 * @description: 用于监听滚动到底部
 * @param {Ref<HTMLElement | null>} NodeRef 监听的节点
 * @param {() => void} loadMore 加载更多的回调函数
 * @return {*}
 */
const useIntersectionObserver = (
  NodeRef: Ref<HTMLElement | null>,
  loadMore: () => void
) => {
  // 是否有下一页的标志
  const hasMore = ref(true);

  // IntersectionObserver 实例
  let observer: IntersectionObserver | null = null;

  // 监听节点变化
  watch(NodeRef, (newNodeRef, oldNodeRef) => {
    // 取消监听旧节点
    if (oldNodeRef && observer) {
      observer.unobserve(oldNodeRef);
    }

    // 监听新节点
    if (newNodeRef) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          // 当新节点进入视图时，触发加载更多回调
          loadMore();
        }
      });
      observer.observe(newNodeRef);
    }
  });

  // 组件卸载时，取消监听
  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  // 监听 hasMore 的变化
  watch(hasMore, (value) => {
    if (observer) {
      if (value && NodeRef.value) {
        observer.observe(NodeRef.value);
      } else {
        observer.disconnect();
      }
    }
  });

  return {
    // 暴露 hasMore 以便外部组件控制
    hasMore,
    // 提供设置 hasMore 的方法
    setHasMore: (value: boolean) => {
      hasMore.value = value;
    },
  };
};

export default useIntersectionObserver;