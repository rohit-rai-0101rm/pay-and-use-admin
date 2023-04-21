import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import './LoanCaseDetails.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getExcelLayoutApi } from "actions/excelActions";
import { FileSaver } from 'file-saver';

export default function EmployeeInABuDataGrid() {
    const { excelLayout } = useSelector(state => state.excel)
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getExcelLayoutApi())
    }, [dispatch])
    const columns = [
        { field: 'id', headerName: 'id', width: 90 },
        {
            field: 'employeeCode',
            headerName: 'Employee Code',
            headerAlign: 'left',
            width: 150,
        },


        {
            field: 'firstName',
            headerName: 'FIRST NAME',
            headerAlign: 'left',

            width: 150,

        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            headerAlign: 'left',

            width: 80,

        },
        {
            field: 'DOB',
            headerName: 'DOB',
            headerAlign: 'right',

            type: 'number',
            width: 100,

        },
        {
            field: 'DOJ',
            headerName: 'DOJ',
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
        { id: 1, employeeCode: '001', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 2, employeeCode: '002', firstName: 'Rohit', lastName: 'rai2', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 3, employeeCode: '003', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 4, employeeCode: '004', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 5, employeeCode: '005', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 6, employeeCode: '006', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 7, employeeCode: '007', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 8, employeeCode: '008', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 9, employeeCode: '009', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 10, employeeCode: '010', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 11, employeeCode: '011', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 12, employeeCode: '012', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 13, employeeCode: '013', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },
        { id: 14, employeeCode: '014', firstName: 'Rohit', lastName: 'rai', DOB: '23/05/2022', status: 'active', DOJ: '23/05/2022' },



    ];
    const [data, setData] = React.useState(rows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const onDownload = () => {

       
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
            <button onClick={onDownload} type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                dOWNLOAD
            </button>
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
