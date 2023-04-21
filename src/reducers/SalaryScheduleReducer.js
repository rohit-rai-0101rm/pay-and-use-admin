import { SAVE_BU_PRODUCT_FAILURE } from "constants/BuisnessUnitConstants";
import { GET_SALARY_SCHEDULE_FAILURE } from "constants/SalaryScheduleConstants";
import { SAVE_SALARY_SCHEDULE_FAILURE } from "constants/SalaryScheduleConstants";
import { FETCH_SALARY_SCHEDULE_SUCCESS } from "constants/SalaryScheduleConstants";
import { SALARY_SCHEDULE_EXISTS_REQUEST } from "constants/SalaryScheduleConstants";
import { SALARY_SCHEDULE_EXISTS_FAILURE } from "constants/SalaryScheduleConstants";
import { SALARY_SCHEDULE_EXISTS_SUCCESS } from "constants/SalaryScheduleConstants";
import { FETCH_SALARY_SCHEDULE_FAILURE } from "constants/SalaryScheduleConstants";
import { FETCH_SALARY_SCHEDULE_REQUEST } from "constants/SalaryScheduleConstants";
import { SAVE_SALARY_SCHEDULE_REQUEST } from "constants/SalaryScheduleConstants";
import { SAVE_SALARY_SCHEDULE_SUCCESS } from "constants/SalaryScheduleConstants";
import { GET_SALARY_SCHEDULE_SUCCESS } from "constants/SalaryScheduleConstants";
import { GET_SALARY_SCHEDULE_REQUEST } from "constants/SalaryScheduleConstants";

export const salarySchedulerReducer=(state={salarySchedule:[]},action)=>{
    switch(action.type){
        case GET_SALARY_SCHEDULE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SALARY_SCHEDULE_SUCCESS :
      return {
        loading: false,
        salarySchedule: action.payload,
      };
    case GET_SALARY_SCHEDULE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
      
      default:
        return state;
    }
}



export const saveSalarySchedulerReducer=(state={saveSalarySchedule:[]},action)=>{
  switch(action.type){
      case SAVE_SALARY_SCHEDULE_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case SAVE_SALARY_SCHEDULE_SUCCESS:
    return {
      loading: false,
      saveSalarySchedule: action.payload,
    };
  case SAVE_SALARY_SCHEDULE_FAILURE:
    return {
      ...state,
      loading: false,
      error: true,
    };
    
    default:
      return state;
  }
}


export const fetchSalarySchedulerReducer=(state={fetchSalarySchedule:[]},action)=>{
  switch(action.type){
      case FETCH_SALARY_SCHEDULE_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case FETCH_SALARY_SCHEDULE_SUCCESS:
    return {
      loading: false,
      fetchSalarySchedule: action.payload,
    };
  case FETCH_SALARY_SCHEDULE_FAILURE:
    return {
      ...state,
      loading: false,
      error: true,
    };
    
    default:
      return state;
  }
}


export const salaryScheduleExistsReducer=(state={salaryScheduleExists:{}},action)=>{
  switch(action.type){
      case SALARY_SCHEDULE_EXISTS_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case SALARY_SCHEDULE_EXISTS_SUCCESS:
    return {
      loading: false,
      salaryScheduleExists: action.payload,
    };
  case SALARY_SCHEDULE_EXISTS_FAILURE:
    return {
      ...state,
      loading: false,
      error: true,
    };
    
    default:
      return state;
  }
}