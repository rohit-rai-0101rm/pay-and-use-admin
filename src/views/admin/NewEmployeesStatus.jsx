import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useTable, useGlobalFilter, usePagination, useRowSelect } from 'react-table'

const NewEmployeesStatus = (newEmployeesStatus) => {
    const color = "light"
    const { newEmployeeStatusExcelUploadResponse, error, loading } = useSelector((state) => state.uploadNewEmployeeStatusExcel)
    console.log("newEmployeeStatusExcelUploadResponse", newEmployeeStatusExcelUploadResponse)
    const history = useHistory()
    const COLUMNS = [
        {
            Header: "Employee Code",
            accessor: "empCode",
            Footer: "Employee Code",
            align: "center"



        },


        {
            Header: "First Name",
            Footer: "First Name",
            accessor: "firstName",
            //sticky:'left'

        },


        {
            Header: "Last Name",
            Footer: "Last Name",
            accessor: "lastName",
            //sticky:'left'

        },


        {
            Header: "Authorize",
            Footer: "Authorize",
            accessor: "authorized",



            width: "12.5%",
            Cell: ({ row }) => {



                switch (row.original.authorized) {
                    case "AUTHORIZED":
                        return (
                            <button disabled class="bg-green-500 w-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150">
                                Authorized
                            </button>

                        )

                    case "PENDING":
                        return (
                            <button class="bg-amber-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleAuthorizarion(row.original.empCode, row.original.buCode)}>
                                {" "} PENDING &nbsp; &nbsp; &nbsp;
                            </button>

                        )
                    case "INACTIVE":
                        return (
                            <button disabled class="bg-whiteSmoke-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleViewAction(row.original.empCode, row.original.buCode)}>
                                INACTIVE &nbsp; &nbsp; &nbsp;
                            </button>

                        )

                }






            },
        },






        {
            Header: "Action",
            Footer: "Action",
            minWidth: "Action",

            width: "12.5%",
            Cell: ({ row }) => {
                return <button class="bg-whiteSmoke-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleViewAction(row.original.empCode, row.original.buCode)}>
                    view
                </button>;
            },
        },


    ];
    const columns = useMemo(() => COLUMNS, [])
    const data = newEmployeeStatusExcelUploadResponse
    console.log("data", data)

    const handleAuthorizarion = (empCode, buCode) => {

        console.log(empCode, buCode)

        history.push(`/admin/authenticate/employee/${buCode}/${empCode}`)
    }
    const handleViewAction = (empCode, buCode) => {
        console.log(empCode, buCode)
        history.push(`/admin/employeeProfile/${empCode}/${buCode}`)

    }
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        selectedFlatRows,
        state,
        setGlobalFilter,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        gotoPage,
        pageCount,
        prepareRow
    } = useTable({
        columns,
        data,
        initialState: {
            pageIndex: 0
        }
    },

        useGlobalFilter,
        usePagination,
        useRowSelect,
    )
    const { pageIndex, pageSize, globalFilter } = state
    return (
        <div className='w-full'>

            <table id="tab" {...getTableProps()} className="items-center mt-4 w-full bg-transparent border-collapse">
                <thead>
                    <h1 className={
                        "font-semibold text-lg " +
                        (color === "light" ? "text-blueGray-700" : "text-white")
                    }>Bulk upload data</h1>
                    {headerGroups.map(headerGroup => (
                        <tr  {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th className={
                                    "px-6 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                } {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td className="px-6 py-4 text-black font-bold  whitespace-nowrap text-left"  {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot className='font-bold'>
                    {footerGroups.map(footerGroup => (
                        <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => (
                                <td className={
                                    "px-6 align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-theme font-extrabold	 text-white")
                                } {...column.getFooterProps()}>{column.render('Footer')}</td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
            
        </div>
    )
}

export default NewEmployeesStatus