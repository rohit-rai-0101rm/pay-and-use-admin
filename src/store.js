import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import { stateReducer } from "./reducers/stateReducer";
import { listReducer } from "./reducers/listReducer";
import { LOAD_USER_FAILURE } from "./constants/userConstants";
import { companyMasterReducer } from "reducers/companyMasterReducer";
import { singleCompanyMasterReducer } from "reducers/companyMasterReducer";
import { codesReducer } from "reducers/codesReducer";
import { buisnessUnitListReducer } from "reducers/BuisnessUnitReducer";
import { LegalEntityReducer } from "reducers/LegalEntityReducer";
import { BuisnessUnitReducer } from "reducers/BuisnessUnitReducer";
import { GroupEntityReducer } from "reducers/groupEntityReducer";
import { GroupEntityListReducer } from "reducers/groupEntityReducer";
import { GroupEntityDetailsReducer } from "reducers/groupEntityReducer";
import { GroupCodesReducer } from "reducers/codesReducer";
import { LegalEntityInAGroupReducer } from "reducers/LegalEntityReducer";
import { buisnessUnitsInAGroupReducer } from "reducers/BuisnessUnitReducer";
import { EmployeeReducer } from "reducers/EmployeeReducer";
import { formReducer } from "reducers/FormReducer";
import { financialYearReducer } from "reducers/financialYearReducer";
import { LegalEntityInaGrpReducer } from "reducers/leinAGrpReducer";
import { BuInaCompanyReducer } from "reducers/buInACompanyReducer";
import { salarySchedulerReducer } from "reducers/SalaryScheduleReducer";
import { excelReducer } from "reducers/excelReducer";
import { uploadExcelReducer } from "reducers/excelReducer";
import { saveExcelReducer } from "reducers/excelReducer";
import { uploadZipReducer } from "reducers/excelReducer";
import { loanReducer } from "reducers/loanReducer";
import { loanTypeReducer } from "reducers/loanReducer";
import { feeTypeReducer } from "reducers/feeReducer";
import { productFetchReducer } from "reducers/loanReducer";
import {
  activeLoanDetailReducer,
  buLevelProductUpdateReducer,
  loanMasterReducer,
  loanRequestDetailsReducer,
  manualAuthorityPreRequisitesReducer,
  manualAuthorityReducer,
  productFilterReducer,
  productFilterReducer2,
  productsReducer,
  productUpdateReducer,
  utrBulkUploadReducer,
} from "./reducers/loanReducer";
import { payDayBreakUpReducer } from "reducers/breakUpReducer";
import { shortTermBreakUpReducer } from "reducers/breakUpReducer";
import { saveBuReducer } from "reducers/BuisnessUnitReducer";
import { saveSalarySchedulerReducer } from "reducers/SalaryScheduleReducer";
import { saveExcelDataReducer } from "reducers/excelReducer";
import { fetchSalarySchedulerReducer } from "reducers/SalaryScheduleReducer";
import { ActiveGroupsListReducer } from "reducers/groupEntityReducer";
import { allEmployeesInBuReducer } from "reducers/EmployerReducer";
import { pendingForApprovalInBuReducer } from "reducers/EmployerReducer";
import { completedLoansInBuReducer } from "reducers/EmployerReducer";
import { approvedLoansInBuReducer } from "reducers/EmployerReducer";
import { unpaidLoansInBuReducer } from "reducers/EmployerReducer";
import { currentMonthDeductionsInBuReducer } from "reducers/EmployerReducer";
import { EmployeeValidationReducer } from "reducers/EmployeeReducer";
import { employeeValidationReducer } from "reducers/employeeValidationReducer";
import { saveEmployeePostValidationReducer } from "reducers/employeeValidationReducer";
import { filesDownloadReducer } from "reducers/filesDownloadReducer";
import { employeeProfileReducer } from "reducers/EmployeeReducer";
import { employeeProductFetchApi } from "reducers/EmployeeReducer";
import { employeeProductFetchReducer } from "reducers/EmployeeReducer";
import { employeeProductUpdateReducer } from "reducers/EmployeeReducer";
import { EmployeeProductAuthorityReducer } from "reducers/EmployeeReducer";
import { BuisnessUnitProductTypeReducer } from "reducers/BuisnessUnitReducer";
import { breakupReducer } from "reducers/breakUpReducer";
import { EmployeeProductAuthorityMessageReducer } from "reducers/EmployeeReducer";
import { aadharUploadReducer } from "reducers/fileUploadReducer";
import { panUploadReducer } from "reducers/fileUploadReducer";
import { employeeProfileUpdateReducer } from "reducers/EmployeeReducer";
import { aadharDownloadReducer } from "reducers/filesDownloadReducer";
import { uploadNewEmployeeStatusExcelReducer } from "reducers/excelReducer";
import { updateEmployeeProfileReducer } from "reducers/EmployeeReducer";
import { buisnessUnitsInaLegalEntityReducer } from "reducers/BuisnessUnitReducer";
import { fetchEmployeesByMultipleLeandBuReducer } from "reducers/EmployeeReducer";
import { filteredParamsReducer } from "reducers/FormReducer";
import { salaryScheduleExistsReducer } from "reducers/SalaryScheduleReducer";
import { aadharBackUploadReducer } from "reducers/fileUploadReducer";
import { aadharBackDownloadReducer } from "reducers/filesDownloadReducer";
import { employeeAuthorityReducer } from "reducers/excelReducer";
import { progressReducer } from "reducers/progressReducer";
import { hypervergeReducer } from "reducers/hypervergeReducer";
import { submittedAndUnderReviewReducer } from "reducers/progressReducer";
import { hrApprovalReducer } from "reducers/hrApprovalReducer";
import { disbursalReducer } from "reducers/disbursalReducer";
import { employeeAppliedLoanReducer } from "reducers/EmployeeReducer";
import { kycAadhaReducer } from "reducers/kycReducer";
import { kycPanReducer } from "reducers/kycReducer";
import { centralDbCheckReducer } from "reducers/centralDbCheckReducer";
import { overAllKycReducer } from "reducers/kycReducer";
import { underwritingMasterReducer } from "reducers/underwritingReducer";
import { loanFilterReducer } from "reducers/loanFilterReducer";
import { underwritingMasterSaveReducer } from "reducers/underwritingReducer";

