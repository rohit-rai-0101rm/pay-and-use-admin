import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { VALIDATE_EMPLOYEE_SUCCESS } from "constants/EmployeeConstants";
import { VALIDATE_EMPLOYEE_FAILURE } from "constants/EmployeeConstants";
import { GET_EMPLOYEE_PROFILE_REQUEST } from "constants/EmployeeConstants";
import { GET_EMPLOYEE_PROFILE_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_FETCH_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_UPDATE_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_UPDATE_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_AUTHORITY_SUCCESS } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_MESSAGE_POST_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_MESSAGE_POST_FAILURE } from "constants/EmployeeConstants";
import { UPDATE_EMPLOYEE_PROFILE_SUCCESS } from "constants/EmployeeConstants";
import { FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_REQUEST } from "constants/EmployeeConstants";
import { FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_LOAN_APPLIED_SUCCESS } from "constants/EmployeeConstants";
import { EMPLOYEE_UPDATE_CLEAR_STATE } from "constants/EmployeeConstants";
import { EMPLOYEE_LOAN_APPLIED_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_LOAN_APPLIED_REQUEST } from "constants/EmployeeConstants";
import { FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_SUCCESS } from "constants/EmployeeConstants";
import { UPDATE_EMPLOYEE_PROFILE_FAILURE } from "constants/EmployeeConstants";
import { UPDATE_EMPLOYEE_PROFILE_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_MESSAGE_POST_SUCCESS } from "constants/EmployeeConstants";

import { EMPLOYEE_PRODUCT_AUTHORITY_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_AUTHORITY_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_UPDATE_SUCCESS } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_FETCH_SUCCESS } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_FETCH_REQUEST } from "constants/EmployeeConstants";
import { GET_EMPLOYEE_PROFILE_SUCCESS } from "constants/EmployeeConstants";
import { GET_EMPLOYEE_DATA } from "constants/EmployeeConstants";
import { SAVE_EMPLOYEES_POST_VALIDATION_SUCCESS } from "constants/validationConstants";
import { SAVE_EMPLOYEES_POST_VALIDATION_FAILURE } from "constants/validationConstants";
import { SAVE_EMPLOYEES_POST_VALIDATION_REQUEST } from "constants/validationConstants";
import { VALIDATE_EMPLOYEES_SUCCESS } from "constants/validationConstants";
import { VALIDATE_EMPLOYEES_REQUEST } from "constants/validationConstants";

export const getEmployeeData = (rows, cols) => async (dispatch) => {
  //console.log(items)
  dispatch({
    type: GET_EMPLOYEE_DATA,

    payload: rows,
    cols,
  });
};

export const validateEmployeesApi =
  (excelUploadResponse) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    console.log(excelUploadResponse);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      dispatch({
        type: VALIDATE_EMPLOYEES_REQUEST,
      });
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-masters-validate`,
        excelUploadResponse,
        config
      );

      dispatch({
        type: VALIDATE_EMPLOYEES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: VALIDATE_EMPLOYEE_FAILURE,
        payload: error,
      });
    }
  };

export const saveEmployeePostValidation = (employees) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  console.log(employees);

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({
      type: SAVE_EMPLOYEES_POST_VALIDATION_REQUEST,
    });
    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-employee-masters`,
      employees,
      config
    );

    dispatch({
      type: SAVE_EMPLOYEES_POST_VALIDATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAVE_EMPLOYEES_POST_VALIDATION_FAILURE,
      payload: error,
    });
  }
};

export const employeeProfileApi = (description, code) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  //console.log(empCode,buCode);

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({
      type: GET_EMPLOYEE_PROFILE_REQUEST,
    });
    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-employee-master-by-emp-code`,
      { code, description },

      config
    );

    dispatch({
      type: GET_EMPLOYEE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EMPLOYEE_PROFILE_FAILURE,
      payload: error,
    });
  }
};
export const employeeproductFetchApi =
  (description, code) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    //console.log(empCode,buCode);

    try {
      dispatch({
        type: EMPLOYEE_PRODUCT_FETCH_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      dispatch({
        type: EMPLOYEE_PRODUCT_FETCH_REQUEST,
      });
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-master-product-fetch`,
        { description, code },

        config
      );

      dispatch({
        type: EMPLOYEE_PRODUCT_FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_PRODUCT_FETCH_FAILURE,
        payload: error,
      });
    }
  };

