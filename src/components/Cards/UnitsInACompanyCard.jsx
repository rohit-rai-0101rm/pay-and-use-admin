import moment from 'moment'
import React from 'react'
import './UnitsInACompany.css'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const UnitsInACompanyCard = ({ unit }) => {
console.log(unit.buCode)
  return (
    
      <Link className="unitsInAGroupCard" to={`/admin/buDetails/${unit.buCode}`}>
        <p>{unit.buDescription}</p>
        <div>


          {" "}
          <p>  ({unit.buCode} )</p>


          <div className="createdAt">
            <p> created  {moment(unit.createdDate).fromNow()}
            </p>

          </div>
        </div>

      </Link>

  

  )
}

export default UnitsInACompanyCard