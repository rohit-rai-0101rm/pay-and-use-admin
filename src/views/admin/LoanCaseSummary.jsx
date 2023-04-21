import React from 'react'
import { useParams } from "react-router-dom";


const LoanCaseSummary = () => {
    const {id}=useParams();
  return (
    <div>LoanCaseDetails

{id}

    </div>
  )
}

export default LoanCaseSummary