const reducer = combineReducers({
  user: userReducer,
  state: stateReducer,
  list: listReducer,
  stateDetails: stateReducer,
  listDetails: listReducer,
  companyMaster: companyMasterReducer,
  singleCompanyMasterDetails: singleCompanyMasterReducer,
  codes: codesReducer,
  buList: buisnessUnitListReducer,
  legalEntity: LegalEntityReducer,
  buisnessUnit: BuisnessUnitReducer,
  groupEntity: GroupEntityReducer,
  groupEntityList: GroupEntityListReducer,
  groupEntityDetails: GroupEntityDetailsReducer,
  groupCodes: GroupCodesReducer,
  activeGroups: ActiveGroupsListReducer,

  legalEntitiesInAGroup: LegalEntityInAGroupReducer,
  buisnessUnitInAGroup: buisnessUnitsInAGroupReducer,
  employee: EmployeeReducer,
  form: formReducer,
  financialYear: financialYearReducer,
  leInAGrp: LegalEntityInaGrpReducer,
  buInAComp: BuInaCompanyReducer,
  salarySchedule: salarySchedulerReducer,
  excel: excelReducer,
  uploadExcel: uploadExcelReducer,
  zip: uploadZipReducer,

  loanType: loanTypeReducer,
  feeType: feeTypeReducer,
  loanMaster: loanMasterReducer,
  productFilter: productFilterReducer,
  productFilter2: productFilterReducer2,
  payDayBreakUp: payDayBreakUpReducer,
  shortTermBreakup: shortTermBreakUpReducer,
  saveBu: saveBuReducer,
  saveSalary: saveSalarySchedulerReducer,
  saveExcelData: saveExcelDataReducer,
  products: productsReducer,
  fetchSalarySchedule: fetchSalarySchedulerReducer,
  allEmployeesInBu: allEmployeesInBuReducer,
  pendingForApproval: pendingForApprovalInBuReducer,
  completedLoans: completedLoansInBuReducer,
  approvedLoans: approvedLoansInBuReducer,
  unpaidLoans: unpaidLoansInBuReducer,
  currentMonthDeductions: currentMonthDeductionsInBuReducer,
  employeeValidation: employeeValidationReducer,
  saveEmployeePostValidation: saveEmployeePostValidationReducer,
  filesDownload: filesDownloadReducer,
  employeeProfile: employeeProfileReducer,
  employeeProduct: employeeProductFetchReducer,
  employeeProductUpdate: employeeProductUpdateReducer,
  employeeProductAuthority: EmployeeProductAuthorityReducer,
  productUpdate: productUpdateReducer,
  manualAuthority: manualAuthorityReducer,
  buProductType: BuisnessUnitProductTypeReducer,
  breakup: breakupReducer,
  manulaAuthorityPreRequisites: manualAuthorityPreRequisitesReducer,
  employeeProductAuthorityMessagePost: EmployeeProductAuthorityMessageReducer,
  aadharUpload: aadharUploadReducer,
  panUpload: panUploadReducer,
  updateEmployeeProfile: employeeProfileUpdateReducer,
  aadharDownload: aadharDownloadReducer,
  uploadNewEmployeeStatusExcel: uploadNewEmployeeStatusExcelReducer,
  updateEmployee: updateEmployeeProfileReducer,
  busInaLe: buisnessUnitsInaLegalEntityReducer,
  employeesInMultipleLeandBu: fetchEmployeesByMultipleLeandBuReducer,
  filteredParams: filteredParamsReducer,
  salaryScheduleExists: salaryScheduleExistsReducer,
  aadharBackupload: aadharBackUploadReducer,
  aadharBackDownload: aadharBackDownloadReducer,
  employeeAuthority: employeeAuthorityReducer,
  progress: progressReducer,
  hyperverge: hypervergeReducer,
  buLevelProductUpdate: buLevelProductUpdateReducer,
  submiitedAndUnderReview: submittedAndUnderReviewReducer,
  loanRequestDetails: loanRequestDetailsReducer,
  hrApproval: hrApprovalReducer,
  loanDisburse: disbursalReducer,
  employeeLoanApplied: employeeAppliedLoanReducer,
  aadharKyc: kycAadhaReducer,
  panKyc: kycPanReducer,
  centralDbCheck: centralDbCheckReducer,
  overAllKyc: overAllKycReducer,
  underwritingMaster: underwritingMasterReducer,
  filteredLoans: loanFilterReducer,
  underwritingSave: underwritingMasterSaveReducer,
  activeLoanDetails: activeLoanDetailReducer,
  utrBulkUpload: utrBulkUploadReducer,
});
let initailState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initailState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
