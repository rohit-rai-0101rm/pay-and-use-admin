import React from 'react'
import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';

const EmployeeAuthorityDetails = ({ salaryType, installments }) => {
    console.log(installments)
    console.log(salaryType)
    const color = "light"
    const COLUMNS = [
        {

            accessor: "emiSeries",
            Header: () => (
                <div
                    style={{
                        textAlign: "center"
                    }}
                >Installment No</div>)
        },
        {
            accessor: "outstandingPrinciple",
            Header: () => (
                <div
                    style={{
                        textAlign: "center"
                    }}
                >Outstanding Principle</div>)

        },
        {
            Header: "EMI",
            accessor: "emi",
            Header: () => (
                <div
                    style={{
                        textAlign: "center"

                    }}
                >Emi</div>)

        },
        {
            Header: "Interest",
            accessor: "interest",
            Header: () => (
                <div
                    style={{
                        textAlign: "center"
                    }}
                >Interest</div>)

        },
        {
            Header: "Principle",
            accessor: "principle",
            Header: () => (
                <div
                    style={{
                        textAlign: "center"
                    }}
                >Principle</div>)

        },








    ]
    const columns = COLUMNS
    const data = installments
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        selectedFlatRows,
        state,
        setGlobalFilter,
        page: pg,
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
        <>

            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-theme text-bold text-white")
                }
            >
                <div className='flex flex:col'>
                    <div className="rounded-t mb-0  py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full  max-w-full flex flex:col flex-grow flex-1">
                                <h3
                                    className={
                                        "font-semibold text-lg " +
                                        (color === "light" ? "text-blueGray-700" : "text-white")
                                    }
                                >
                                    Salary Type{salaryType}
                                </h3>



                            </div>
                        </div>
                    </div>

                </div>
                {/* Projects table */}
                <table id="tab" {...getTableProps()} className="items-center  w-full bg-transparent border-collapse">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th className={
                                        " font-extrabol align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-center " +
                                        (color === "light"
                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                            : "bg-theme font-extrabold	 text-white")
                                    } {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {pg.map(row => {
                            prepareRow(row)
                            return (
                                <tr className="border-t-0  border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td className=" py-4  text-black font-normal	text-sm	text-center		  whitespace-nowrap "  {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>

                </table>




            </div>

        </>
    )
}

export default EmployeeAuthorityDetails