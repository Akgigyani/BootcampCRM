import './home.css';

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
                Employees Registory
                <table>
                    <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Contract</th>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                    </tr>
                    <tr>
                        <td>Aamir Khan</td>
                        <td>Information Technology</td>
                        <td>Permanent FullTime</td>
                    </tr>

                </table>
            </div>
        </div>
        </>
    )
}

export default Home;
