import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import { useAlert } from "react-alert";

import CheckoutSteps from './CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Loader from 'layouts/Loader/Loader';
import { uploadExcelApi } from 'actions/excelActions';
import EmployeeExcelTable from 'components/Cards/EmployeeExcelTable';
import CheckoutSteps2 from './CheckoutSteps2';
import { getExcelLayoutApi } from 'actions/excelActions';
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));
const AddNewEmployeeExcelUpload = ({ bu }) => {

    const [buCode, setBuCode] = useState(bu)

    const dispatch = useDispatch()

    console.log("buCode", buCode)



    const classes = useStyles();
    const [file, setFile] = useState('')
    const [uploadFile, setUploadFile] = useState("")
    const history = useHistory()
    const [loading, setLoading] = useState(false);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [isWeekly, setIsWeekly] = useState(false)
    const [fileSize, setFileSize] = useState('')
    console.log(uploadFile)

    /*console.log("financialYear", financialYear)
    console.log("salaryProcessingType", salaryProcessingType)
    console.log("isBiweekly", isBiweekly)
    console.log("biweeklyType", biweeklyType)
    console.log("isDaySpecific", isDaySpecific)
    console.log("isDateSpecific", isDateSpecific)*/

    const fileHandler = (event) => {
        let fileObj = event.target.files[0];
        //just pass the fileObj as parameter
        console.log(fileObj)
        setFile(fileObj)
        setFileSize((event.target.files[0].size) * 0.000001)
        setIsFileUploaded(true)

    }


    console.log(isFileUploaded)
    const handleProceed = () => {


        if (!isFileUploaded) {
            alert.error("Please upload a file")
        }
        if (isFileUploaded) {

            history.push(`/admin/addNewEmployee/${buCode}`)


        }
    }
    const { excelUploadResponse } = useSelector((state) => state.uploadExcel)
    useEffect(() => {
        dispatch(uploadExcelApi(file))

    }, [, dispatch, file])
    console.log(excelUploadResponse)
    const sampleDownload = (e) => {
        e.preventDefault()
        dispatch(getExcelLayoutApi(buCode))
    }
    return (
        <div className='w-full'>
            <CheckoutSteps2 activeStep={0} />

            <div className=" flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5  w-full">
                <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
                    <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
                        {loading && (
                            <Loader />
                        )}


                        <div class="flex justify-center">
                            <div class="mb-3 w-96">
                                <center>
                                    <label for="formFile" class=" pl-24 form-label inline-block mb-2 text-gray-700">Recommendation: Please upload excel file less than 01MB
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
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={fileHandler} type="file" accept=".xlsx, .xls, .csv" id="formFile" />

                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">

                                                <button onClick={handleProceed} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                    Proceed
                                                </button>
                                                <button onClick={(e)=>sampleDownload(e)} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                    Download Sample
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

export default AddNewEmployeeExcelUpload