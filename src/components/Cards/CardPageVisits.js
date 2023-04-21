import React, { useEffect, useState } from "react";
import { getCompanyMasterList } from "actions/companyMasterActions";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CardPageVisitsData from "./CardPageVisitsData";
// components

export default function CardPageVisits() {
  const history=useHistory()
 const{loading,companyMasterList}=useSelector((state)=>state.companyMaster)
 
  console.log(loading)
  if(loading) return("fetching your companies")
console.log(companyMasterList)


  
 
 
  const renderHeader = () => {
    
    let headerElement = ["COMPANY CODE", "COMPANY NAME", "COUNTRY", "STATE"];
    return headerElement.map((key, index) => {
      return (
        <th
          className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          key={index}
        >
          {key.toUpperCase()}
        </th>
      );
    });
  };

 

  console.log(companyMasterList);
  
  return (
    
  <CardPageVisitsData loading={loading}  companyMasterList={companyMasterList}/>
    
  );
}
