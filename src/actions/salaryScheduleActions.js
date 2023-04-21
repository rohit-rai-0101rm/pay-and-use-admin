import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { GET_SALARY_SCHEDULE_FAILURE } from "constants/SalaryScheduleConstants";
import { SAVE_SALARY_SCHEDULE_SUCCESS } from "constants/SalaryScheduleConstants";
import { FETCH_SALARY_SCHEDULE_REQUEST } from "constants/SalaryScheduleConstants";
import { SALARY_SCHEDULE_EXISTS_REQUEST } from "constants/SalaryScheduleConstants";
import { SALARY_SCHEDULE_EXISTS_FAILURE } from "constants/SalaryScheduleConstants";
import { SALARY_SCHEDULE_EXISTS_SUCCESS } from "constants/SalaryScheduleConstants";
import { FETCH_SALARY_SCHEDULE_FAILURE } from "constants/SalaryScheduleConstants";
import { FETCH_SALARY_SCHEDULE_SUCCESS } from "constants/SalaryScheduleConstants";
import { SAVE_SALARY_SCHEDULE_FAILURE } from "constants/SalaryScheduleConstants";
import { SAVE_SALARY_SCHEDULE_REQUEST } from "constants/SalaryScheduleConstants";
import { GET_SALARY_SCHEDULE_SUCCESS } from "constants/SalaryScheduleConstants";
import moment from "moment";
import {
  LIST_DETAILS_FAILURE,
  LIST_DETAILS_REQUEST,
  LIST_DETAILS_SUCCESS,
  LIST_FAILURE,
  LIST_SUCCESS,
} from "../constants/listConstants";


export const salaryScheduleApi = () => async (dispatch) => {
  const format = "DD-MM-YYYY";
  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-total-Count": 73,
    },
  };
  const basicInfo = JSON.parse(localStorage.getItem("basicInfo"));
  const salaryInfo = JSON.parse(localStorage.getItem("salaryInfo"));
console.log("salaryInfo",salaryInfo)
  const { isMonthly, isWeekly } = basicInfo;
  const { dateFrom, dateTo, salaryDate, noLockDays } = salaryInfo;
  console.log(dateFrom, dateTo, salaryDate)
 
  //console.log((salaryDate.toString))

  //console.log((dateTo))

  try {
    if (isWeekly) {
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-salary-schedule`,
        { isWeekly, dateFrom, dateTo, salaryDate },
        config
      );
      console.log(data);
      dispatch({
        type: GET_SALARY_SCHEDULE_SUCCESS,
        payload: data,
      });
    } else if (isMonthly) {
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-salary-schedule`,
        { isMonthly, dateFrom, dateTo, salaryDate, noLockDays },
        config
      );
      dispatch({
        type: GET_SALARY_SCHEDULE_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_SALARY_SCHEDULE_FAILURE,
    });
  }
};



export const BiweeklySalaryScheduleApi = () => async (dispatch) => {
  const format = "DD-MM-YYYY";
  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-total-Count": 73,
    },
  };
  const basicInfo = JSON.parse(localStorage.getItem("basicInfo"));
  const salaryInfo = JSON.parse(localStorage.getItem("biWeeklyalaryInfo"));
console.log("salaryInfo",salaryInfo)
  const { isBiweekly } = basicInfo;
  const { dateFrom, dateTo, salaryDate, noLockDays,secondDateFrom,secondDateTo,secondNoLockDays,secondSalaryDate } = salaryInfo;
  console.log(dateFrom, dateTo, salaryDate)
 console.log("isBiweekly",isBiweekly)
  //console.log((salaryDate.toString))

  //console.log((dateTo))

  try {
    if (isBiweekly) {
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-salary-schedule`,
        {isBiweekly, dateFrom, dateTo, salaryDate, noLockDays,secondDateFrom,secondDateTo,secondNoLockDays,secondSalaryDate},
        config
      );
      console.log(data);
      dispatch({
        type: GET_SALARY_SCHEDULE_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_SALARY_SCHEDULE_FAILURE,
    });
  }
};



export const saveSalaryScheduleApi = (schedule) => async (dispatch) => {
  console.log(schedule)
  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-total-Count": 73,
    },
  };
 const basicInfo = JSON.parse(localStorage.getItem("basicInfo"));
  const salaryInfo = JSON.parse(localStorage.getItem("salaryInfo"));

  const { isMonthly, isWeekly } = basicInfo;
  

  //console.log((salaryDate.toString))

  //console.log((dateTo))

  try {
    dispatch({ type: SAVE_SALARY_SCHEDULE_REQUEST });
    console.log(token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-salary-schedules-save`,
      schedule ,
      config
    );
    console.log(data);
    dispatch({
      type: SAVE_SALARY_SCHEDULE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type:SAVE_SALARY_SCHEDULE_FAILURE,
      payload: error.response.data.message,
    });
  }
};




export const fetchSalaryScheduleApi = (id) => async (dispatch) => {

  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-total-Count": 73,
    },
  };
 
  

  //console.log((salaryDate.toString))

  //console.log((dateTo))

  try {
    dispatch({ type: FETCH_SALARY_SCHEDULE_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${IP_ADDRESS}/api/mp-salary-schedules/${id}`,

      config
    );
    dispatch({
      type:FETCH_SALARY_SCHEDULE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SALARY_SCHEDULE_FAILURE,
    });
  }
};



export const salaryScheduleExistsApi = (buCode) => async (dispatch) => {

  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-total-Count": 73,
    },
  };
 
  

  //console.log((salaryDate.toString))

  //console.log((dateTo))

  try {
    dispatch({ type: SALARY_SCHEDULE_EXISTS_REQUEST});
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${IP_ADDRESS}/api/mp-salary-schedules-check/${buCode}`,

      config
    );
    dispatch({
      type:SALARY_SCHEDULE_EXISTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SALARY_SCHEDULE_EXISTS_FAILURE,
    });
  }
};