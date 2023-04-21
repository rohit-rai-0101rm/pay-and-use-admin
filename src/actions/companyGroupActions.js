import axios from "axios";
import { IP_ADDRESS } from "constants/config";
import { CREATE_COMPANY_GROUP_FAILURE, CREATE_COMPANY_GROUP_REQUEST, CREATE_COMPANY_GROUP_SUCCESS, DELETE_COMPANY_GROUP_FAILURE, DELETE_COMPANY_GROUP_REQUEST, DELETE_COMPANY_GROUP_SUCCESS, GET_COMPANY_GROUP_DETAILS_FAILURE, GET_COMPANY_GROUP_DETAILS_REQUEST, GET_COMPANY_GROUP_DETAILS_SUCCESS, UPDATE_COMPANY_GROUP_FAILURE, UPDATE_COMPANY_GROUP_REQUEST } from "../constants/companyGroupConstants";

export const createCompanyGroupApi = (groupCode, groupName, flag) => async (dispatch) => {
   const flag="Y"
   const token=sessionStorage.getItem('user')
    try {
        console.log(groupCode, groupName, flag)
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        };
        dispatch({
            type: CREATE_COMPANY_GROUP_REQUEST,



        });
        const { data } = await axios.post(`${IP_ADDRESS}/api/mp-company-group-masters`, {
            groupCode, groupName, flag
        },
            config
        )
        console.log(data)
        dispatch({
            type: CREATE_COMPANY_GROUP_SUCCESS,
            payload: data
        })

    }
    catch (error) {

        dispatch({
            type: CREATE_COMPANY_GROUP_FAILURE,
            payload: error.response.data.message
        })
    }
}
export const updateCountryGroup = (id, countryCode, countryName, flag, token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        };
        dispatch({
            type: UPDATE_COMPANY_GROUP_REQUEST

        })
        const { data } = await axios.put(`${IP_ADDRESS}/api/mp-country-masters/${id}`, {
            countryCode, countryName, flag
        },
            config


        )

    }
    catch (error) {
        dispatch({
            type: UPDATE_COMPANY_GROUP_FAILURE,
            payload: error.response.data.message
        })
    }

}

export const deleteCountry = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_COMPANY_GROUP_REQUEST
        })
        const { data } = await axios.delete(`${IP_ADDRESS}/api/mp-country-masters/${id}`)
        dispatch({
            type: DELETE_COMPANY_GROUP_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: DELETE_COMPANY_GROUP_FAILURE,
            payload: error.response.data.message
        })
    }
}
export const countryDetails = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_COMPANY_GROUP_DETAILS_REQUEST
        })
        const { data } = await axios.get(`http://`)
        dispatch({
            type: GET_COMPANY_GROUP_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: GET_COMPANY_GROUP_DETAILS_FAILURE,

            payload: error.response.data.message
        })
    }
}
