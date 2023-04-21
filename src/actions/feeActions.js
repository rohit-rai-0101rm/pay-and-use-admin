import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { FEE_TYPE_FAILURE } from "constants/feeConstants";
import { FEE_TYPE_SUCCESS } from "constants/feeConstants";
import { FEE_TYPE_REQUEST } from "constants/feeConstants";

export const feeTypeApi = () => async (dispatch) => {
    const token=sessionStorage.getItem("user")

    try {
      dispatch({ type: FEE_TYPE_REQUEST });
      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      };
      const { data } = await axios.get(`${IP_ADDRESS}/api/mp-fee-type-masters`,
       
        config
      )
     
      dispatch({
        type: FEE_TYPE_SUCCESS,
        payload: data
      })
  
  
  
    }
  
    catch (error) {
      dispatch({
        type: FEE_TYPE_FAILURE,
      });
    }
  };
  
  