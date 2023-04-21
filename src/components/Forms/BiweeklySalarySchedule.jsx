import { DataGrid } from '@mui/x-data-grid'
import { salaryScheduleApi } from 'actions/salaryScheduleActions'
import SalaryScheduleTable from 'components/Table/SalaryScheduleTable'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import CheckoutSteps from './CheckoutSteps'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useAlert } from "react-alert";

import {
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core/styles";
import SalaryScheduleData from './SalaryScheduleData'
import { saveSalaryScheduleApi } from 'actions/salaryScheduleActions'
import Loader from 'layouts/Loader/Loader'
import { BiweeklySalaryScheduleApi } from 'actions/salaryScheduleActions'
import moment from 'moment'
const BiweeklySalarySchedule = ({ buCode,isBiweekly }) => {

console.log("biweekly","biweekly")
    const { loading, salarySchedule } = useSelector(state => state.salarySchedule)



    let salaryScheduleFiltered = salarySchedule?.filter(item => (moment().isBefore(moment(item?.startDate).format("DD-MM-YYYY"))));






    const [isChecked, setIsChecked] = useState(false)

    const [isSaved, setIsSaved] = useState(false)
    const history = useHistory()
    const [state, setState] = useState()
    const theme = createTheme({
        typography: {
            fontFamily: [
                "Montserrat",

            ].join(",")
        },
        background: {
            default: "#fafafa"
        }
    });
    const alert = useAlert()
    const arr = []
    if (salarySchedule) {

        for (const element of salarySchedule) {
            element.buCode = buCode
            element.salaryType = "BIWEEKLY"
        }
    }
    const handleSave = () => {
        if (!isChecked) {
            alert.error("Please accept the terms and conditions")
        }
        if (isChecked) {
            if (isBiweekly) {
                console.log(salarySchedule)
                dispatch(saveSalaryScheduleApi(salarySchedule))
                alert.success("saved successfully")
                setIsSaved(true)

            }



            else {
                dispatch(saveSalaryScheduleApi(salarySchedule))
                alert.success("saved successfully")
                setIsSaved(true)

            }
        }



    }
    const handleProceed = () => {
        if (!isChecked) {
            alert.error("Please accept the terms and conditions")
        }
        if (isChecked) {
            if (isBiweekly) {
                history.push(`/admin/payDayLoanSelection/${buCode}`)
            }
            else {
                history.push(`/admin/shortTermLoanSelection/${buCode}`)
            }
        }



    }
    console.log(isChecked)
    const dispatch = useDispatch()
    const cols = []
  
    useEffect(() => {
        dispatch(BiweeklySalaryScheduleApi())

    }, [])

    const rows = []
    console.log(salarySchedule)

    console.log(salarySchedule[0])
    const columns = [
        { field: "id", headerName: "S No.", minWidth: 50, flex: 0.3 },

        {
            field: "startDate",
            headerName: "Start Date",
            minWidth: 150,
            flex: 0.5,
            editable: true,
            type: 'date',

        },
        {
            field: "endDate",
            headerName: "End Date",
            type: "number",
            minWidth: 150,
            flex: 0.4,
            type: 'date',

        },

        {
            field: "endDay",
            headerName: "End Day",
            type: "string",
            minWidth: 150,
            flex: 0.5,
        },

        {
            field: "lockDate",
            flex: 0.3,
            headerName: "Lock Date",
            minWidth: 150,
            type: "date",

        },


        {
            field: "lockDay",
            headerName: "Lock Day",
            minWidth: 50,
            flex: 0,
            type: "string",
        },
        {
            field: "noDays",
            headerName: "Number of Days",
            minWidth: 150,

            type: "number",
        },

        {
            field: "salaryDate",
            headerName: "Salary Date",
            minWidth: 150,
            flex: 0.5,

            type: "date",
            editable: true


        },
        {
            field: "salaryDay",
            headerName: "Salary Day",
            type: "string",
            minWidth: 150,
            flex: 0.4,
        },

    ];









    salaryScheduleFiltered && salaryScheduleFiltered.map((item, index) => {
        rows.push({
            id: index + 1,
            startDate: item.startDate,
            endDay: item.endDay,
            endDate: item.endDate,
            lockDate: item.lockDate,
            lockDay: item.lockDay,
            noDays: item.noDays,
            salaryDate: item.salaryDate,
            salaryDay: item.salaryDay,

        })
    })


    console.log(isSaved)
    if (loading) {
        return (
            <Loader />
        )
    }
console.log("i am biweekly")

    return (
        <div>
            <CheckoutSteps activeStep={2} />
            <ThemeProvider theme={theme}>
                <SalaryScheduleData loading={loading} rows={rows} columns={columns} />

            </ThemeProvider>
            <center>

                <div class=" align-center form-check">
                    <input onChange={() => setIsChecked(true)} class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mb-2  mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label inline-block font-bold text-gray-800" for="flexCheckDefault">
                        All Salary details have been verified
                    </label>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            {
                                isSaved ?

                                    <button onClick={handleProceed} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        Proceed
                                    </button>
                                    :
                                    <button onClick={handleSave} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        Save
                                    </button>

                            }


                        </div>
                    </div>
                </div>
            </center>


        </div>
    )
}

export default BiweeklySalarySchedule