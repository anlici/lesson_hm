
import { useState, useEffect, useLayoutEffect } from 'react'
function App() {
  const [count, setCount] = useState(0)
  Promise.resolve().then(() => {
      console.log('promise')
  })
  useEffect(() => {
      console.log('useEffect')
  }, [count])
  useLayoutEffect(() => {
      console.log('useLayoutEffect')
  }, [count])

  return (
      <div>
          <h1>{count}</h1>
      </div> 
  )
}

export default App