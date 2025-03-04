import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import routes from './router';
import {ConfigProvider,Button} from 'zarm';
import 'zarm/dist/zarm.css';
export default function App() {
  return (
    // theme={"dark"} 
    <ConfigProvider primaryColor={'#007fff'}>
      <Router>
        <Button theme="primary">按钮</Button>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

// import React from "react";
// import useStore from "./store/1";
// export default function App() {
//   const  {count,increment,decrement,reset} = useStore();
  
//   return (
//     <>
//         <h1>{count}</h1>
//         <div>
//             <button onClick={increment}>前一个</button>
//             <button onClick={decrement}>后一个</button>
//         </div>
//     </>
//   );
// }