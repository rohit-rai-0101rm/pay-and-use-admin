import React, { useEffect, useMemo, useState } from 'react'
import { useSticky } from 'react-table-sticky'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { useTable, useGlobalFilter, usePagination, useRowSelect } from 'react-table'
import MOCK_DATA from '../../components/MockData/MOCK_DATA.json'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Modal from 'react-modal';

import { employeesInBuApi } from 'actions/buisnessUnitActions'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import { savessss } from 'actions/EmployeeActions'
import { employeeProfileApi } from 'actions/EmployeeActions'
import Loader from 'layouts/Loader/Loader'
import NoEmployeesInBu from 'components/Errors/NoEmployeesInBu'
import { useAlert } from 'react-alert'
import { getExcelLayoutApi } from 'actions/excelActions'
import { newEmployeesStatusExcelUploadApi } from 'actions/excelActions'
import NewEmployeesStatus from 'views/admin/NewEmployeesStatus'
import { getEmployeeAuthority } from 'actions/excelActions'
import GlobalFilter from 'components/MockData/GlobalFilter'

const FilteredEmployeeUpdate = ({ bu }) => {
    const { loadiing, employeesInBu, success } = useSelector(state => state.allEmployeesInBu)

    const { newEmployeeStatusExcelUploadResponse, error, loading } = useSelector((state) => state.uploadNewEmployeeStatusExcel)
    console.log("newEmployeeStatusExcelUploadResponse", newEmployeeStatusExcelUploadResponse)

    console.log(loadiing)

    const [modal, setModal] = useState(false)
    const [open, setOpen] = useState(false)
    const alert = useAlert();
    console.log("employeesInBu", employeesInBu)
    const [file, setFile] = useState(null)
    const [fileSize, setFileSize] = useState(null)
    const [isFileUploaded, setIsFileUploaded] = useState(null)
    let subtitle;

    const [isOpen, setIsOpen] = useState(false);
    const openModal = (e) => {
        e.preventDefault();

        dispatch(getEmployeeAuthority(bu))
        console.log("hii")
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    const fileHandler = (event) => {
        let fileObj = event.target.files[0];
        //just pass the fileObj as parameter
        console.log(fileObj)
        setFile(fileObj)
        setFileSize((event.target.files[0].size) * 0.000001)
        setIsFileUploaded(true)

    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            backgroundColor: '#F5F5F5',
            transform: 'translate(-50%, -50%)',
            borderRadius: '5px'
        },
    };

    console.log(file)

    const handleConfirm = () => {
        if (!isFileUploaded) {
            alert.error("please upload your image")

        }
        else {
            if (isFileUploaded) {
                dispatch(newEmployeesStatusExcelUploadApi(file))
                //alert.success("image uploaded succesfully")
                setIsOpen(false)

            }
        }
    }
    const history = useHistory()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                            <button disabled class="bg-green-500 w-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleViewAction(row.original.empCode, row.original.buCode)}>
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


    const dispatch = useDispatch()
    const handleAuthorizarion = (empCode, buCode) => {

        console.log(empCode, buCode)

        history.push(`/admin/authenticate/employee/${buCode}/${empCode}`)
    }
    const handleViewAction = (empCode, buCode) => {
        console.log(empCode, buCode)
        history.push(`/admin/employeeProfile/${empCode}/${buCode}`)

    }





    useEffect(() => {
        dispatch(employeesInBuApi(bu))
    }, [dispatch, bu, loadiing])
    const color = "light"
    const employees = JSON.parse(localStorage.getItem("employees"))
    console.log(employees);
    //console.log(MOCK_DATA)
    const columns = useMemo(() => COLUMNS, [])
    const data = employeesInBu
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
    console.log(selectedFlatRows)
    if (loadiing) {
        return (
            <Loader />
        )
    }
    if (success && employeesInBu.length === 0) {
        return (
            <NoEmployeesInBu code={bu} />
        )
    }
    if (newEmployeeStatusExcelUploadResponse.length > 0) {
        return (
            <NewEmployeesStatus />
        )
    }
    return (

        <>

            <div
                id="yourAppElement"
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
                                MY EMPLOYEES
                            </h3>

                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
                            <input class="block
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
                    <table id="tab" {...getTableProps()} className="items-center mt-4 w-full bg-transparent border-collapse">
                        <thead>
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
                    <center>
                        <button onClick={(e) => openModal(e)} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            Update New
                        </button>
                    </center>

                </div>

            </div>
        </>

    )
}


export default FilteredEmployeeUpdate