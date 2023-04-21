import axios from "axios";
import {
  CREATE_STATE_FAILURE,
  CREATE_STATE_REQUEST,
  CREATE_STATE_SUCCESS,
  DELETE_STATE_FAILURE,
  DELETE_STATE_REQUEST,
  DELETE_STATE_SUCCESS,
  GET_STATE_DETAILS_FAILURE,
  GET_STATE_DETAILS_REQUEST,
  GET_STATE_DETAILS_SUCCESS,
  UPDATE_STATE_FAILURE,
  UPDATE_STATE_REQUEST,
  UPDATE_STATE_SUCCESS,
} from "../constants/stateConstants";
export const createState =
  (stateCode, stateDescription, mpCountryMaster, flag, token) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_STATE_REQUEST });
      console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-state-masters`,
        { stateCode, stateDescription, mpCountryMaster, flag },
        config
      );
      console.log(data);
      dispatch({
        type: CREATE_STATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_STATE_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const updateState =
  (id, stateCode, stateDescription, mpCountryMaster, flag) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_STATE_REQUEST,
      });
      const { data } = await axios.put(
        `${IP_ADDRESS}/api/mp-state-masters/${id}`
      );
      dispatch({
        type: UPDATE_STATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_STATE_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const deleteState = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_STATE_REQUEST,
      payload: id,
    });
    const { data } = await axios.delete(
      `${IP_ADDRESS}/api/mp-state-masters/${id}`
    );
    dispatch({
      type: DELETE_STATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_STATE_FAILURE,
      payload: error.response.data.message,
    });
  }
};
export const getStateDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_STATE_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`http://`);
    dispatch({
      type: GET_STATE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STATE_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};
