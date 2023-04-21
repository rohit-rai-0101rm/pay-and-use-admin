import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/userConstants";

export const login = (username, password, rememberMe) => async (dispatch) => {

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain",
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods":
        "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",
    },
  };

  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post(
      `${IP_ADDRESS}/api/authenticate`,
      { username, password, rememberMe },
      config
    );
    //console.log(data.id_token);
    //setCookie("user", data.id_token, { path: "/" });
window.sessionStorage.setItem("user", data.id_token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      
    });
  }
};
