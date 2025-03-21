// 通用request 业务
import {ref,wactchEffect} from 'vue'
import {debounce} from '@/utils/debounce'

// requestFn 异步请求函数
export const useRequest = (requestFn:() => void) => {
    const data = ref([]); // 抽象
    const loading = ref(true);
    const error = ref(null);

    const fetchData = async () => {
        try {
            const res = await requestFn();
            data.value = res.data;
            error.value = null;
        } catch (err) {
            error.value = err;
            data.value = null;
        }
         finally {
            loading.value = false;
        }
    }
    wactchEffect(() => {
        loading.value = true; // 默认加载中
        fetchData();
    })
    return {data,loading,error,fetchData}
    

}
