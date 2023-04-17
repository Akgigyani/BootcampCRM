import './sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Sidebar = () => {
    return (
            <div className='sidebar'>
                <div className='container-fluid'>
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" className='logo'/>
                    </Link>
                    <nav>
                        <NavLink className="employees-link" to="/">Employees</NavLink>
                        <NavLink className="employeesSub" to="/addemployees">Add Employee</NavLink>
                        <NavLink className="employeesSub" to="/viewemployees">View Employees</NavLink>
                        {/*  */}
                        <br />
                        <NavLink className="leads-link" to="/about">Leads</NavLink>
                        <NavLink className="leadsSub" to="">Add Leads</NavLink>
                        <NavLink className="leadsSub" to="">View Leads</NavLink> 
                        {/*  */}
                        <br />
                        <NavLink className="invoices-link" to="/contact">Invoices</NavLink>
                        <NavLink className="invoiceSub" to="">Add Invoices</NavLink>
                        <NavLink className="invoiceSub" to="">View Invoices</NavLink>
                    </nav>
                </div>
            </div>
    )
}

export default Sidebar;