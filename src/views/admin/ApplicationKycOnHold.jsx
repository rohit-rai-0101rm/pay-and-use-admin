import GlobalFilterForAuthandSmsSent from 'components/MockData/GlobalFilterForAuthandSmsSent';
import moment from 'moment';
import React, { useMemo } from 'react'
import { CSVLink } from 'react-csv';
import { useHistory } from 'react-router';
import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';
import Data from "../../components/MockData/restOf.json"
const ApplicationKycOnHold = () => {
    const color="light"
    const history=useHistory()
    
    
    const COLUMNS = [
        {
            Header: "Employee Code",
            accessor: "empCode",
        },
        {
            Header: "Employee Name",
            accessor: "empName",

        },
        {
            Header: "Buisness Unit Name",
            accessor: "buName",

        },
        {
            Header: "Loan Product",
            accessor: "loanProduct",

        },
        {
            Header: "Loan Amount",
            accessor: "loanAmount",

        },




        {
            Header: "Last Action Date",
            accessor: "lastActionDate",
            Cell: ({ value }) => {
                return moment(value).fromNow();
            },

        },
        {
            Header: " View Details",

            width: "12.5%",
            Cell: ({ row }) => {
                return <button class="bg-whiteSmoke-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleProceed(row.original.id, row.original.groupCode)}>
                    View
                </button>;
            },
        },


    ]
    const handleProceed = (id, grpCode) => {
        localStorage.setItem("groupCode", grpCode)
        history.push(`/admin/companiesInAGroup/${id}`)
    }
    const columns = useMemo(() => COLUMNS, [])
    const data = Data
    console.log(data)
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
    
    
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                  >
                    Application  on Kyc Hold
                  </h3>
                 
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <GlobalFilterForAuthandSmsSent filter={globalFilter} setFilter={setGlobalFilter} />
    
    
    
    
              <table id="tab" {...getTableProps()} className="items-center  w-full bg-transparent border-collapse">
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th className={
                          "px-6 font-extrabol align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-center " +
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
                      <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return <td className="px-6 py-4 text-black font-normal	text-sm		 align-middle  whitespace-nowrap text-center"  {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
              <center>
                <span>
                  Page{''}
                  <strong>
                    {pageIndex + 1} of{pageOptions.length}
                  </strong>
                </span>
                <span>
                  | GO To page :{''}
                  <input className={"border-2 ml-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96 ease-linear transition-all duration-150"}
                    type='number' defaultValue={pageIndex + 1} onChange={(e) => {
                      const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(pageNumber)
                    }} />
                </span>
                <select className={"border-2 ml-2 px-3 py-3  text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-half ease-linear transition-all duration-150"} value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
    
                  {
                    [10, 25, 50].map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize} per page
                      </option>
                    ))
                  }
    
    
                </select>
                <button className="px-2 ml-2 mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button className="px-4 mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" onClick={() => previousPage()} disabled={!canPreviousPage}>previous</button>
                <button className="px-4 mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" onClick={() => nextPage()} disabled={!canNextPage}>next</button>
    
                <button className="px-4 mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
    
              </center>
            
            </div>
            
    
          </div>
          <center >
                <button className=" mt-10 mb-2 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >Download as XLS</button>
    
    
              </center>
        </>
    
      );
}

export default ApplicationKycOnHold