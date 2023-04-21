import { getBusInaLe } from 'actions/buisnessUnitActions'
import Checkbox from 'components/controls/Checkbox'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useGlobalFilter, usePagination, useRowSelect } from 'react-table'
import Modal from 'react-modal';
import { useAlert } from 'react-alert'

const BuSelectionForAssignment = ({ legalCodes }) => {
    const alert=useAlert()
    const color = "light"
    const { busInaLe, loading, error, success } = useSelector((state) => state.busInaLe)
    console.log("busInaLe", busInaLe)
    const [open, setOpen] = useState(false)
    function openModal() {
        console.log("hii")
        setOpen(true);
    }



    function closeModal() {
        setOpen(false);
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
    const handleConfirm = () => {
        console.log("gggg")
        alert.success("Representative assigned")
        setOpen(false)
    }
    const dispatch = useDispatch()
    console.log("legalCodes", legalCodes)
    useEffect(() => {
        dispatch(getBusInaLe(legalCodes))





    }, [dispatch])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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


    ]
    const columns = useMemo(() => COLUMNS, [])
    const data = busInaLe
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
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
                },
                ...columns
            ])
        }


    )
    const { pageIndex, pageSize, globalFilter } = state
    console.log(selectedFlatRows)
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

                    <Modal
                        isOpen={open}
                        onRequestClose={closeModal}
                        style={customStyles}
                        ariaHideApp={false}
                        contentLabel="Example Modal"
                    >
                        <center>
                            <input
                                type="email"
                                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="representative@email.com"
                            />

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
                                <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th className={
                                            "font-extrabol align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap  text-center " +
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
                                    <tr className="border-t-0  align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" {...row.getRowProps()}>
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
                <center>
                    <button onClick={openModal} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Assign
                    </button>
                </center>
            </div>

        </>
    )
}

export default BuSelectionForAssignment