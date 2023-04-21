import {
  CLEAR_GROUP_ENTITY,
  CREATE_GROUP_ENTITY_FAILURE,
  CREATE_GROUP_ENTITY_REQUEST,
  CREATE_GROUP_ENTITY_SUCCESS,
  DELETE_GROUP_ENTITY_FAILURE,
  DELETE_GROUP_ENTITY_REQUEST,
  DELETE_GROUP_ENTITY_SUCCESS,
  GET_ACTIVE_GROUPS_LIST_FAILURE,
  GET_ACTIVE_GROUPS_LIST_REQUEST,
  GET_ACTIVE_GROUPS_LIST_SUCCESS,
  GET_GROUP_ENTITY_DETAILS_FAILURE,
  GET_GROUP_ENTITY_DETAILS_REQUEST,
  GET_GROUP_ENTITY_DETAILS_SUCCESS,
  GROUP_ENTITY_LIST_FAILURE,
  GROUP_ENTITY_LIST_REQUEST,
  GROUP_ENTITY_LIST_SUCCESS,
  UPDATE_GROUP_ENTITY_FAILURE,
  UPDATE_GROUP_ENTITY_REQUEST,
  UPDATE_GROUP_ENTITY_SUCCESS,
} from "../constants/groupEntityConstants";

export const GroupEntityReducer = (state = { groupEntity: {} }, action) => {
  switch (action.type) {
    case CREATE_GROUP_ENTITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_GROUP_ENTITY_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        groupEntity: action.payload,
      };

    case CLEAR_GROUP_ENTITY:
      return {
        loading: false,
        success: false,
        error: false,
        groupEntity: null,
      };

    case CREATE_GROUP_ENTITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
      };
    case UPDATE_GROUP_ENTITY_REQUEST:
    case DELETE_GROUP_ENTITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_GROUP_ENTITY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        groupEntity: action.payload,
      };
    case UPDATE_GROUP_ENTITY_FAILURE:
    case DELETE_GROUP_ENTITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case DELETE_GROUP_ENTITY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted:true,
      };
    default:
      return state;
  }
};

export const GroupEntityListReducer = (
  state = { groupEntityList: [] },
  action
) => {
  switch (action.type) {
    case GROUP_ENTITY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GROUP_ENTITY_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        groupEntityList: action.payload,
      };
    case GROUP_ENTITY_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
export const GroupEntityDetailsReducer = (
  state = { groupEntityDetails: {} },
  action
) => {
  switch (action.type) {
    case GET_GROUP_ENTITY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_GROUP_ENTITY_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        groupEntityDetails: action.payload,
      };
    case GET_GROUP_ENTITY_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

//active groups

export const ActiveGroupsListReducer = (
  state = { activeGroups: [] },
  action
) => {
  switch (action.type) {
    case GET_ACTIVE_GROUPS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ACTIVE_GROUPS_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        activeGroups: action.payload,
      };
    case GET_ACTIVE_GROUPS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
