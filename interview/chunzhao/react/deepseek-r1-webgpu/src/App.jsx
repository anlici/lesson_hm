import {
  useEffect,
  useState,
  useRef
} from 'react';
// !! 表示强制转换为布尔值 更严格 undefined 
const IS_WEBGPU_AVAILABLE = !!navigator.gpu;

function App() {

  const [status, setStatus] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState(null);
  // 主线程的优化
  // 绑定一个worker 对象 负责大模型的计算  
  const worker = useRef(null);
  useEffect(() => {
    // console.log('ww')
    if (!worker.current) {
      // html5 多线程的 WebWorker
      worker.current = new Worker(new URL('./worker.js', import.meta.url), {
        type: 'module'
      })
      // 基于消息机制的 
      worker.current.postMessage({
        type: 'check'
      })

      const onMessageReceived = (e) => {
        // console.log(e)
        switch(e.data.status) {
          // status 状态
          case 'loading':
            setStatus('loading');
            console.log(e.data.data, '////')
            setLoadingMessage(e.data.data);
          break;
        }
      }

      const onErrorReceived = (e) => {

      } 

      worker.current.onmessage = onMessageReceived;
      worker.current.onerror = onErrorReceived

      return () => {
        worker.current.removeEventListener('message', onMessageReceived);
        worker.current.removeEventListener('error', onErrorReceived);
      }
    }
  }, [])
  return IS_WEBGPU_AVAILABLE ?(
    <div className="flex flex-col h-screen max-auto justify-end text-gray-800 
    dark:text-gray-200 bg-white dark:bg-gray-900">
      {/* 初始状态 */}
      {
        status === null && messages.length === 0 && (
          <div 
          className="h-full overflow-auto scrollbar-thin justify-center items-center flex-col relative">
            <div className="flex flex-col items-center mb-1 max-w-[400px] text-center">
              <img src="logo.png" width="80%" height="auto" 
              className="block drop-shadow-lg bg-transparent" />
              <h1 className="text-4xl font-bold mb-1">DeepSeek-R1 WebGPU</h1>
              <h2 className="font-semibold">
                A next-generation reasoning model tha runs locally in your browser 
                with WebGPU acceleration.
              </h2>
            </div>
            <div className="flex flex-col items-center px-4">
              <p className="max-w-[510x] mb-4">
              你将加载一个大型语言模型，它可以回答你的问题。
              </p>
              <button 
                className="border px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 disabled:bg-blue-100 cursor-pointer disabled:cursor-not-allowed select-none"
                onClick={() => {
                  worker.current.postMessage({
                    type: 'load'
                  })
                  setStatus('loading')
                }}
                disabled={status !== null || error !== null}
              >
              Load model</button>
            </div>
          </div>
        )
      }
      {/* LLM加载中 */}
      {
        status === "loading" &&  (
          <>
          { loadingMessage }
          </>
        )
      }
      {/* LLM加载完成 可以交流*/}
      {
        status === "ready" &&  (
          <>
          </>
        )
      }
    </div>
  ): (
    <>
    </>
  )
}

export default App