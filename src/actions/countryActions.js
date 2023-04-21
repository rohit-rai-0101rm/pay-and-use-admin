import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import {
    CREATE_COUNTRY_FAILURE,
    CREATE_COUNTRY_REQUEST,
    CREATE_COUNTRY_SUCCESS,
    DELETE_COUNTRY_FAILURE,
    DELETE_COUNTRY_REQUEST,
    DELETE_COUNTRY_SUCCESS,
    GET_COUNTRY_DETAILS_FAILURE,
    GET_COUNTRY_DETAILS_REQUEST,
    GET_COUNTRY_DETAILS_SUCCESS,
    UPDATE_COUNTRY_FAILURE,
    UPDATE_COUNTRY_REQUEST
} from "../constants/countryConstants";
export const createCountryApi = (countryCode, countryName, flag, token) => async (dispatch) => {
    try {
        console.log(countryCode, countryName, flag, token)
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        };
        dispatch({
            type: CREATE_COUNTRY_REQUEST,



        });
        const { data } = await axios.post(`${IP_ADDRESS}/api/mp-country-masters`, {
            countryCode, countryName, flag
        },
            config
        )
        console.log(data)
        dispatch({
            type: CREATE_COUNTRY_SUCCESS,
            payload: data
        })

    }
    catch (error) {

        dispatch({
            type: CREATE_COUNTRY_FAILURE,
            payload: error.response.data.message
        })
    }
}
export const updateCountry = (id, countryCode, countryName, flag, token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        };
        dispatch({
            type: UPDATE_COUNTRY_REQUEST

        })
        const { data } = await axios.put(`${IP_ADDRESS}/api/mp-country-masters/${id}`, {
            countryCode, countryName, flag
        },
            config


        )

    }
    catch (error) {
        dispatch({
            type: UPDATE_COUNTRY_FAILURE,
            payload: error.response.data.message
        })
    }

}

export const deleteCountry = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_COUNTRY_REQUEST
        })
        const { data } = await axios.delete(`${IP_ADDRESS}/api/mp-country-masters/${id}`)
        dispatch({
            type: DELETE_COUNTRY_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: DELETE_COUNTRY_FAILURE,
            payload: error.response.data.message
        })
    }
}
export const countryDetails = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_COUNTRY_DETAILS_REQUEST
        })
        const { data } = await axios.get(`http://`)
        dispatch({
            type: GET_COUNTRY_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: GET_COUNTRY_DETAILS_FAILURE,

            payload: error.response.data.message
        })
    }
}