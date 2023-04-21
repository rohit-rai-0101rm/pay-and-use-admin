import { DataGrid } from '@mui/x-data-grid'
import Loader from 'layouts/Loader/Loader'
import React, { useState } from 'react'

const SalaryScheduleData = ({loading,rows,columns}) => {
    const [state,setState]=useState(rows)
console.log(state)
    const handleCommit =(e)=>{
        const arr=state.map(r=>{
            if(r.id===e.id){
                return {...r,[e.field]:e.value}
            }
            else{
                return {...r}
            }
        })
        setState(arr)
    }
console.log(state)
if(loading){
    return <Loader/>
}
  return (
    <DataGrid
    onCellEditCommit={handleCommit}
    rows={rows}
    columns={columns}
    pageSize={100}
    autoHeight
  />
  )
}

export default SalaryScheduleData