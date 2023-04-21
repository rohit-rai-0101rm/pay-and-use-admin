import { DataArray } from "@mui/icons-material";
import axios from "axios";
import fileDownload from "js-file-download";

import { IP_ADDRESS } from "constants/config";
import { GET_SAMPLE_EXCEL_FAILURE } from "constants/ExcelConstants";
import { UPLOAD_EXCEL_SUCCESS } from "constants/ExcelConstants";
import { SAVE_EXCEL_FILE } from "constants/ExcelConstants";
import { UPLOAD_ZIP_SUCCESS } from "constants/ExcelConstants";
import { SAVE_EXCEL_DATA_REQUEST } from "constants/ExcelConstants";
import { SAVE_EXCEL_DATA_FAILURE } from "constants/ExcelConstants";
import { SAVE_EXCEL_DATA_SUCCESS } from "constants/ExcelConstants";
import { UPLOAD_ZIP_FAILURE } from "constants/ExcelConstants";
import { UPLOAD_ZIP_REQUEST } from "constants/ExcelConstants";
import { UPLOAD_EXCEL_FAILURE } from "constants/ExcelConstants";
import { UPLOAD_EXCEL_REQUEST } from "constants/ExcelConstants";
import { GET_SAMPLE_EXCEL_SUCCESS } from "constants/ExcelConstants";
import { GET_SAMPLE_EXCEL_REQUEST } from "constants/ExcelConstants";
import FileSaver from "file-saver";
import { NEW_EMPLOYEE_UPDATE_EXCEL_FAILURE } from "constants/ExcelConstants";
import { NEW_EMPLOYEE_UPDATE_EXCEL_SUCCESS } from "constants/ExcelConstants";
import { NEW_EMPLOYEE_UPDATE_EXCEL_REQUEST } from "constants/ExcelConstants";
import { DOWNLOAD_EMPLOYEE_AUTHORITY_REQUEST } from "constants/EmployeeConstants";
import { DOWNLOAD_EMPLOYEE_AUTHORITY_SUCCESS } from "constants/EmployeeConstants";
import { DOWNLOAD_EMPLOYEE_AUTHORITY_FAILURE } from "constants/EmployeeConstants";

export const getExcelLayoutApi = (buCode) => async (dispatch) => {
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
      `${IP_ADDRESS}/api/mp-employee-sample-download/${buCode}`,      
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
    FileSaver.saveAs(blob, "employeeSample.xlsx");
  } catch (error) {
    dispatch({
      type: GET_SAMPLE_EXCEL_FAILURE,
    });
  }
};

export const uploadExcelApi = (file) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    dispatch({ type: UPLOAD_EXCEL_REQUEST });
    console.log(token);

    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-employee-sample-upload`,
      { file },
      config
    );

    dispatch({
      type: UPLOAD_EXCEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_EXCEL_FAILURE,
    });
  }
};
export const saveExcelFile = (data) => async (dispatch) => {
  console.log(data);
  dispatch({
    type: SAVE_EXCEL_FILE,
    payload: data,
  });

  localStorage.setItem("excelFile", data);
};
export const zipUploadApi = (file, buCode) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    dispatch({ type: UPLOAD_ZIP_REQUEST });
    console.log(token);

    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-employee-zip-upload`,
      { file, buCode },
      config
    );

    dispatch({
      type: UPLOAD_ZIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_ZIP_FAILURE,
    });
  }
};

export const saveExcelDataApi = (excelUploadResponse) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  console.log(token);
  console.log(excelUploadResponse);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-TOTAL-COUNT": "73",
    },
  };
  try {
    dispatch({ type: SAVE_EXCEL_DATA_REQUEST });
    console.log(token);

    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-employee-masters`,
      excelUploadResponse,

      config
    );

    dispatch({
      type: SAVE_EXCEL_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAVE_EXCEL_DATA_FAILURE,
    });
  }
};

export const newEmployeesStatusExcelUploadApi = (file) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    dispatch({ type: NEW_EMPLOYEE_UPDATE_EXCEL_REQUEST });
    console.log(token);

    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-employee-authorized-upload`,
      { file },
      config
    );

    dispatch({
      type: NEW_EMPLOYEE_UPDATE_EXCEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_EMPLOYEE_UPDATE_EXCEL_FAILURE,
    });
  }
};



export const getEmployeeAuthority = (buCode) => async (dispatch) => {
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
    dispatch({ type: DOWNLOAD_EMPLOYEE_AUTHORITY_REQUEST});
    console.log(token);

    const { data } = await axios.get(
      `${IP_ADDRESS}/api/mp-employee-authorized-download/${buCode}`,      
      config
    );

    dispatch({
      type: DOWNLOAD_EMPLOYEE_AUTHORITY_SUCCESS,
      payload: data,
    });
    console.log(data);
    var blob = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    FileSaver.saveAs(blob, "buExportSample.xlsx");
  } catch (error) {
    dispatch({
      type: DOWNLOAD_EMPLOYEE_AUTHORITY_FAILURE,
    });
  }
};