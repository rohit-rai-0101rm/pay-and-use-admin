import { IP_ADDRESS } from "constants/config";
import { GET_ALL_EMPLOYEES_IN_BU_FAILURE } from "constants/EmployerConstants";
import { GET_PENDING_FOR_APPROVAL_IN_BU_SUCCESS } from "constants/EmployerConstants";
import { GET_PENDING_FOR_APPROVAL_IN_BU_FAILURE } from "constants/EmployerConstants";
import { GET_PENDING_FOR_APPROVAL_IN_BU_REQUEST } from "constants/EmployerConstants";
import { GET_ALL_EMPLOYEES_IN_BU_SUCCESS } from "constants/EmployerConstants";
import { GET_ALL_EMPLOYEES_IN_BU_REQUEST } from "constants/EmployerConstants";

export const getEmployeesInBuApi = (id) => async (dispatch) => {
    try {
      const token = sessionStorage.getItem("user");
      console.log(token);
      dispatch({ type: GET_ALL_EMPLOYEES_IN_BU_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${IP_ADDRESS}/api/mp-company-masters-companies-by-id/${id}`,
  
        config
      );
      console.log(data);
      dispatch({
        type: GET_ALL_EMPLOYEES_IN_BU_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:GET_ALL_EMPLOYEES_IN_BU_FAILURE,
      });
    }
  };


  export const pendingForApprovalInBuApi = (id) => async (dispatch) => {
    try {
      const token = sessionStorage.getItem("user");
      console.log(token);
      dispatch({ type: GET_PENDING_FOR_APPROVAL_IN_BU_REQUEST});
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${IP_ADDRESS}/api/mp-company-masters-companies-by-id/${id}`,
  
        config
      );
      console.log(data);
      dispatch({
        type:GET_PENDING_FOR_APPROVAL_IN_BU_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:GET_PENDING_FOR_APPROVAL_IN_BU_FAILURE,
      });
    }
  };