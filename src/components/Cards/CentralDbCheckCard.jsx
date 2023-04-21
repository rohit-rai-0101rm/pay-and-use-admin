import { centralDBCheckApi } from 'actions/hyperVergeActions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const CentralDbCheckCard = ({employeeInformation}) => {

    const dispatch=useDispatch()
    useEffect(() => {
    
      }, [])
    console.log("centralDbCheck",employeeInformation?.pan)
  return (
    <div>{employeeInformation?.pan}</div>
  )
}

export default CentralDbCheckCard