import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { CREATE_GROUP_ENTITY_FAILURE } from "constants/groupEntityConstants";
import { GROUP_ENTITY_LIST_SUCCESS } from "constants/groupEntityConstants";
import { GET_GROUP_ENTITY_DETAILS_REQUEST } from "constants/groupEntityConstants";
import { GET_GROUP_ENTITY_DETAILS_FAILURE } from "constants/groupEntityConstants";
import { UPDATE_GROUP_ENTITY_SUCCESS } from "constants/groupEntityConstants";
import { GET_ACTIVE_GROUPS_LIST_REQUEST } from "constants/groupEntityConstants";
import { CLEAR_GROUP_ENTITY } from "constants/groupEntityConstants";
import { DELETE_GROUP_ENTITY_SUCCESS } from "constants/groupEntityConstants";
import { DELETE_GROUP_ENTITY_FAILURE } from "constants/groupEntityConstants";
import { DELETE_GROUP_ENTITY_REQUEST } from "constants/groupEntityConstants";
import { GET_ACTIVE_GROUPS_LIST_FAILURE } from "constants/groupEntityConstants";
import { GET_ACTIVE_GROUPS_LIST_SUCCESS } from "constants/groupEntityConstants";
import { UPDATE_GROUP_ENTITY_FAILURE } from "constants/groupEntityConstants";
import { UPDATE_GROUP_ENTITY_REQUEST } from "constants/groupEntityConstants";
import { GET_GROUP_ENTITY_DETAILS_SUCCESS } from "constants/groupEntityConstants";
import { GROUP_ENTITY_LIST_FAILURE } from "constants/groupEntityConstants";
import { GROUP_ENTITY_LIST_REQUEST } from "constants/groupEntityConstants";
import { CREATE_GROUP_ENTITY_SUCCESS } from "constants/groupEntityConstants";
import { CREATE_GROUP_ENTITY_REQUEST } from "constants/groupEntityConstants";
import { CREATE_LEGAL_ENTITY_FAILURE, CREATE_LEGAL_ENTITY_REQUEST, CREATE_LEGAL_ENTITY_SUCCESS, DELETE_LEGAL_ENTITY_FAILURE, DELETE_LEGAL_ENTITY_REQUEST, DELETE_LEGAL_ENTITY_SUCCESS, GET_LEGAL_ENTITY_DETAILS_FAILURE, GET_LEGAL_ENTITY_DETAILS_REQUEST, UPDATE_LEGAL_ENTITY_FAILURE, UPDATE_LEGAL_ENTITY_REQUEST, UPDATE_LEGAL_ENTITY_SUCCESS } from "../constants/LegalEntityConstants";
export const createGroupEntity= (
  groupName,flag
) => async (dispatch) => {
    const token=sessionStorage.getItem('user')
    console.log(token)
  try {
    dispatch({ type: CREATE_GROUP_ENTITY_REQUEST });
    console.log(token)
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    };
    const { data } = await axios.post(`${IP_ADDRESS}/api/mp-company-group-masters`,
      {groupName, flag },
      config
    )
    console.log(data.groupCode)
    sessionStorage.setItem('groupCode',data.groupCode)
    dispatch({
      type: CREATE_GROUP_ENTITY_SUCCESS,
      payload: data
    })



  }

  catch (error) {
    dispatch({
      type: CREATE_GROUP_ENTITY_FAILURE,
      
    });
  }
};



export const updateGroupEntityApi = (formData, flag,id) => async (dispatch) => {
  try {
    const token=sessionStorage.getItem('user')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({
      type: UPDATE_GROUP_ENTITY_REQUEST
    });
    const { data } = await axios.put(`${IP_ADDRESS}/api/mp-company-group-masters/${id}`,
    {

      ...formData,
      flag,
      id

    },
    config
    )
    dispatch({
      type:UPDATE_GROUP_ENTITY_SUCCESS,
      payload: data
    })

  }
  catch (error) {
    dispatch({
      type: UPDATE_GROUP_ENTITY_FAILURE,
      
    })
  }
}


export const deleteGroupEntity = (id) => async (dispatch) => {
  const token=sessionStorage.getItem('user')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  try {
    dispatch({
      type: DELETE_GROUP_ENTITY_REQUEST,
      payload: id
    })
    const { data } = await axios.delete(`${IP_ADDRESS}/api/mp-company-group-masters/${id}`,
    
    config
    )
    dispatch({
      type:DELETE_GROUP_ENTITY_SUCCESS,
      payload: data
    })
  }
  catch(error){
    dispatch({
      type: DELETE_GROUP_ENTITY_FAILURE,
    })
  }
    
}


export const groupEntityListApi = (code, description, sort, sortType,size, pageNo) => async (dispatch) => {
  try {
    const token=sessionStorage.getItem('user')

    dispatch({
      type:GROUP_ENTITY_LIST_REQUEST
    });
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    };
    const { data } = await axios.post(`${IP_ADDRESS}/api/mp-company-group-masters-filter`,{
      code, description, sort, sortType,size, pageNo
    },
    config
    )
    dispatch({
      type: GROUP_ENTITY_LIST_SUCCESS,
      payload: data
    })

  }
  catch (error) {
    dispatch({
      type: GROUP_ENTITY_LIST_FAILURE,
      
    })
  }
}

export const groupEntityDetailsApi = (id) => async (dispatch) => {
  try {
    const token=sessionStorage.getItem('user')

    dispatch({
      type:GET_GROUP_ENTITY_DETAILS_REQUEST
    });
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    };
    const { data } = await axios.get(`${IP_ADDRESS}/api/mp-company-group-masters/${id}`,
    config
    )
    console.log(data)
    dispatch({
      type: GET_GROUP_ENTITY_DETAILS_SUCCESS,
      payload: data
    })

  }
  catch (error) {
    dispatch({
      type: GET_GROUP_ENTITY_DETAILS_FAILURE,
      
    })
  }
}


export const activeGroupsListApi = () => async (dispatch) => {
  try {
    const token=sessionStorage.getItem('user')

    dispatch({
      type:GET_ACTIVE_GROUPS_LIST_REQUEST
    });
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    };
    const { data } = await axios.get(`${IP_ADDRESS}/api/mp-company-group-masters-active`,
    config
    )
    console.log(data)
    dispatch({
      type: GET_ACTIVE_GROUPS_LIST_SUCCESS,
      payload: data
    })

  }
  catch (error) {
    dispatch({
      type: GET_ACTIVE_GROUPS_LIST_FAILURE,
      
    })
  }
}





export const clearGroupEntityState =() =>async (dispatch) => {
    
  dispatch({
    type: CLEAR_GROUP_ENTITY
  });
};