import { HR_APPROVAL_FAILURE } from "constants/loanConstants";
import { HR_APPROVAL_SUCCESS } from "constants/loanConstants";
import { HR_APPROVAL_REQUEST } from "constants/loanConstants";

export const hrApprovalReducer = (state = { hrApproval: {} }, action) => {
    switch (action.type) {
      case HR_APPROVAL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case HR_APPROVAL_SUCCESS:
        return {
          loading: false,
          success: true,
          error: false,
          hrApproval: action.payload,
        };
  
     
  
      case HR_APPROVAL_FAILURE:
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
  