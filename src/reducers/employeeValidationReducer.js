import { SAVE_BU_PRODUCT_FAILURE } from "constants/BuisnessUnitConstants"
import { VALIDATE_EMPLOYEE_FAILURE } from "constants/EmployeeConstants"
import { VALIDATE_EMPLOYEE_SUCCESS } from "constants/EmployeeConstants"
import { SAVE_EMPLOYEES_POST_VALIDATION_SUCCESS } from "constants/validationConstants"
import { SAVE_EMPLOYEES_POST_VALIDATION_REQUEST } from "constants/validationConstants"
import { VALIDATE_EMPLOYEES_SUCCESS } from "constants/validationConstants"
import { VALIDATE_EMPLOYEES_REQUEST } from "constants/validationConstants"

export const employeeValidationReducer = (state = { employeeValidationApiResponse: [] }, action) => {
    switch (action.type) {
        case VALIDATE_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true

            }
        case VALIDATE_EMPLOYEES_SUCCESS:
            return {
                loadiing: false,

                employeeValidationApiResponse: action.payload

            }
        case VALIDATE_EMPLOYEE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
            
        default: {
            return state

        }

    }
}
export const saveEmployeePostValidationReducer = (state = { saveEmployeePostValidation: [] }, action) => {
    switch (action.type) {
        case SAVE_EMPLOYEES_POST_VALIDATION_REQUEST:
            return {
                ...state,
                loading: true,
                success:true,


            }
        case SAVE_EMPLOYEES_POST_VALIDATION_SUCCESS:
            return {
                loadiing: false,
                success:true,

                saveEmployeePostValidation: action.payload

            }
        case SAVE_BU_PRODUCT_FAILURE:
            return {
                loading: false,
                success:true,

                error: action.payload
            }
            
        default: {
            return state

        }

    }
}