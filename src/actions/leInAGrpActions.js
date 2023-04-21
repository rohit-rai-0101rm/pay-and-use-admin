import { IP_ADDRESS } from "constants/config";
import { CREATE_LE_IN_A_GRP_FAILURE } from "constants/createLeinAGrpConstants";
import { CREATE_LE_IN_A_GRP_SUCCESS } from "constants/createLeinAGrpConstants";
import { CREATE_LE_IN_A_GRP_REQUEST } from "constants/createLeinAGrpConstants";


const token = sessionStorage.getItem("user");
export const createLegalEntityinAGrpApi =
  (
    formData,companyGroupCode,flag
  ) =>
  async (dispatch) => {
    console.log(flag)
    
    try {
      console.log(token);
      dispatch({ type: CREATE_LE_IN_A_GRP_REQUEST });
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${IP_ADDRESS}/api/mp-company-masters`,
        {
          ...formData,
          companyGroupCode,
          flag
        },
        config
      );
      console.log(data);
      dispatch({
        type: CREATE_LE_IN_A_GRP_SUCCESS,
        payload: data,
       
      });
    } catch (error) {
      dispatch({
        type:CREATE_LE_IN_A_GRP_FAILURE,
      
      });
    }
  };

