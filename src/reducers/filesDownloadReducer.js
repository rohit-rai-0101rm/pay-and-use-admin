import { DOWNLOAD_EMPLOYEE_AADHAR_SUCCESS } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_EMPLOYEE_PAN_SUCCESS } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_EMPLOYEE_PAN_FAILURE } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_EMPLOYEE_PAN_REQUEST } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_EMPLOYEE_AADHAR_FAILURE } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_EMPLOYEE_AADHAR_REQUEST } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_AADHAR__BACK_FAILURE } from "constants/FileUploadConstants";
import { DOWNLOAD_AADHAR__BACK_SUCCESS } from "constants/FileUploadConstants";
import { DOWNLOAD_AADHAR_BACK_REQUEST } from "constants/FileUploadConstants";

export const filesDownloadReducer = (state = { file: {} }, action) => {
  switch (action.type) {
    
    case DOWNLOAD_EMPLOYEE_PAN_REQUEST:
      return {
        ...state,
        loading: true,
      };
   
    case DOWNLOAD_EMPLOYEE_PAN_SUCCESS:
      return {
        loadiing: false,

        file: action.payload,
      };
   
    case DOWNLOAD_EMPLOYEE_PAN_FAILURE:
      return {
        loading: false,
        error: true,
        file:null,
      };
    default: {
      return state;
    }
  }
};


export const aadharDownloadReducer = (state = { aadharImage: {} }, action) => {
    switch (action.type) {
      
      case DOWNLOAD_EMPLOYEE_AADHAR_REQUEST:
        return {
          ...state,
          loading: true,
        };
     
      case DOWNLOAD_EMPLOYEE_AADHAR_SUCCESS:
        return {
          loadiing: false,
  
          aadharImage: action.payload,
        };
     
      case DOWNLOAD_EMPLOYEE_AADHAR_FAILURE:
        return {
          loading: false,
          error: true,
          aadharImage:null,
        };
      default: {
        return state;
      }
    }
  };


  export const aadharBackDownloadReducer = (state = { aadharBackImage: {} }, action) => {
    switch (action.type) {
      
      case DOWNLOAD_AADHAR_BACK_REQUEST:
        return {
          ...state,
          loading: true,
        };
     
      case DOWNLOAD_AADHAR__BACK_SUCCESS:
        return {
          loadiing: false,
  
          aadharBackImage: action.payload,
        };
     
      case DOWNLOAD_AADHAR__BACK_FAILURE:
        return {
          loading: false,
          error: true,
          aadharBackImage:null,
        };
      default: {
        return state;
      }
    }
  };