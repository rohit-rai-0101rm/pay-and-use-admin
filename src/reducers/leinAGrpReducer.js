import { CREATE_LE_IN_A_GRP_FAILURE } from "constants/createLeinAGrpConstants";
import { CREATE_LE_IN_A_GRP_SUCCESS } from "constants/createLeinAGrpConstants";
import { CREATE_LE_IN_A_GRP_REQUEST } from "constants/createLeinAGrpConstants";

export const LegalEntityInaGrpReducer=(state={legalEntityinAGrp:{}},action)=>{
    switch(action.type){
        case CREATE_LE_IN_A_GRP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_LE_IN_A_GRP_SUCCESS:
      return {
        loading: false,
        error:false,
        success:true,
        legalEntityinAGrp: action.payload,
      };
    case CREATE_LE_IN_A_GRP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
 
       
       
      default:
        return state;
    }
}



