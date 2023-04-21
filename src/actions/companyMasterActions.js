import axios from "axios";
import { COMPANY_GROUP_LIST_SUCCESS } from "constants/companyGroupConstants";
import { GET_SINGLE_COMPANY_MASTER_DETAILS_REQUEST } from "constants/companyMasterConstants";
import { GET_SINGLE_COMPANY_MASTER_DETAILS_SUCCESS } from "constants/companyMasterConstants";
import { GET_SINGLE_COMPANY_MASTER_DETAILS_FAILURE } from "constants/companyMasterConstants";
import { COMPANY_MASTER_LIST_SUCCESS } from "constants/companyMasterConstants";
import { COMPANY_MASTER_LIST_FAILURE } from "constants/companyMasterConstants";
import { COMPANY_MASTER_LIST_REQUEST } from "constants/companyMasterConstants";
import { IP_ADDRESS } from "constants/config";
export const getCompanyMasterList= (
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
    dispatch({ type: COMPANY_MASTER_LIST_REQUEST });
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
      type: COMPANY_MASTER_LIST_SUCCESS,
      payload: data
    })



  }

  catch (error) {
    dispatch({
      type:COMPANY_MASTER_LIST_FAILURE,
      
    });
  }
};
export const getSingleCompanyMasterDetails= (
 id
) => async (dispatch) => {
    const token=sessionStorage.getItem('user')
    console.log(token)
  try {
    dispatch({ type:GET_SINGLE_COMPANY_MASTER_DETAILS_REQUEST });
    console.log(token)
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "X-TOTAL-COUNT":"73"
      },
    };
    const { data } = await axios.get(`${IP_ADDRESS}/api/mp-company-masters/${id}`,
     
      config
    )
    console.log(data)
    dispatch({
      type: GET_SINGLE_COMPANY_MASTER_DETAILS_SUCCESS,
      payload: data
    })



  }

  catch (error) {
    dispatch({
      type:GET_SINGLE_COMPANY_MASTER_DETAILS_FAILURE,
    });
  }
};



