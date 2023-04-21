import axios from "axios";
import { LIST_DETAILS_FAILURE, LIST_DETAILS_REQUEST, LIST_DETAILS_SUCCESS, LIST_FAILURE, LIST_SUCCESS } from "../constants/listConstants";
export const getList=(code,description,sort,sortType,size,pageNo,token)=>async(dispatch)=>{
    try{
        console.log(code,token)
        const config = {
            headers: {

              "Authorization" :`Bearer ${token}`,
              "X-total-Count":73
            },
          };
        

        const {data:list}=await axios.post(`${IP_ADDRESS}/api/mp-state-masters-filter`,{
            code,description,sort,sortType,size,pageNo

        },
        config
        
        )
        console.log(list)
        dispatch({
            type:LIST_SUCCESS,
            payload:list
        })
    }
    catch(error){
        dispatch({
            type:LIST_FAILURE,
            payload:error.response.data.message
        })
    }
}
export const countryDetails=()=>async(dispatch)=>{
    try{
        dispatch({
            type:LIST_DETAILS_REQUEST,
        })
        const{data}=await axios.get(`http://`)
        dispatch({
            type:LIST_DETAILS_SUCCESS,
            payload:data
        })
        
    }
    catch(error){
        dispatch({
            type:LIST_DETAILS_FAILURE,
            payload:error.response.data.message
        })
    }

}

