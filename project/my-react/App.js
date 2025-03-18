import {RouterProvider} from 'react-router-dom'
import {router} from './router/index'

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            <Outlet />
        </>
        
    )
}
export default App