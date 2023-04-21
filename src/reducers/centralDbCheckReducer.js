import { CENTRAL_DB_CHECK_STATUS_FAILURE } from "constants/kycApprovalConstants";
import { CENTRAL_DB_CHECK_STATUS_SUCCESS } from "constants/kycApprovalConstants";
import { CENTRAL_DB_CHECK_STATUS_REQUEST } from "constants/kycApprovalConstants";

export const centralDbCheckReducer = (
    state = {centralDbCheck: {} },
    action
  ) => {
    switch (action.type) {
      case CENTRAL_DB_CHECK_STATUS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CENTRAL_DB_CHECK_STATUS_SUCCESS:
        return {
          loading: false,
          success: true,
          centralDbCheck: action.payload,
        };
      case CENTRAL_DB_CHECK_STATUS_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };