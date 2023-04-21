import GlobalFilterForAuthandSmsSent from 'components/MockData/GlobalFilterForAuthandSmsSent';
import moment from 'moment';
import React, { useMemo, useState } from 'react'
import { CSVLink } from 'react-csv';
import Modal from 'react-modal';
import { useAlert } from 'react-alert'

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';
import Data from "../../components/MockData/restOf.json"
import { bulkDisburseSampleApi } from 'actions/loanActions';
import { utrBulkUploadApi } from 'actions/loanActions';
import { useDispatch, useSelector } from 'react-redux';
import DisbursedHrTable from './DisbursedHrTable';
const HrApprovedTable = ({ data }) => {
  const { loading, success, utrBulkUpload } = useSelector((state) => state.utrBulkUpload)
  const dispatch = useDispatch()
  const alert = useAlert()
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null)

  const [fileSize, setFileSize] = useState(null)
  const [isFileUploaded, setIsFileUploaded] = useState(null)
  const openModal = (e) => {
    e.preventDefault()
    dispatch(bulkDisburseSampleApi())
    setIsOpen(true);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '5px',
      border: 'none'
    },
  };

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter
    console.log(fileObj)
    setFile(fileObj)
    setFileSize((event.target.files[0].size) * 0.000001)
    setIsFileUploaded(true)

  }
  const handleConfirm = () => {
    if (!isFileUploaded) {
      alert.error("please upload your image")

    }
    else {
      if (isFileUploaded) {

        alert.success("file uploaded succesfully")
        dispatch(utrBulkUploadApi(file))
        setIsOpen(false)

      }
    }
  }

  function closeModal() {
    setIsOpen(false);
  }
  const color = "light"
  const history = useHistory()


  const COLUMNS = [

    {
      Header: "Loan Id",
      accessor: "id",
    },
    {
      Header: "Employee Code",
      accessor: "empCode",
    },
    {
      Header: "Employee Name",
      accessor: "fullName",
    },
    {
      Header: "Loanm Product",
      accessor: "productDescription",


    },
    {
      Header: "BU Name",
      accessor: "buDescription",

    },
    {
      Header: "Loanm Amount",
      accessor: "loanAmount",
      Cell: row => <div style={{ textAlign: "center" }}>{row.value == null ? "NA" : row.value.toFixed(2)}</div>


    },





    {
      Header: "Details",

      width: "12.5%",
      Cell: ({ row }) => {
        return <button class="bg-whiteSmoke-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleProceed(row.original.buCode, row.original.empCode)}>
          View
        </button>;
      },
    },


  ]

  const handleView = (row) => {
    history.push("/admin/employeeProfile/1010002/BU00067")
  }

  const handleProceed = (id, grpCode) => {
    localStorage.setItem("groupCode", grpCode)
    history.push(`/admin/companiesInAGroup/${id}`)
  }
  const columns = useMemo(() => COLUMNS, [])
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
  if (utrBulkUpload.length > 0) {
    return (
      <DisbursedHrTable  data={utrBulkUpload}/>
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
                HR Approved
              </h3>

            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <GlobalFilterForAuthandSmsSent filter={globalFilter} setFilter={setGlobalFilter} />


          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal"
          >
            <center>
              <label for="formFile" class=" pl-24 form-label inline-block mb-2 text-gray-700">Recommendation: Please upload png,jpeg file less than 05MB
              </label>
              <input class="form-control
                                      block
                                      w-full
                                      px-3
                                      py-1.5
                                      text-base
                                      font-normal
                                      text-gray-700
                                      bg-white bg-clip-padding
                                      border border-solid border-gray-300
                                      rounded
                                      transition
                                      ease-in-out
                                      m-0
                                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={fileHandler} type="file" accept=".xlsx, .xls, .csv" id="formFile" />

              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">

                    <button onClick={handleConfirm} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Confirm
                    </button>
                    <button onClick={closeModal} className=" mt-10 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Cancel
                    </button>

                  </div>
                </div>
              </div>

            </center>


          </Modal>

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
        <button className=" mt-10 mb-2 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={(e) => openModal(e)} >UPLOAD UTR</button>


      </center>
    </>

  );
}

export default HrApprovedTable