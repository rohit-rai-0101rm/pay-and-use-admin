import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { saveSalaryInfo } from 'actions/formActions';
import { useAlert } from "react-alert";

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import moment from 'moment';
import { format } from 'date-fns';
import { saveBiweeklySalaryInfo } from 'actions/formActions';
const BiWeeklySalaryForm = ({ buCode }) => {
    const currentMonth = moment().set('date', 1).format("DD-MM-YYYY")
    console.log(currentMonth)
    const periodStartDateOneMinValue = moment(currentMonth, "DD-MM-yyyy")
        .add(1, "M")
        .format("YYYY-MM-DD");
    console.log(periodStartDateOneMinValue)
    const history = useHistory()
    const dispatch = useDispatch()
    const [isBiweekly, setIsBiweekly] = useState(true)
    const [dateTwoMinFirst, setDateTwoMinFirst] = useState('')
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const [minSecondDateStart, setMinSecondDateStart] = useState('')
    const [salaryDate, setSalaryDate] = useState('')
    const [noLockDays, setNoLockDays] = useState(1)
    const [secondDateFrom, setsecondDateFrom] = useState('')
    const [secondDateTo, setSecondDateTo] = useState('')
    const [secondSalaryDate, setSecondSalaryDate] = useState('')
    const [secondNoLockDays, setSecondNoLockDays] = useState(1)
    const [firstSalaryDateMinVal, setFirstSalaryDateMinVal] = useState('')
    const [secondSalaryDateMin, setSecondSalaryDateMin] = useState('')

    const [minValSecondSalaryDate, setMinValSecondSalaryDate] = useState('')
    const handleDateFromChange = (e) => {
        setDateFrom(e.target.value)
        let momentedDate = moment(e.target.value).format("YYYY-MM-DD")
        let nextDate = moment(momentedDate).add(14, 'days').calendar()
        nextDate = moment(nextDate).format("YYYY-MM-DD")
        let salaryDateMinOne = moment(nextDate).add(15, 'days').calendar()
        salaryDateMinOne = moment(salaryDateMinOne).format("YYYY-MM-DD")
        setFirstSalaryDateMinVal(salaryDateMinOne)

        let nexCycleDateOne = moment(momentedDate).add(1, 'days').calendar()
        nexCycleDateOne = moment(nexCycleDateOne).format("YYYY-MM-DD")
        console.log(nextDate)
        setDateTwoMinFirst(nextDate)



    }
    const handleDateToChange = (e) => {
        setDateTo(e.target.value)
        let momentedDate = moment(e.target.value).format("YYYY-MM-DD")
        
        let nextDate = moment(momentedDate).add(1, 'days').calendar()
        nextDate = moment(nextDate).format("YYYY-MM-DD")




        let nexCycleDateOne = moment(momentedDate).add(1, 'days').calendar()
        nexCycleDateOne = moment(nexCycleDateOne).format("YYYY-MM-DD")
        let numbeOfDaysinMonth=moment(moment(momentedDate).format("YYYY-MM"), "YYYY-MM").daysInMonth() 

        let daysLeft=numbeOfDaysinMonth-moment(momentedDate).format("DD")
        console.log("daysLeft",daysLeft)
        console.log("numbeOfDaysinMonth",numbeOfDaysinMonth)
        let nexCycleEndDate = moment(nexCycleDateOne).add(daysLeft-1, 'days').calendar()
        nexCycleEndDate = moment(nexCycleEndDate).format("YYYY-MM-DD")
     
        let nextSalaryDate = moment(nexCycleEndDate).add(15, 'days').calendar()
        nextSalaryDate = moment(nextSalaryDate).format("YYYY-MM-DD")
        console.log(nextDate)
        setMinSecondDateStart(nextDate)
        setMinValSecondSalaryDate(nexCycleEndDate)
        setSecondSalaryDateMin(nextSalaryDate)
    }
    const handleSalaryDateChange = (e) => {
        setSalaryDate(e.target.value)
    }
    const handleNoLockDays = (e) => {
        setNoLockDays(e.target.value)
    }

    const handleSecondDateFromChange = (e) => {
        setsecondDateFrom(e.target.value)
    }
    const handleSecondDateToChange = (e) => {

        setSecondDateTo(e.target.value)
    }
    const handleSecondSalaryDatehange = (e) => {
        setSecondSalaryDate(e.target.value)
    }


    const handleSecondNoLockDays = (e) => {

        setSecondNoLockDays(e.target.value)
    }
  
    const handleConfirm = () => {

        dispatch(saveBiweeklySalaryInfo(moment(dateFrom).format("DD-MM-YYYY"), moment(dateTo).format("DD-MM-YYYY"), moment(salaryDate).format("DD-MM-YYYY"), parseInt(noLockDays), moment(secondDateFrom).format("DD-MM-YYYY"), moment(secondDateTo).format("DD-MM-YYYY"), moment(secondSalaryDate).format("DD-MM-YYYY"), parseInt(secondNoLockDays)))
        history.push(`/admin/salarySchedule/${buCode}`)
    }


    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                <form onSubmit={handleConfirm}>
                    <div>

                        <div className="flex-auto px-4 mt-4 lg:px-10 py-10 pt-0">

                            <center className="text-xl font-bold">First Salary Cycle</center>
                            <div className="flex flex-wrap  mt-4">

                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Period Start Date
                                        </label>
                                        <input
                                            required
                                            onChange={(e) => handleDateFromChange(e)}
                                            type="date"
                                            min={periodStartDateOneMinValue}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Period End Date
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            min={dateTwoMinFirst}
                                            max={dateTwoMinFirst}

                                            onChange={(e) => handleDateToChange(e)}



                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Salary Date
                                        </label>
                                        <input
                                            required
                                            type="date"
                                            min={dateTo}
                                            max={firstSalaryDateMinVal}


                                            onChange={(e) => handleSalaryDateChange(e)}


                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Number of Lock Days
                                        </label>
                                        <select onChange={(e) => {
                                            handleNoLockDays(e)
                                        }} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                            <option selected value="1">
                                                1
                                            </option>
                                            <option value="2">
                                                2
                                            </option>
                                            <option value="3">
                                                3
                                            </option>
                                            <option value="4">
                                                4
                                            </option>
                                            <option value="5">
                                                5
                                            </option>
                                            <option value="6">
                                                6
                                            </option>
                                            <option value="7">
                                                7
                                            </option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto px-4 mt-4 lg:px-4 py-6 pt-0">

                            <center className="text-xl font-bold">Second Salary Cycle</center>
                            <div className="flex flex-wrap  mt-4">

                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Period Start Date
                                        </label>
                                        <input
                                            min={minSecondDateStart}
                                            max={minSecondDateStart}
                                            onChange={(e) => handleSecondDateFromChange(e)}
                                            type="date"
                                            required
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Period End Date
                                        </label>
                                        <input

                                            min={minValSecondSalaryDate}
                                            max={minValSecondSalaryDate}

                                            type="date"
                                            required
                                            onChange={(e) => handleSecondDateToChange(e)}


                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Salary Date
                                        </label>
                                        <input
                                            required
                                            min={secondDateTo}
                                            max={secondSalaryDateMin}
                                            type="date"
                                            onChange={(e) => handleSecondSalaryDatehange(e)}



                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Number of Lock Days
                                        </label>
                                        <select onChange={(e) => {
                                            handleSecondNoLockDays(e)
                                        }} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                            <option selected value="1">
                                                1
                                            </option>
                                            <option value="2">
                                                2
                                            </option>
                                            <option value="3">
                                                3
                                            </option>
                                            <option value="4">
                                                4
                                            </option>
                                            <option value="5">
                                                5
                                            </option>
                                            <option value="6">
                                                6
                                            </option>
                                            <option value="7">
                                                7
                                            </option>

                                        </select>
                                    </div>
                                </div>
                            </div>



                            <center>


                                <button type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    Confirm
                                </button>


                            </center>





                        </div>

                    </div>
                </form>



            </div>
        </>
    )
}

export default BiWeeklySalaryForm