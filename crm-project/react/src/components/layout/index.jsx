import Navbar from '../navbar'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import './layout.css'

const Layout = () => {
    return (
        <div className='App'>
            {/* <Navbar /> */}
            <Sidebar />
            <div className='page'>
                <div className='navigation'>
                    <div className='searchBar'>
                        <input type='text' width='200px' placeholder='Search' />
                    </div>
                    <div className="rightNavbarLinks">
                        {/* <input type="text" placeholder="Search.." /> */}
                        <FontAwesomeIcon icon={faBell} className='icons' />
                        <FontAwesomeIcon icon={faUser} className='icons' />
                        <span className='username'>Hello Ak</span>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout