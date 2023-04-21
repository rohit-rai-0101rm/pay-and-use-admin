import axios from "axios";
import { saveAs } from "file-saver";

import { IP_ADDRESS } from "constants/config";
import { DOWNLOAD_EMPLOYEE_AADHAR_FAILURE } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_EMPLOYEE_AADHAR_SUCCESS } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_EMPLOYEE_AADHAR_REQUEST } from "constants/employeeFilesDownloadConstants";
import FileSaver from "file-saver";
import { DOWNLOAD_EMPLOYEE_PAN_REQUEST } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_EMPLOYEE_PAN_SUCCESS } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_EMPLOYEE_PAN_FAILURE } from "constants/employeeFilesDownloadConstants";
import { DOWNLOAD_AADHAR_BACK_REQUEST } from "constants/FileUploadConstants";
import { DOWNLOAD_AADHAR__BACK_SUCCESS } from "constants/FileUploadConstants";
import { DOWNLOAD_AADHAR__BACK_FAILURE } from "constants/FileUploadConstants";

export const employeeAadharDownloadApi =
  (code, description) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      dispatch({
        type: DOWNLOAD_EMPLOYEE_AADHAR_REQUEST,
      });
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-master-aadhar`,
        { code, description },

        config
      );

      console.log(data);
      //console.log("response",data.headers)

      dispatch({
        type: DOWNLOAD_EMPLOYEE_AADHAR_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DOWNLOAD_EMPLOYEE_AADHAR_FAILURE,
      });
    }
  };

export const employeePanDownloadApi =
  (code, description) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      dispatch({
        type: DOWNLOAD_EMPLOYEE_PAN_REQUEST,
      });
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-master-pan`,
        { code, description },

        config
      );
      dispatch({
        type: DOWNLOAD_EMPLOYEE_PAN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DOWNLOAD_EMPLOYEE_PAN_FAILURE,
      });
    }
  };



  export const employeeAadharBackDownloadApi =
  (code, description) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      dispatch({
        type: DOWNLOAD_AADHAR_BACK_REQUEST,
      });
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-master-back-aadhar`,
        { code, description },

        config
      );

      console.log(data);
      //console.log("response",data.headers)

      dispatch({
        type: DOWNLOAD_AADHAR__BACK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DOWNLOAD_AADHAR__BACK_FAILURE,
      });
    }
  };