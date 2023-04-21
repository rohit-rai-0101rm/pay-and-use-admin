import React, { useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Demo from "../components/Cards/Demo";
// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import CompanyMasterList from "views/admin/CompanyMasterList";
import ViewAllEmployee from "views/admin/ViewAllEmployeeTable";
import CreateLegalEntity from "views/admin/CreateLegalEntity/CreateLegalEntity";
import CreateBuisnessUnit from "views/admin/CreateBuisnessUnit/CreateBuisnessUnit";
import UpdateLegalEntity from "views/admin/CreateLegalEntity/UpdateLegalEntity";
import { createGroupEntity } from "actions/groupEntityActions";
import CreateGroupEntity from "views/admin/GroupEntity/CreateGroupEntity";
import GroupEntityList from "views/admin/GroupEntityList";
import AddNewEmployeeTable from "views/admin/AddNewEmployeeTable";
import UpdateGroupEntityForm from "components/Forms/UpdateGroupEntityForm";
import UpdateGroupEntity from "views/admin/GroupEntity/UpdateGroupEntity";
import CompaniesInAGroup from "views/admin/CompaniesInAGroup";
import DragnDrop from "components/DragnDrop";
import LoanCaseDetailsCardTable from "components/Cards/LoanCaseDetailsCardTable";
import DataGridDemo from "components/LoanCaseDataGrid";
import LoanCaseDetails from "../views/admin/LoanCaseDetails";
import LoanCaseSummary from "views/admin/LoanCaseSummary";
import EmployeeList from "views/admin/EmployeeList";
import UnitsInACompany from "views/admin/UnitsInACompany";
import CalenderTable from "components/Cards/CalenderTable";
import Calender from "components/Cards/Calender";
import LinearSteeper from "components/Forms/LinearSteeper";
import PostBuForm1 from "components/Forms/PostBuForm1";
import PostBuForm2 from "components/Forms/PostBuForm2";
import DaySpecific from "components/Forms/DaySpecific";
import DateSpecific from "components/Forms/DateSpecific";
import BasicInfoForm from "components/Forms/BasicInfoForm";
import SalaryInfoForm from "components/Forms/SalaryInfoForm";
import EmployeesInABu from "views/admin/EmployeesInABu";
import EmployeeInABuDataGrid from "components/EmployeeInABuDataGrid";
import Profile from "views/Profile";
import EmployeeProfile from "views/admin/EmployeeProfile";
import EmployeeHeaderStats from "components/Headers/EmployeeHeaderStats";
import LoanHistorygg from "views/admin/LoanHistory";
import EmployeeSingleLoanDetails from "components/EmployeeSingleLoanDetails";
import EmployeeSingleLoanDetailsCard from "components/Cards/EmployeeSingleLoanDetailsCard";
import DataCompare from "views/DataCompare";
import DataCompareStats from "components/Headers/DataCompareStats";
import EmployeeSingleLoanDetailsPendingCard from "components/Cards/EmployeeSingleLoanDetailsPending";
import InactiveLaonsCardTable from "components/Cards/InactiveLoansCardTable";
import SalarySchedule from "components/Forms/SalarySchedule";
import EmployeeData from "components/Forms/EmployeeData";
import EmployeeInfo2 from "components/Forms/EmployeeInfo2";
import EmployeesRecord from "components/Forms/EmployeesRecord";
import EmployeesRecordDataGrid from "components/EmployeesRecordDataGrid";
import LoanCreationForm from "components/Forms/LoanCreationForm";
import BuDetails from "views/admin/BuDetails";
import EmployeesList from "components/Forms/EmployeesList";
import LoanMasterForm from "components/Forms/LoanMasterForm";
import LoanTypeComponent from "components/Forms/LoanTypeComponent";
import LoanSelectionForm from "components/Forms/LoanSelectionForm";
import PayDayLoanSelection from "components/Forms/PayDayLoanSelection";
import PayDayLoanBreakup from "components/Forms/PayDayLoanBreakup";
import ShortTermSelection from "components/Forms/ShortTermSelection";
import ShortTermBreakup from "components/Forms/ShortTermBreakup";
import AllLoanProductsCard from "components/Cards/AllLoanProducts";
import BuEmployeeDetails from "views/BuEmployeeDetails";
import EmployeeAuthentication from "views/admin/EmployeeAuthentication";
import EmployeeAuthority from "views/admin/EmployeeAuthority";
import EmployeeProductManualAuthorty from "views/admin/EmployeeProductManualAuthorty";
import AllEmployeesInABu from "views/Employer/AllEmployeesInABu";
import AddNewEmployee from "views/admin/AddNewEmployee";
import Tabs from "components/Tabs";

import ViewEmployes from "views/admin/ViewEmployes";
import Auth from "./Auth";
import AuthorizedAndSmsSent from "views/admin/AuthorizedAndSmsSent";
import MobileNumberAuthenticated from "views/admin/MobileNumberAuthenticated";
import ApplicationSubmittedAndUnderReview from "views/admin/ApplicationSubmittedAndUnderReview";
import ApplicationKycOnHold from "views/admin/ApplicationKycOnHold";
import ApplicationKycCompleted from "views/admin/ApplicationKycCompleted";
import ApplicationApproved from "views/admin/ApplicationApproved";
import ApplicationOnValidationHold from "views/admin/ApplicationOnValidationHold";
import ApplicationRejected from "views/admin/ApplicationRejected";
import HrApproved from "views/admin/HrApproved";
import HrRejected from "views/admin/HrRejected";
import LoanDisbursed from "views/admin/LoanDisbursed";
import AccordianPage from "views/admin/AccordianPage";
import Validation from "views/admin/Validation";
import DataComparison from "views/admin/DataComparison";
import AddnewEmployees from "views/admin/AddnewEmployees";
import AssignBuisnessUnits from "views/admin/AssignBuisnessUnits";
import CreateGroup from "components/Forms/CreateGroup";
import LoanDetails from "views/admin/LoanDetails";
import ActiveLoans from "views/admin/ActiveLoans";
import CompletedLoan from "views/admin/CompletedLoan";
import ForeClosureRequest from "views/admin/ForeClosureRequest";
import ForeClosureCompleted from "views/admin/ForeClosureCompleted";
import EmployeeProductAuthority from "views/admin/EmployeeProductAuthority";
import EmpAuth from "views/admin/EmpAuth";
import UpdateEmployeeBulk from "views/admin/UpdateEmployeeBulk";
import UpdateBuPlan from "components/Forms/UpdateBuPlan";
import ActiveLoanCase from "views/admin/ActiveLoanCase";
import ForeClosureRequestCase from "views/admin/ForeClosureRequestCase";
import UpdateEmployeeProfile from "components/Forms/UpdateEmployeeProfile";
import KycOnHold from "views/admin/KycOnHold";
import KycCompleted from "views/admin/KycCompleted";
export default function Admin() {
  const { search } = useLocation();
  const [isEmployeePage, setIsEmployeePage] = useState(false);
  console.log(search);
  const location = window.location.pathname;
  const urlParams = location.split("/");
  console.log(urlParams.includes("employeeProfile"));
  if (urlParams.includes("employeeProfile")) {
    return (
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}
          <EmployeeHeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route
                path="/admin/employeeProfile/:empCode/:buCode"
                exact
                component={EmployeeProfile}
              />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </>
    );
  }

  if (urlParams.includes("compareData")) {
    return (
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          {/* Header */}

          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route path="/admin/compareData" exact component={DataCompare} />
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/activeLoans" exact component={ActiveLoans} />
            <Route
              path="/admin/completedLoans"
              exact
              component={CompletedLoan}
            />
            <Route path="/admin/pendingDisbursal" exact component={Tables} />
            <Route path="/admin/approvedDisbursal" exact component={Tables} />
            <Route path="/admin/deductionDetails" exact component={Tables} />
            <Route
              path="/admin/loanCaseDetails"
              exact
              component={DataGridDemo}
            />
              <Route
              path="/admin/updateBuPlan"
              exact
              component={UpdateBuPlan}
            />
            
            <Route path="/admin/createGroup" exact component={CreateGroup} />
            <Route
              path="/admin/foreClosureRequest"
              exact
              component={ForeClosureRequest}
            />
            <Route
              path="/admin/foreClosureCompleted"
              exact
              component={ForeClosureCompleted}
            />

            <Route
              path="/admin/viewAllEmployees"
              exact
              component={ViewAllEmployee}
            />
            <Route
              path="/admin/selectLoan"
              exact
              component={LoanSelectionForm}
            />
              <Route
              path="/admin/activeLoan/:id"
              exact
              component={ActiveLoanCase}
            />
            
            <Route
              path="/admin/employeesList/:buCode"
              exact
              component={EmployeesList}
              
            />
             <Route
              path="/admin/updateGroupEntity/:groupid"
              exact
              component={UpdateGroupEntity}
              
            />
            
            <Route path="/admin/buisnessUnit/:id" exact component={BuDetails} />
            <Route
              path="/admin/employee/excel-upload/:buCode"
              exact
              component={EmployeeInfo2}
            />
            <Route
              path="/admin/LoanMasterForm"
              exact
              component={LoanMasterForm}
            />

            <Route
              path="/admin/authenticate/employee/:buCode/:empCode"
              exact
              component={EmployeeAuthentication}
            />
           
            <Route
              path="/admin/updateEmployee/:empCode/:buCode"
              exact
              component={UpdateEmployeeProfile}
            />
            <Route
              path="/admin/employee/authority/:buCode/:empCode"
              exact
              component={EmpAuth}
            />

            <Route
              path="/admin/addNewEmployee/:buCode"
              exact
              component={EmployeeData}
            />
              <Route
              path="/admin/foreClosureRequest/:id"
              exact
              component={ForeClosureRequestCase}
            />
            
            <Route
              path="/admin/authorizedAndSmsSent"
              exact
              component={AuthorizedAndSmsSent}
            />
            <Route
              path="/admin/mobileNumberAuthenticated"
              exact
              component={MobileNumberAuthenticated}
            />

            <Route
              path="/admin/empAuth"
              exact
              component={EmployeeProductAuthority}
            />

            <Route
              path="/admin/submittedAndUnderReview"
              exact
              component={ApplicationSubmittedAndUnderReview}
            />

            <Route
              path="/admin/applicationOnkycHold"
              exact
              component={KycOnHold}
            />
            <Route
              path="/admin/applicationKycCompleted"
              exact
              component={KycCompleted}
            />
            <Route
              path="/admin/applicationApproved"
              exact
              component={ApplicationApproved}
            />
            <Route
              path="/admin/applicationOnValidationHold"
              exact
              component={ApplicationOnValidationHold}
            />
            <Route
              path="/admin/applicationRejected"
              exact
              component={ApplicationRejected}
            />
            <Route path="/admin/hrApproved" exact component={HrApproved} />
            <Route path="/admin/hrRejected" exact component={HrRejected} />
            <Route
              path="/admin/loanDisbursed"
              exact
              component={LoanDisbursed}
            />

            <Route
              path="/admin/manualAuthority/employee/:buCode/:empCode"
              exact
              component={EmployeeProductManualAuthorty}
            />

            <Route
              path="/admin/updateEmployees"
              exact
              component={UpdateEmployeeBulk}
            />
            <Route path="/admin/addEmployee" exact component={AddNewEmployee} />
            <Route
              path="/admin/employees/:id"
              exact
              component={EmployeeInABuDataGrid}
            />
            <Route
              path="/admin/employeesRecord"
              exact
              component={EmployeesRecord}
            />
            <Route
              path="/admin/employeeProfile/:id"
              exact
              component={EmployeeProfile}
            />
              <Route
              path="/admin/employee/authority/:buCode/:empCode"
              exact
              component={EmployeeAuthority}
            />
          
            
            <Route
              path="/admin/create/legalEntity"
              exact
              component={CreateLegalEntity}
            />
            <Route path="/admin/validations" exact component={Validation} />
            <Route
              path="/admin/payDayLoanSelection/:buCode"
              exact
              component={PayDayLoanSelection}
            />
            <Route
              path="/admin/shortTermLoanSelection/:buCode"
              exact
              component={ShortTermSelection}
            />
            <Route
              path="/admin/allLoanProducts"
              exact
              component={AllLoanProductsCard}
            />
            <Route
              path="/admin/payDayLoan/breakup/:id/:buCode"
              exact
              component={PayDayLoanBreakup}
            />

            <Route
              path="/admin/loanDetails/:loanId"
              exact
              component={LoanDetails}
            />
            <Route
              path="/admin/shortTermLoan/breakup/:id/:buCode"
              exact
              component={ShortTermBreakup}
            />
            <Route
              path="/admin/buDetails/:id"
              exact
              component={AllEmployeesInABu}
            />
            <Route
              path="/admin/create/buisnessUnit"
              exact
              component={CreateBuisnessUnit}
            />
            <Route path="/admin/loanHistory" exact component={LoanHistorygg} />
            <Route
              path="/admin/SalaryInfoForm/:id"
              exact
              component={SalaryInfoForm}
            />
            <Route
              path="/admin/salarySchedule/:id"
              exact
              component={SalarySchedule}
            />
            <Route
              path="/admin/loanCreationForm"
              exact
              component={LoanCreationForm}
            />
            <Route
              path="/admin/employee/singleloanDetails"
              exact
              component={EmployeeSingleLoanDetailsCard}
            />
            <Route
              path="/admin/inactiveLoans"
              exact
              component={InactiveLaonsCardTable}
            />
            <Route
              path="/admin/employee/singleloanDetailsPending"
              exact
              component={EmployeeSingleLoanDetailsPendingCard}
            />
            <Route
              path="/admin/list/companyMaster"
              exact
              component={CompanyMasterList}
            />
            <Route
              path="/admin/update/legalEntity/:id"
              exact
              component={UpdateLegalEntity}
            />
            <Route
              path="/admin/update/groupEntity/:id"
              exact
              component={UpdateGroupEntity}
            />
            <Route path="/admin/tabs" exact component={Tabs} />
            <Route path="/admin/list/employee" exact component={EmployeeList} />
            <Route path="/admin/postBu1" exact component={PostBuForm1} />
            <Route
              path="/admin/companiesInAGroup/:id"
              exact
              component={CompaniesInAGroup}
            />
            <Route
              path="/admin/loanCase/:id"
              exact
              component={LoanCaseSummary}
            />
            <Route
              path="/admin/addNewEmployees"
              exact
              component={AddnewEmployees}
            />

            <Route path="/admin/dataCompare" exact component={DataComparison} />
          
            <Route
              path="/admin/unitsInACompany/:id"
              exact
              component={UnitsInACompany}
            />
            <Route
              path="/admin/create/groupEntity"
              exact
              component={CreateGroupEntity}
            />
            <Route
              path="/admin/list/groupEntity"
              exact
              component={GroupEntityList}
            />
            <Route
              path="/admin/assignBuisnessUnits"
              exact
              component={AssignBuisnessUnits}
            />

            <Route path="/admin/dnd" exact component={DragnDrop} />
            <Route path="/admin/calender" exact component={Calender} />
            <Route path="/admin/multiForm" exact component={LinearSteeper} />
            <Route path="/admin/multiForm" exact component={LinearSteeper} />
            <Route path="/admin/daySpecific" exact component={DaySpecific} />
            <Route path="/admin/dateSpecific" exact component={DateSpecific} />
            <Route
              path="/admin/basicInfo/:id"
              exact
              component={BasicInfoForm}
            />
            <Route
              path="/admin/monthlySalarySchedule/:id"
              exact
              component={SalarySchedule}
            />
            <Route
              path="/admin/accordianComponent"
              exact
              component={AccordianPage}
            />

            <Route path="/admin/accordian" exact component={AccordianPage} />

            <Route path="/admin/viewEmployees" exact component={ViewEmployes} />
            <Route path="/admin/postBu" exact component={PostBuForm1} />
            <Route path="/admin/postBu2" exact component={PostBuForm2} />
            <Route
              path="/admin/calenderTable"
              exact
              component={CalenderTable}
            />
            <Redirect from="/admin" to="/admin/dashboard" />
            <Redirect from="/admin" to="/admin/dashboard" />
            <Route
              path="/list/companyMaster"
              exact
              component={CompanyMasterList}
            />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
