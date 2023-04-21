import axios from "axios";
import { GET_CODES_FAILURE } from "constants/codeConstants";
import { GET_CODES_SUCCESS } from "constants/codeConstants";
import { GET_CODES_REQUEST } from "constants/codeConstants";
import { IP_ADDRESS } from "constants/config";
import { GET_GROUP_CODES_FAILURE } from "constants/groupEntityConstants";
import { GET_GROUP_CODES_SUCCESS } from "constants/groupEntityConstants";
import { GET_GROUP_CODES_REQUEST } from "constants/groupEntityConstants";

export const getCodesList= (
    code,
    description,
    sort,
    sortType,
    size,
    pageNo,
    
  ) => async (dispatch) => {
    const token=sessionStorage.getItem('user')
    console.log(token)
    console.log(sort)
      
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "X-TOTAL-COUNT":"73"
      },
    };
    try {
      dispatch({ type: GET_CODES_REQUEST});
      console.log(token)
      
      const { data } = await axios.post(`${IP_ADDRESS}/api/mp-company-masters-filter`,
        {  code,
          description,
          sort,
          sortType,
          size,
          pageNo },
        config
      )
      console.log(data)
      dispatch({
        type:GET_CODES_SUCCESS,
        payload: data
      })
  
  localStorage.setItem('codes',JSON.stringify(data))
  
    }
  
    catch (error) {
      dispatch({
        type:GET_CODES_FAILURE,
        
      });
    }
  };
  export const getGroupCodesList= (
    code,
    description,
    sort,
    sortType,
    size,
    pageNo,
    
  ) => async (dispatch) => {
    const token=sessionStorage.getItem('user')
    console.log(token)
    console.log(sort)
      
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "X-TOTAL-COUNT":"73"
      },
    };
    try {
      dispatch({ type: GET_GROUP_CODES_REQUEST});
      console.log(token)
      
      const { data } = await axios.post(`${IP_ADDRESS}/api/mp-company-group-masters-filter`,
        {  code,
          description,
          sort,
          sortType,
          size,
          pageNo },
        config
      )
      console.log(data)
      dispatch({
        type:GET_GROUP_CODES_SUCCESS,
        payload: data
      })
  
  
  
    }
  
    catch (error) {
      dispatch({
        type:GET_GROUP_CODES_FAILURE,
        
      });
    }
  };