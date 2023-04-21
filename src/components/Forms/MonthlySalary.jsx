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
const MonthlySalary = ({ buCode }) => {
  const alert = useAlert();
  const { register, handleSubmit, control, errors } = useForm();
  const dispatch = useDispatch();
  const [dateOne, setDateOne] = useState('')
  const [isValidted, setIsValidted] = useState(false)
  const [salaryDateVal, setSalaryDateVal] = useState('false')
  const [dateTwo, setDateTwo] = useState('')
  const [dateThree, setDateThree] = useState('')
  const [allCasesMatched, setAllCasesMatched] = useState(0)
  const [noLockDays, setNoLockDays] = useState("1")
  const [twentyDayVal, setTwentyDayVal] = useState('false')

  const history = useHistory()
  const validDiffBetweenStartandEnd = [29, 30, 31]
  const febValidationsArray = [27, 28, 29]
  const onSubmit = (data) => {


  }
  const currentMonthValidation = (currentMonth, dateOneMonth, dateTwoMonth, currentYear) => {
    if (dateOneMonth <= currentMonth || dateTwoMonth <= currentMonth) {
      alert.error('Please select a date in the next month')
      return false
    }
    else {
      return true
    }
  }
  const isBetweenValdiation = (b, c) => {

    return c.diff(b, 'days')


  }
  const twentyDayValidation = (isBetweenVal) => {
    return (isBetweenVal >= 20) ? false : true

  }
  const oneMonthGapval = (a, b) => {

    return validDiffBetweenStartandEnd.includes(b.diff(a, 'days'))
  }
  const validate = (dateOne, dateTwo, dateThree, noLockDays) => {
    let newDate = new Date()
    const currDate = moment(newDate)
    const a = moment(dateOne)
    const b = moment(dateTwo)
    const c = moment(dateThree)



    const isBetweenVal = isBetweenValdiation(b, c)

    const twentyDayVal = twentyDayValidation(isBetweenVal)


    if (!twentyDayVal) {
      alert.error('salary date caanot be after 20 days of end date ')

    }

    console.log(isBetweenVal)



    const format = "DD-MM-YYYY";
    const d1 = moment(dateOne).format(format)
    const d2 = moment(dateTwo).format(format)
    const d3 = moment(dateThree).format(format)

    const dOne = moment(d1).toISOString()
    const dTwo = moment(d2).toISOString()
    const dThree = moment(d3)


    const currentMonth = newDate.getMonth()
    const currentYear = newDate.getFullYear()
    const dateOneMonth = dateOne.getMonth()
    const dateOneYear = dateOne.getFullYear()
    const dateTwoMonth = dateTwo.getMonth()
    const dateThreeMonth = dateThree.getMonth()

    const oneMonthGap = oneMonthGapval(a, b)

    const currMonVal = currentMonthValidation(currentMonth, dateOneMonth, dateTwoMonth, currentYear)
    console.log(noLockDays)
    console.log(currMonVal)
    if (!oneMonthGap) {
      alert.error("one month gap is must between start and end date")
    }
    console.log(oneMonthGapval)
    if (currMonVal && twentyDayVal && oneMonthGap) {
      dispatch(saveSalaryInfo({ dateOne, dateTwo, dateThree, noLockDays }))
      history.push(`/admin/salarySchedule/${buCode}`)

    }



  }
  const handleSubmitss = () => {
    validate(dateOne, dateTwo, dateThree, noLockDays)


    //one month diff validation





    //dispatch(saveSalaryInfo({dateFrom,dateTo,salaryDate}));
  }

  //console.log(moment(dateOne).format('DD-MM-YYYY'))

  const handleDateOne = (e) => {
    setDateOne(moment(e.target.value).format("DD-MM-YYYY"))
  }

  const handleDateTwo = (e) => {
    setDateTwo(moment(e.target.value).format("DD-MM-YYYY"))
  }
  const handleDateThree = (e) => {
    setDateThree(moment(e.target.value).format("DD-MM-YYYY"))
  }

  const handleSubmits = () => {
    console.log(dateOne)
    console.log(dateTwo)
    console.log(dateThree)
    dispatch(saveSalaryInfo(dateOne, dateTwo, dateThree, parseInt(noLockDays)))
    history.push(`/admin/salarySchedule/${buCode}`)
  }
  const currentMonth = moment().set('date', 1).format("DD-MM-YYYY")
  console.log(currentMonth)
  const periodStartDate = moment(currentMonth, "DD-MM-yyyy")
    .add(1, "M")
    .format("YYYY-MM-DD");
  console.log(periodStartDate)
  const momentedDateOne = moment(dateOne).format("DD-MM-YYYY")
  var new_date = moment(momentedDateOne).add(28, 'days').calendar()
  var new_date2 = moment(periodStartDate).add(1, 'months').calendar()
  console.log("new_date", new_date)
  const momentedStartDate = moment(new_date).format("YYYY-MM-DD")
  const momentedEndDate = moment(new_date2).format("YYYY-MM-DD")
  console.log("momentedStartDate", momentedStartDate)
  console.log(momentedEndDate)
  console.log(momentedDateOne)
  const periodEndDate = moment(momentedDateOne)
    .add(1, "M")
    .format("YYYY-MM-DD");
  console.log("periodEndDate", periodEndDate)
  console.log(moment(dateOne))

  const momentedPeriodEndDate = moment(dateTwo).format("DD-MM-YYYY")
  console.log(momentedPeriodEndDate)

  const momentedDateTwo = moment(momentedPeriodEndDate).format("DD-MM-YYYY")
  var new_date22 = moment(momentedDateTwo).add(14, 'days').calendar()
  console.log(new_date22)
  console.log(moment(dateTwo).format("DD-MM-YYYY"))
  console.log(momentedDateTwo)
  console.log(dateTwo)
  const minSalaryDate = moment(dateTwo).format("YYYY-DD-MM")
  console.log(minSalaryDate)
  console.log(momentedPeriodEndDate)
  const minSalDate = moment(momentedPeriodEndDate).format("YYYY-MM-DD")
  console.log(periodEndDate)
  console.log(momentedStartDate)
  const minDate = moment(dateTwo).format("YYYY-MM-DD")
  console.log(minDate)
  const maxDate = moment(periodEndDate).add(30, 'days').calendar()
  console.log(maxDate)

  const mxDate = moment(maxDate).format("YYYY-MM-DD")
  console.log("mxDate", mxDate)
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
                    min={periodStartDate}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
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
                    min={momentedStartDate}
                    max={periodEndDate}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
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
                    min={periodEndDate}
                    max={mxDate}
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
                  <select

                    required
                    onChange={(e) => {
                      setNoLockDays(e.target.value);
                    }} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example" >


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
                    </option> <option value="7">
                      7
                    </option> <option value="8">
                      8
                    </option> <option value="9">
                      9
                    </option> <option value="10">
                      10
                    </option> <option value="11">
                      11
                    </option> <option value="12">
                      12
                    </option> <option value="13">
                      13
                    </option> <option value="14">
                      14
                    </option> <option value="15">
                      15
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

export default MonthlySalary