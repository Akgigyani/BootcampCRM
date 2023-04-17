import FormPropsTextFields from "../textfields";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Avatar from '@mui/material/Avatar';
import './employeeadd.css';

const AddEmployees = () => {
    return (
        <>
        <div className="imageArea">
            <Avatar
            alt="Remy Sharp"
            src="../../assets/logo.png"
            sx={{ width: 200, height: 200 }}
            />
            <h3 className="employeeName">Aamir Khan</h3>
            <span className="employeeDesignation">Software Engineer</span>
        </div>
        <div className="textArea">
            <Box
            component="form"
            sx={{'& .MuiTextField-root': { m: 1, width: '40ch' },}}
            noValidate
            autoComplete="off">
                <span className="sectionTitle">Personal Information</span>
                <hr />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="textfields">
                    <TextField
                    className="fields"
                    required
                    id="outlined-required"
                    label="First Name"
                    defaultValue=""
                    size="small"
                    />
                    {/*  */}
                    <TextField
                    className="fields"
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                    size="small"
                    />
                    {/* <br /> */}
                    <TextField
                    className="fields"
                    required
                    id="outlined-required"
                    label="E-mail"
                    defaultValue=""
                    size="small"
                    />
                    {/*  */}
                    <TextField
                    // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    className="fields"
                    id="outlined-required"
                    type="telephone"
                    label="Telephone"
                    defaultValue=""
                    size="small"
                    />
                    <TextField
                    className="fields"
                    required
                    id="outlined-required"
                    label="Designation"
                    defaultValue=""
                    size="small"
                    />
                    <hr />
                    <br />
                    <DatePicker
                    format="YYYY/MM/DD"
                    // defaultValue={dayjs('2022-04-17')}
                    label="DoB"
                    defaultValue=""
                    size="small"
                    />
                    <br />
                    <br />
                    {/*  */}
                    <span className="sectionTitle">Address</span>
                    <hr />
                    <TextField
                    id="outlined-multiline-static"
                    required
                    label="Address 1"
                    multiline
                    rows={4}
                    />
                    <TextField
                    id="outlined-multiline-static"
                    label="Address 2"
                    multiline
                    rows={4}
                    />
                    <TextField
                    className="fields"
                    required
                    id="outlined-required"
                    label="Country"
                    defaultValue=""
                    size="small"
                    />
                    <TextField
                    className="fields"
                    required
                    id="outlined-required"
                    label="State/County"
                    defaultValue=""
                    size="small"
                    />
                </div>
                
                </LocalizationProvider>
            </Box>
        </div>
        <br />
        {/* <hr /> */}
        </>
    )
}

export default AddEmployees;