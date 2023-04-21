import {
  COMPANY_GROUP_LIST_FAILURE,
  COMPANY_GROUP_LIST_REQUEST,
  COMPANY_GROUP_LIST_SUCCESS,
  CREATE_COMPANY_GROUP_FAILURE,
  CREATE_COMPANY_GROUP_REQUEST,
  CREATE_COMPANY_GROUP_SUCCESS,
  DELETE_COMPANY_GROUP_FAILURE,
  DELETE_COMPANY_GROUP_REQUEST,
  DELETE_COMPANY_GROUP_SUCCESS,
  UPDATE_COMPANY_GROUP_FAILURE,
  UPDATE_COMPANY_GROUP_REQUEST,
  UPDATE_COMPANY_GROUP_SUCCESS,
} from "../constants/companyGroupConstants";

export const CompanyGroupReducer = (state = { companyGroup: {} }, action) => {
  switch (action.type) {
    case CREATE_COMPANY_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COMPANY_GROUP_SUCCESS:
      return {
        loading: false,
        COMPANY_GROUP: action.payload,
      };
    case CREATE_COMPANY_GROUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_COMPANY_GROUP_REQUEST:
    case DELETE_COMPANY_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COMPANY_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_COMPANY_GROUP_FAILURE:
    case DELETE_COMPANY_GROUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COMPANY_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case COMPANY_GROUP_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMPANY_GROUP_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case COMPANY_GROUP_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const companyGroupListReducer = (
  state = { companyGroupList: [] },
  action
) => {
  switch (action.type) {
    case COMPANY_GROUP_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMPANY_GROUP_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case COMPANY_GROUP_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
      default:
      return state;
  }
};
