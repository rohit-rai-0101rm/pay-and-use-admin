import { applicationSubmiitedAndUnderReviewApi } from 'actions/progressAction';
import { authAndSmsSentApi } from 'actions/progressAction';
import GlobalFilterForAuthandSmsSent from 'components/MockData/GlobalFilterForAuthandSmsSent';
import ApplicationApprovedTable from 'components/Table/ApplicationApprovedTable';
import AuthAndSmsSentTable from 'components/Table/AuthAndSmsSentTable';
import KycCompletedTable from 'components/Table/KycCompletedTable';
import KycOnHoldTable from 'components/Table/KycOnHoldTable';
import MobileNumberAuthenticatedTable from 'components/Table/MobileNumberAuthenticatedTable';
import Loader from 'layouts/Loader/Loader';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { CSVLink } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';
import Data from "../../components/MockData/authandSmsSent.json"
const ApplicationApproved = () => {


    const { loading, submiitedANdUnderReview } = useSelector((state) => state.submiitedAndUnderReview)

    console.log("submiitedAndUnderReview",submiitedANdUnderReview)
    const dispatch = useDispatch()
    const [filterType, setFilterType] = useState("AA")
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [sort, setSort] = useState("LOAN_REQUEST_ID");
    const [sortType, setSortType] = useState("asc");
    const [size, setSize] = useState(1000);
    const [pageNo, setPageNo] = useState(0);
    const color = "light"
    const history = useHistory()
    useEffect(() => {
        dispatch(applicationSubmiitedAndUnderReviewApi(filterType, code, description, sortType, sort, size, pageNo))
    }, [])


    if (loading) {
        return (<Loader />)
    }
    return (

        <>
            {
                submiitedANdUnderReview?.length > 0 &&
                <ApplicationApprovedTable data={submiitedANdUnderReview} />


            }

        </>

    );
}

export default ApplicationApproved