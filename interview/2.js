// function app() {
//     const [count, setCount] = useState(0)

//     promise.resolve().then(() => {
//         console.log('promise')
//     })
//     useEffect(() => {
//         console.log('useEffect')
//     }, [count])
//     useLayoutEffect(() => {
//         console.log('useLayoutEffect')
//     }, [count])

//     const countRef = useRef(count);
//     useEffect(() => {
//         setInterval(() => {
//             console.log('count', count);
//             // setCount(count + 1)
//             setCount(countRef.current + 1)
//         }, 1000)
//     },[])

//     useEffect(() => {
//        const update = () => {
//         console.log('update')
//         setCount(count + 1) 
//         setTimeout(update, 1000) // 递归调用, 会导致栈溢出
//        } 
//        update(); // 初始调用
//     })

//     useEffect(() => {
//         const interval = setInterval(() => {
//             console.log('useEffect')
//             setCount(count + 1)
//         }, 1000)
//     }, [count]) // 动态依赖，但是频繁定时器创建和销毁

//     return (
//         <div>
//             <h1>{count}</h1>
//         </div> 
//     )
// }

// function Foo() {
//     getName = function () {
//         alert(1);
//     }
//     return this;
// }
// Foo.getName = function () {
//     alert(2);
// }
// Foo.prototype.getName = function () {
//     alert(3);
// }

// var getName = function () {
//     alert(4);
// }
// function getName() { alert(5); }
// Foo.getName(); // 2
// getName(); // 4
// Foo().getName(); // 1
// getName(); // 1
// new Foo.getName(); // 2
// new Foo().getName(); // 3
// new new Foo().getName(); // 3


function sum(...args) {
    let total = args.reduce((acc,cur) => acc + cur,0);
    function innerSum(...newArgs) {
        total += newArgs.reduce((acc,cur) => acc + cur,0);
        return innerSum;
    }
    innerSum.sumOf = () => total;
    return innerSum;
}
console.log(sum(1,2,3).sumOf()); // 6
console.log(sum(1,4)(2).sumOf()); // 7
console.log(sum(1)(2)(3)(4).sumOf()); // 10