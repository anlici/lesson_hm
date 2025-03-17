import type { Product } from "../store/product";
// 引入类型定义 使用type   _ 表示私有
const _products: Product[] = [
    { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
    { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
    { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
  ];
export const getProducts = () => {
    return new Promise<Product[]>((resolve) => {
        setTimeout(() => {
            resolve(_products)
        }, 100)
    })

}