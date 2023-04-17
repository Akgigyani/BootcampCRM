import './employeeView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

const ViewEmployee = () => {
    return (
        <>
        <div className="employeesViewTable">
                <span className="tableName">Employees Record</span>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Contract</th>
                        <th colSpan={2}></th>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                        <td><FontAwesomeIcon icon={faPen} className='icons' color='blue' /></td>
                        <td><FontAwesomeIcon icon={faTrash} className='icons' color='red' /></td>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                        <td><FontAwesomeIcon icon={faPen} className='icons' color='blue' /></td>
                        <td><FontAwesomeIcon icon={faTrash} className='icons' color='red' /></td>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                        <td><FontAwesomeIcon icon={faPen} className='icons' color='blue' /></td>
                        <td><FontAwesomeIcon icon={faTrash} className='icons' color='red' /></td>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                        <td><FontAwesomeIcon icon={faPen} className='icons' color='blue' /></td>
                        <td><FontAwesomeIcon icon={faTrash} className='icons' color='red' /></td>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                        <td><FontAwesomeIcon icon={faPen} className='icons' color='blue' /></td>
                        <td><FontAwesomeIcon icon={faTrash} className='icons' color='red' /></td>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                        <td><FontAwesomeIcon icon={faPen} className='icons' color='blue' /></td>
                        <td><FontAwesomeIcon icon={faTrash} className='icons' color='red' /></td>
                    </tr>


                </table>
            </div>
        </>
    )
} 

export default ViewEmployee;