import React from 'react'
import { Typography } from "@mui/material";
import EmployeeHeaderStats from "components/Headers/EmployeeHeaderStats";
import Loader from "layouts/Loader/Loader";
import MetaData from "layouts/MetaData";
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

import { Link } from "react-router-dom";

import { LocalDrinkSharp } from "@material-ui/icons";
const EmployeeSingleLoanDetails = () => {
  return (
    <>
    <div className="mt-6 w-full flex flex-wrap">
    <CardSettings />
      
      
    </div>
  </>
  )
}

export default EmployeeSingleLoanDetails