
import React, { useEffect, useState } from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyMasterList } from "actions/companyMasterActions";
import GroupEntityListTable from "components/Cards/GroupEntityListTable";
import { groupEntityListApi } from "actions/groupEntityActions";
import GroupEntityPageVisitsData from "components/Cards/GroupEntityPageVisitsData";
import { getFinancialYearApi } from "actions/financialYearActions";
import axios from "axios";

export default function EmployerDashboard() {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [sort, setSort] = useState("id");
  const [sortType, setSortType] = useState("desc");
  const [size, setSize] = useState("20");
  const [pageNo, setPageNo] = useState(-1);
  const token = sessionStorage.getItem("user");
  const [time, setTime] = useState(0);
 
    

  //console.log(companyMasterList)
 

  return (
    <>
   
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <GroupEntityPageVisitsData color="dark" />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
