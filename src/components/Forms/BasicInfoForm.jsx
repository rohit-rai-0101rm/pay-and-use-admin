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
import { clearBuState } from 'actions/buisnessUnitActions';
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));
const BasicInfoForm = () => {
    const finYearData = useSelector((state) => state.financialYear?.financialYear[0])
    if (finYearData) {
        const { yearname, yearCode } = finYearData
    }

    console.log(finYearData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFinancialYearApi())

    }, [])



    //console.log(yearName,yearCode)


    const { register, handleSubmit, control, errors } = useForm();

    const classes = useStyles();
    const { id: buCode } = useParams()
    console.log(buCode)
    const history = useHistory()
    const [financialYear, setFinancialYear] = useState('')
    const [isMonthly, setIsMonthly] = useState(false)
    const [isBiweekly, setIsBiweekly] = useState(false)
    const [salaryProcessingType, setSalaryProcessingType] = useState('')
    const [biweeklyType, setBiweeklyType] = useState('')
    const [isDaySpecific, setIsDaySpecific] = useState(false)
    const [isDateSpecific, setIsDateSpecific] = useState(false)
    const [isWeekly, setIsWeekly] = useState(false)
    console.log("isDaySpecific", isDaySpecific)
    console.log("isDateSpecific", isDateSpecific)
    const handleFinancialYear = (event) => {
        setFinancialYear(event.target.value);
    };
    const handleSalaryProcessingType = (event) => {
        if (event.target.value === 'biweekly') {
            setIsBiweekly(true)
            setIsMonthly(false)
            setIsWeekly(false)
        }
        else if (event.target.value === 'monthly') {
            setIsBiweekly(false)
            setIsMonthly(true)
        }
        else if (event.target.value === 'weekly') {
            setIsBiweekly(false)
            setIsMonthly(false)
            setIsWeekly(true)
        }

        else {
            setIsBiweekly(false)
        }
    }
    const handleBiweeklyType = (event) => {
        setBiweeklyType(event.target.value)
        if (event.target.value === 'daySpecific') {
            setIsDaySpecific(true)
            setIsDateSpecific(false)
            setIsMonthly(false)
            setIsWeekly(false)
        }
        if (event.target.value === 'dateSpecific') {
            setIsDateSpecific(true)
            setIsDaySpecific(false)
            setIsMonthly(false)
            setIsWeekly(false)

        }
    }
    /*console.log("financialYear", financialYear)
    console.log("salaryProcessingType", salaryProcessingType)
    console.log("isBiweekly", isBiweekly)
    console.log("biweeklyType", biweeklyType)
    console.log("isDaySpecific", isDaySpecific)
    console.log("isDateSpecific", isDateSpecific)*/




    //console.log()
    const confirmSubmit = (e) => {
        e.preventDefault();


        dispatch(
            saveBasicInfo({ financialYear, isWeekly, isBiweekly, isMonthly, salaryProcessingType, biweeklyType, isDaySpecific, isDateSpecific })
        );
        history.push(`/admin/SalaryInfoForm/${buCode}`);
    };

    console.log(salaryProcessingType)
    useEffect(() => {
        dispatch(clearBuState())

      }, []);
    
    return (
        <div>
            <CheckoutSteps activeStep={0} />
            <center>
                <h1 className='mt-4 font-bold text-lg'>Select Salary Type</h1>


            </center>

            <div className='mt-6'>
                <form onSubmit={confirmSubmit}>
                    <div class="flex justify-center	 flex:flex:row mt-8">

                        <div class="flex items-center mr-4">
                            <input onChange={(e) => { handleSalaryProcessingType(e) }} id="inline-radio" size="large" type="radio" value="weekly" name="inline-radio-group" class="w-4 h-4 text-theme bg-gray-100 border-gray-300 focus:ring-lightBlue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label for="inline-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Weekly</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input onChange={(e) => { handleSalaryProcessingType(e) }} id="inline-2-radio" type="radio" value="biweekly" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                            <label for="inline-2-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Biweekly</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input onChange={(e) => { handleSalaryProcessingType(e) }} id="inline-2-radio" type="radio" value="monthly" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label for="inline-2-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Monthly</label>
                        </div>


                    </div>
                    <center>
                        <button type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            COnfirm
                        </button>
                    </center>

                </form>

            </div>




        </div>
    )
}

export default BasicInfoForm