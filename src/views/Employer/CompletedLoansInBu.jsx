import React, { useMemo } from 'react'
import { COMPLETED_LOANS_COLUMNS } from 'components/MockData/completedLoansColumns'

import { useTable, useGlobalFilter, usePagination,useBlockLayout } from 'react-table'
import COMPLETED_LOANS_MOCK_DATA from '../../components/MockData/COMPLETED_LOANS_MOCK.json'
import GlobalFilter from 'components/MockData/GlobalFilter'

const CompletedLoansInBu = () => {
  const color = "light"
  const options=[
    {value:'underReview',label:'Under Review'},
    {value:'approved',label:'Approved'},
    {value:'disbursed',label:'Disbursed'},
    {value:'hold',label:'Hold(Pending for Documents)'},
    {value:'rejected',label:'Rejected'},
  ]

  const columns = useMemo(() => COMPLETED_LOANS_COLUMNS, [])
  const data = useMemo(() => COMPLETED_LOANS_MOCK_DATA, [])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
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
  )
  const { pageIndex, pageSize, globalFilter } = state


  return (
    <div>
      <div className="rounded-t bg-white mb-0 px-6 py-6">

      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
         COMPLETED LOANS
        </h6>

          <div>


            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">


                </div>
              </div>
            </div>

            <div className="flex py-4 flex-wrap">
              <div className="w-1/3 lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    COmpleted Loans filter
                  </label>
                  <select  className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                    <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                      Please select an option
                    </option>  {
                      options.map((option, index) => {
                        return (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        )
                      })
                    }
                                                                   


                  </select>

                </div>
              </div>
              <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

          <table {...getTableProps()} className="items-center mt-4 w-full bg-transparent border-collapse">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th className={
                      "px-6 font-extrabol align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-theme font-extrabold	 text-white")
                    } {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row)
                return (
                  <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td className="px-6 py-4 font-bold align-middle border-2 whitespace-nowrap text-left"  {...cell.getCellProps()}>{cell.render('Cell')}</td>
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


           





            <div className=" px-4 py-8 flex flex-wrap">


              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">


                </div>
              </div>
            </div>

          </div>

        






      </div>
    </div>
  )
}

export default CompletedLoansInBu