import { employeeproductFetchApi } from 'actions/EmployeeActions'
import EmployeeProduct from 'components/Cards/EmployeeProduct'
import EmployeeProductUpdate from 'components/Cards/EmployeeProductUpdate'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

const EmployeeAuthentication = () => {
  const update=localStorage.getItem("update")
  const employeeProduct = JSON.parse(localStorage.getItem("employeeProduct"))
  console.log(update)
  console.log(employeeProduct)    

  return (
    <>
    <div className="flex flex-wrap">
      <div className="w-full lg:w-12/12 px-4">
        <EmployeeProduct />
      </div>

      
    </div>
  </>
  )
}

export default EmployeeAuthentication



// components

