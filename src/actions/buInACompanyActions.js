import axios from "axios";
import { CREATE_BU_IN_A_COMPANY_FAILURE } from "constants/buInACompanyconstants";
import { CREATE_BU_IN_A_COMPANY_SUCCESS } from "constants/buInACompanyconstants";
import { CREATE_BU_IN_A_COMPANY_REQUEST } from "constants/buInACompanyconstants";
import { IP_ADDRESS } from "constants/config";

export const createBuisnessUnitInACompanyApi = (formData,companyCode, flag) => async (dispatch) => {
    try {
      const token=sessionStorage.getItem('user')
      console.log(token);
      dispatch({ type: CREATE_BU_IN_A_COMPANY_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-business-units`,
        {
          ...formData,
          companyCode,
          flag,
        },
        config
      );
      console.log(data);
      dispatch({
        type: CREATE_BU_IN_A_COMPANY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BU_IN_A_COMPANY_FAILURE,
        
      });
    }
  };