import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from './product'

type CartItem = {
  productId: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  // <T>
  const items = ref<CartItem[]>([])
  const productStore = useProductStore()

  const totalPrice = computed(() => {
    // 累加和 
    items.value.reduce((total, item) => {
        // 获取商品信息
        const product = productStore.products.find(p => p.id === item.productId)
        // 计算价格 
        return total + (product?.price || 0) * item.quantity
    }, 0)
  })
  const getQuantity = (productId: number) => {
    // 获取商品数量
    const item = items.value.find(i => i.productId === productId)
    return item ? item.quantity : 0
  }
  const addToCart = (productId: number) => {
    // 添加商品到购物车
    const item = productStore.products.find(i => i.id === productId)
    
    if(!item) return; // 没有改商品
    const currentQuantity = getQuantity(productId)
    if(currentQuantity >= item.inventory){
        alert('商品库存不足')
    }
    const existingItem = items.value.find(i => i.productId === productId)
    if(existingItem) {
        existingItem.quantity++
    }else {
        items.value.push({
            productId,
            quantity: 1,
        })
    }
  }

  return {
    items,
    totalPrice,
    getQuantity,
    addToCart
  }
})