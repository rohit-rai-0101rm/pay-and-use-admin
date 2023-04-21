import React from 'react'
import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';
const EmiCard = ({ emiDetails }) => {
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
  const data = emiDetails
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
  console.log("emiDetails", emiDetails)
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
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

export default EmiCard