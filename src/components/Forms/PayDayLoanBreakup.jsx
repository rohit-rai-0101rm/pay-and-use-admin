import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import { useAlert } from "react-alert";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
    TextField,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormHelperText,
    RadioGroup,
    Radio,

    Switch,

    Button,
} from "@material-ui/core";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckoutSteps from './CheckoutSteps';
import { useForm } from 'react-hook-form';
import { saveBasicInfo } from 'actions/formActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getFinancialYearApi } from 'actions/financialYearActions';
import { getCodesList } from 'actions/codesActions';
import CheckoutSteps3 from './CheckoutSteps3';
import { productFilterApi } from 'actions/loanActions';
import { payDayBreakUpApi } from 'actions/breakupActions';
import { saveBuProductApi } from 'actions/buisnessUnitActions';
import LoanDetailedCard from 'components/Cards/LoanDetailedCard';
import LonBreakupCard from 'components/Cards/LonBreakupCard';
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));
const PayDayLoanBreakup = () => {

    const { payDayBreakup } = useSelector((state) => state.payDayBreakUp)
    const { id } = useParams()
    const [productCode, setProductCode] = useState(id)
    const [loanTypeCode, setLoanTypeCode] = useState("PAYDAY")
    const [isSaved, setIsSaved] = useState(false)
    console.log(productCode)
    console.log(payDayBreakup)
    console.log(loanTypeCode)
    const dispatch = useDispatch()
    const buCode = JSON.parse(sessionStorage.getItem('buCode'))
    console.log(buCode)

    const [productId1, setProductId1] = useState('')
    useEffect(() => {
        dispatch(payDayBreakUpApi(id))

    }, [id])

    const alert = useAlert()
    console.log(buCode)
    const saveProduct = () => {

        dispatch(saveBuProductApi(buCode, loanTypeCode, productCode))
        setIsSaved(true)
        alert.success("saved successfully")

    }
    const history = useHistory()

    //console.log(yearName,yearCode)

    const viewBreakupHandler = (productId1) => {
        history.push(`/admin/payDayBreakUp/${productId1}/${buCode}`)
    }
    const handleProceed = () => {

        history.push(`/admin/shortTermLoanSelection/${buCode}`)
    }


    return (
        <>
            <CheckoutSteps3 activeStep={1} />

            <>
                <div className="flex justify-center flex-wrap">
                    <div className="w-full lg:w-8/12 px-4">
                        <center>
                            <LonBreakupCard loanDetails={payDayBreakup} />

                        </center>



                    </div>

                </div>
            </>



        </>
    )
}

export default PayDayLoanBreakup