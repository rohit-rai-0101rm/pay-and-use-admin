import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
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
import { productFilterApi2 } from 'actions/loanActions';
import { useAlert } from 'react-alert';
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));
const PayDayLoanSelection = () => {
    const { buCode } = useParams()
    const { productFilter } = useSelector((state) => state.productFilter)
    const { payDayBreakUp } = useSelector((state) => state.payDayBreakUp)
    const [payDayTenure, setPayDaTenure] = useState('')
    const [shortTermTenure, setShortTermTenure] = useState('')
    const [description, setDescription] = useState('')
    const [payDayCode, setPayDayCode] = useState('PAYDAY')
    const [size, setSize] = useState(10000)
    const [sort, setSort] = useState('id')
    const [sortType, setSortType] = useState('desc')
    const [pageNo, setPageNo] = useState(0)
    const dispatch = useDispatch()
    const alert = useAlert()
    const [productId1, setProductId1] = useState(null)
    useEffect(() => {
        dispatch(productFilterApi(payDayCode, description, sort, sortType, size, pageNo))
        dispatch(payDayBreakUpApi(productId1))

    }, [productId1])
    console.log(payDayBreakUp)
    console.log(productId1)


    useEffect(() => {
        dispatch(getFinancialYearApi())

    }, [])

    const history = useHistory()

    //console.log(yearName,yearCode)

    const viewBreakupHandler = () => {
        if (!productId1) {
            alert.error("please select a loan product to proceed")

        }
        else {
            history.push(`/admin/payDayLoan/breakup/${productId1}/${buCode}`)

        }
    }



    const handleSkip = () => {
        history.push(`/admin/shortTermLoanSelection/${buCode}`)
    }

    return (
        <>
            <CheckoutSteps3 activeStep={0} />
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl ml-2 px-6 font-bold">PAY Day selection</h6>

                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>

                        <div className="flex flex-wrap">

                            <div className="w-full px-4">
                                <div className="relative py-2 w-full mb-3">
                                    <select onChange={(e) => setProductId1(e.target.value)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                        <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                            Please select an option
                                        </option>
                                        {productFilter.map((item) => (
                                            <option key={item.productCode} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.productCode}>
                                                {item.productDescription}
                                            </option>
                                        ))}

                                    </select>
                                </div>

                            </div>










                        </div>












                    </form>

                </div>
                <center>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">

                                <button onClick={viewBreakupHandler} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    VIEW BREAKUP
                                </button>
                                <button onClick={handleSkip} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    SKIP THIS STEP
                                </button>

                            </div>
                        </div>
                    </div>
                </center>

            </div>
        </>
    )
}

export default PayDayLoanSelection