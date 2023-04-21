import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import {
  CLEAR_LEGAL_ENTITY,
  CREATE_LEGAL_ENTITY_FAILURE,
  CREATE_LEGAL_ENTITY_REQUEST,
  CREATE_LEGAL_ENTITY_SUCCESS,
  DELETE_LEGAL_ENTITY_FAILURE,
  DELETE_LEGAL_ENTITY_REQUEST,
  DELETE_LEGAL_ENTITY_SUCCESS,
  GET_LEGAL_ENTITES_IN_A_GROUP_FAILURE,
  GET_LEGAL_ENTITES_IN_A_GROUP_REQUEST,
  GET_LEGAL_ENTITES_IN_A_GROUP_SUCCESS,
  GET_LEGAL_ENTITY_DETAILS_FAILURE,
  GET_LEGAL_ENTITY_DETAILS_REQUEST,
  GET_LEGAL_ENTITY_DETAILS_SUCCESS,
  UPDATE_LEGAL_ENTITY_FAILURE,
  UPDATE_LEGAL_ENTITY_REQUEST,
  UPDATE_LEGAL_ENTITY_SUCCESS,
} from "../constants/LegalEntityConstants";

export const createLegalEntityApi =
  (
    formData,companyGroupCode,flag
  ) =>
  async (dispatch) => {
    const token = sessionStorage.getItem("user");

    console.log(token)
    
    try {
      console.log(token);
      dispatch({ type: CREATE_LEGAL_ENTITY_REQUEST });
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-company-masters`,
        {
          ...formData,
          companyGroupCode,
          flag
        },
        config
      );
      console.log(data);
      sessionStorage.setItem("legalCode", data.companyCode);
      dispatch({
        type: CREATE_LEGAL_ENTITY_SUCCESS,
        payload: data,
       
      });
    } catch (error) {
      dispatch({
        type: CREATE_LEGAL_ENTITY_FAILURE,
      
      });
    }
  };

export const updateLegalEntityApi =
  (id,
    companyCode, 
    companyDescription, 
    flag, 
    addressLine1, 
    addressLine2, 
    city, 
    phone, 
    fax, 
    email, 
    cinNo, 
    gstNo, 
    panNo, 
    town, 
    contactPerson, 
    contactPersonMobile, 
    contactPersonEmail, 
    countryCode, 
    stateCode, 
    pincode, 
    companyGroupCode, 
    token) =>
  async (dispatch) => {
    console.log(companyGroupCode)
    console.log(id)
    const token=sessionStorage.getItem('user')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      dispatch({
        type: UPDATE_LEGAL_ENTITY_REQUEST,
      });
      const { data } = await axios.put(
        `${IP_ADDRESS}/api/mp-company-masters/${id}`,{
          id,
          companyCode, 
          companyDescription, 
          flag, 
          addressLine1, 
          addressLine2, 
          city, 
          phone, 
          fax, 
          email, 
          cinNo, 
          gstNo, 
          panNo, 
          town, 
          contactPerson, 
          contactPersonMobile, 
          contactPersonEmail, 
          countryCode, 
          stateCode, 
          pincode, 
          companyGroupCode, 
         
        },
        config

      );
      dispatch({
        type: UPDATE_LEGAL_ENTITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_LEGAL_ENTITY_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const deleteLegalEntity = (id) => async (dispatch) => {
  const token = sessionStorage.getItem("user");

  console.log(id)
  console.log(token)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    dispatch({
      type: DELETE_LEGAL_ENTITY_REQUEST,
      payload: id,
    });
    const { data } = await axios.delete(
      `${IP_ADDRESS}/api/mp-company-masters/${id}`,
      config
    );
    dispatch({
      type: DELETE_LEGAL_ENTITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_LEGAL_ENTITY_FAILURE,
      payload: error,
    });
  }
};
export const getStateDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_LEGAL_ENTITY_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`http://`);
    dispatch({
      type: GET_LEGAL_ENTITY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LEGAL_ENTITY_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};
export const getCompanyMasterDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_LEGAL_ENTITY_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`http://`);
    dispatch({
      type: GET_LEGAL_ENTITY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LEGAL_ENTITY_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const legalEntitesInAGroupApi =(id) =>async (dispatch) => {
    
  const token=sessionStorage.getItem('user')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      dispatch({
        type: GET_LEGAL_ENTITES_IN_A_GROUP_REQUEST,
      });
      const { data } = await axios.get(`${IP_ADDRESS}/api/mp-company-group-masters-companies-by-id/${id}`,
     
      config
    )
      dispatch({
        type:GET_LEGAL_ENTITES_IN_A_GROUP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LEGAL_ENTITES_IN_A_GROUP_FAILURE
      });
    }
  };
  export const deletelegalEntity = (id) => async (dispatch) => {
    const token=sessionStorage.getItem('user')
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    try {
      dispatch({
        type: DELETE_LEGAL_ENTITY_REQUEST,
        payload: id
      })
      const { data } = await axios.delete(`${IP_ADDRESS}/api/mp-company-masters/${id}`,
      
      config
      )
      dispatch({
        type:DELETE_LEGAL_ENTITY_SUCCESS,
        payload: data
      })
    }
    catch(error){
      dispatch({
        type: DELETE_LEGAL_ENTITY_FAILURE,
      })
    }
      
  }
  
  export const legalEntitesInAGroupbyCodeApi =(groupCode) =>async (dispatch) => {
    
    const token=sessionStorage.getItem('user')
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        dispatch({
          type: GET_LEGAL_ENTITES_IN_A_GROUP_REQUEST,
        });
        const { data } = await axios.get(`${IP_ADDRESS}/api/mp-company-group-masters-companies-by-code/${groupCode}`,
       
        config
      )
        dispatch({
          type:GET_LEGAL_ENTITES_IN_A_GROUP_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: GET_LEGAL_ENTITES_IN_A_GROUP_FAILURE
        });
      }
    };


    export const clearLegalEntityState =() =>async (dispatch) => {
    
          dispatch({
            type: CLEAR_LEGAL_ENTITY
          });
      };