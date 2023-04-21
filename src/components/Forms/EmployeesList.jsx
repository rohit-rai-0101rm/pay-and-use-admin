import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import { useAlert } from "react-alert";
import { CSVLink, CSVDownload } from "react-csv";

import CheckoutSteps from './CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Loader from 'layouts/Loader/Loader';
import { uploadExcelApi } from 'actions/excelActions';
import EmployeeExcelTable from 'components/Cards/EmployeeExcelTable';
import CheckoutSteps2 from './CheckoutSteps2';
import EmployeeSheetTable from 'components/Cards/EmployeeSheetTable';
import { saveExcelDataApi } from 'actions/excelActions';
import { validateEmployeesApi } from 'actions/EmployeeActions';
import { saveEmployeePostValidation } from 'actions/EmployeeActions';
const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));
const EmployeesList = () => {
    const alert = useAlert()

    const {loadiing,success}=useSelector((state)=>state.saveEmployeePostValidation)
    const saveData = []
    const [lengthNonErrorData, setLengthNonErrorData] = useState(0)
    const color = "light"
    const { uniqueId } = useSelector((state) => state.zip.zipUploadResponse)
    console.log(uniqueId)
    const { excelUploadResponse } = useSelector((state) => state.uploadExcel)
    const { employeeValidationApiResponse } = useSelector((state) => state.employeeValidation)
    console.log(employeeValidationApiResponse)
    let isError = []
    employeeValidationApiResponse?.map((item, index) => {
        isError.push(item.status)
    })
    console.log(employeeValidationApiResponse)



    let detailsArray = []
    employeeValidationApiResponse?.map((item, index) => {
        detailsArray.push(item.details)
    })
    let errorLogArray = []

    console.log("detailsArray", detailsArray)
    function arrayToObject(arr) {
        var obj = {};
        for (var i = 0; i < arr.length; ++i) {
            obj[i] = arr[i];
        }
        return obj;
    }
    detailsArray.map((item, index1) => {
        let obj = {}

        obj.rowNumber = index1 + 1
        item.map((item2, index2) => {
            obj.rowNumber = index1 + 1


            obj.errorDescription = item2.errorDescription
            obj.fieldName = item2.fieldName

            errorLogArray.push(obj)
            obj = {}

        })


    })


    console.log("errorLogArray", errorLogArray)
    const [isValidated, setIsValidated] = useState(false)

    var errorList = arrayToObject(errorLogArray)



    console.log(employeeValidationApiResponse)

    const dispatch = useDispatch()


    const e = "px-6 m-2 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-center text-red-500"

    const dd = "px-6 m-2 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-center text-red-500"
    const error = "px-6 m-2 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-center text-red-500"
    const ok = "px-6 m-2 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-center text-blue-500"
    const renderHeader = () => {
        let headerElement = [
            "Status",
            "Serial No",

            "Employee Code",
            "Group Code",
            "Legal Code",
            "Bu Code",

            "Date of Birth",
            "Date of Joining",
            "Comm Address Line 1",
            "Comm Address Line 2",
            "COMM_TOWN",
            "COMM_CITY",
            "COMM_STATE",
            "COMM_COUNTRY",
            "COMM_Pin Code",


            "PER_ADDRESS_LINE_1",
            "PER_ADDRESS_LINE_2",
            "PER_CITY",
            "PER_COUNTRY",
            "PER_PINCODE",
            "PER_STATE",
            "PER_TOWN",



            "First Name",
            "Last Name",
            "Mobile Number",
            "Email",
            "Adhar Number",
            "PAN Number",

            "Bank Name",
            "Bank Account Number",
            "Bank IFSC Code",
            "CTC(PA)",
            "CTC(PM)",
            "PF(Y/N)",
            "ESI(Y/N)",
            "Date of Transaction",
            "Salary Cycle",
            "FATHER NAME ",
            "Marital Status",
            "Designation",
            "Number of Children",


        ];

        return headerElement.map((key, index) => {
            return (
                <th
                    key={index}
                    className={
                        "px-6 align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                        (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                >
                    {key.toUpperCase()}
                </th>
            );
        });


    }
    const authenticate = (empCode) => {
        console.log(empCode)
    }
    const isErroneous = (row, status, field) => {

        let description = ""
        if (status === "ERROR") {
            detailsArray.map((item, index) => {
                item.map((item2, index2) => {

                    if (item2.fieldName === field) {
                        description = item2.errorDescription
                    }
                })

            })
            if (description) {
                return description
            }
            else {
                return false
            }
        }
    }
    const renderBody = () => {
        return excelUploadResponse && excelUploadResponse.map((d, index) => {

            return (

                <tr key={d.row} className={`{d.status==="EROR}px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4`}>


                    <td className={d.status === "ERROR" ? e : dd}>
                        {d.status === "ERROR" ? "❌" : "✅"}
                    </td>
                    <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-center">

                        {d.row}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "empCode") ? error : ok}>
                        {d.empCode}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "groupCode") ? error : ok}>
                        {d.groupCode}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "leggalCode") ? error : ok}>
                        {d.legalCode}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "buCode") ? error : ok}>
                        {d.buCode}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "dob") ? error : ok}>
                        {d.dob}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "doj") ? error : ok}>
                        {d.doj}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "commAddressLine1") ? error : ok}>
                        {d.commAddressLine1}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "commAddressLine2") ? error : ok}>
                        {d.commAddressLine2}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "commTown") ? error : ok}>
                        {d.commTown}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "commCity") ? error : ok}>
                        {d.commCity}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "commState") ? error : ok}>
                        {d.commState}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "commCountry") ? error : ok}>
                        {d.commCountry}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "commPincode") ? error : ok}>
                        {d.commPincode}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "perAddressLine1") ? error : ok}>
                        {d.perAddressLine1}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "perAddressLine2") ? error : ok}>
                        {d.perAddressLine2}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "perCity") ? error : ok}>
                        {d.perCity}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "perCountry") ? error : ok}>
                        {d.perCountry}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "perPincode") ? error : ok}>
                        {d.perPincode}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "perState") ? error : ok}>
                        {d.perState}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "perTown") ? error : ok}>
                        {d.perTown}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "firstName") ? error : ok}>
                        {d.firstName}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "lastName") ? error : ok}>
                        {d.lastName}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "mobile") ? error : ok}>
                        {d.mobile}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "email") ? error : ok}>
                        {d.email}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "aadhar") ? error : ok}>
                        {d.aadhar}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "pan") ? error : ok}>
                        {d.pan}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "bankName") ? error : ok}>
                        {d.bankName}
                    </td>

                    <td className={isErroneous(index + 1, d.status, "acNumber") ? error : ok}>
                        {d.acNumber}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "bankIfsc") ? error : ok}>
                        {d.bankIfsc}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "ctcPa") ? error : ok}>
                        {d.ctcPa}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "ctcPm") ? error : ok}>
                        {d.ctcPm}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "isPf") ? error : ok}>
                        {d.isPf}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "isEsi") ? error + `hover:text-${'rohit'}` : ok}>
                        {d.isEsi}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "dot") ? error : ok}>
                        {d.dot}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "salaryCycle") ? error : ok}>
                        {d.salaryCycle}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "fatherName") ? error : ok}>
                        {d.fatherName}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "maritalStatus") ? error : ok}>
                        {d.maritalStatus}
                    </td>
                    <td className={isErroneous(index + 1, d.status, "designation") ? error : ok}>
                        {d.designation}
                    </td>

                    <td className={isErroneous(index + 1, d.status, "noChildren") ? error : ok}>
                        {d.noChildren}
                    </td>




                </tr>


            )
        })
    }
    let excelUploadResponseWithoutErrors = []
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
    console.log(excelUploadResponse)
    const handleSave = () => {
        console.log(excelUploadResponse)
        dispatch(saveEmployeePostValidation(excelUploadResponse))
        if (excelUploadResponse.length>0) {
            excelUploadResponse.map((item, index) => {
                if (item.status == "OK") {
                    excelUploadResponseWithoutErrors.push(item)
    
                }
    
    
            }
    
    
            )
        }
    }
    console.log("excelUploadResponse",excelUploadResponse)
 
    console.log("excelUploadResponseWithoutErrors", excelUploadResponseWithoutErrors)
    const fileHandler = (event) => {
        let fileObj = event.target.files[0];
        //just pass the fileObj as parameter
        console.log(fileObj)
        setFile(fileObj)
        setFileSize((event.target.files[0].size) * 0.000001)
        setIsFileUploaded(true)

    }
    const { buCode } = useParams()
    const handleUploadAgain = () => {
        history.push(`/admin/employee/excel-upload/${buCode}`)
    }
    console.log(isFileUploaded)
    const handleProceed = () => {


        if (!isFileUploaded) {
            alert.error("Please upload a file")
        }
        if (isFileUploaded) {

            history.push('/admin/EmployeesList')


        }
    }
    console.log("buCode",buCode)
    useEffect(() => {
        if(success){
            alert.success("employees saved succesfully")
            history.push(`/admin/buDetails/${buCode}`)
        }

    }, [, dispatch, success, file,excelUploadResponseWithoutErrors])

    const handleProcced = () => {
        dispatch(saveExcelDataApi(excelUploadResponse))
        alert.success("saved successfully")
        history.push("/admin/dashboard")
    }





    const handleValidate = () => {
        excelUploadResponse?.map((item, index) => {
            console.log(uniqueId)
            item.uniqueId = uniqueId

        })
        dispatch(validateEmployeesApi(excelUploadResponse))
        setIsValidated(true)
        console.log("excelUploadResponse",excelUploadResponse)

    }
    console.log("isError", isError)
    if (isValidated && employeeValidationApiResponse) {
        let statusArray = []
        if (employeeValidationApiResponse) {
            employeeValidationApiResponse.map((item, index) => {
                statusArray.push(item.status)
            })
        }
        excelUploadResponse?.map((item, index) => {
            item.status = statusArray[index]
            item.row = index + 1
        })
        const data = new Blob([errorLogArray], { type: 'text/plain' })
        const downloadLink = window.URL.createObjectURL(data)
        const csvData = errorLogArray

const handleNonErrorResponse=()=>{
    dispatch(saveExcelDataApi(excelUploadResponseWithoutErrors))


}

        return (
            <>
                <div
                    className={
                        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                    }
                >
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3
                                    className={
                                        "font-semibold text-lg " +
                                        (color === "light" ? "text-blueGray-700" : "text-white")
                                    }
                                >
                                    post Validation
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                        {/* Projects table */}
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    {renderHeader()}

                                </tr>
                            </thead>
                            <tbody>

                                {renderBody()}







                            </tbody>
                        </table>


                    </div>

                </div>
                <center>
                    {

                        isError.includes("ERROR") ?
                            <center>
                                <button onClick={handleUploadAgain} type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    UPLOAD AGAIN
                                </button>
                                <button className=" mt-10 bg-red-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    <CSVLink className='text-black' data={csvData}> ERROR LOG</CSVLink>

                                </button>

                            </center>


                            :
                            <button onClick={handleSave} type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                SAVE AND PROCEED
                            </button>

                    }
                  
                </center>
            </>

        )


    }
    //console.log(excelUploadResponse)

    console.log(excelUploadResponse)
    console.log(excelUploadResponse)

    console.log("lengthNonErrorData", lengthNonErrorData)
    return (
        <div className='w-full'>
            <CheckoutSteps2 activeStep={3} />


            <EmployeeSheetTable data={excelUploadResponse} />
            <center>


                <button onClick={handleValidate} type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    VALIDATE
                </button>



            </center>


        </div>
    )
}

export default EmployeesList