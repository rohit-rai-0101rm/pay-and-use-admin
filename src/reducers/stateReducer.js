import { CREATE_STATE_FAILURE, CREATE_STATE_REQUEST, CREATE_STATE_SUCCESS, DELETE_STATE_FAILURE, DELETE_STATE_REQUEST, DELETE_STATE_SUCCESS, GET_STATE_DETAILS_FAIL, GET_STATE_DETAILS_FAILURE, GET_STATE_DETAILS_REQUEST, GET_STATE_DETAILS_SUCCESS, UPDATE_STATE_FAILURE, UPDATE_STATE_REQUEST, UPDATE_STATE_SUCCESS } from "../constants/stateConstants";

export const stateReducer = (state = { state: {} }, action) => {
  switch (action.type) {
    case CREATE_STATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_STATE_SUCCESS:
      return {
        loading: false,
        state: action.payload,
      };
    case CREATE_STATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case UPDATE_STATE_REQUEST:
       case   DELETE_STATE_REQUEST: 
        return {
            ...state,
            loading: true,

        }
        case UPDATE_STATE_SUCCESS:
            return{
                ...state,
                loading:false,

                
            
            }
            case UPDATE_STATE_FAILURE:
                case DELETE_STATE_FAILURE:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
                case DELETE_STATE_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        isDeleted:action.payload
                    }
      default:
        return state;
  }
};

export const stateDetailsReducer=(state={stateDetails:{}},action)=>{
  switch(action.type){
      case GET_STATE_DETAILS_REQUEST:{
          return {
              loading:true,
              ...state
          }
      };
      case GET_STATE_DETAILS_SUCCESS:{
          return{
              loading:false,
              product:action.payload
  
  
          };
      }
          case GET_STATE_DETAILS_FAILURE:{
              return{
                  loading:true,
                   error:action.payload
              }
          }
          
          default:{
              return state
          } 
      }
  }