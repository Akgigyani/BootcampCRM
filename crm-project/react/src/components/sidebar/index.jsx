import './sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Sidebar = () => {
    return (
            <nav className='sidebar'>
                <div className='container-fluid'>
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" className='logo'/>
                    </Link>
                </div>
            </nav>
    )
}

export default Sidebar;