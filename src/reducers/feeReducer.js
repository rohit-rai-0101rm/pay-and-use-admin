import { FEE_TYPE_FAILURE } from "constants/feeConstants";
import { FEE_TYPE_SUCCESS } from "constants/feeConstants";
import { FEE_TYPE_REQUEST } from "constants/feeConstants";

export const feeTypeReducer = (state = { feeType: [] }, action) => {
    switch (action.type) {
      case FEE_TYPE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FEE_TYPE_SUCCESS:
        return {
          loading: false,
          feeType: action.payload,
        };
      case FEE_TYPE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        
         
        default:
          return state;
    }
  };