import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { GET_FINANCIAL_YEAR_FAILURE } from "constants/financialYearConstants";
import { GET_FINANCIAL_YEAR_SUCCESS } from "constants/financialYearConstants";
import { GET_FINANCIAL_YEAR_REQUEST } from "constants/financialYearConstants";

export const getFinancialYearApi = () => async (dispatch) => {
  console.log("fin year action")
    const token=sessionStorage.getItem('user')
     try {
         
         const config = {
             headers: {
                 "Authorization": `Bearer ${token}`
             },
         };
         dispatch
        ({ type:GET_FINANCIAL_YEAR_REQUEST });


        const {data}=await axios.get(`${IP_ADDRESS}/api/mp-fin-year-masters-active`,
        config
        );
    
         
         console.log(data)
         dispatch({
             type:GET_FINANCIAL_YEAR_SUCCESS,
             payload: data
         })
 
     }
     catch (error) {
 
         dispatch({
             type:GET_FINANCIAL_YEAR_FAILURE,
             payload: error.response.data.message
         })
     }
 }