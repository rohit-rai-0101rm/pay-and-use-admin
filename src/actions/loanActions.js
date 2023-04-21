import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { PRODUCT_UPDATE_FAILURE } from "constants/EmployeeConstants";
import { PRODUCT_UPDATE_SUCCESS } from "constants/EmployeeConstants";
import { PRODUCT_FILTER_REQUEST } from "constants/EmployeeConstants";
import { GET_SAMPLE_EXCEL_SUCCESS } from "constants/ExcelConstants";
import { GET_SAMPLE_EXCEL_FAILURE } from "constants/ExcelConstants";
import { GET_SAMPLE_EXCEL_REQUEST } from "constants/ExcelConstants";
import { PAN_KYC_STATUS_REQUEST } from "constants/kycApprovalConstants";
import { PAN_KYC_STATUS_SUCCESS } from "constants/kycApprovalConstants";
import { AADHAR_KYC_STATUS_FAILURE } from "constants/kycApprovalConstants";
import { AADHAR_KYC_STATUS_SUCCESS } from "constants/kycApprovalConstants";
import { PAN_KYC_STATUS_FAILURE } from "constants/kycApprovalConstants";
import { CENTRAL_DB_CHECK_STATUS_SUCCESS } from "constants/kycApprovalConstants";
import { OVERALL_KYC_STATUS_REQUEST } from "constants/kycApprovalConstants";
import { OVERALL_KYC_STATUS_SUCCESS } from "constants/kycApprovalConstants";
import { OVERALL_KYC_STATUS_FAILURE } from "constants/kycApprovalConstants";
import { CENTRAL_DB_CHECK_STATUS_FAILURE } from "constants/kycApprovalConstants";
import { CENTRAL_DB_CHECK_STATUS_REQUEST } from "constants/kycApprovalConstants";
import { AADHAR_KYC_STATUS_REQUEST } from "constants/kycApprovalConstants";
import { LOAN_TYPE_SUCCESS } from "constants/loanConstants";
import { PRODUCT_SAVE_OR_UPDATE_SUCCESS } from "constants/loanConstants";
import { PRODUCT_FETCH_REQUEST } from "constants/loanConstants";
import { PRODUCT_FETCH_SUCCESS } from "constants/loanConstants";
import { PRODUCT_SAVE_OR_UPDATE_FAILURE } from "constants/loanConstants";
import { PRODUCT_SAVE_OR_UPDATE_REQUEST } from "constants/loanConstants";
import { LOAN_TYPE_FAILURE } from "constants/loanConstants";
import { LOAN_TYPE_REQUEST } from "constants/loanConstants";
import { CREATE_LOAN_PRODUCT_SUCCESS } from "constants/loanConstants";
import FileSaver from "file-saver";
import {
  ACTIVE_LOAN_DETAIL_FAILURE,
  ACTIVE_LOAN_DETAIL_REQUEST,
  ACTIVE_LOAN_DETAIL_SUCCESS,
  BU_LEVEL_LOAN_PRODUCT_UPDATE_FAILURE,
  BU_LEVEL_LOAN_PRODUCT_UPDATE_REQUEST,
  BU_LEVEL_LOAN_PRODUCT_UPDATE_SUCCESS,
  CLEAR_LOAN_MASTER,
  CREATE_LOAN_MASTER_FAILURE,
  CREATE_LOAN_MASTER_REQUEST,
  CREATE_LOAN_MASTER_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  HR_APPROVAL_FAILURE,
  HR_APPROVAL_REQUEST,
  HR_APPROVAL_SUCCESS,
  LOAN_DISBURSAL_FAILURE,
  LOAN_DISBURSAL_REQUEST,
  LOAN_DISBURSAL_SUCCESS,
  LOAN_REQUEST_DETAILS_FAILURE,
  LOAN_REQUEST_DETAILS_REQUEST,
  LOAN_REQUEST_DETAILS_SUCCESS,
  MANUAL_AUTHORITY_FAILURE,
  MANUAL_AUTHORITY_PREREQUISITES,
  MANUAL_AUTHORITY_REQUEST,
  MANUAL_AUTHORITY_SUCCESS,
  PRODUCT_FILTER_FAILURE,
  PRODUCT_FILTER_FAILURE2,
  PRODUCT_FILTER_REQUET,
  PRODUCT_FILTER_REQUET2,
  PRODUCT_FILTER_SUCCESS,
  PRODUCT_FILTER_SUCCESS2,
  UTR_BULK_UPLOAD_FAILURE,
  UTR_BULK_UPLOAD_REQUEST,
  UTR_BULK_UPLOAD_SUCCESS,
} from "../constants/loanConstants";

