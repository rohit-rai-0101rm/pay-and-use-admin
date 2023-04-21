import moment from 'moment'
import React from 'react'
import './CompaniesInAGroup.css'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const CompaniesInAGroupCard = ({ company }) => {
  return (
    <div>
      <Link className="companiesInAGroupCard" to={`/admin/unitsInACompany/${company.id}`}>

        <p>{company.companyDescription}</p>
        <div>


          {" "}
          <p>  ({company.companyCode} )</p>


          <p className="pt-8">No of BU:23</p>
          <div className="createdAt">
            <p className="pt-2"> created  {moment(company.createdDate).fromNow()}
            </p>

          </div>
        </div>

      </Link>

    </div>

  )
}

export default CompaniesInAGroupCard