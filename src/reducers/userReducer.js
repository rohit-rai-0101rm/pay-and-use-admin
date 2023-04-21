import { LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/userConstants";

export const userReducer = (state = {user:{}}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
           
            return{
                loading:true,
                isAuthenticated:false
            }
            case LOGIN_SUCCESS:
             
                return {
                  
                    loading:false,
                    error:false,
                    isAuthenticated:true,
                    user:action.payload
                }
                case LOGIN_FAILURE:{
                    return {
                        ...state,
                        loading:false,
                        isAuthenticated:false,
                      
                        error:true
                    }
                }
                
                default:
                    return state;
            
    }
}