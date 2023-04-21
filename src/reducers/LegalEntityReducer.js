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
  UPDATE_LEGAL_ENTITY_FAILURE,
  UPDATE_LEGAL_ENTITY_REQUEST,
  UPDATE_LEGAL_ENTITY_SUCCESS,
} from "../constants/LegalEntityConstants";

export const LegalEntityReducer = (state = { legalEntity: {} }, action) => {
  switch (action.type) {
    case CREATE_LEGAL_ENTITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_LEGAL_ENTITY_SUCCESS:
      return {
        loading: false,
        error: false,
        success: true,
        LEGAL_ENTITY: action.payload,
      };
    case CREATE_LEGAL_ENTITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case CLEAR_LEGAL_ENTITY:
      return {
        loading: false,
        error: false,
        success: false,
        LEGAL_ENTITY: null,
      };
    case UPDATE_LEGAL_ENTITY_REQUEST:
    case DELETE_LEGAL_ENTITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_LEGAL_ENTITY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted:true,

      };
    case UPDATE_LEGAL_ENTITY_FAILURE:
    case DELETE_LEGAL_ENTITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_LEGAL_ENTITY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };
    default:
      return state;
  }
};

export const LegalEntityInAGroupReducer = (
  state = { legalEntitiesInAGroup: [] },
  action
) => {
  switch (action.type) {
    case GET_LEGAL_ENTITES_IN_A_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_LEGAL_ENTITES_IN_A_GROUP_SUCCESS:
      return {
        loading: false,
        error: false,
        success: true,
        legalEntitiesInAGroup: action.payload,
      };
    case GET_LEGAL_ENTITES_IN_A_GROUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
