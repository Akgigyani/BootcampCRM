import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <>
        <div className="container homePage">
            <div className="jumbotron">
                <h1>Welcome to Project Rova</h1>
                <p>Project Rova is your ultimate Customer Relationship Management 
                    software developed to give you the world right at the click of a button</p>
            </div>
            <div className="employeesTable">
                <span className="tableName">Employees Registory</span>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Contract</th>
                        <th>E-mail</th>
                        <th colSpan={2}></th>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                        <td>Khan@alacrity.com</td>
                        <td><FontAwesomeIcon icon={faPen} className='icons' color='blue' /></td>
                        <td><FontAwesomeIcon icon={faTrash} className='icons' color='red' /></td>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                        <td>Khan@alacrity.com</td>
                        <td><FontAwesomeIcon icon={faPen} className='icons' color='blue' /></td>
                        <td><FontAwesomeIcon icon={faTrash} className='icons' color='red' /></td>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                        <td>Khan@alacrity.com</td>
                        <td><FontAwesomeIcon icon={faPen} className='icons' color='blue' /></td>
                        <td><FontAwesomeIcon icon={faTrash} className='icons' color='red' /></td>
                    </tr>

                </table>
            </div>
        </div>
        </>
    )
}

export default Home;
