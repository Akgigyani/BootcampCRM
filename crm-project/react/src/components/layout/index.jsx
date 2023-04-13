import Navbar from '../navbar'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'
import './layout.css'

const Layout = () => {
    return (
        <div className='App'>
            {/* <Navbar /> */}
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Layout