// 仓库
import {create} from 'zustand'
import type { Product } from '@/types/Product'

interface ProductState {
    products: Product[];
    getProducts: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    setProducts: (products:Product[]) => set({products}),
    getProducts: async () => {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        set({products: data})
    },
 }))