export const employeeproductUpdateApi1 =
  (id, buCode, empCode, loanTypeCode, productCode) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    //console.log(empCode,buCode);
    console.log(id, buCode, empCode, loanTypeCode, productCode);
    try {
      dispatch({
        type: EMPLOYEE_PRODUCT_UPDATE_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-master-product-update`,
        { id, buCode, empCode, loanTypeCode, productCode },

        config
      );

      dispatch({
        type: EMPLOYEE_PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_PRODUCT_UPDATE_FAILURE,
        payload: error,
      });
    }
  };

export const employeeproductUpdateApi2 =
  (id, buCode, empCode, loanTypeCode, productCode) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    //console.log(empCode,buCode);
    console.log(id, buCode, empCode, loanTypeCode, productCode);
    try {
      dispatch({
        type: EMPLOYEE_PRODUCT_UPDATE_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-master-product-update`,
        { id, buCode, empCode, loanTypeCode, productCode },

        config
      );

      dispatch({
        type: EMPLOYEE_PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_PRODUCT_UPDATE_FAILURE,
        payload: error,
      });
    }
  };

export const employeeProductAuthorityApi =
  (code, description) => async (dispatch) => {
    const token = sessionStorage.getItem("user");

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      dispatch({
        type: EMPLOYEE_PRODUCT_AUTHORITY_REQUEST,
      });
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-master-authority`,
        { code, description },
        config
      );

      dispatch({
        type: EMPLOYEE_PRODUCT_AUTHORITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_PRODUCT_AUTHORITY_FAILURE,
        payload: error,
      });
    }
  };

export const employeeproductUpdateApi =
  (id, buCode, empCode, loanTypeCode, productCode) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    //console.log(empCode,buCode);
    console.log(id, buCode, empCode, loanTypeCode, productCode);
    try {
      dispatch({
        type: EMPLOYEE_PRODUCT_UPDATE_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-master-product-update`,
        { id, buCode, empCode, loanTypeCode, productCode },

        config
      );

      dispatch({
        type: EMPLOYEE_PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_PRODUCT_UPDATE_FAILURE,
        payload: error,
      });
    }
  };

