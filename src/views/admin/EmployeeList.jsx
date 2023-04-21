import React from 'react'
import { useSelector } from 'react-redux'

const EmployeeList = () => {
    const employeeData=useSelector((state)=>state.employee)
    console.log(employeeData)
  return (
    <div>EmployeeList</div>
  )
}

export default EmployeeList