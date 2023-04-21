import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import './Pagination.css';
// components

import CardTable from "components/Cards/CardTable.js";
import Navbar from "components/Navbars/IndexNavbar";
import CompanyMasterCardTable from "components/Cards/CompanyMasterCardTable";
import { useDispatch } from "react-redux";
import { getCompanyMasterList } from "actions/companyMasterActions";

export default function CompanyMasterList() {
  const dispatch=useDispatch()
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [sort, setSort] = useState("id");
  const [sortType, setSortType] = useState("desc");
  const [size, setSize] = useState(5);
  const[page,setPage]=useState(1)
  const [pageNo, setPageNo] = useState(-1);
  const handlePage = (e) => {
    setPage(e);
    setPageNo(e - 2);
    
  }
  console.log(sort)
  
  useEffect(()=>{
    dispatch(getCompanyMasterList(code,description,sort,sortType,size,(pageNo+1)),[pageNo])

  },[size,pageNo])
  return (

    <>
    <Navbar/>
      <div className="flex bg-blue flex-wrap mt-4">
        
        <div className="w-full mb-12 pt-12 px-4">
          <CompanyMasterCardTable color="dark" />
        </div>
        <div className="paginationBox">
        <Pagination
        
        activePage={page}
        itemsCountPerPage={size}
        onChange={handlePage}
        totalItemsCount={73}
        nextPageText="Next"
        prevPageText="Prev"
        firstPageText="1st"
        lastPageText="Last"
        itemClass="page-item"
        linkClass="page-link"
        activeClass="pageItemActive"
        activeLinkClass="pageLinkActive"
      />
        </div>
        
      </div>
    </>
  );
}