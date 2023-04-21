import { Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import EmployeeHeaderStats from "components/Headers/EmployeeHeaderStats";
import Loader from "layouts/Loader/Loader";
import MetaData from "layouts/MetaData";
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import ComaprisonCard from 'components/Cards/Compare';
import Tabs from "components/Tabs";

import { Link, useParams } from "react-router-dom";
import EmployeeProfileData from "./EmployeeProfileData";
import "./Profile.css";
import { LocalDrinkSharp } from "@material-ui/icons";
import LoanHistoryCardTable from "components/Table/LoanHistoryTable";
import { useDispatch, useSelector } from "react-redux";
import { employeeProfileApi } from "actions/EmployeeActions";
import ProductTable from "components/Table/ProductTable";
import FileUploadTable from "components/Table/FileUploadTable";
import LoanPendingForApprovalTable from "components/Table/LoanPendingForApprovalTable";
import EmployeeProfileTabs from "components/EmployeeProfileTabs";
import { employeeLoanAppliedApi } from "actions/EmployeeActions";

const EmployeeProfile = ({ history }) => {


  const { loadiing: ld, employeeLoanApllied } = useSelector((state) => state.employeeLoanApplied)
  const { loadiing,
    employeeProfile
  } = useSelector((state) => state.employeeProfile);
  console.log("employeeProfile", employeeProfile)
  console.log("employeeLoanApplied", employeeLoanApllied)

  const dispatch = useDispatch()
  var { empCode, buCode } = useParams()


  useEffect(() => {
    dispatch(employeeLoanAppliedApi(buCode, empCode))
    dispatch(employeeProfileApi(empCode, buCode));
  }, [dispatch, empCode, buCode]);
  const user = {
    firstName: 'Rohit',
    lastName: 'Rai',

    email: "rohit@gmail.com",
  }

  if (loadiing) {
    return (
      <Loader />
    )
  }


  return (
    <>
      <div className="mt-2 flex ">
        <div className="w-full lg:w-12/12 py-24 px-4">
          {
            employeeProfile &&
            <EmployeeProfileTabs loanApplied={employeeLoanApllied} employeeProfile={employeeProfile} />
          }
          {
            /*
               <LoanHistoryCardTable/>
              <ProductTable empCode={empCode} buCode={buCode}/>
              <LoanPendingForApprovalTable/>
              <FileUploadTable/>
            */
          }

        </div>

        {
          /*
             <div className="w-full lg:w-8/12 py-24 px-4">
            <CardSettings employeeInformation={employeeProfile}
        
            
             />
          </div>

          */
        }



      </div>
    </>
  );
};

export default EmployeeProfile;