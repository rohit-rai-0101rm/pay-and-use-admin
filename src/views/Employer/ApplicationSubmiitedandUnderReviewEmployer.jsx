import { applicationSubmiitedAndUnderReviewApi } from 'actions/progressAction';
import GlobalFilterForAuthandSmsSent from 'components/MockData/GlobalFilterForAuthandSmsSent';
import ApplicationSubmittedAndUnderReviewEmployerTable from 'components/Table/ApplicationSubmittedAndUnderReviewEmployerTable';
import ApplicationSubmittedAndUnderReviewTable from 'components/Table/ApplicationSubmittedAndUnderReviewTable';
import Loader from 'layouts/Loader/Loader';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { CSVLink } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';
import Data from "../../components/MockData/restOf.json"
const ApplicationSubmiitedandUnderReviewEmployer = () => {

    const { loading, submiitedANdUnderReview } = useSelector((state) => state.submiitedAndUnderReview)
    console.log("submiitedANdUnderReview", submiitedANdUnderReview)
    const dispatch = useDispatch()
    const color = "light"
    const history = useHistory()

    const [code, setCode] = useState("")
    const [description, setDescription] = useState("")
    const [sortType, setSortType] = useState("asc")
    const [sort, setSort] = useState("LOAN_REQUEST_ID")
    const [size, setSize] = useState(20)
    const [pageNo, setPageNo] = useState(0)

    useEffect(() => {
        dispatch(applicationSubmiitedAndUnderReviewApi(code, description, sort, sortType, size, pageNo))

    }, [])

    if (loading) {
        return (<Loader />)
    }
    /*const handleProceed = (id,empCode, buCode) => {
      history.push(`/admin/employeeProfile/${empCode}/${buCode}`)
      localStorage.setItem("selectedloanId",id)
  
    }*/
    return (
        <>

            {submiitedANdUnderReview?.length > 0 &&

                <ApplicationSubmittedAndUnderReviewEmployerTable data={submiitedANdUnderReview} />
            }



        </>


    );
}

export default ApplicationSubmiitedandUnderReviewEmployer