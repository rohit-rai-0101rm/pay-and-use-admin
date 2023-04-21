import { CREATE_COUNTRY_FAILURE, CREATE_COUNTRY_REQUEST, CREATE_COUNTRY_SUCCESS, GET_COUNTRY_DETAILS_FAILURE, GET_COUNTRY_DETAILS_REQUEST, GET_COUNTRY_DETAILS_SUCCESS } from "../constants/countryConstants"
import { CREATE_STATE_SUCCESS } from "../constants/stateConstants"

export const countryReducer = (state = { country: [] }, action) => {
    switch (action.type) {
        case CREATE_COUNTRY_REQUEST:
            return {
                ...state,
                loading: true

            }
        case CREATE_COUNTRY_SUCCESS:
            return {
                loadiing: false,

                country: action.payload

            }
        case CREATE_COUNTRY_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default: {
            return state

        }

    }
}


export const countryDetailsReducer = (state = { countryDetails: {} }, action) => {
    switch (action.type) {
        case GET_COUNTRY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true

            }
        case GET_COUNTRY_DETAILS_SUCCESS:
            return {
                loadiing: false,

                countryDetails: action.payload.country

            }
        case GET_COUNTRY_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
            
        default: {
            return state

        }

    }
}