export const loanTypeApi = () => async (dispatch) => {
  const token = sessionStorage.getItem("user");

  try {
    dispatch({ type: LOAN_TYPE_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${IP_ADDRESS}/api/mp-loan-type-masters`,

      config
    );
    dispatch({
      type: LOAN_TYPE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOAN_TYPE_FAILURE,
    });
  }
};

export const createLoanProductMaster =
  (
    productDescription,
    cutOffDay,
    loanTypeCode,
    loanTypeDescription,
    interestRate,
    tenure,
    processingFee,
    feeTypeCode,
    mpProductFeeDetailsBeans,
    gstApplicable
  ) =>
  async (dispatch) => {
    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type: CREATE_LOAN_MASTER_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-product-fee-mappings`,
        {
          productDescription,
          cutOffDay,
          loanTypeCode,
          loanTypeDescription,
          interestRate,
          tenure,
          processingFee,
          feeTypeCode,
          mpProductFeeDetailsBeans,
          gstApplicable,
        },

        config
      );
      dispatch({
        type: CREATE_LOAN_MASTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_LOAN_MASTER_FAILURE,
      });
    }
  };

export const productFetchApi = (buCode) => async (dispatch) => {
  const token = sessionStorage.getItem("user");

  try {
    dispatch({ type: PRODUCT_FETCH_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${IP_ADDRESS}/api/mp-business-unit-fee-mappings/${buCode}`,

      config
    );
    dispatch({
      type: PRODUCT_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SAVE_OR_UPDATE_FAILURE,
    });
  }
};

export const clearLoanMasterState = () => async (dispatch) => {
  dispatch({
    type: CLEAR_LOAN_MASTER,
  });
};

export const productFilterApi2 =
  (code, sort, sortType, size, pageNo, description) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    console.log(description);
    console.log(token);
    try {
      dispatch({ type: PRODUCT_FILTER_REQUET2 });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-product-fee-mappings-filter`,
        { code, sort, sortType, size, pageNo, description },

        config
      );
      console.log(data);
      dispatch({
        type: PRODUCT_FILTER_SUCCESS2,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_FILTER_FAILURE2,
      });
    }
  };

export const allProductsApi =
  (code, description, sort, sortType, size, pageNo) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-product-fee-mappings-all-filter`,
        { code, description, sort, sortType, size, pageNo },

        config
      );
      console.log(data);
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAILURE,
      });
    }
  };

export const productFilterApi =
  (code, description, sort, sortType, size, pageNo) => async (dispatch) => {
    console.log(code, description, sort, sortType, size, pageNo);

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type: PRODUCT_FILTER_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-product-fee-mappings-filter`,
        { code, description, sort, sortType, size, pageNo },

        config
      );
      console.log(data);
      dispatch({
        type: PRODUCT_FILTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_FILTER_FAILURE,
      });
    }
  };

export const productUpdateRequest = (code, loanType) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  console.log(code, loanType);
  console.log(token);
  try {
    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: code,
      loanType,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAILURE,
    });
  }
};

export const productFiltersSelectionApi1 =
  (code, description, sort, sortType, size, pageNo) => async (dispatch) => {
    console.log(code, sort, sortType, size, pageNo, description);
    console.log("description", description);
    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type: PRODUCT_FILTER_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-product-fee-mappings-filter`,
        { code, description, sort, sortType, size, pageNo },

        config
      );
      console.log(data);
      dispatch({
        type: PRODUCT_FILTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_FILTER_FAILURE,
      });
    }
  };

export const productFiltersSelectionApi2 =
  (code, description, sort, sortType, size, pageNo) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type: PRODUCT_FILTER_REQUET2 });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-product-fee-mappings-filter`,
        { code, description, sort, sortType, size, pageNo },

        config
      );
      console.log(data);
      dispatch({
        type: PRODUCT_FILTER_SUCCESS2,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_FILTER_FAILURE2,
      });
    }
  };

