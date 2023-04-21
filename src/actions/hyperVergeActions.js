import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { appId } from "constants/config";
import { AppKey } from "constants/config";
import { VALIDATE_PAN_WITH_NSDL_FAILURE } from "constants/hypervergeConstants";
import { VALIDATE_PAN_WITH_NSDL_SUCCESS } from "constants/hypervergeConstants";
import { VALIDATE_PAN_WITH_NSDL_REQUEST } from "constants/hypervergeConstants";
import moment from "moment";

export const centralDBCheckApi = (pan, dob, name) => async (dispatch) => {
  const token = sessionStorage.getItem("user");
  const dd = moment(dob).format();
  console.log(dd);
  const appId = "0ab561";
  const appKey = "01991547e3b124906a44";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-TOTAL-COUNT": "73",
    },
  };
  console.log(pan, name, dob);
  console.log(token);

  try {
    dispatch({ type: VALIDATE_PAN_WITH_NSDL_REQUEST });
    console.log(token);

    const { data } = await axios.post(
      `${IP_ADDRESS}/api/central-db-check`,
      { pan },
      config
    );

    dispatch({
      type: VALIDATE_PAN_WITH_NSDL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VALIDATE_PAN_WITH_NSDL_FAILURE,
    });
  }
};
