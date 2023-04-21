import { GET_CODES_FAILURE } from "constants/codeConstants";
import { GET_CODES_SUCCESS } from "constants/codeConstants";
import { GET_CODES_REQUEST } from "constants/codeConstants";
import { GET_GROUP_CODES_SUCCESS } from "constants/groupEntityConstants";
import { GET_GROUP_CODES_REQUEST } from "constants/groupEntityConstants";

export const codesReducer=(state={codesList:[]},action)=>{
    switch(action.type){
        case GET_CODES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CODES_SUCCESS:
      return {
        loading: false,
        codesList: action.payload,
      };
    case GET_CODES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

        
            
               
      default:
        return state;
    }
}

export const GroupCodesReducer=(state={groupCodesList:[]},action)=>{
  switch(action.type){
      case GET_GROUP_CODES_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case GET_GROUP_CODES_SUCCESS:
    return {
      loading: false,
      groupCodesList: action.payload,
    };
  case GET_CODES_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };

      
          
             
    default:
      return state;
  }
}