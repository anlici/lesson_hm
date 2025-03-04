// 存副作用
let currentEffect = null;
let dep = new Set(); // 存依赖

// 收集依赖
function watchEffect(fn) {
    currentEffect = fn;
    fn(); //首次触发getter
    currentEffect = null;
}
// 触发更新 proxy
// function reactive(obj) {
//     return new Proxy(obj, {
//         get(target,key) {
//             if(currentEffect) {
//                 dep.add(currentEffect);
//             }
//             return target[key];
//         },
//         set(target,key,value) {
//             target[key] = value;
//             dep.forEach(fn => fn());
//             return true;
//         }
//     })
// }
// object.defineProperty
function reactive(obj) {
    const observedObj = {}; // 存储代理对象
    Object.keys(obj).forEach(key => { // 遍历对象
        let value = obj[key];
        Object.defineProperty(observedObj,key,{
            get() {
                if(currentEffect) {
                    dep.add(currentEffect)
                }
                return value;
            },
            set(newValue) {
                value = newValue;
                dep.forEach(fn => fn());
                return true;
            
            }
        })
    })
}
// 测试代码
const state = reactive({ message: "Hello" });

watchEffect(() => {
    console.log("当前消息：", state.message);
});

// 1秒后修改数据，会自动触发更新
setTimeout(() => {
    state.message = "Hello World";
}, 1000);