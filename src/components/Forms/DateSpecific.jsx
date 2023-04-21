import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { useAlert } from "react-alert";

import { saveSalaryInfo } from 'actions/formActions';

const DateSpecific = ({buCode}) => {
  const alert = useAlert();
  const { register, handleSubmit, control, errors } = useForm();
const dispatch = useDispatch();
 const [biweeklyDateSpecificDate1, setBiweeklyDateSpecificDate1] = useState('')
 const [biweeklyDateSpecificDate2, setBiweeklyDateSpecificDate2] = useState('')

  console.log(biweeklyDateSpecificDate1)


  console.log(biweeklyDateSpecificDate2)


  const onSubmit = (data) => {
    console.log(data)
    const diffTime = Math.abs(biweeklyDateSpecificDate2 - biweeklyDateSpecificDate1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
if(diffDays>14){
  alert.error("Please select dates within 14 days")
  console.log(biweeklyDateSpecificDate1.toDateString())
}
console.log(biweeklyDateSpecificDate1.toDateString())

    dispatch(saveSalaryInfo({ biweeklyDateSpecificDate1, biweeklyDateSpecificDate2 }))
  }
  return (

    <form  onSubmit={handleSubmit(onSubmit)}>
      {/* 1) TextField */}
      <div className='flex mt-4 flex-row justify-between'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Choose Date 1"
            value={biweeklyDateSpecificDate1}
            onChange={(newValue) => {
              setBiweeklyDateSpecificDate1(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Choose Date 2"
            value={biweeklyDateSpecificDate2}
            onChange={(newValue) => {
              setBiweeklyDateSpecificDate2(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

      </div>




      {/*  Switch */}


      {/* Checkbox */}

      <div className="mt-4">
        <Button  variant="contained" color="primary" type="submit">
          Confirm
        </Button>
      </div>

    </form>


  )
}

export default DateSpecific