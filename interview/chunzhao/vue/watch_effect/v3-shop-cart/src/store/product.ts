import {ref,onMounted} from 'vue'
import {defineStore} from 'pinia'
import {getProducts} from '../api/product'

export interface Product {
    id: number;
    title:string;
    price:number;
    inventory:number;
}
export const useProductStore = defineStore('product', () => {
    const products = ref([] as Product[]) // 断言
    const loadProducts =async () => {
        products.value = await getProducts()
    }

    onMounted(() => {
        loadProducts()
    })
    return {
        products,
        loadProducts,
    }
})