export const manualAuthorityApi =
  (code, description, loanTypeCode, amount) => async (dispatch) => {
    console.log("amount");

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type: MANUAL_AUTHORITY_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-master-authority-amount`,
        { code, description, loanTypeCode, amount },

        config
      );
      console.log(data);
      dispatch({
        type: MANUAL_AUTHORITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: MANUAL_AUTHORITY_FAILURE,
      });
    }
  };

export const manualAuthorityPreRequisites =
  (code, amount) => async (dispatch) => {
    console.log("amount", amount);
    const token = sessionStorage.getItem("user");
    const preRequisites = { code, amount };
    localStorage.setItem("preRequisites", JSON.stringify(preRequisites));
    console.log(token);
    try {
      dispatch({
        type: MANUAL_AUTHORITY_PREREQUISITES,

        payload: { code, amount },
      });
    } catch (error) {
      dispatch({
        type: MANUAL_AUTHORITY_FAILURE,
      });
    }
  };



  export const bulevelProductUpdateApi =
  (buCode, loanTypeCode, productCode) => async (dispatch) => {

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type: BU_LEVEL_LOAN_PRODUCT_UPDATE_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-business-unit-products-update`,
        { buCode, loanTypeCode, productCode },

        config
      );
      console.log(data);
      dispatch({
        type: BU_LEVEL_LOAN_PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BU_LEVEL_LOAN_PRODUCT_UPDATE_FAILURE,
      });
    }
  };


  export const loanRequestDetailsApi =
  (id) => async (dispatch) => {

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:LOAN_REQUEST_DETAILS_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${IP_ADDRESS}/api/mp-loan-requests-by-code/${id}`,
       

        config
      );
      console.log(data);
      dispatch({
        type: LOAN_REQUEST_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:LOAN_REQUEST_DETAILS_FAILURE,
      });
    }
  };



  export const hrApprovalApi =
  (id,hrApprovalFlag) => async (dispatch) => {

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:HR_APPROVAL_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-loan-requests-hr-approval`,
        { id,hrApprovalFlag },

        config
      );
      console.log(data);
      dispatch({
        type:HR_APPROVAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:HR_APPROVAL_FAILURE,
      });
    }
  };


  export const loanDisbursalApi =
  ( id,  utrNumber,disbursalDate) => async (dispatch) => {

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:LOAN_DISBURSAL_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-loan-requests-disbursal-approval`,
        {  id,  utrNumber,disbursalDate },

        config
      );
      console.log(data);
      dispatch({
        type:LOAN_DISBURSAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:LOAN_DISBURSAL_FAILURE,
      });
    }
  };




  export const kycAadharApprovalApi =
  (id,aadharApprovalFlag) => async (dispatch) => {

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:AADHAR_KYC_STATUS_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-loan-requests-aadhar-approval`,
        { id,aadharApprovalFlag },

        config
      );
      console.log(data);
      dispatch({
        type:AADHAR_KYC_STATUS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:AADHAR_KYC_STATUS_FAILURE,
      });
    }
  };

  export const kycPanApprovalApi =
  (id,panApprovalFlag) => async (dispatch) => {

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:PAN_KYC_STATUS_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-loan-requests-pan-approval`,
        { id,panApprovalFlag },

        config
      );
      console.log(data);
      dispatch({
        type:PAN_KYC_STATUS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:PAN_KYC_STATUS_FAILURE,
      });
    }
  };

  export const centralDbApprovalApi =
  (id,centralDbFlag) => async (dispatch) => {

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:CENTRAL_DB_CHECK_STATUS_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-loan-requests-central-db-approval`,
        { id,centralDbFlag },

        config
      );
      console.log(data);
      dispatch({
        type:CENTRAL_DB_CHECK_STATUS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:CENTRAL_DB_CHECK_STATUS_FAILURE,
      });
    }
  };



  export const overAllKycApprovalApi =
  (id,overallKycFlag) => async (dispatch) => {

    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:OVERALL_KYC_STATUS_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-loan-requests-overall-kyc-approval`,
        { id,overallKycFlag },

        config
      );
      console.log(data);
      dispatch({
        type:OVERALL_KYC_STATUS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:OVERALL_KYC_STATUS_FAILURE,
      });
    }
  };



  export const activeLoanDetailApi = (loanId) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
  
    try {
      dispatch({ type:ACTIVE_LOAN_DETAIL_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${IP_ADDRESS}/api/loan-details/${loanId}`,
  
        config
      );
      dispatch({
        type: ACTIVE_LOAN_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACTIVE_LOAN_DETAIL_FAILURE,
      });
    }
  };


  export const utrBulkUploadApi = (file) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    console.log(token);
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      dispatch({ type: UTR_BULK_UPLOAD_REQUEST });
      console.log(token);
  
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-loan-requests-disbursal-upload`,
        { file },
        config
      );
  
      dispatch({
        type:UTR_BULK_UPLOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:UTR_BULK_UPLOAD_FAILURE,
      });
    }
  };


  export const bulkDisburseSampleApi = (buCode) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    console.log(token);
  
    const config = {
      responseType: 'blob', 
      headers: {
        Authorization: `Bearer ${token}`,
        "X-TOTAL-COUNT": "73",
      },
    };
    try {
      dispatch({ type: GET_SAMPLE_EXCEL_REQUEST });
      console.log(token);
  
      const { data } = await axios.get(
        `${IP_ADDRESS}/api/mp-loan-requests-disbursal-download`,      
        config
      );
  
      dispatch({
        type: GET_SAMPLE_EXCEL_SUCCESS,
        payload: data,
      });
      console.log(data);
      var blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      FileSaver.saveAs(blob, "utrUploadSample.xlsx");
    } catch (error) {
      dispatch({
        type: GET_SAMPLE_EXCEL_FAILURE,
      });
    }
  };
  