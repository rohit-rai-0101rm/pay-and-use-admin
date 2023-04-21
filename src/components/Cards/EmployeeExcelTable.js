import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

const EmployeeExcelTable = ({data}) => {
    console.log(data)
    const columns = [
        { field: "id", headerName: "S No.", minWidth: 50, flex: 0.3 },

        {
            field: "empCode",
            headerName: "Employee Code",
            minWidth: 150,
            flex: 0.5,
            editable: true,
            type: 'date',

        },
        {
            field: "groupCode",
            headerName: "Group Code",
            type: "number",
            minWidth: 150,
            flex: 0.4,
            type: 'date',

        },

        {
            field: "legalCode",
            headerName: "Legal Code",
            type: "string",
            minWidth: 150,
            flex: 0.5,
        },

        {
            field: "buCode",
            flex: 0.3,
            headerName: "Bu Code",
            minWidth: 150,
            type: "date",

        },


        {
            field: "firstName",
            headerName: "First Name",
            minWidth: 50,
            flex: 0,
            type: "string",
        },
        {
            field: "lastName",
            headerName: "Last Name",
            minWidth: 150,

            type: "number",
        },

        {
            field: "dob",
            headerName: "Date of Birth",
            minWidth: 150,
            flex: 0.5,

        },
        {
            field: "doj",
            headerName: "Date of Joining",
            type: "string",
            minWidth: 150,
            flex: 0.4,
        },
        {
            field: "aadhar",
            flex: 0.3,
            headerName: "Aadhar Number",
            minWidth: 150,
            type: "date",

        },


        {
            field: "pan",
            headerName: "Pan Number",
            minWidth: 50,
            flex: 0,
            type: "string",
        },
        





    ];

       const rows=[]
  return (
    <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
  )
}

export default EmployeeExcelTable