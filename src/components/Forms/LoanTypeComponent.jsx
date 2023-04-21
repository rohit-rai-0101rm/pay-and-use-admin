import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { createPopper } from '@popperjs/core';
import { useForm, Controller } from "react-hook-form";
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
import { loanProductCreationApi } from "actions/loanActions";
import { loanTypeApi } from "actions/loanActions";
import { feeTypeApi } from "actions/feeActions";
// components
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        fontFamily: "Montserrat",
        margin: theme.spacing(1, 0),

    },
}));
export default function LoanTypeComponent({ loanType, feeType, buCode }) {
    const { tenure } = loanType

    const dispatch = useDispatch()

    const history = useHistory();
    const [addFee, setAddFee] = useState(false);
    const [interestRate, setInterestRate] = useState(0)
    const [loanTypeCode, setLoanTypeCode] = useState('PAYDAY')

    const [nameOfFee, setNameOfFee] = useState('')
    const [amount, setAmount] = useState('')

    console.log(nameOfFee)
    const [loanTypeDescription, setLoanTypeDescription] = useState('PAY DAY')
    const [loanTypeDescription2, setLoanTypeDescription2] = useState('')
    const [tenure1, setTenure1] = useState('1')
    const [tenure2, setTenure2] = useState('3')
    const [processingFee, setProcessingFee] = useState('')
    const [mpBusinessUnitFeeDetailsBeans, setMpBusinessUnitFeeDetailsBeans] = useState([{
        nameOfFee: "",

        amount: "",

        feeTypeCode: ""
    }])
    console.log(mpBusinessUnitFeeDetailsBeans)
    const [feeType1, setFeeType1] = useState('')
    console.log(feeType1)
    const [feeTypeCode, setFeeTypeCode] = useState('')
    const { register, errors, handleSubmit, control } = useForm({
        mode: "onTouched",
    });
    //console.log(token)


    //console.log(gcl





    //console.log(companyCode,companyDescription,flag,addressLine1,addressLine2,city,pincode,phone,fax,email,town,contactPerson,contactPersonPhone,contactPersonEmail,countryCode,stateCode,zip,companyGroupCode)
    const onSubmit = (formData) => {
        console.log(formData)
    }

    const createLoanProduct = () => {
        history.push("/admin/addNewEmployee")
    }

    return (
        <div className="w-full">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
                
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    {loanType.loanTypeDescription}  LOAN PRODUCT CREATION FORM
                </h6>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>


                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">


                                </div>
                            </div>
                        </div>

                        <div className="flex py-4 flex-wrap">
                            <div className="w-1/3 lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Loan Type
                                    </label>
                                    <select className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                        <option value={loanType.loanTypeCode}>{loanType.loanTypeDescription}</option>


                                    </select>

                                </div>
                            </div>

                        </div>

                        <div className="flex py-4 flex-wrap">
                            <div className="w-1/3 lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Intrest
                                    </label>
                                    <input
                                        placeholder="enter intrest in %, e.g 5"
                                        type="number"
                                        name="intrest"
                                        onChange={(e) => setInterestRate(e.target.value)}
                                        ref={register({
                                            max: 150
                                        })}
                                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                                            (errors.intrest ? " border-red-500" : "")}
                                    />
                                    {errors.intrest && (
                                        <div className="text-red-500">
                                            {errors.intrest.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-1/3 lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Tenure
                                    </label>
                                    <input
                                        placeholder="fees in rupee"
                                        type="number"
                                        value={tenure}
                                        name="tenure"

                                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                    />

                                </div>

                            </div>
                        </div>


                        <div className="flex flex-wrap">
                            <div className="w-1/3 lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Processing Fees
                                    </label>
                                    <input
                                        placeholder="enter fee "
                                        type="number"
                                        onChange={(e) => setProcessingFee(e.target.value)}
                                        name="processingFee"
                                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                                            (errors.processingFee ? " border-red-500" : "")}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 3,
                                                message: "must be 3 atleast characters",
                                            },
                                            maxLength: {
                                                value: 50,
                                                message: "maximum 50 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.intrest && (
                                        <div className="text-red-500">
                                            {errors.intrest.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-1/3 lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        FEE TYPE
                                    </label>
                                    <select onChange={(e) => setFeeTypeCode(e.target.value)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">
                                        <option selected>Start Fee Type</option>
                                        {feeType.map((item) => (
                                            <option key={item.feeTypeCode} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.feeTypeCode}>
                                                {item.feeTypeDescription}
                                            </option>
                                        ))}

                                    </select>
                                </div>

                            </div>
                        </div>


                        <div className=" px-4 py-8 flex flex-wrap">


                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">

                                </div>
                            </div>
                        </div>
                        {
                            addFee &&
                            <div className=" py-4 flex flex-wrap">
                                <div className="w-1/3 lg:w-3/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Name of Fee
                                        </label>
                                        <input
                                            onChange={(e) => setMpBusinessUnitFeeDetailsBeans({ ...mpBusinessUnitFeeDetailsBeans, nameOfFee: e.target.value })}
                                            placeholder="enter name of the fee"
                                            type="text"
                                            name="feeName"
                                            className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}

                                        />

                                    </div>
                                </div>
                                <div className="w-1/3 lg:w-3/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Amount
                                        </label>
                                        <input
                                            onChange={(e) => setMpBusinessUnitFeeDetailsBeans({ ...mpBusinessUnitFeeDetailsBeans, amount: e.target.value })}
                                            placeholder="fees"
                                            type="number"

                                            name="tenure"

                                            className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                        />

                                    </div>

                                </div>

                                <div className="w-1/3 lg:w-3/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Fee type
                                        </label>
                                        <select onChange={(e) => setMpBusinessUnitFeeDetailsBeans({ ...mpBusinessUnitFeeDetailsBeans, feeTypeCode: e.target.value })} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">
                                            {feeType.map((item) => (
                                                <option key={item.feeTypeDescription} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.feeTypeCode}>
                                                    {item.feeTypeDescription}
                                                </option>
                                            ))}

                                        </select>
                                    </div>

                                </div>

                            </div>
                        }
                    </div>
                    <div className="relative w-full mb-3">

                        <button onClick={createLoanProduct} type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            Create this Loan Product
                        </button>

                    </div>
                </form>







            </div>
        </div>



    );
}