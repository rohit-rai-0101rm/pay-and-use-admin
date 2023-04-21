import { CREATE_BU_IN_A_COMPANY_FAILURE } from "constants/buInACompanyconstants";
import { CREATE_BU_IN_A_COMPANY_SUCCESS } from "constants/buInACompanyconstants";
import { CREATE_BU_IN_A_COMPANY_REQUEST } from "constants/buInACompanyconstants";

export const BuInaCompanyReducer=(state={buInACompany:{}},action)=>{
    switch(action.type){
        case CREATE_BU_IN_A_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BU_IN_A_COMPANY_SUCCESS:
      return {
        loading: false,
        error:false,
        success:true,
        buInACompany: action.payload,
      };
    case CREATE_BU_IN_A_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
 
       
       
      default:
        return state;
    }
}



