import { BU_LEVEL_LOAN_PRODUCT_UPDATE_FAILURE } from "constants/loanConstants";
import { BU_LEVEL_LOAN_PRODUCT_UPDATE_SUCCESS } from "constants/loanConstants";
import { APPLICATION_SUBMITTED_AND_UNDER_REVIEW_SUCCESS } from "constants/progressConstants";
import { APPLICATION_SUBMITTED_AND_UNDER_REVIEW_FAILURE } from "constants/progressConstants";
import { AUTH_AND_SMS_SENT_FAILURE } from "constants/progressConstants";
import { APPLICATION_SUBMITTED_AND_UNDER_REVIEW_REQUEST } from "constants/progressConstants";
import { AUTH_AND_SMS_SENT_SUCCESS } from "constants/progressConstants";
import { AUTH_AND_SMS_SENT_REQUEST } from "constants/progressConstants";

export const progressReducer=(state={inProgressApplications:[]},action)=>{
    switch(action.type){
        case AUTH_AND_SMS_SENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_AND_SMS_SENT_SUCCESS:
      return {
        loading: false,
        inProgressApplications: action.payload,
      };
    case AUTH_AND_SMS_SENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
      
      default:
        return state;
    }
}


export const submittedAndUnderReviewReducer=(state={submitedANdUnderReview:[]},action)=>{
  switch(action.type){
      case APPLICATION_SUBMITTED_AND_UNDER_REVIEW_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case APPLICATION_SUBMITTED_AND_UNDER_REVIEW_SUCCESS:
    return {
      loading: false,
      submiitedANdUnderReview: action.payload,
      error:false
    };
  case APPLICATION_SUBMITTED_AND_UNDER_REVIEW_FAILURE:
    return {
      ...state,
      loading: false,
      error: true,
    };
    
    default:
      return state;
  }
}