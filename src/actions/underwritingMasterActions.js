import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { UNDERWRITING_MASTER_SAVE_SUCCESS } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_SAVE_FAILURE } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_SAVE_REQUEST } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_FAILURE } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_SUCCESS } from "constants/underwritingConstants";
import { UNDERWRITING_MASTER_REQUEST } from "constants/underwritingConstants";

export const underwritingMasterApi = (loanId) => async (dispatch) => {
    const token = sessionStorage.getItem("user");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-total-Count": 73,
      },
    };
  try {
    dispatch({
      type: UNDERWRITING_MASTER_REQUEST,
    });
    const { data } = await axios.get(`${IP_ADDRESS}/api/mp-loan-requests-underwriting-fetch/${loanId}`,
    config
    );
    dispatch({
      type: UNDERWRITING_MASTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UNDERWRITING_MASTER_FAILURE,
     
    });
  }
};
export const underwritingMasterSaveApi = (id,approvedFlag,underwritingDetailsBeans) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-total-Count": 73,
    },
  };
try {
  dispatch({
    type: UNDERWRITING_MASTER_SAVE_REQUEST,
  });
  const { data } = await axios.post(`${IP_ADDRESS}/api/mp-loan-requests-underwriting-save`,
  {id,approvedFlag,underwritingDetailsBeans},
  config
  );
  dispatch({
    type: UNDERWRITING_MASTER_SAVE_SUCCESS,
    payload: data,
  });
} catch (error) {
  dispatch({
    type: UNDERWRITING_MASTER_SAVE_FAILURE,
   
  });
}
};