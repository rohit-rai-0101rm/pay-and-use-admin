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
const WeeklySalaryForm = ({ buCode }) => {
  const [dateTwoMaxVal, setDateTwoMaxVal] = useState('')
  const currentMonth = moment().set('date', 1).format("DD-MM-YYYY")
  console.log(currentMonth)
  const periodStartDateOneMinValue = moment(currentMonth, "DD-MM-yyyy")
    .add(1, "M")
    .format("YYYY-MM-DD");
  console.log("periodStartDateOneMinValue", periodStartDateOneMinValue)
  const alert = useAlert();
  const { register, handleSubmit, control, errors } = useForm();
  const dispatch = useDispatch();
  const [dateOne, setDateOne] = useState('')
  const [isPeriodStartDateSelected, setisPeriodStartDateSelected] = useState(false)
  const [dateTwoMinValue, setDateTwoMinValue] = useState(null)
  const [isPeriodEndDateSelectedfalse, setisPeriodEndDateSelectedfalse] = useState(false)
  const [salaryDateVal, setSalaryDateVal] = useState('false')
  const [dateTwo, setDateTwo] = useState('')
  const [dateThree, setDateThree] = useState('')
  const [noLockDays, setNoLockDays] = useState("1")
  const [salaryDateMaxVal, setSalaryDateMaxVal] = useState('')
  console.log(dateOne)
  const history = useHistory()

  const handleSubmits = () => {
    console.log(dateOne)
    console.log(dateTwo)
    console.log(dateThree)
    dispatch(saveSalaryInfo(dateOne, dateTwo, dateThree, parseInt(noLockDays)))
    history.push(`/admin/salarySchedule/${buCode}`)
  }

  const handleDateOne = (e) => {
    setDateOne(moment(e.target.value).format("DD-MM-YYYY"))
    let momentedDate = moment(e.target.value).format("YYYY-MM-DD")
    let nextDate = moment(momentedDate).add(7, 'days').calendar()
    nextDate = moment(nextDate).format("YYYY-MM-DD")

    console.log("nextDate", nextDate)
    setDateTwoMinValue(nextDate)
    setisPeriodStartDateSelected(true)


  }

  const handleDateTwo = (e) => {
    setDateTwo(moment(e.target.value).format("DD-MM-YYYY"))
    let momentedDate = moment(e.target.value).format("YYYY-MM-DD")
    let nextDate = moment(momentedDate).add(7, 'days').calendar()
    nextDate = moment(nextDate).format("YYYY-MM-DD")

    console.log("nextDate", nextDate)
    setSalaryDateMaxVal(nextDate)
    setisPeriodEndDateSelectedfalse(true)
  }
  const handleDateThree = (e) => {
    setDateThree(moment(e.target.value).format("DD-MM-YYYY"))
  }
  console.log(isPeriodStartDateSelected)
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <form onSubmit={handleSubmits}>
          <div className="flex-auto px-4 mt-4 lg:px-10 py-10 pt-0">


            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Period Start Date
                  </label>
                  <input
                    onChange={(e) => handleDateOne(e)}
                    type="date"
                    min={periodStartDateOneMinValue}
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
                    type="date"
                    onChange={(e) => handleDateTwo(e)}

                    min={dateTwoMinValue}
                    max={dateTwoMinValue}
                    

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
                    type="date"
                    min={dateTwoMinValue}
                    max={salaryDateMaxVal}
                    onChange={(e) => handleDateThree(e)}
                    required

                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Lucky"
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
                    setNoLockDays(e.target.value);
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

        </form>

      </div>
    </>
  )
}

export default WeeklySalaryForm