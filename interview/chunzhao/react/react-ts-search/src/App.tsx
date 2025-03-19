
import './App.css'
import { Button } from './components/ui/button'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/search' element={<Search />} /> '
        </Routes>
      </Router>
    </>
  )
}

export default App
