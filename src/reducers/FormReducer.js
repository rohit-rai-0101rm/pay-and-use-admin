import {
   
    SAVE_BASIC_INFO, SAVE_BIWEEKLY_SALARY_INFO_FORM, SAVE_FILTERED_PARAMS, SAVE_SALARY_INFO,
  } from "../constants/FormConstants";
  
  export const formReducer = (
    state = { salaryInfo: {}, basicInfo: {} },
    action
  ) => {
    switch (action.type) {
     
  
      case SAVE_BASIC_INFO:
        return {
          ...state,
          basicInfo: action.payload,
        };
  case SAVE_SALARY_INFO:
        return {
          ...state,
          salaryInfo: action.payload,
        }

        case SAVE_BIWEEKLY_SALARY_INFO_FORM:
          return {
            ...state,
            salaryInfo: action.payload,
          }

      default:
        return state;
    }
  };


  export const filteredParamsReducer = (
    state = { filteredParams: {} },
    action
  ) => {
    switch (action.type) {
     

        case SAVE_FILTERED_PARAMS:
          return {
            ...state,
            filteredParams: action.payload,
          }

      default:
        return state;
    }
  };