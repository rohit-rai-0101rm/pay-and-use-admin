import { UNDERWRITING_MASTER_FAILURE } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_SAVE_SUCCESS } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_SAVE_FAILURE } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_SAVE_REQUEST } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_SUCCESS } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_REQUEST } from "constants/underwritingConstants";
export const underwritingMasterReducer = (state = { underwriting: {} }, action) => {
    switch (action.type) {
      case UNDERWRITING_MASTER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UNDERWRITING_MASTER_SUCCESS:
        return {
          loading: false,
          underwriting: action.payload,
        };
      case UNDERWRITING_MASTER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        
         
        default:
          return state;
    }
  };

  export const underwritingMasterSaveReducer = (state = { underwritingSave: {} }, action) => {
    switch (action.type) {
      case UNDERWRITING_MASTER_SAVE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UNDERWRITING_MASTER_SAVE_SUCCESS:
        return {
          loading: false,
          error:false,
          underwritingSave: action.payload,
          success:true
        };
      case UNDERWRITING_MASTER_SAVE_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
          success:false
        };

        
         
        default:
          return state;
    }
  };