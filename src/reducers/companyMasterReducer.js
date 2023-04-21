import { COMPANY_MASTER_LIST_FAILURE } from "constants/companyMasterConstants";
import { GET_SINGLE_COMPANY_MASTER_DETAILS_REQUEST } from "constants/companyMasterConstants";
import { GET_SINGLE_COMPANY_MASTER_DETAILS_SUCCESS } from "constants/companyMasterConstants";
import { GET_SINGLE_COMPANY_MASTER_DETAILS_FAILURE } from "constants/companyMasterConstants";
import { COMPANY_MASTER_LIST_SUCCESS } from "constants/companyMasterConstants";
import { COMPANY_MASTER_LIST_REQUEST } from "constants/companyMasterConstants";

export const companyMasterReducer=(state={companyMasterList:[]},action)=>{
    switch(action.type){
        case COMPANY_MASTER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMPANY_MASTER_LIST_SUCCESS :
      return {
        loading: false,
        companyMasterList: action.payload,
      };
    case COMPANY_MASTER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
      default:
        return state;
    }
}
export const singleCompanyMasterReducer=(state={companyMasterDetails:{}},action)=>{
  switch(action.type){
      case GET_SINGLE_COMPANY_MASTER_DETAILS_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case GET_SINGLE_COMPANY_MASTER_DETAILS_SUCCESS:
    return {
      loading: false,
      companyMasterDetails: action.payload,
    };
  case GET_SINGLE_COMPANY_MASTER_DETAILS_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
    
    default:
      return state;
  }
}