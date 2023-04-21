import React, { useEffect, useMemo, useState } from "react";
import Pagination from "react-js-pagination";
import './Pagination.css';
// components
import { useTable, useGlobalFilter, usePagination, useRowSelect } from 'react-table'
import { MultiSelect } from "react-multi-select-component";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { CSVLink, CSVDownload } from "react-csv";
import Modal from 'react-modal';

import CardTable from "components/Cards/CardTable.js";
import Navbar from "components/Navbars/IndexNavbar";
import CompanyMasterCardTable from "components/Cards/CompanyMasterCardTable";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyMasterList } from "actions/companyMasterActions";
import { groupEntityListApi } from "actions/groupEntityActions";
import GroupEntityListTable from "components/Cards/GroupEntityListTable";
import Loader from "layouts/Loader/Loader";
import moment from "moment";
import { useHistory } from "react-router";
import GlobalFilterForGroup from "components/Filters/GlobalFilterForGroup";
import { useAlert } from "react-alert";
import { deleteGroupEntity } from "actions/groupEntityActions";

export default function GroupEntityList() {
  const [isOpen, setIsOpen] = useState(false);
  const alert = useAlert()

  const { groupEntityList, loading } = useSelector((state) => state.groupEntityList);
const {loading:ld,success,error,isDeleted}=useSelector((state)=>state.groupEntity)
  const [groupIdtoDelete, setGroupIdtoDelete] = useState(null)
  const [groupNameToDelete, setGroupNameToDelete] = useState(null)

  const history = useHistory()
  const color = "light";
  const dispatch = useDispatch()
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [sort, setSort] = useState("id");
  const [sortType, setSortType] = useState("desc");
  const [size, setSize] = useState(25);
  const [page, setPage] = useState(1)
  const [pageNo, setPageNo] = useState(-1);
  const handlePage = (e) => {
    setPage(e);
    setPageNo(e - 2);

  }
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
    console.log(groupIdtoDelete)
    dispatch(deleteGroupEntity(groupIdtoDelete))
    setIsOpen(false)
  }

  function closeModal() {
    setIsOpen(false);
  }



  console.log(sort)
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Grapes 🍇", value: "gr" },
    { label: "M 🥭", value: "ma" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];
  useEffect(() => {
    if(isDeleted){
      alert.success("Group deleted successfully")
    }
    dispatch(groupEntityListApi(code, description, sort, sortType, size, (pageNo + 1)), [pageNo])

  }, [size, pageNo,isDeleted])
  const COLUMNS = [
    {
      Header: "Group Code",
      accessor: "groupCode",
    },
    {
      Header: "Group Name",
      accessor: "groupName",

    },


    {
      Header: "Status",
      accessor: "flag",
      Cell: ({ value }) => {
        return (value == "Y" ? "Active" : "Inactive");
      },

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
        return <button class="bg-whiteSmoke-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleProceed(row.original.id, row.original.groupCode)}>
          View
        </button>;
      },
    },
    {
      Header: "Delete",

      width: "12.5%",
      Cell: ({ row }) => {
        return <button onClick={() => handleDelete(row.original.groupName,row.original.id)} class="bg-red-600 text-white active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150">
          Delete
        </button>;
      },
    },
 


  ]

  const columns = useMemo(() => COLUMNS, [])
  const data = groupEntityList
  const [selected, setSelected] = useState([]);

  const handleProceed = (id, grpCode) => {
    localStorage.setItem("groupCode", grpCode)
    history.push(`/admin/companiesInAGroup/${id}`)
  }
  const handleDelete = (groupName,groupId) => {
    setGroupIdtoDelete(groupId)
    setGroupNameToDelete(groupName)
    setIsOpen(true)

  }

  const handleUpdate = (groupid) => {
    history.push(`/admin/updateGroupEntity/:${groupid}`)
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
  const csvData = groupEntityList




  console.log("groupIdtoDelete", groupIdtoDelete)

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
                ALL GROUPS
              </h3>
            </div>
          </div>
        </div>
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
                <h6 className="text-blueGray-700 text-xl font-bold">{groupNameToDelete}</h6>

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
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <GlobalFilterForGroup filter={globalFilter} setFilter={setGlobalFilter} />




          <table id="tab" {...getTableProps()} className="items-center  w-full bg-transparent border-collapse">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th className={
                      "px-6 font-extrabol  border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-left " +
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
                      return <td className="px-6 py-4 text-black font-bold align-middle  whitespace-nowrap text-left"  {...cell.getCellProps()}>{cell.render('Cell')}</td>
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