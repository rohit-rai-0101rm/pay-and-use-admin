import {
  BU_PRODUCT_TYPE_FAILURE,
  BU_PRODUCT_TYPE_REQUEST,
  BU_PRODUCT_TYPE_SUCCESS,
  CLEAR_BUISNESS_UNIT,
  CREATE_BUISNESS_UNIT_FAILURE,
  CREATE_BUISNESS_UNIT_REQUEST,
  CREATE_BUISNESS_UNIT_SUCCESS,
  DELETE_BUISNESS_UNIT_FAILURE,
  DELETE_BUISNESS_UNIT_REQUEST,
  DELETE_BUISNESS_UNIT_SUCCESS,
  GET_BUISNESS_UNITS_IN_A_COMPANY_REQUEST,
  GET_BUISNESS_UNITS_IN_A_COMPANY_SUCCESS,
  GET_BUISNESS_UNIT_DETAILS_FAILURE,
  GET_BUISNESS_UNIT_DETAILS_REQUEST,
  GET_BUISNESS_UNIT_DETAILS_SUCCESS,
  GET_BUISNESS_UNIT_LIST_FAILURE,
  GET_BUISNESS_UNIT_LIST_REQUEST,
  GET_BUISNESS_UNIT_LIST_SUCCESS,
  GET_BU_IN_A_LE_FAILURE,
  GET_BU_IN_A_LE_REQUEST,
  GET_BU_IN_A_LE_SUCCESS,
  SAVE_BU_PRODUCT_FAILURE,
  SAVE_BU_PRODUCT_REQUEST,
  SAVE_BU_PRODUCT_SUCCESS,
  UPDATE_BUISNESS_UNIT_FAILURE,
  UPDATE_BUISNESS_UNIT_REQUEST,
  UPDATE_BUISNESS_UNIT_SUCCESS,
} from "../constants/BuisnessUnitConstants";

export const BuisnessUnitReducer = (state = { buisnessUnit: [] }, action) => {
  switch (action.type) {
    case CREATE_BUISNESS_UNIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BUISNESS_UNIT_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        buisnessUnit: action.payload,
      };

    case CLEAR_BUISNESS_UNIT:
      return {
        success: false,

        buisnessUnit: null,
      };

    case CREATE_BUISNESS_UNIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case UPDATE_BUISNESS_UNIT_REQUEST:
    case DELETE_BUISNESS_UNIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_BUISNESS_UNIT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_BUISNESS_UNIT_FAILURE:
    case DELETE_BUISNESS_UNIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BUISNESS_UNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };
    default:
      return state;
  }
};
export const buisnessUnitListReducer = (
  state = { buisnessUnit: [] },
  action
) => {
  switch (action.type) {
    case GET_BUISNESS_UNIT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BUISNESS_UNIT_LIST_SUCCESS:
      return {
        loading: false,
        buisnessUnit: action.payload,
      };
    case GET_BUISNESS_UNIT_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const buisnessUnitsInAGroupReducer = (
  state = { buisnessUnitsInAGroup: [] },
  action
) => {
  switch (action.type) {
    case GET_BUISNESS_UNITS_IN_A_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BUISNESS_UNITS_IN_A_COMPANY_SUCCESS:
      return {
        loading: false,
        buisnessUnitsInAGroup: action.payload,
      };
    case GET_BUISNESS_UNIT_LIST_FAILURE:
      return {
        loading: false,

        error: true,
      };
    default:
      return state;
  }
};

export const saveBuReducer = (state = { saveBu: {} }, action) => {
  switch (action.type) {
    case SAVE_BU_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_BU_PRODUCT_SUCCESS:
      return {
        loading: false,
        saveBu: action.payload,
      };
    case SAVE_BU_PRODUCT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const BuisnessUnitProductTypeReducer = (
  state = { ProductType: [] },
  action
) => {
  switch (action.type) {
    case BU_PRODUCT_TYPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BU_PRODUCT_TYPE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        ProductType: action.payload,
      };
    case BU_PRODUCT_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export const buisnessUnitsInaLegalEntityReducer = (
  state = { busInaLe: [] },
  action
) => {
  switch (action.type) {
    case GET_BU_IN_A_LE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BU_IN_A_LE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        busInaLe: action.payload,
      };
    case GET_BU_IN_A_LE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
