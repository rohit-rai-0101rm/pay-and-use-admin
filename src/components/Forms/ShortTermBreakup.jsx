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
import { shortTermBreakUpApi } from 'actions/breakupActions';
import ShortTermBreakupCard from 'components/Cards/ShortTermBreakupCard';
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));
const ShortTermBreakup = () => {

  const {shortTerm}=useSelector((state)=>state.shortTermBreakup)
    const { id,buCode } = useParams()
    const[productCode,setProductCode]=useState(id)
    const [loanTypeCode,setLoanTypeCode]=useState("SHORTTERM")
    const [isSaved,setIsSaved]=useState(false)
    console.log(productCode)
  
    console.log(loanTypeCode)
    const dispatch = useDispatch()
    
    const [productId1, setProductId1] = useState('')
    useEffect(() => {
        dispatch(shortTermBreakUpApi(id))

    }, [id])
console.log(id,buCode)
const alert=useAlert()
const saveProduct=()=>{
    
    dispatch(saveBuProductApi(buCode,loanTypeCode,productCode) )
    setIsSaved(true)
    alert.success("saved successfully")

}
    const history = useHistory()

    //console.log(yearName,yearCode)

    


    return (
        <>
            <CheckoutSteps3 activeStep={3} />
            ShortTermBreakupCard
            <>
                <div className="flex justify-center flex-wrap">
                    <div className="w-full lg:w-8/12 px-4">
                        <center>
                            <ShortTermBreakupCard loanDetails={shortTerm} />

                        </center>



                    </div>

                </div>
            </>
        </>
    )
}

export default ShortTermBreakup