export const employeeproductAuthorityMessagePostApi =
  (employeeProductAuthority) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    //console.log(empCode,buCode);
    try {
      dispatch({
        type: EMPLOYEE_PRODUCT_MESSAGE_POST_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-authority-post`,
        employeeProductAuthority,

        config
      );

      dispatch({
        type: EMPLOYEE_PRODUCT_MESSAGE_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_PRODUCT_MESSAGE_POST_FAILURE,
        payload: error,
      });
    }
  };

export const employeeprofileUpdateApi =
  (
    id,
    fatherName,

    aadhar,

    pan,

    commAddressLine1,

    commAddressLine2,

    commTown,

    commCity,

    commState,

    commCountry,

    commPincode,

    perAddressLine1,

    perAddressLine2,

    perTown,

    perCity,

    perState,
    perCountry,

    perPincode,

    bankName,

    bankIfsc,

    acNumber,

    ctcPa,
    ctcPm,

    isPf,
    isEsi,

    dot,

   

    pfUan,

    designation,

    maritalStatus,

    noChildren
  ) =>
  async (dispatch) => {

    console.log(  id,
      fatherName,
  
      aadhar,
  
      pan,
  
      commAddressLine1,
  
      commAddressLine2,
  
      commTown,
  
      commCity,
  
      commState,
  
      commCountry,
  
      commPincode,
  
      perAddressLine1,
  
      perAddressLine2,
  
      perTown,
  
      perCity,
  
      perState,
      perCountry,
  
      perPincode,
  
      bankName,
  
      bankIfsc,
  
      acNumber,
  
      ctcPa,
      ctcPm,
  
      isPf,
      isEsi,
  
      dot,
  
     
  
      pfUan,
  
      designation,
  
      maritalStatus,
  
      noChildren)
    const token = sessionStorage.getItem("user");
    //console.log(empCode,buCode);
    try {
      dispatch({
        type: UPDATE_EMPLOYEE_PROFILE_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `${IP_ADDRESS}/api/mp-employee-masters`,
        { id,

          aadhar,
      
          pan,
      
          commAddressLine1,
      
          commAddressLine2,
      
          commTown,
      
          commCity,
      
          commState,
      
          commCountry,
      
          commPincode,
      
          perAddressLine1,
      
          perAddressLine2,
      
          perTown,
      
          perCity,
      
          perState,
          perCountry,
      
          perPincode,
      
          bankName,
      
          bankIfsc,
      
          acNumber,
      
          ctcPa,
          ctcPm,
      
          isPf,
          isEsi,
      
          dot,
      
          fatherName,
      
          pfUan,
      
          designation,
      
          maritalStatus,
      
          noChildren},

        config
      );

      dispatch({
        type: UPDATE_EMPLOYEE_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_EMPLOYEE_PROFILE_FAILURE,
        payload: error,
      });
    }
  };

export const updateEmployeeApi =
  (
    id, fatherName, aadhar,pan,commAddressLine1,commAddressLine2,commCountry,commState,commTown,commCity,commPincode,perAddressLine1,perAddressLine2,perCountry,perState,perTown,perCity,perPincode,bankName,bankIfsc,acNumber,ctcPm,ctcPa,isPf,isEsi,dot,pfUan,designation,maritalStatus,noChildren
  ) =>
  async (dispatch) => {
    const token = sessionStorage.getItem("user");
  
    try {
      dispatch({
        type: UPDATE_EMPLOYEE_PROFILE_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-masters`,
        {
          id,
          aadhar,
          pan,
          commAddressLine1,
          commAddressLine2,
          commTown,
          commCity,
          commState,
          commCountry,
          commPincode,
          perAddressLine1,
          perAddressLine2,
          perTown,
          perCity,
          perState,
          perCountry,
          perPincode,
          bankName,
          bankIfsc,
          acNumber,
          ctcPa,
          ctcPm,
          isPf,
          isEsi,
          dot,
          fatherName,
          pfUan,
          designation,
          maritalStatus,
          noChildren,
        },

        config
      );

      dispatch({
        type: UPDATE_EMPLOYEE_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_EMPLOYEE_PROFILE_FAILURE,
        payload: error,
      });
    }
  };

export const employeesInMultipleLeandBuApi =
  (groupCode, legalEntityCodes, buCodes, sort, sortType, size, pageNo) =>
  async (dispatch) => {
    const token = sessionStorage.getItem("user");
    try {
      dispatch({
        type: FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-masters-detail-filter`,
        { groupCode, legalEntityCodes, buCodes, sort, sortType, size, pageNo },

        config
      );

      dispatch({
        type: FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_FAILURE,
        payload: error,
      });
    }
  };



  export const employeeLoanAppliedApi =
  (code,description) =>
  async (dispatch) => {
    const token = sessionStorage.getItem("user");
    try {
      dispatch({
        type:EMPLOYEE_LOAN_APPLIED_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-loan-request-by-bu-empcode`,
        { code,description },

        config
      );

      dispatch({
        type:EMPLOYEE_LOAN_APPLIED_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:EMPLOYEE_LOAN_APPLIED_FAILURE,
        payload: error,
      });
    }
  };




  export const clearUpdateEmployeeState = () => async (dispatch) => {
    dispatch({
      type: EMPLOYEE_UPDATE_CLEAR_STATE,
    });
};