import React from 'react'
import { useSelector } from 'react-redux'
const CompanyDetails = () => {
    const{companyMasterDetails}=useSelector((state)=>state.singleCompanyMasterDetails)
    console.log(companyMasterDetails)
  return (
    <div>{companyMasterDetails.addressLine1}</div>
  )
}

export default CompanyDetails