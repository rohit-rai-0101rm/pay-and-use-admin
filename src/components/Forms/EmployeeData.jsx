import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import { useAlert } from "react-alert";

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
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
import Loader from 'layouts/Loader/Loader';
import { zipUploadApi } from 'actions/excelActions';
import CheckoutSteps2 from './CheckoutSteps2';
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));
const EmployeeData = () => {
    const alert = useAlert();


    const dispatch = useDispatch()
    const { buCode: code } = useParams()
    const [buCode, setBuCode] = useState(code)


    //console.log(yearName,yearCode)

    const { register, handleSubmit, control, errors } = useForm();

    const classes = useStyles();
    const [file, setFile] = useState('')
    const [uploadFile, setUploadFile] = useState("")
    const [fileSize, setFileSize] = useState('')
    const history = useHistory()
    const [financialYear, setFinancialYear] = useState('')
    const [isMonthly, setIsMonthly] = useState(false)
    const [isBiweekly, setIsBiweekly] = useState(false)
    const [salaryProcessingType, setSalaryProcessingType] = useState('')
    const [biweeklyType, setBiweeklyType] = useState('')
    const [category, setCategory] = useState();
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [wrongImageType, setWrongImageType] = useState(false);
    const [imageAsset, setImageAsset] = useState();
    const [isZipUploaded, setIsZipUploaded] = useState(false)
    const [isDaySpecific, setIsDaySpecific] = useState(false)
    const [isDateSpecific, setIsDateSpecific] = useState(false)
    const [isWeekly, setIsWeekly] = useState(false)
    const handleFinancialYear = (event) => {
        setFinancialYear(event.target.value);
    };
    const handleFileReader = (event) => {
        setLoading(true)
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);


        setFile(event.target.files[0])
        //console.log(event.target.files[0].size)
        setFileSize((event.target.files[0].size) * 0.000001)
        reader.onload = (e) => {
            setUploadFile({ data: reader.result.split(',').pop(), fileName: event.target.files[0].name })

            setLoading(false)
            setIsZipUploaded(true)

        };
    }


    /*console.log("financialYear", financialYear)
    console.log("salaryProcessingType", salaryProcessingType)
    console.log("isBiweekly", isBiweekly)
    console.log("biweeklyType", biweeklyType)
    console.log("isDaySpecific", isDaySpecific)
    console.log("isDateSpecific", isDateSpecific)*/


    console.log(loading)
    console.log(uploadFile)
    console.log(fileSize)
    const { buCode: bu } = useParams()
    console.log(buCode)
    const handleProceed = () => {

        if (!isZipUploaded) {
            alert.error("Please upload zip file")
        }
        else {
            dispatch(zipUploadApi(file, buCode))
            history.push(`/admin/employeesList/${buCode}`)
        }

    }


    const handleSkip = () => {
        history.push(`/admin/employeesList/${buCode}`)
    }
    return (
        <div className='w-full'>
            <CheckoutSteps2 activeStep={1} />

            <div className=" flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5  w-full">
                <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
                    <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
                        {loading && (
                            <Loader />
                        )}


                        <div class="flex justify-center">
                            <div class="mb-3 w-96">
                                <center>
                                    <label for="formFile" class=" pl-24 form-label inline-block mb-2 text-gray-700">Recommendation: Please upload Zip,rar file less than 01MB
                                    </label>
                                    <input class="form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={handleFileReader} type="file" accept=".zip,.rar,.7zip" id="formFile" />

                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">

                                                <button onClick={handleProceed} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                    Proceed
                                                </button>
                                                <button onClick={handleSkip} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                    SKIP
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                </center>


                            </div>
                        </div>


                    </div>
                </div>
            </div>




        </div>
    )
}

export default EmployeeData