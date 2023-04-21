import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EmployeeProfileData() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField

                    id="filled-error"
                    label="firstName"
                    value="Rohit"
                    variant="filled"
                />
                <TextField

                    id="filled-error-helper-text"
                    label="lastName"
                    value="Rai"
                    variant="filled"
                />
            </div>
            <div>

                <TextField

                    id="filled-error-helper-text"
                    label="AADHAR"
                    value="5398 8965 3498 3678"
                    variant="filled"
                />

                <TextField

                    id="filled-error-helper-text"
                    label="PAN"
                    value="ENEPR6226N"
                    variant="filled"
                />


            </div>
            <div>
                <TextField

                    id="filled-error-helper-text"
                    label="DOB"
                    value="02/06/2022"
                    variant="filled"
                />

                <TextField

                    id="filled-error-helper-text"
                    label="DOJ"
                    value="02/06/2022"
                    variant="filled"
                />

            </div>
            <div>
                <TextField

                    id="filled-error-helper-text"
                    label="ADDRESS 1"
                   value="chirag dilli "
                    variant="filled"
                />

                <TextField

                    id="filled-error-helper-text"
                    label="ADDRESS LINE 2"
                    value="New Delhi"
                    variant="filled"
                />

            </div>
            <div>
                <TextField

                    id="filled-error-helper-text"
                    label="TOWN"
                    value="DELHI "
                    variant="filled"
                />

                <TextField

                    id="filled-error-helper-text"
                    label="CITY"
                    value="New Delhi"
                    variant="filled"
                />

            </div>  <div>
                <TextField

                    id="filled-error-helper-text"
                    label="STATE"
                    value="DELHI "
                    variant="filled"
                />

                <TextField

                    id="filled-error-helper-text"
                    label="PIN CODE"
                    value="275101"
                    variant="filled"
                />

            </div>
        </Box>
    );
}
