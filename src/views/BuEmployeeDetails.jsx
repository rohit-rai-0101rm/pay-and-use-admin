import { employeesInBuApi } from 'actions/buisnessUnitActions'
import { fetchSalaryScheduleApi } from 'actions/salaryScheduleActions'
import Loader from 'layouts/Loader/Loader'
import MetaData from 'layouts/MetaData'
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import AllEmployeesInABu from './Employer/AllEmployeesInABu'

const BuEmployeeDetails = () => {
  const dispatch = useDispatch()
  const { loadiing, employeesInBu } = useSelector(state => state.allEmployeesInBu)
  console.log(employeesInBu)
  const { id } = useParams()
  const disaptch = useDispatch()

  useEffect(() => {
    disaptch(employeesInBuApi(id))
  }, [dispatch, id])

  employeesInBu?.map((employee,index)=>{
    employee.SNo = index+1
  })
  
  return (
    
        <AllEmployeesInABu  />

   
  )
}

export default BuEmployeeDetails