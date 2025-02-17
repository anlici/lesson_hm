import {useEffect,useState} from 'react';
import {memo,useCallback,useMemo} from 'react'; // 高阶组件，返回组件
// interface BobProps {
//   count:number;
//   callback:() => void;
// }
// function Bob(props:BobProps) {

function Bob(props) {
  console.log('bob---');
  return <h2>{props.count}</h2>
}
// 将一个组件返回一个新组件 高级组件
// 返回参数或返回值 是函数 高阶函数
const MemoBob = memo(Bob);
console.log(MemoBob);
const MemoExample = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(3);
  // 计算缓存，起到computed的功能
  const product = useMemo(() => {
    return count1*count2*count3
  },[count1,count2])
  return (
    <div>
      <p>Count1: {count1}</p>
      <button onClick={() => setCount1(count1+1)}>增加Count1</button>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount2(count2+1)}>增加Count2</button>
      <p>Count3: {count3}</p>
      <button onClick={() => setCount3(count3+1)}>增加Count2</button>
      <p>乘积{product}</p>
    </div>
  )
}
function Aaa() {
  const [num,stNum] = useState(1);
  console.log('render');
  const [count,setCount] = useState(1);
  // mounted 【】使得首次挂载执行一次
  useEffect(() => {
    setTimeout(() => {
      stNum(Math.random())
    },2000)
    setInterval(() => {
      setCount(count+1)
    },1000)
  },[])
  // 缓存回调函数,第二个是依赖项
  const bbcallback = useCallback(() => {
    console.log('bbc');
  },[])
  // 缓存奇数结果
  const count2 = useMemo(() => {
    return count*2
  },[count])
  return(
    <div>
      <h1>{num}</h1>
      {/* <Bob count={num} /> */}
      <MemoBob count={2}  callback={bbcallback} />
      <h2>{count2}</h2>
      <MemoExample />
    </div>
  )
}
export default Aaa;