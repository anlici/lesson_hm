import { 
  Outlet,
  NavLink
 } from "react-router-dom"
import './App.css'
function App() {
  return (
    <>
     <header>
       <nav>
         <NavLink to="/" className={"首页"}>Home</NavLink>
         <NavLink to="/about">About</NavLink>
       </nav>
     </header>
     <Outlet />
    </>
  )
}

export default App
