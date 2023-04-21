import { loanTypesInABuApi } from "actions/buisnessUnitActions";
import { employeeProfileApi } from "actions/EmployeeActions";
import { employeeproductUpdateApi2 } from "actions/EmployeeActions";
import { employeeproductUpdateApi1 } from "actions/EmployeeActions";
import { employeeproductFetchApi } from "actions/EmployeeActions";
import { productFilterApi } from "actions/loanActions";
import { productFiltersSelectionApi1 } from "actions/loanActions";
import Popup from "../Popup"
import { productFiltersSelectionApi2 } from "actions/loanActions";
import { productUpdateRequest } from "actions/loanActions";
import GlobalFilterForGroup from "components/Filters/GlobalFilterForGroup";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useTable, useGlobalFilter, usePagination, useRowSelect } from 'react-table'
import moment from "moment";
import Loader from "layouts/Loader/Loader";
import { makeStyles } from "@mui/styles";
import Modal from "components/Modal/Modal";
import UpdateEmployeeProductForm from "components/Forms/UpdateEmployeeProductForm";
import { salaryScheduleExistsApi } from "actions/salaryScheduleActions";

// components

export default function EmployeeProduct() {


    let loanTypeCodeArray = []
    const color = "light"
    const { employeeProfile } = useSelector((state) => state.employeeProfile)
    const { loading, employeeProduct } = useSelector((state) => state.employeeProduct)
    const { id: empId } = employeeProfile
    const { ProductType } = useSelector((state) => state.buProductType)



const [isSaved, setIsSaved] = useState()
    console.log(ProductType)
    ProductType?.map((item) => {
        loanTypeCodeArray.push(item.loanTypeCode)
    })
    console.log(loanTypeCodeArray)
    console.log(ProductType)
    const { productFilter } = useSelector((state) => state.productFilter)
    const { productFilter2 } = useSelector((state) => state.productFilter2)
    console.log(productFilter,productFilter)
    console.log(productFilter2,productFilter2)
    const [wantToUpdate, setWantToUpdate] = useState(false)
    const [updatingLoanType, setUpdatingLoanType] = useState('')
    const [code1, setCode1] = useState('PAYDAY')
    const [code2, setCode2] = useState('SHORTTERM')
    const [newPlan1, setNewPlan1] = useState('')
    const [newPlan2, setNewPlan2] = useState('')
    const history = useHistory()
    const [edit, setEdit] = useState(false)
    const { loanTypeCode, id } = employeeProfile
    console.log(loanTypeCode, id)
    console.log(employeeProduct)
    const { firstName, lastName } = employeeProfile
    const [openPopup, setOpenPopup] = useState(false)

    const dispatch = useDispatch()
    const { buCode, empCode } = useParams()
    const [description, setDescription] = useState('')
    const [sort, setSort] = useState('id')
    const [sortType, setSortType] = useState('desc')
    const [size, setSize] = useState(10000)
    const [pageNo, setPageNo] = useState(0)
    console.log(buCode, empCode)
    useEffect(() => {
        dispatch(salaryScheduleExistsApi(buCode))
        dispatch(employeeProfileApi(empCode, buCode))
       dispatch(loanTypesInABuApi(buCode))
        dispatch(employeeproductFetchApi(empCode, buCode));
        dispatch(productFiltersSelectionApi1("SHORTTERM", description, sort, sortType, size, pageNo))
        dispatch(productFiltersSelectionApi2("PAYDAY", description, sort, sortType, size, pageNo))


    }, [dispatch, buCode, empCode,wantToUpdate,updatingLoanType])


    console.log("employeeProduct",employeeProduct)

    const handleUpdate1 = () => {
        console.log("clicked")
        dispatch(employeeproductUpdateApi1(empId, buCode, empCode, code1, newPlan1))
    }
    const handleUpdate2 = () => {
        console.log("clicked")
        dispatch(employeeproductUpdateApi2(empId, buCode, empCode, code2, newPlan2))
    }

    const handleProceed = () => {
        history.push(`/admin/employee/authority/${buCode}/${empCode}`)
    }
    const COLUMNS = [

        {
            Header: "Loan Type",
            accessor: "loanTypeCode",
        },
        {
            Header: "Loan Name",
            accessor: "productDescription",

        },
        {
            Header: "Product Code",
            accessor: "productCode",

        },



        {
            Header: "Interest Rate",
            accessor: "interestRate",

        },
        {
            Header: "Tenure",
            accessor: "tenure",


            width: "12.5%",
        },
        {
            Header: "Details",

            width: "12.5%",
            Cell: ({ row }) => {
                return <button class="bg-whiteSmoke-500 text-black active:bg-lightBlue-500 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" onClick={() => handleProceed2(row.original.loanTypeCode)}>
                    Change
                </button>;
            },
        },



    ]

    const columns = useMemo(() => COLUMNS, [])
    const data = employeeProduct
    const handleProceed2 = (loanTypeCode) => {
        setUpdatingLoanType(loanTypeCode)
        setWantToUpdate(true)


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
    if (wantToUpdate) {
        return (
            <UpdateEmployeeProductForm wantToUpdate={wantToUpdate} setWantToUpdate={setWantToUpdate} updatingLoanType={updatingLoanType} empCode={empCode} buCode={buCode} empId={empId} />
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
                                Plans Avaliable For {"  "}{firstName} {lastName}
                            </h3>

                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}



                    <Modal
                        empCode={empCode}
                        buCode={buCode}
                        empId={empId}

                        loanType={updatingLoanType}
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                    >

                    </Modal>
                    <GlobalFilterForGroup filter={globalFilter} setFilter={setGlobalFilter} />

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
                                            return <td className="px-6 py-4 text-black font-bold align-middle border-2 whitespace-nowrap text-center"  {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
                        <button onClick={handleProceed} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            Proceed
                        </button>
                    </center>

                </div>

            </div>
        </>

    );
}
