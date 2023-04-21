import { employeesInMultipleLeandBuApi } from 'actions/EmployeeActions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilteredEmployees from './FilteredEmployees'

const EmployeesInMultipleLeandBu = ({ groupCode, legalCodes, buCodes }) => {
    const {loading,employeeInMultipleLeandBu}=useSelector((state)=>state.employeesInMultipleLeandBu)

    //console.log(groupCode)
    //console.log(legalCodes)

    // console.log(buCodes)
    console.log("employeeInMultipleLeandBu",employeeInMultipleLeandBu)
    const [sort, setSort] = useState("id");

    const [sortType, setSortType] = useState("desc");
    const [size, setSize] = useState(25);
    const [page, setPage] = useState(1)
    const [pageNo, setPageNo] = useState(0);
    console.log(groupCode, legalCodes, buCodes)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(employeesInMultipleLeandBuApi(groupCode, legalCodes, buCodes, sort, sortType, size, pageNo))





    }, [dispatch, groupCode])
    return (
        <div>
         <FilteredEmployees employeeInMultipleLeandBu={employeeInMultipleLeandBu}/>
        </div>
    )
}

export default EmployeesInMultipleLeandBu