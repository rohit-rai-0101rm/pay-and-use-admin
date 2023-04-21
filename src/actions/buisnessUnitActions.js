import axios from "axios";

import { GET_BUISNESS_UNIT_DETAILS_REQUEST } from "constants/BuisnessUnitConstants";
import { GET_BUISNESS_UNIT_LIST_SUCCESS } from "constants/BuisnessUnitConstants";
import { GET_BUISNESS_UNITS_IN_A_COMPANY_REQUEST } from "constants/BuisnessUnitConstants";
import { GET_BUISNESS_UNITS_IN_A_COMPANY_FAILURE } from "constants/BuisnessUnitConstants";
import { SAVE_BU_PRODUCT_SUCCESS } from "constants/BuisnessUnitConstants";
import { SAVE_BU_PRODUCT_FAILURE } from "constants/BuisnessUnitConstants";
import { SAVE_BU_PRODUCT_REQUEST } from "constants/BuisnessUnitConstants";
import { BU_PRODUCT_TYPE_REQUEST } from "constants/BuisnessUnitConstants";
import { BU_PRODUCT_TYPE_FAILURE } from "constants/BuisnessUnitConstants";
import { GET_BU_IN_A_LE_SUCCESS } from "constants/BuisnessUnitConstants";
import { CLEAR_BUISNESS_UNIT } from "constants/BuisnessUnitConstants";
import { DELETE_BUISNESS_UNIT_SUCCESS } from "constants/BuisnessUnitConstants";
import { DELETE_BUISNESS_UNIT_FAILURE } from "constants/BuisnessUnitConstants";
import { DELETE_BUISNESS_UNIT_REQUEST } from "constants/BuisnessUnitConstants";
import { GET_BU_IN_A_LE_FAILURE } from "constants/BuisnessUnitConstants";
import { GET_BU_IN_A_LE_REQUEST } from "constants/BuisnessUnitConstants";
import { BU_PRODUCT_TYPE_SUCCESS } from "constants/BuisnessUnitConstants";
import { GET_BUISNESS_UNITS_IN_A_COMPANY_SUCCESS } from "constants/BuisnessUnitConstants";
import { GET_BUISNESS_UNIT_LIST_REQUEST } from "constants/BuisnessUnitConstants";
import { GET_BUISNESS_UNIT_LIST_FAILURE } from "constants/BuisnessUnitConstants";
import { CREATE_BUISNESS_UNIT_FAILURE } from "constants/BuisnessUnitConstants";
import { CREATE_BUISNESS_UNIT_REQUEST } from "constants/BuisnessUnitConstants";
import { CREATE_BUISNESS_UNIT_SUCCESS } from "constants/BuisnessUnitConstants";
import { IP_ADDRESS } from "constants/config";
import { GET_ALL_EMPLOYEES_IN_BU_FAILURE } from "constants/EmployerConstants";
import { GET_ALL_EMPLOYEES_IN_BU_SUCCESS } from "constants/EmployerConstants";
import { GET_ALL_EMPLOYEES_IN_BU_REQUEST } from "constants/EmployerConstants";

export const createBuisnessUnitApi =
  (formData, companyCode, flag) => async (dispatch) => {
    try {
      const token = sessionStorage.getItem("user");
      console.log(token);
      dispatch({ type: CREATE_BUISNESS_UNIT_REQUEST });
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
      sessionStorage.setItem("buCode", JSON.stringify(data.buCode));
      dispatch({
        type: CREATE_BUISNESS_UNIT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BUISNESS_UNIT_FAILURE,
      });
    }
  };

export const getBuListApi =
  (code, description, sort, sortType, size, pageNo) => async (dispatch) => {
    try {
      const token = sessionStorage.getItem("user");
      console.log(token);
      dispatch({ type: GET_BUISNESS_UNIT_LIST_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-business-units-filter`,
        {
          code,
          description,
          sort,
          sortType,
          size,
          pageNo,
        },
        config
      );
      console.log(data);
      dispatch({
        type: GET_BUISNESS_UNIT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_BUISNESS_UNIT_LIST_FAILURE,
        payload: error,
      });
    }
  };

export const getBuInACompanyApi = (id) => async (dispatch) => {
  try {
    const token = sessionStorage.getItem("user");
    console.log(token);
    dispatch({ type: GET_BUISNESS_UNITS_IN_A_COMPANY_REQUEST });
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
      type: GET_BUISNESS_UNITS_IN_A_COMPANY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BUISNESS_UNITS_IN_A_COMPANY_FAILURE,
    });
  }
};

export const saveBuProductApi =
  (buCode, loanTypeCode, productCode) => async (dispatch) => {
    console.log("loanTypeCode", loanTypeCode);
    try {
      const token = sessionStorage.getItem("user");
      console.log(token);
      dispatch({ type: SAVE_BU_PRODUCT_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-business-unit-products`,
        {
          buCode,
          loanTypeCode,
          productCode,
        },
        config
      );
      console.log(data);
      dispatch({
        type: SAVE_BU_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SAVE_BU_PRODUCT_FAILURE,
      });
    }
  };

export const employeesInBuApi = (buCode) => async (dispatch) => {
  console.log(buCode);
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
      `${IP_ADDRESS}/api/mp-employee-masters-by-bucode/${buCode}`,

      config
    );
    dispatch({
      type: GET_ALL_EMPLOYEES_IN_BU_SUCCESS,
      payload: data,
    });
    if (data) {
      data.map((item, index) => {
        item.SNo = index + 1;
      });
    }
    console.log(data);
    localStorage.setItem("employees", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_ALL_EMPLOYEES_IN_BU_FAILURE,
    });
  }
};

export const loanTypesInABuApi = (buCode) => async (dispatch) => {
  console.log(buCode);
  try {
    const token = sessionStorage.getItem("user");
    console.log(token);
    dispatch({ type: BU_PRODUCT_TYPE_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `${IP_ADDRESS}/api/mp-business-unit-products/${buCode}`,

      config
    );

    console.log(data);
    dispatch({
      type: BU_PRODUCT_TYPE_SUCCESS,
      payload: data,
    });
    if (data) {
      data.map((item, index) => {
        item.SNo = index + 1;
      });
    }
    console.log(data);
    localStorage.setItem("employees", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: BU_PRODUCT_TYPE_FAILURE,
    });
  }
};

export const getBusInaLe = (leCodes) => async (dispatch) => {
  console.log("leCodesapipayload", leCodes);
  try {
    const token = sessionStorage.getItem("user");
    console.log(token);
    dispatch({ type: GET_BU_IN_A_LE_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${IP_ADDRESS}/api/mp-business-masters-by-company-codes `,
      leCodes,
      config
    );
    console.log(data);
    dispatch({
      type: GET_BU_IN_A_LE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BU_IN_A_LE_FAILURE,
    });
  }
};

export const deleteBuisnessUnit = (id) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    dispatch({
      type:DELETE_BUISNESS_UNIT_REQUEST,
      payload: id,
    });
    const { data } = await axios.delete(
      `${IP_ADDRESS}/api/mp-business-units/${id}`,

      config
    );
    dispatch({
      type:DELETE_BUISNESS_UNIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BUISNESS_UNIT_FAILURE,
    });
  }
};

export const clearBuState = () => async (dispatch) => {
  dispatch({
    type: CLEAR_BUISNESS_UNIT,
  });
};
