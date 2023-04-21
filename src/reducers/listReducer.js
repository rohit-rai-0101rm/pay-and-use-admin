import {
  ACTIVE_LIST_FAILURE,
  ACTIVE_LIST_REQUEST,
  ACTIVE_LIST_SUCCESS,
  LIST_DETAILS_FAILURE,
  LIST_DETAILS_REQUEST,
  LIST_DETAILS_SUCCESS,
  LIST_FAILURE,
  LIST_REQUEST,
  LIST_SUCCESS,
} from "../constants/listConstants";

export const listReducer = (state = { list: {} }, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const listDetailsReducer = (state = { listDetails: {} }, action) => {
  switch (action.type) {
    case LIST_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        listDetails: action.payload,
      };
    case LIST_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
