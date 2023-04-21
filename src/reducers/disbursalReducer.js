import { HR_APPROVAL_FAILURE } from "constants/loanConstants";
import { LOAN_DISBURSAL_SUCCESS } from "constants/loanConstants";
import { LOAN_DISBURSAL_FAILURE } from "constants/loanConstants";
import { LOAN_DISBURSAL_REQUEST } from "constants/loanConstants";
import { HR_APPROVAL_SUCCESS } from "constants/loanConstants";
import { HR_APPROVAL_REQUEST } from "constants/loanConstants";

export const disbursalReducer = (state = { disbursal: {} }, action) => {
    switch (action.type) {
      case LOAN_DISBURSAL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOAN_DISBURSAL_SUCCESS:
        return {
          loading: false,
          success: true,
          error: false,
          disbursal: action.payload,
        };
  
     
  
      case LOAN_DISBURSAL_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        }
      default:
        return state;
    }
  };
  