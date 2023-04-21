import { PRODUCT_UPDATE_FAILURE } from "constants/EmployeeConstants";
import { PRODUCT_UPDATE_SUCCESS } from "constants/EmployeeConstants";
import { PRODUCT_UPDATE_REQUEST } from "constants/EmployeeConstants";
import { CREATE_LOAN_PRODUCT_FAILURE } from "constants/loanConstants";
import { LOAN_TYPE_SUCCESS } from "constants/loanConstants";

import { PRODUCT_FETCH_SUCCESS } from "constants/loanConstants";
import { PRODUCT_FETCH_FAILURE } from "constants/loanConstants";
import { PRODUCT_FETCH_REQUEST } from "constants/loanConstants";
import { LOAN_TYPE_FAILURE } from "constants/loanConstants";
import { LOAN_TYPE_REQUEST } from "constants/loanConstants";
import { CREATE_LOAN_PRODUCT_SUCCESS } from "constants/loanConstants";
import { CREATE_LOAN_PRODUCT_REQUEST } from "constants/loanConstants";
import { ACTIVE_LOAN_DETAIL_FAILURE, ACTIVE_LOAN_DETAIL_REQUEST, ACTIVE_LOAN_DETAIL_SUCCESS, BU_LEVEL_LOAN_PRODUCT_UPDATE_FAILURE, BU_LEVEL_LOAN_PRODUCT_UPDATE_REQUEST, BU_LEVEL_LOAN_PRODUCT_UPDATE_SUCCESS, CLEAR_LOAN_MASTER, CREATE_LOAN_MASTER_FAILURE, CREATE_LOAN_MASTER_REQUEST, CREATE_LOAN_MASTER_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, LOAN_REQUEST_DETAILS_FAILURE, LOAN_REQUEST_DETAILS_REQUEST, LOAN_REQUEST_DETAILS_SUCCESS, MANUAL_AUTHORITY_FAILURE, MANUAL_AUTHORITY_PREREQUISITES, MANUAL_AUTHORITY_REQUEST, MANUAL_AUTHORITY_SUCCESS, PRODUCT_FILTER_FAILURE, PRODUCT_FILTER_FAILURE2, PRODUCT_FILTER_REQUET, PRODUCT_FILTER_REQUET2, PRODUCT_FILTER_SUCCESS, PRODUCT_FILTER_SUCCESS2, UTR_BULK_UPLOAD_FAILURE, UTR_BULK_UPLOAD_REQUEST, UTR_BULK_UPLOAD_SUCCESS } from "../constants/loanConstants";

  export const loanTypeReducer = (state = { loanType: [] }, action) => {
    switch (action.type) {
      case LOAN_TYPE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOAN_TYPE_SUCCESS:
        return {
          loading: false,
          loanType: action.payload,
        };
      case LOAN_TYPE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        
         
        default:
          return state;
    }
  };

  export const productFetchReducer = (state = { product: [] }, action) => {
    switch (action.type) {
      case PRODUCT_FETCH_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case PRODUCT_FETCH_SUCCESS:
        return {
          loading: false,
          product: action.payload,
        };
      case PRODUCT_FETCH_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };


  export const loanMasterReducer = (state = { loanMaster: [] }, action) => {
    switch (action.type) {
      case CREATE_LOAN_MASTER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_LOAN_MASTER_SUCCESS:
        return {
          loading: false,
          loanMaster: action.payload,
          sucess:true,
          error:false
        };
      case CREATE_LOAN_MASTER_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
        case CLEAR_LOAN_MASTER:
          return {
            ...state,
            loading: false,
            sucess:false,
            loanMaster:[],
          };
         
        default:
          return state;
    }
  };



  export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case GET_ALL_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_ALL_PRODUCTS_SUCCESS:
        return {
          loading: false,
          products: action.payload,
          sucess:true
        };
      case GET_ALL_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };




  export const productFilterReducer = (state = { productFilter: [] }, action) => {
    switch (action.type) {
      case PRODUCT_FILTER_REQUET:
        return {
          ...state,
          loading: true,
        };
      case PRODUCT_FILTER_SUCCESS:
        return {
          loading: false,
          productFilter: action.payload,
        };
      case PRODUCT_FILTER_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };


  export const productFilterReducer2 = (state = { productFilter2: [] }, action) => {
    switch (action.type) {
      case PRODUCT_FILTER_REQUET2:
        return {
          ...state,
          loading: true,
        };
      case PRODUCT_FILTER_SUCCESS2:
        return {
          loading: false,
          productFilter2: action.payload,
        };
      case PRODUCT_FILTER_FAILURE2:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };


  

  export const productUpdateReducer = (state = { productUpdate: [] }, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case PRODUCT_UPDATE_SUCCESS:
        return {
          loading: false,
          loanMaster: action.payload,
          sucess:true
        };
      case PRODUCT_UPDATE_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };




  export const manualAuthorityReducer = (state = { manualAuthorityProduct: {} }, action) => {
    switch (action.type) {
      case MANUAL_AUTHORITY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case MANUAL_AUTHORITY_SUCCESS:
        return {
          loading: false,
          manualAuthorityProduct: action.payload,
        };
      case MANUAL_AUTHORITY_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };
  export const manualAuthorityPreRequisitesReducer = (state = { manualAuthorityPreRequisites: {} }, action) => {
    switch (action.type) {
      
      case MANUAL_AUTHORITY_PREREQUISITES:
        return {
          loading: false,
          manualAuthorityPreRequisites: action.payload,
        };
     
        
         
        default:
          return state;
    }
  };


  export const buLevelProductUpdateReducer = (state = { bulevelProductUpdate: {} }, action) => {
    switch (action.type) {
      case BU_LEVEL_LOAN_PRODUCT_UPDATE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case BU_LEVEL_LOAN_PRODUCT_UPDATE_SUCCESS:
        return {
          loading: false,
          manualAuthorityProduct: action.payload,
        };
      case BU_LEVEL_LOAN_PRODUCT_UPDATE_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };


  export const loanRequestDetailsReducer = (state = { loanRequestDetails: {} }, action) => {
    switch (action.type) {
      case LOAN_REQUEST_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case  LOAN_REQUEST_DETAILS_SUCCESS:
        return {
          loading: false,
          loanRequestDetails: action.payload,
        };
      case LOAN_REQUEST_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };


  export const activeLoanDetailReducer = (state = { activeLoanDetail: {} }, action) => {
    switch (action.type) {
      case ACTIVE_LOAN_DETAIL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case  ACTIVE_LOAN_DETAIL_SUCCESS:
        return {
          loading: false,
          loanRequestDetails: action.payload,
        };
      case ACTIVE_LOAN_DETAIL_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };


  export const utrBulkUploadReducer = (state = { utrBulkUpload: {} }, action) => {
    switch (action.type) {
      case UTR_BULK_UPLOAD_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case  UTR_BULK_UPLOAD_SUCCESS:
        return {
          loading: false,
          success:true,
          utrBulkUpload: action.payload,
        };
      case UTR_BULK_UPLOAD_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };