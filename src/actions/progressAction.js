import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { APPLICATION_SUBMITTED_AND_UNDER_REVIEW_SUCCESS } from "constants/progressConstants";
import { APPLICATION_SUBMITTED_AND_UNDER_REVIEW_FAILURE } from "constants/progressConstants";
import { APPLICATION_SUBMITTED_AND_UNDER_REVIEW_REQUEST } from "constants/progressConstants";
import { AUTH_AND_SMS_SENT_FAILURE } from "constants/progressConstants";
import { AUTH_AND_SMS_SENT_SUCCESS } from "constants/progressConstants";
import { AUTH_AND_SMS_SENT_REQUEST } from "constants/progressConstants";

export const authAndSmsSentApi = (filterType,code,description,sort,sortType,size,pageNo) => async (dispatch) => {
    
  const token = sessionStorage.getItem("user");
    console.log(token);
    try {
      dispatch({ type: AUTH_AND_SMS_SENT_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-employee-masters-progress-filter`,
        {filterType,code,description,sort,sortType,size,pageNo},
  
        config
      );
      dispatch({
        type:AUTH_AND_SMS_SENT_SUCCESS,
        payload: data,
      
      });
    } catch (error) {
      dispatch({
        type: AUTH_AND_SMS_SENT_FAILURE,
      });
    }
  };




  export const applicationSubmiitedAndUnderReviewApi = (filterType,code,description,sortType,sort,size,pageNo) => async (dispatch) => {
    
    const token = sessionStorage.getItem("user");
      console.log(token);
      try {
        dispatch({ type:APPLICATION_SUBMITTED_AND_UNDER_REVIEW_REQUEST });
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.post(
          `${IP_ADDRESS}/api/mp-loan-request-filter`,
          {filterType,code,description,sort,sortType,size,pageNo},
    
          config
        );
        dispatch({
          type:APPLICATION_SUBMITTED_AND_UNDER_REVIEW_SUCCESS,
          payload: data,
        
        });
      } catch (error) {
        dispatch({
          type:APPLICATION_SUBMITTED_AND_UNDER_REVIEW_FAILURE,
        });
      }
    };