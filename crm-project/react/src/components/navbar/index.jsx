import './navbar.css';
// import { Link, NavLink } from 'react-router-dom';
// import Logo from '../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
            <nav className='navbar'>
                <div className='container-fluid'>
                    {/* <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" className='logo'/>
                    </Link> */}
                    <div className="rightNavbarLinks">
                        {/* <input type="text" placeholder="Search.." /> */}
                        <FontAwesomeIcon icon={faBell} />
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;