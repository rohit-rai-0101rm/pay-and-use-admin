import axios from "axios";
import { SHORTTERM_BREAKUP_REQUEST } from "constants/BreakupConstants";
import { SHORTTERM_BREAKUP_SUCCESS } from "constants/BreakupConstants";
import { GET_BREAKUP_SUCCESS } from "constants/BreakupConstants";
import { GET_BREAKUP_FAILURE } from "constants/BreakupConstants";
import { GET_BREAKUP_REQUEST } from "constants/BreakupConstants";
import { PAYDAY_BREAKUP_FAILURE } from "constants/BreakupConstants";
import { PAYDAY_BREAKUP_SUCCESS } from "constants/BreakupConstants";
import { PAYDAY_BREAKUP_REQUEST } from "constants/BreakupConstants";
import { IP_ADDRESS } from "constants/config";

export const payDayBreakUpApi = (id) => async (dispatch) => {
    console.log(id)
    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:PAYDAY_BREAKUP_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${IP_ADDRESS}/api/mp-product-fee-mappings/${id}`,
    
  
        config
      );
      dispatch({
        type:PAYDAY_BREAKUP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:PAYDAY_BREAKUP_FAILURE,
      });
    }
  };

  export const breakUpApi = (id) => async (dispatch) => {
    console.log(id)
    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:GET_BREAKUP_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${IP_ADDRESS}/api/mp-product-fee-mappings/${id}`,
    
  
        config
      );
      dispatch({
        type:GET_BREAKUP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:GET_BREAKUP_FAILURE,
      });
    }
  };

  export const shortTermBreakUpApi = (id) => async (dispatch) => {
    console.log(id)
    const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type:SHORTTERM_BREAKUP_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${IP_ADDRESS}/api/mp-product-fee-mappings/${id}`,
    
  
        config
      );
      console.log(data)
      dispatch({
        type:SHORTTERM_BREAKUP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:PAYDAY_BREAKUP_FAILURE,
      });
    }
  };