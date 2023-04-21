import React, { useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import Profile from "views/Profile";
import EmployeeProfile from "views/admin/EmployeeProfile";
import EmployeeHeaderStats from "components/Headers/EmployeeHeaderStats";
import EmployerSidebar from "components/Sidebar/EmployerSidebar";
import EmployerNavbar from "components/Navbars/EmployerNavbar";
import EmployerDashboard from "views/Employer/Dashboard";
import AllEmployeesInABu from "views/Employer/AllEmployeesInABu";
import PendingApprovalsInBu from "views/Employer/PendingApprovalsInBu";
import CompletedLoansInBu from "views/Employer/CompletedLoansInBu";
import UnpaidLoansInBu from "views/Employer/UnpaidLoansInBu";
import ApprovedLoansInBu from "views/Employer/ApprovedLoansInBu";
import CurrentMonthDeduction from "views/Employer/CurrentMonthDeduction";
import Payment from "views/Employer/Payment";
import EmployeesSummary from "views/Employer/EmployeesSummary";
import AuthorizedAndSmsSent from "views/admin/AuthorizedAndSmsSent";
import MobileNumberAuthenticated from "views/admin/MobileNumberAuthenticated";
import ApplicationSubmittedAndUnderReview from "views/admin/ApplicationSubmittedAndUnderReview";
import HrApproved from "views/admin/HrApproved";
import ApplicationOnValidationHold from "views/admin/ApplicationOnValidationHold";
import LoanDisbursed from "views/admin/LoanDisbursed";
import EmployerHrApprovalPending from "views/Employer/EmployerHrApprovalPending";
import AuthAndSmsSentTableEmmployer from "components/Table/AuthAndSmsSentTableEmmployer";
import AuthANsSmsSentEmployer from "views/Employer/AuthANsSmsSentEmployer";
import MobileNumberAuthenticatedEmployerTable from "components/Table/MobileNumberAuthenticatedEmployerTable";
import MobileNumberAuthenticatedEmployer from "views/Employer/MobileNumberAuthenticatedEmployer";
import ApplicationSubmiitedandUnderReviewEmployer from "views/Employer/ApplicationSubmiitedandUnderReviewEmployer";
import HrApprovedEmployer from "views/Employer/HrApprovedEmployer";
export default function EmployerLayout() {
  const { search } = useLocation();

  return (
    <>
      <EmployerSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <EmployerNavbar />
        {/* Header */}
        <EmployeeHeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full mt-6 ">
          <Switch>
            <Route
              path="/employer/dashboard"
              exact
              component={EmployerDashboard}
            />
            /bu/employees
            <Route
              path="/employer/employees/BU00001"
              exact
              component={AllEmployeesInABu}
            />
            <Route
              path="/employer/employees/authAndSmsSent/BU0001"
              exact
              component={AuthANsSmsSentEmployer}
            />
            <Route
              path="/employer/employees/mobileAuthenticated/BU0001"
              exact
              component={MobileNumberAuthenticatedEmployer}
            />
            <Route
              path="/employer/employees/applicationSubmittedAndUnderReview/BU0001"
              exact
              component={ApplicationSubmiitedandUnderReviewEmployer}
            />
            <Route
              path="/employer/employees/HrApprovalPending"
              exact
              component={EmployerHrApprovalPending}
            />
            <Route
              path="/employer/employees/hrApproved/BU0001"
              exact
              component={HrApprovedEmployer}
            />
            <Route path="/employer/employees/loanDisbursed/BU0001" exact component={LoanDisbursed} />
            <Route path="/employer/employeesSummary" exact component={EmployeesSummary} />
            
          </Switch>
        </div>
      </div>
    </>
  );
}
