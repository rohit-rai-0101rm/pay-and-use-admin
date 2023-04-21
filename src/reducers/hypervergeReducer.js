import { VALIDATE_PAN_WITH_NSDL_FAILURE } from "constants/hypervergeConstants";
import { VALIDATE_PAN_WITH_NSDL_REQUEST } from "constants/hypervergeConstants";
import { VALIDATE_PAN_WITH_NSDL_SUCCESS } from "constants/hypervergeConstants";

export const hypervergeReducer = (state = { centralDBCheck: {} }, action) => {
    switch (action.type) {
      case VALIDATE_PAN_WITH_NSDL_REQUEST:
        return {
          ...state,
          loading: true,
          error:false
        };
      case VALIDATE_PAN_WITH_NSDL_SUCCESS:
        return {
          ...state,
          loading: false,
          error:false,
          success:true,
          list: action.payload,
        };
      case VALIDATE_PAN_WITH_NSDL_FAILURE:
        return {
          ...state,
          loading: false,
          success:false,
          error: true,
        };
      default:
        return state;
    }
  };