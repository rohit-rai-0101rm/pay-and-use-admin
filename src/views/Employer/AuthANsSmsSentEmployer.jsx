import { authAndSmsSentApi } from 'actions/progressAction';
import GlobalFilterForAuthandSmsSent from 'components/MockData/GlobalFilterForAuthandSmsSent';
import AuthAndSmsSentTable from 'components/Table/AuthAndSmsSentTable';
import AuthAndSmsSentTableEmmployer from 'components/Table/AuthAndSmsSentTableEmmployer';
import Loader from 'layouts/Loader/Loader';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { CSVLink } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';
import Data from "../../components/MockData/authandSmsSent.json"
const AuthANsSmsSentEmployer = () => {

  const{loading,inProgressApplications}=useSelector((state)=>state.progress)
  const dispatch=useDispatch()
  const [filterType, setFilterType] = useState("AU")
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [sort, setSort] = useState("empCode");
  const [sortType, setSortType] = useState("asc");
  const [size, setSize] = useState(1000);
  const [pageNo, setPageNo] = useState(-1);
    const color="light"
    const history=useHistory()
    useEffect(() => {
      dispatch(authAndSmsSentApi(filterType,code,description,sort,sortType,size,(pageNo + 1)), [pageNo])
    }, [])
    
   
    if(loading){
      return (<Loader/>)
    }
      return (
        <>
    
        <AuthAndSmsSentTableEmmployer data={inProgressApplications}/>
        </>
    
      );
}

export default AuthANsSmsSentEmployer