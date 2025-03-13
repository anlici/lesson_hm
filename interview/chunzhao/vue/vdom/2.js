const oldChildren = n1.children  // 旧节点的子节点
const newChildren = n2.children

let lastIndex = 0  // 上一个节点的索引
// 遍历新的 children
for (let i = 0; i < newChildren.length; i++) {
    const newVNode = newChildren[i]
    let j = 0
    let find = false
    // 遍历旧的 children
    for (j; j < oldChildren.length; j++) {
      const oldVNode = oldChildren[j]
      // 如果找到了具有相同 key 值的两个节点，则调用 patch 函数更新
      if (newVNode.key === oldVNode.key) {
        find = true
        patch(oldVNode, newVNode, container)
        // 移动
        if (j < lastIndex) { // 旧vnode 数组下标在上一个index之前
            const prevVNode = newVNode[i-1]
            if(prevVNode) {
                const anchor = prevVNode.el.nextSibling
                insert(newVNode.el, container, anchor)
            } else {
                insert(newVNode.el, container,container.firstChild)
            }
        } else {
                // 更新
                lastIndex = j 
        }
        break //跳出循环，处理下一个节点
      }
   }
   // 没有找到就是新增了
   if (!find) {
      const prevVNode = newChildren[i - 1]
      let anchor = null
      if (prevVNode) {
        // 获取锚点
        anchor = prevVNode.el.nextSibling
      } else {
        // 根节点，在第一个节点之前
        anchor = container.firstChild
      }
      patch(null, newVNode, container, anchor)
   }
}