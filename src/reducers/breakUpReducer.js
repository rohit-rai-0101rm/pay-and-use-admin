import { PAYDAY_BREAKUP_FAILURE } from "constants/BreakupConstants";
import { SHORTTERM_BREAKUP_SUCCESS } from "constants/BreakupConstants";
import { GET_BREAKUP_REQUEST } from "constants/BreakupConstants";
import { GET_BREAKUP_FAILURE } from "constants/BreakupConstants";
import { GET_BREAKUP_SUCCESS } from "constants/BreakupConstants";
import { SHORTTERM_BREAKUP_FAILURE } from "constants/BreakupConstants";
import { SHORTTERM_BREAKUP_REQUEST } from "constants/BreakupConstants";
import { PAYDAY_BREAKUP_SUCCESS } from "constants/BreakupConstants";
import { PAYDAY_BREAKUP_REQUEST } from "constants/BreakupConstants";

export const payDayBreakUpReducer = (state = { payDayBreakup: [] }, action) => {
    switch (action.type) {
      case PAYDAY_BREAKUP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case PAYDAY_BREAKUP_SUCCESS:
        return {
          loading: false,
          payDayBreakup: action.payload,
        };
      case PAYDAY_BREAKUP_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };



  export const shortTermBreakUpReducer = (state = { shortTerm: [] }, action) => {
    switch (action.type) {
      case SHORTTERM_BREAKUP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SHORTTERM_BREAKUP_SUCCESS:
        return {
          loading: false,
          shortTerm: action.payload,
        };
      case SHORTTERM_BREAKUP_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };

  export const breakupReducer = (state = { breakup: {} }, action) => {
    switch (action.type) {
      case GET_BREAKUP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_BREAKUP_SUCCESS:
        return {
          loading: false,
          breakup: action.payload,
        };
      case GET_BREAKUP_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
        
         
        default:
          return state;
    }
  };






