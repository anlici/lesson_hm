import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import Home from'../pages/Home/index.tsx'
import About from'../pages/About/index.tsx'

const AppRouter = () => {
    return ( 
        < BrowserRouter >
            <Routes>
                <Route path = "/" element = { < Home /> } />
                <Route path = "/about" element = { < About /> } />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter