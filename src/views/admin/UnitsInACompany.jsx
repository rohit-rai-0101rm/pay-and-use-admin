import React, { Fragment, useEffect, useMemo, useState } from "react";
import Pagination from "react-js-pagination";
import './Pagination.css';
// components
import { Typography } from '@mui/material';
import './UnitsInACompany.css';
import { useTable, useGlobalFilter, usePagination, useRowSelect } from 'react-table'
import { CSVLink, CSVDownload } from "react-csv";
import Modal from 'react-modal';

import CardTable from "components/Cards/CardTable.js";
import Navbar from "components/Navbars/IndexNavbar";
import CompanyMasterCardTable from "components/Cards/CompanyMasterCardTable";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyMasterList } from "actions/companyMasterActions";
import { groupEntityListApi } from "actions/groupEntityActions";
import GroupEntityListTable from "components/Cards/GroupEntityListTable";
import { useHistory, useParams } from "react-router";
import { getBuInACompanyApi } from "actions/buisnessUnitActions";
import Loader from "layouts/Loader/Loader";
import MetaData from "layouts/MetaData";
import UnitsInACompanyCard from "components/Cards/UnitsInACompanyCard";
import BuisnessUnitPre from "components/Forms/BuisnessUnitPre";
import NoCompaniesInAgroup from "components/Errors/NoCompaniesInAgroup";
import GlobalFilterForLes from "components/Filters/GlobalFilterForLes";
import NoUnitsInAcompany from "components/Errors/NoUnitsInAcompany";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import { deleteBuisnessUnit } from "actions/buisnessUnitActions";
import { useAlert } from "react-alert";

export default function UnitsInACompany() {
  const{isDeleted}=useSelector((state)=>state.buisnessUnit)
  const [isOpen, setIsOpen] = useState(false);
const alert=useAlert()
  const color = "light"
  const history = useHistory()
  const dispatch = useDispatch()
  const [createBuNow, setCreateBuNow] = useState(false)
  const { loading, buisnessUnitsInAGroup } = useSelector((state) => state.buisnessUnitInAGroup)
  console.log(loading)
  console.log(buisnessUnitsInAGroup)
  const [createNewBu, setCreateNewBu] = useState(false)
  const companyCode = buisnessUnitsInAGroup[0]?.mpCompanyMaster?.companyCode
  console.log(companyCode)
  const [buNametoDelete, setBuNametoDelete] = useState(null)
  const [buidToDelete, setBuidToDelete] = useState(null)
  const { id } = useParams()


  const openModal = (e) => {
    e.preventDefault()

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
  const handleConfirm = () => {
    dispatch(deleteBuisnessUnit(buidToDelete))
    setIsOpen(false)
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if(isDeleted){
      alert.success("buisness unit deleted successfully")
    }
    dispatch(getBuInACompanyApi(id))

  }, [id,isDeleted])


  const { id: companyId } = useParams()

  const COLUMNS = [
    {
      Header: "Buisness Unit Code",
      accessor: "buCode",

      width: "12.5%",
    },
    {
      Header: "Buisness Unit Name",
      accessor: "buDescription",


      width: "21.5%",
    },
    {
      Header: "Email",
      accessor: "email",


      width: "12.5%",

    },
    {
      Header: "Phone",
      accessor: "phone",


      width: "12.5%",

    },
    {
      Header: "Contact Person",
      accessor: "contactPerson",


      width: "21.5%",
    },
    {
      Header: "Contact Person Mobile",
      accessor: "contactPersonMobile",


      width: "12.5%",

    },
    {
      Header: "Contact Person Email",
      accessor: "contactPersonEmail",
      minWidth: "200px",

      width: "12.5%",

    },

    {
      Header: "Action",


      width: "12.5%",
      Cell: ({ row }) => {
        return <button class="bg-whiteSmoke-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleProceed(row.original.buCode)}>
          Details
        </button>;
      },
    },
    {
      Header: "Delete",

      width: "12.5%",
      Cell: ({ row }) => {
        return <button onClick={() => handleDelete(row.original.buDescription, row.original.id)} class="bg-red-600 text-white active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150">
          Delete
        </button>;
      },
    },
  ]
  const handleDelete = (buName, id) => {
    setBuNametoDelete(buName)
    setBuidToDelete(id)
    setIsOpen(true)

  }
  const columns = useMemo(() => COLUMNS, [])
  const data = buisnessUnitsInAGroup
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
  const handleCreateNewBuInThisGroup = () => {
    setCreateBuNow(true)
  }
  const handleProceed = (buCode) => {

    console.log(buCode)
    history.push(`/admin/buDetails/${buCode}`)

  }
  const length = buisnessUnitsInAGroup.length
  if (loading) {
    return (
      <Loader />
    )
  }
  if (length < 1) {
    return (

      <NoUnitsInAcompany />

    )
  }
  if (createBuNow) {
    return (
      <BuisnessUnitPre companyId={companyId} companyCode={companyCode} />
    )


  }

  const csvData = buisnessUnitsInAGroup



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

          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <button onClick={handleCreateNewBuInThisGroup} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            <i class="fas fa-plus"></i> Create new BU
          </button>
          <GlobalFilterForLes filter={globalFilter} setFilter={setGlobalFilter} />
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal"
          >
            <center>
              <div className="flex flex-wrap bg-whiteSmoke-500 rounded-lg">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <h6 className="text-blueGray-700 text-xl font-bold">Are you sure you want to delete</h6>
                    <h6 className="text-blueGray-700 text-xl font-bold">{buNametoDelete}</h6>

                    <button onClick={closeModal} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Cancel
                    </button>
                    <button onClick={handleConfirm} className=" mt-10 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Delete
                    </button>

                  </div>
                </div>
              </div>

            </center>


          </Modal>
          <table id="tab" {...getTableProps()} className="items-center mt-4 w-full bg-transparent border-collapse">
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
              {page.map(row => {
                prepareRow(row)
                return (
                  <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td className="px-6 py-4 text-black font-bold align-middle  whitespace-nowrap text-center"  {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
        <CSVLink className=" mt-10 mb-2 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" data={csvData}>Download as XLS</CSVLink>


      </center>
    </>
  );
}