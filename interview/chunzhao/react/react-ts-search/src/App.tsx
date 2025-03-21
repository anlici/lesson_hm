
// import './App.css'
// import { Button } from './components/ui/button'
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Home from '@/pages/Home';
// import Search from '@/pages/Search';

import Mock from 'mockjs';
import { useRequest } from 'ahooks';
function getUsername():Promise<String> {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name')) // 随机一个名字
    },1000)
  })
}
function App() {
    const { loading, data, error } = useRequest(getUsername());
    return (
      <div>
        {loading && 'loading...'}
        {data && <div>{data}</div>}
      </div>
    )
  // return (
  //   <>
  //     <Router>
  //       <Routes>
  //         <Route path='/' element={<Home />} /> 
  //         <Route path='/search' element={<Search />} /> '
  //       </Routes>
  //     </Router>
  //   </>
  // )
}

export default App
