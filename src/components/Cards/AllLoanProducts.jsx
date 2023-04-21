import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

// components
import { useTable, useGlobalFilter, usePagination, useRowSelect } from 'react-table'

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useDispatch, useSelector } from "react-redux";
import { allProductsApi } from "actions/loanActions";
import moment from "moment";
import GlobalFilterForGroup from "components/Filters/GlobalFilterForGroup";
import Loader from "layouts/Loader/Loader";
import { useHistory } from "react-router";
import GlobalFilterForProducts from "components/Filters/GlobalFilterForProducts";
import { clearLoanMasterState } from "actions/loanActions";

export default function AllLoanProductsCard({ }) {
  const { loading, products } = useSelector((state) => state.products)
  console.log(products)

  const [color, setColor] = useState("light");
  const [code, setCode] = useState('')
  const [description, setDescription] = useState('')
  const [sort, setSort] = useState('id')
  const [sortType, setSortType] = useState('desc')
  const [size, setSize] = useState(10000)
  const [pageNo, setPageNo] = useState(0)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(allProductsApi(code, description, sort, sortType, size, pageNo))
  
  dispatch(clearLoanMasterState())
  
  }, [])

  const COLUMNS = [
    {
      Header: "Product Code",
      accessor: "productCode",
    },
    {
      Header: "Product Name",
      accessor: "productDescription",

    },
    {
      Header: "Loan Type",
      accessor: "loanTypeCode",
    },
    {
      Header: "Intrest Rate(%)",
      accessor: "interestRate",

    },
    {
      Header: "FEE Type",
      accessor: "feeTypeDescription",
    },
    {
      Header: "Cut Off Day",
      accessor: "cutOffDay",

    },
    {
      Header: "Creation Date",
      accessor: "createdDate",
      Cell: ({ value }) => {
        return moment(value).fromNow();
      },

    },
    {
      Header: "Details",

      width: "12.5%",
      Cell: ({ row }) => {
        return <button class="bg-whiteSmoke-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleProductDetails(row.original.productCode)}>
          View
        </button>;
      },
    },



  ]
const handleProductDetails=(loanCode)=>{
  history.push(`/admin/loanDetails/${loanCode}`)

}
  const columns = useMemo(() => COLUMNS, [])
  const data = products
  const handleProceed = (id, grpCode) => {
    localStorage.setItem("groupCode", grpCode)
    history.push(`/admin/companiesInAGroup/${id}`)
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
  if (loading) {
    return (
      <Loader />
    )
  }
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
                ALL Masters
              </h3>

            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <GlobalFilterForProducts filter={globalFilter} setFilter={setGlobalFilter} />

          <table {...getTableProps()} className="items-center  w-full bg-transparent border-collapse">
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
                      return <td className="px-6 py-6 text-black font-bold align-middle  whitespace-nowrap text-center"  {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
    </>

  );
}

AllLoanProductsCard.defaultProps = {
  color: "light",
};

AllLoanProductsCard.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
