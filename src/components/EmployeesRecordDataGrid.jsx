import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { Link } from 'react-router-dom';

const EmployeesRecordDataGrid = () => {


    const handleDelete = (id) => {
        console.log(id)
    };
    const columns = [
        {
            field: 'id', headerName: 'Employee Code', width: 90
        },
        {
            field: 'groupCode', headerName: 'Group Code', width: 90
        },
        {
            field: 'legalCode', headerName: 'Legal Code', width: 90
        },
        {
            field: 'buCode', headerName: 'Buisness Unit Code', width: 90
        },
        {
            field: 'firstName', headerName: 'First Name', width: 90
        },
        {
            field: 'lastName', headerName: 'Last Name', width: 90
        },
        {
            field: 'dob', headerName: 'Date of Birth', width: 90
        },
        {
            field: 'doj', headerName: 'Date of Joining', width: 90
        },
        {
            field: 'buCode', headerName: 'Buisness Unit Code', width: 90
        },
        {
            field: 'aadharNumber', headerName: 'Aadhar Number', width: 90
        },
        {
            field: 'panNumber', headerName: 'Pan Number', width: 90
        },
        {
            field: 'bankName', headerName: 'Bank Name', width: 90
        },
        {
            field: 'bankIfsc', headerName: 'Bank Ifsc', width: 90
        },
        {
            field: 'accountNumber', headerName: 'Account Number', width: 90
        },
        {
            field: 'ctcPa', headerName: 'CTC (PA)', width: 90
        },
        {
            field: 'ctcPm', headerName: 'CTC (PM)', width: 90
        },
        {
            field: 'isPf', headerName: 'Provident Fund(Y/N)', width: 90
        },
        {
            field: 'iseSI', headerName: 'Employee state Insurance(Y/N)', width: 90
        },
        {
            field: 'doT', headerName: 'Date of Transaction', width: 90
        },
        {
            field: 'salaryCycle', headerName: 'Salary Cycle', width: 90
        },




    ]

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/admin/employeeProfile/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    const rows = [
        { id: 1010001, groupCode: 'SEH', legalCode: 'SEPL', buCode: 'SEPL001', status: 'active', DOJ: '23/05/2022' },




    ];


    return (
        <div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    className="datagrid"


                    rows={rows}
                    columns={columns.concat(actionColumn)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>

        </div>
    )
}

export default EmployeesRecordDataGrid