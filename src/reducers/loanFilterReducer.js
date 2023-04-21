import { BU_LEVEL_LOAN_PRODUCT_UPDATE_FAILURE } from "constants/loanConstants";
import { LOAN_FILTER_FAILURE } from "constants/loanConstants";
import { LOAN_FILTER_SUCCESS } from "constants/loanConstants";
import { LOAN_FILTER_REQUEST } from "constants/loanConstants";
import { BU_LEVEL_LOAN_PRODUCT_UPDATE_SUCCESS } from "constants/loanConstants";
import { APPLICATION_SUBMITTED_AND_UNDER_REVIEW_SUCCESS } from "constants/progressConstants";
import { APPLICATION_SUBMITTED_AND_UNDER_REVIEW_FAILURE } from "constants/progressConstants";
import { AUTH_AND_SMS_SENT_FAILURE } from "constants/progressConstants";
import { APPLICATION_SUBMITTED_AND_UNDER_REVIEW_REQUEST } from "constants/progressConstants";
import { AUTH_AND_SMS_SENT_SUCCESS } from "constants/progressConstants";
import { AUTH_AND_SMS_SENT_REQUEST } from "constants/progressConstants";

export const loanFilterReducer=(state={filteredLoans:[]},action)=>{
    switch(action.type){
        case LOAN_FILTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAN_FILTER_SUCCESS:
      return {
        loading: false,
        filteredLoans: action.payload,
      };
    case LOAN_FILTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
      
      default:
        return state;
    }
}


