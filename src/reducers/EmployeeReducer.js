import { GET_EMPLOYEE_PROFILE_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_FETCH_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_FETCH_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_UPDATE_SUCCESS } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_AUTHORITY_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_AUTHORITY_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_MESSAGE_POST_SUCCESS } from "constants/EmployeeConstants";
import { UPDATE_EMPLOYEE_PROFILE_REQUEST } from "constants/EmployeeConstants";
import { UPDATE_EMPLOYEE_PROFILE_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_PROFILE_UPDATE_SUCCESS } from "constants/EmployeeConstants";
import { FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_REQUEST } from "constants/EmployeeConstants";
import { FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_LOAN_APPLIED_SUCCESS } from "constants/EmployeeConstants";
import { EMPLOYEE_UPDATE_CLEAR_STATE } from "constants/EmployeeConstants";
import { EMPLOYEE_LOAN_APPLIED_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_LOAN_APPLIED_REQUEST } from "constants/EmployeeConstants";
import { FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_SUCCESS } from "constants/EmployeeConstants";
import { EMPLOYEE_PROFILE_UPDATE_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PROFILE_UPDATE_FAILURE } from "constants/EmployeeConstants";
import { UPDATE_EMPLOYEE_PROFILE_SUCCESS } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_MESSAGE_POST_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_MESSAGE_POST_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_AUTHORITY_SUCCESS } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_UPDATE_FAILURE } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_UPDATE_REQUEST } from "constants/EmployeeConstants";
import { EMPLOYEE_PRODUCT_FETCH_SUCCESS } from "constants/EmployeeConstants";
import { GET_EMPLOYEE_PROFILE_SUCCESS } from "constants/EmployeeConstants";
import { GET_EMPLOYEE_PROFILE_FAILURE } from "constants/EmployeeConstants";
import { GET_EMPLOYEE_DATA } from "constants/EmployeeConstants";

export const EmployeeReducer = (state = { employeeData: [] }, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_DATA:
      return {
        loadiing: false,

        employeeData: action.payload,
      };

    default: {
      return state;
    }
  }
};

export const employeeProfileReducer = (
  state = { employeeProfile: [] },
  action
) => {
  switch (action.type) {
    case GET_EMPLOYEE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYEE_PROFILE_SUCCESS:
      return {
        loadiing: false,

        employeeProfile: action.payload,
      };
    case GET_EMPLOYEE_PROFILE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

export const employeeProductFetchReducer = (
  state = { employeeProduct: [] },
  action
) => {
  switch (action.type) {
    case EMPLOYEE_PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EMPLOYEE_PRODUCT_FETCH_SUCCESS:
      return {
        loading: false,

        employeeProduct: action.payload,
      };
    case EMPLOYEE_PRODUCT_FETCH_FAILURE:
      return {
        loading: false,
        error: true,
      };
    default: {
      return state;
    }
  }
};

export const employeeProductUpdateReducer = (
  state = { employeeProductUpdate: [] },
  action
) => {
  switch (action.type) {
    case EMPLOYEE_PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EMPLOYEE_PRODUCT_UPDATE_SUCCESS:
      return {
        loadiing: false,
        success: true,
        employeeProduct: action.payload,
      };
    case EMPLOYEE_PRODUCT_UPDATE_FAILURE:
      return {
        loading: false,
        error: true,
        success: false,
      };
    default: {
      return state;
    }
  }
};

export const EmployeeProductAuthorityReducer = (
  state = { employeeProductAuthority: [] },
  action
) => {
  switch (action.type) {
    case EMPLOYEE_PRODUCT_AUTHORITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EMPLOYEE_PRODUCT_AUTHORITY_SUCCESS:
      return {
        loadiing: false,

        employeeProductAuthority: action.payload,
      };
    case EMPLOYEE_PRODUCT_AUTHORITY_FAILURE:
      return {
        loading: false,
        error: true,
      };
    default: {
      return state;
    }
  }
};

export const EmployeeProductAuthorityMessageReducer = (
  state = { employeeProductAuthorityMessage: [] },
  action
) => {
  switch (action.type) {
    case EMPLOYEE_PRODUCT_MESSAGE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case EMPLOYEE_PRODUCT_MESSAGE_POST_SUCCESS:
      return {
        loadiing: false,
        success: true,
        employeeProductAuthorityMessage: action.payload,
      };
    case EMPLOYEE_PRODUCT_MESSAGE_POST_FAILURE:
      return {
        loading: false,
        error: true,
        success: false,
      };
    default: {
      return state;
    }
  }
};



export const employeeProfileUpdateReducer = (
    state = { employeeProfileUpdate: [] },
    action
  ) => {
    switch (action.type) {
      case UPDATE_EMPLOYEE_PROFILE_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
        };
      case UPDATE_EMPLOYEE_PROFILE_SUCCESS:
        return {
          loadiing: false,
          success: true,
          employeeProfileUpdate: action.payload,
        };

        case EMPLOYEE_UPDATE_CLEAR_STATE:
          return {
            loadiing: false,
            success: false,
            employeeProfileUpdate: null,
          };

        
      case UPDATE_EMPLOYEE_PROFILE_FAILURE:
        return {
          loading: false,
          error: true,
          success: false,
        };
      default: {
        return state;
      }
    }
  };
  
  export const updateEmployeeProfileReducer = (
    state = { updateEmployeeProfile: [] },
    action
  ) => {
    switch (action.type) {
      case UPDATE_EMPLOYEE_PROFILE_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
        };
      case UPDATE_EMPLOYEE_PROFILE_SUCCESS:
        return {
          loadiing: false,
          success: true,
          updateEmployeeProfile: action.payload,
        };
      case UPDATE_EMPLOYEE_PROFILE_FAILURE:
        return {
          loading: false,
          error: true,
          success: false,
        };
      default: {
        return state;
      }
    }
  };
  

  export const fetchEmployeesByMultipleLeandBuReducer = (
    state = { employeeInMultipleLeandBu: [] },
    action
  ) => {
    switch (action.type) {
      case  FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
        };
      case  FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_SUCCESS:
        return {
          loadiing: false,
          success: true,
          employeeInMultipleLeandBu: action.payload,
        };
      case FETCH_EMPLOYEE_BY_MULTIPLE_LE_AND_BU_FAILURE:
        return {
          loading: false,
          error: true,
          success: false,
        };
      default: {
        return state;
      }
    }
  };
  

  export const  employeeAppliedLoanReducer = (state = { employeeLoanApllied: [] }, action) => {
    switch (action.type) {
        case EMPLOYEE_LOAN_APPLIED_REQUEST:
            return {
                ...state,
                loading: true

            }
        case EMPLOYEE_LOAN_APPLIED_SUCCESS:
            return {
                loadiing: false,

                employeeLoanApllied: action.payload

            }
        case EMPLOYEE_LOAN_APPLIED_FAILURE:
            return {
                loading: false,
                error: true,
            }
        default: {
            return state

        }

    }
}