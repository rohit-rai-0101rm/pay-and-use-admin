import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { UPLOAD_AADHAR_FAILURE } from "constants/FileUploadConstants";
import { UPLOAD_AADHAR__BACK_FAILURE } from "constants/FileUploadConstants";
import { UPLOAD_AADHAR_BACK_REQUEST } from "constants/FileUploadConstants";
import { UPLOAD_AADHAR__BACK_SUCCESS } from "constants/FileUploadConstants";
import { UPLOAD_PAN_REQUEST } from "constants/FileUploadConstants";
import { UPLOAD_PAN_SUCCESS } from "constants/FileUploadConstants";
import { UPLOAD_PAN_FAILURE } from "constants/FileUploadConstants";
import { UPLOAD_AADHAR_REQUEST } from "constants/FileUploadConstants";
import { UPLOAD_AADHAR_SUCCESS } from "constants/FileUploadConstants";

export const aadharUploadApi = (file, empCode, buCode) => async (dispatch) => {
  console.log(file);
  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    dispatch({
      type: UPLOAD_AADHAR_REQUEST,
    });
    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-employee-master-aadhar-front-upload`,
      { file, empCode, buCode },

      config
    );

    console.log(data);
    //console.log("response",data.headers)

    dispatch({
      type: UPLOAD_AADHAR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_AADHAR_FAILURE,
    });
  }
};

export const panUploadApi = (file, empCode, buCode) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    dispatch({
      type: UPLOAD_PAN_REQUEST,
    });
    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-employee-master-pan-upload`,
      { file, empCode, buCode },

      config
    );

    console.log(data);
    //console.log("response",data.headers)

    dispatch({
      type: UPLOAD_PAN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_PAN_FAILURE,
    });
  }
};



export const aadharBackUploadApi = (file, empCode, buCode) => async (dispatch) => {
  console.log(file);
  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    dispatch({
      type: UPLOAD_AADHAR_BACK_REQUEST,
    });
    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-employee-master-aadhar-back-upload`,
      { file, empCode, buCode },

      config
    );

    console.log(data);
    //console.log("response",data.headers)

    dispatch({
      type: UPLOAD_AADHAR__BACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_AADHAR__BACK_FAILURE,
    });
  }
};
