import { DOWNLOAD_EMPLOYEE_AUTHORITY_SUCCESS } from "constants/EmployeeConstants";
import { DOWNLOAD_EMPLOYEE_AUTHORITY_FAILURE } from "constants/EmployeeConstants";
import { DOWNLOAD_EMPLOYEE_AUTHORITY_REQUEST } from "constants/EmployeeConstants";
import { UPLOAD_EXCEL_REQUEST } from "constants/ExcelConstants";
import { GET_SAMPLE_EXCEL_FAILURE } from "constants/ExcelConstants";
import { SAVE_EXCEL_FILE } from "constants/ExcelConstants";
import { UPLOAD_ZIP_SUCCESS } from "constants/ExcelConstants";
import { SAVE_EXCEL_DATA_REQUEST } from "constants/ExcelConstants";
import { SAVE_EXCEL_DATA_FAILURE } from "constants/ExcelConstants";
import { NEW_EMPLOYEE_UPDATE_EXCEL_CLEAR_STATE } from "constants/ExcelConstants";
import { NEW_EMPLOYEE_UPDATE_EXCEL_SUCCESS } from "constants/ExcelConstants";
import { NEW_EMPLOYEE_UPDATE_EXCEL_FAILURE } from "constants/ExcelConstants";
import { NEW_EMPLOYEE_UPDATE_EXCEL_REQUEST } from "constants/ExcelConstants";
import { SAVE_EXCEL_DATA_SUCCESS } from "constants/ExcelConstants";
import { UPLOAD_ZIP_FAILURE } from "constants/ExcelConstants";
import { UPLOAD_ZIP_REQUEST } from "constants/ExcelConstants";
import { UPLOAD_EXCEL_FAILURE } from "constants/ExcelConstants";
import { UPLOAD_EXCEL_SUCCESS } from "constants/ExcelConstants";
import { GET_SAMPLE_EXCEL_SUCCESS } from "constants/ExcelConstants";
import { GET_SAMPLE_EXCEL_REQUEST } from "constants/ExcelConstants";

export const excelReducer = (state = { excelLayout: [] }, action) => {
  switch (action.type) {
    case GET_SAMPLE_EXCEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SAMPLE_EXCEL_SUCCESS:
      return {
        loading: false,
        error: false,
        success: true,
        excelLayout: action.payload,
      };
    case GET_SAMPLE_EXCEL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const uploadExcelReducer = (
  state = { excelUploadResponse: [] },
  action
) => {
  switch (action.type) {
    case UPLOAD_EXCEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_EXCEL_SUCCESS:
      return {
        loading: false,
        error: false,
        success: true,
        excelUploadResponse: action.payload,
      };

    case UPLOAD_EXCEL_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export const uploadZipReducer = (state = { zipUploadResponse: [] }, action) => {
  switch (action.type) {
    case UPLOAD_ZIP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_ZIP_SUCCESS:
      return {
        loading: false,
        error: false,
        success: true,
        zipUploadResponse: action.payload,
      };

    case UPLOAD_ZIP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export const saveExcelDataReducer = (state = { saveEcel: [] }, action) => {
  switch (action.type) {
    case SAVE_EXCEL_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_EXCEL_DATA_SUCCESS:
      return {
        loading: false,
        error: false,
        success: true,
        saveEcel: action.payload,
      };
    case SAVE_EXCEL_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const uploadNewEmployeeStatusExcelReducer = (
  state = { newEmployeeStatusExcelUploadResponse: [] },
  action
) => {
  switch (action.type) {
    case NEW_EMPLOYEE_UPDATE_EXCEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_EMPLOYEE_UPDATE_EXCEL_SUCCESS:
      return {
        loading: false,
        error: false,
        success: true,
        newEmployeeStatusExcelUploadResponse: action.payload,
      };

    case NEW_EMPLOYEE_UPDATE_EXCEL_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

      case NEW_EMPLOYEE_UPDATE_EXCEL_CLEAR_STATE:
        return {
          ...state,
          loading: false,
          error: false,
        };

      

    default:
      return state;
  }
};

export const employeeAuthorityReducer = (
  state = { employeeAuthority: [] },
  action
) => {
  switch (action.type) {
    case DOWNLOAD_EMPLOYEE_AUTHORITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DOWNLOAD_EMPLOYEE_AUTHORITY_SUCCESS:
      return {
        loading: false,
        error: false,
        success: true,
        newEmployeeStatusExcelUploadResponse: action.payload,
      };

    case DOWNLOAD_EMPLOYEE_AUTHORITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
