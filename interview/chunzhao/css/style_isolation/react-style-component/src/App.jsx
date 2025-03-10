import './App.css'
import {
  useEffect,
  useState
} from 'react'
function App() {
  const [streamData,setStreamData] = useState([])
  useEffect(()=>{
    const eventSource = new EventSource('http://localhost:3000/stream')
    eventSource.onmessage = (event) => {
      if(event.data) {
        // 拼接
        // setStreamData(prevData => prevData+event.data)
        setStreamData(prevData => [...prevData,event.data])
        console.log(event.data)
      }
    }
    eventSource.onerror = (error) => {
      console.log(error)
      eventSource.close(); // 关闭连接
    }
    return () => {
      eventSource.close(); // 组件卸载时关闭连接
    }
  },[])
  return (
    <>
      
       
    </>
  )
}

export default App
