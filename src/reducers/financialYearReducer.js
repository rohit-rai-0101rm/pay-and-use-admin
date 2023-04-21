import { GET_FINANCIAL_YEAR_FAILURE } from "constants/financialYearConstants"
import { GET_FINANCIAL_YEAR_SUCCESS } from "constants/financialYearConstants"
import { GET_FINANCIAL_YEAR_REQUEST } from "constants/financialYearConstants"

export const financialYearReducer = (state = { financialYear: [] }, action) => {
    switch (action.type) {
        case GET_FINANCIAL_YEAR_REQUEST:
            return {
                ...state,
                loading: true

            }
        case GET_FINANCIAL_YEAR_SUCCESS:
            return {
                loadiing: false,

                financialYear: action.payload

            }
        case GET_FINANCIAL_YEAR_FAILURE:
            return {
                loading: false,
                error: true
            }
        default: {
            return state

        }

    }
}
