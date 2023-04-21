import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './LoanCaseDetails.css'
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function DataGridDemo() {
    const columns = [
        { field: 'id', headerName: 'id', width: 90 },
        {
            field: 'employeeName',
            headerName: 'Employee Name',
            headerAlign: 'left',
            width: 150,
        },
        {
            field: 'BU_NAME_CODE',
            headerName: 'BU_NAME_CODE',
            headerAlign: 'left',

            width: 150,

        },
        {
            field: 'LE_NAME_CODE',
            headerName: 'LE_NAME_CODE',
            headerAlign: 'left',

            width: 150,

        },
        {
            field: 'loanAmount',
            headerName: 'Loan Amount',
            headerAlign: 'left',

            width: 150,

        },
        {
            field: 'fee',
            headerName: 'Fee',
            headerAlign: 'left',

            width: 80,

        },
        {
            field: 'intrest',
            headerName: 'Intrest',
            headerAlign: 'right',

            type: 'number',
            width: 100,

        },
        {
            field: 'approvalDate',
            headerName: 'Approval Date',
            headerAlign: 'right',

            type: 'number',
            width: 180
        },
        {
            field: 'status',
            headerName: 'status',
            headerAlign: 'left',

            type: 'string',
            width: 120,

        }

    ];
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/admin/loanCase/${params.row.id}`} style={{ textDecoration: "none" }}>
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
        { id: 1, employeeName: 'Rohit', BU_NAME_CODE: 'rohit_bu', LE_NAME_CODE: 'rohit_le', loanAmount: 40000, fee: 150, intrest: '5%', status: "active", approvalDate: '23/05/2022' },
        { id: 2, employeeName: 'Neeraj', BU_NAME_CODE: 'neeraj_bu', LE_NAME_CODE: 'neeraj_le', loanAmount: 50000, fee: 150, intrest: '5%', status: "inactive", approvalDate: '23/07/2022' },
        { id: 3, employeeName: 'Pavaan', BU_NAME_CODE: 'pavaan_bu', LE_NAME_CODE: 'pavaan_le', loanAmount: 60000, fee: 450, intrest: '5.5%', status: "inprogress", approvalDate: '20/05/2022' },
        { id: 4, employeeName: 'Vivek', BU_NAME_CODE: 'vivek_bu', LE_NAME_CODE: 'vivek_le', loanAmount: 70000, fee: 750, intrest: '8%', status: "rejected", approvalDate: '29/05/2022' },
        { id: 5, employeeName: 'Arya Stark', BU_NAME_CODE: 'arya_bu', LE_NAME_CODE: 'arya_le', loanAmount: 40000, fee: 150, intrest: '5%', status: "active", approvalDate: '23/05/2022' },
        { id: 6, employeeName: 'Olenna', BU_NAME_CODE: 'olenna_bu', LE_NAME_CODE: 'olenna_le', loanAmount: 50000, fee: 150, intrest: '5%', status: "inactive", approvalDate: '23/07/2022' },
        { id: 7, employeeName: 'Cersai', BU_NAME_CODE: 'Cersai_bu', LE_NAME_CODE: 'Cersai_le', loanAmount: 60000, fee: 450, intrest: '5.5%', status: "inprogress", approvalDate: '20/05/2022' },
        { id: 8, employeeName: 'Daenerys', BU_NAME_CODE: 'Daenerys_bu', LE_NAME_CODE: 'Daenerys_le', loanAmount: 70000, fee: 750, intrest: '8%', status: "rejected", approvalDate: '29/05/2022' },
        { id: 9, employeeName: 'John Snow', BU_NAME_CODE: 'john_bu', LE_NAME_CODE: 'john_le', loanAmount: 40000, fee: 150, intrest: '5%', status: "active", approvalDate: '23/05/2022' },
        { id: 10, employeeName: 'Bran Stark', BU_NAME_CODE: 'bran_bu', LE_NAME_CODE: 'bran_le', loanAmount: 50000, fee: 150, intrest: '5%', status: "inactive", approvalDate: '23/07/2022' },
        { id: 11, employeeName: 'Robb Stark', BU_NAME_CODE: 'robb_bu', LE_NAME_CODE: 'robb_le', loanAmount: 60000, fee: 450, intrest: '5.5%', status: "inprogress", approvalDate: '20/05/2022' },
        { id: 12, employeeName: 'Sansa Stark', BU_NAME_CODE: 'sansa_bu', LE_NAME_CODE: 'sansa_le', loanAmount: 70000, fee: 750, intrest: '8%', status: "rejected", approvalDate: '29/05/2022' }

    ];
    const [data, setData] = React.useState(rows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    return (
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
    );
}
