import { getBuListApi } from 'actions/buisnessUnitActions'
import CardPageVisits from 'components/Cards/CardPageVisits'
import CardPageVisitsData from 'components/Cards/CardPageVisitsData'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BuList = () => {
  const [code, setCode] = useState('tt00')
    const[description,setDescription]=useState('')
    const[sort,setSort]=useState('buCode')
    const[sortType,setSortType]=useState('desc')
    const [size,setSize]=useState(6)
    const [pageNo,setPageNo]=useState(1)
    console.log(code)
    const dispatch=useDispatch()
    dispatch(getBuListApi(code,description,sort,sortType,size,pageNo))

  return (
    <div>

    </div>
  )
}

export default BuList