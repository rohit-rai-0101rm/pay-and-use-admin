export const aadharReducer = (state = { country: [] }, action) => {
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