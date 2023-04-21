import { createLegalEntityApi } from "actions/legalEntityActions";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { createPopper } from '@popperjs/core';
import { useForm, Controller } from "react-hook-form";
import { useParams} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, FormControlLabel } from '@material-ui/core';
import {

    Checkbox,
    FormLabel,
    FormHelperText,
    RadioGroup,
    Radio,

    Switch,

    Button,
} from "@material-ui/core";
import 'react-phone-input-2/lib/style.css'
import {

    Select,
    MenuItem,

} from "@material-ui/core";
import { getGroupCodesList } from "actions/codesActions";
import { borderColor } from "tailwindcss/defaultTheme";
import FormDialog from "components/FormDailog";
import { loanTypeApi } from "actions/loanActions";
import { feeTypeApi } from "actions/feeActions";
import LoanTypeComponent from "./LoanTypeComponent";
// components
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        fontFamily: "Montserrat",
        margin: theme.spacing(1, 0),

    },
}));
export default function LoanCreationForm() {
    const { loanType } = useSelector(state => state.loanType)
    const { feeType } = useSelector(state => state.feeType)
    const {id:buCode}=useParams()
    console.log(buCode)
    const label = { inputProps: { 'aria-label': 'is legal entity a group entity' } };
    const history = useHistory();
    const [addFee, setAddFee] = useState(false);
    const { loading, error, success } = useSelector((state) => state.legalEntity);
    const classes = useStyles();
    const alert = useAlert();
    const [feeTypeCode, setFeeTypeCode] = useState('');
    const [loanTypeCode, setLoanTypeCode] = useState('');
    const [tenure, setTenure] = useState(4);
    const dispatch = useDispatch()



    const { register, errors, handleSubmit, control } = useForm({
        mode: "onTouched",
    });
    //console.log(token)


    //console.log(gcl





    //console.log(companyCode,companyDescription,flag,addressLine1,addressLine2,city,pincode,phone,fax,email,town,contactPerson,contactPersonPhone,contactPersonEmail,countryCode,stateCode,zip,companyGroupCode)
    const onSubmit = (formData) => {
        console.log(formData)
    }
   
    useEffect(() => {
        dispatch(loanTypeApi())
        dispatch(feeTypeApi())
        if (error) {
            alert.error("Legal Entity Creation Failed");
        }


        if (success) {
            alert.success("Legal Entity Created Successfully");
            history.push("/admin/dashboard");

        }
    }, []);


    return (
        <div className="relative items-stretch flex flex-wrap flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div>
                
                <div className="flex flex:col px-4 lg:px-10 py-10 pt-0">

                   

                 
                        {loanType &&
                            loanType.map((loan) => (
                                <LoanTypeComponent key={loan.loanTypeCode} loanType={loan} feeType={feeType} buCode={buCode} />
                            ))}







                </div>
            </div>


        </div>
    );
}