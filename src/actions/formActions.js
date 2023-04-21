import { SAVE_BIWEEKLY_SALARY_INFO_FORM } from "constants/FormConstants";
import { SAVE_FILTERED_PARAMS } from "constants/FormConstants";
import { SAVE_SALARY_INFO } from "constants/FormConstants";
import { SAVE_BASIC_INFO } from "constants/FormConstants";

export const saveBasicInfo = (data) => async (dispatch) => {
    console.log(data)
    dispatch({
      type: SAVE_BASIC_INFO,
      payload: data,
    });
  
    localStorage.setItem("basicInfo", JSON.stringify(data));
  };

  export const saveSalaryInfo = (dateFrom,dateTo,salaryDate,noLockDays) => async (dispatch) => {
  console.log("dateFrom",dateFrom)
  console.log("dateTo",dateTo)
  console.log("salaryDate",salaryDate)
    dispatch({
      type: SAVE_SALARY_INFO,
      payload: dateFrom,dateTo,salaryDate,
    });
  
    localStorage.setItem("salaryInfo", JSON.stringify({dateFrom,dateTo,salaryDate,noLockDays}));
  };




  export const saveBiweeklySalaryInfo = (dateFrom,dateTo,salaryDate,noLockDays,secondDateFrom,secondDateTo,secondSalaryDate,secondNoLockDays) => async (dispatch) => {
    console.log("dateFrom",dateFrom)
    console.log("dateTo",dateTo)
    console.log("salaryDate",salaryDate)
    console.log("noLockDays",noLockDays)
    console.log("dateFrom",secondDateFrom)
    console.log("dateTo",secondDateTo)
    console.log("salaryDate",secondSalaryDate)
    console.log("secondNoLockDays",secondNoLockDays)
   
      dispatch({
        type: SAVE_BIWEEKLY_SALARY_INFO_FORM,
        payload: dateFrom,dateTo,salaryDate,
      });
    
      localStorage.setItem("biWeeklyalaryInfo", JSON.stringify({dateFrom,dateTo,salaryDate,noLockDays,secondDateFrom,secondDateTo,secondSalaryDate,secondNoLockDays}));
    };
    

  export const saveFilteredParams = (groupCode,legalCodes,buCodes) => async (dispatch) => {
 
   console.log(groupCode)
      dispatch({
        type: SAVE_FILTERED_PARAMS,
        payload: groupCode,legalCodes,buCodes,
      });
    
      localStorage.setItem("filteredParams", JSON.stringify({groupCode,legalCodes,buCodes}));
    };
    

    