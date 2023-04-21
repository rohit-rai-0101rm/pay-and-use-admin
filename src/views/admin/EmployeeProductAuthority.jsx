import { employeeproductAuthorityMessagePostApi } from 'actions/EmployeeActions';
import { employeeProductAuthorityApi } from 'actions/EmployeeActions';
import { manualAuthorityPreRequisites } from 'actions/loanActions';
import GlobalFilterForGroup from 'components/Filters/GlobalFilterForGroup';
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useAlert } from "react-alert";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import EmployeeAuthorityDetails from './EmployeeAuthorityDetails';

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function EmployeeProductAuthority() {
    const alert = useAlert()
    const { loadiing, success } = useSelector((state) => state.employeeProductAuthorityMessagePost)
    console.log(loadiing, success)
    const color = "light"
    const history = useHistory();
    const dispatch = useDispatch()


    const { buCode, empCode } = useParams()
    const { employeeProductAuthority } = useSelector((state) => state.employeeProductAuthority)
    console.log(employeeProductAuthority)

    const handleManualAuthority = () => {
        history.push(`/admin/manualAuthority/employee/${buCode}/${empCode}`)
    }
    useEffect(() => {
        if (success) {
            alert.success("Sms sent succesfully")

        }
        dispatch(employeeProductAuthorityApi(buCode, empCode));
    }, [dispatch, buCode, empCode, success, loadiing]);



    const handleManual = (code, loan) => {
        console.log("code", code)
        console.log("loanAmount", loan)

        dispatch(manualAuthorityPreRequisites(code, loan))
        history.push(`/admin/manualAuthority/employee/${buCode}/${empCode}`)
    }
    const handleSmsSend = () => {
        dispatch(employeeproductAuthorityMessagePostApi(employeeProductAuthority))
    }





    return (
        <>
            
        </>
    );
}