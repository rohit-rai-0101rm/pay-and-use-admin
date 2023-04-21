
import { GET_ALL_EMPLOYEES_IN_BU_FAILURE } from "constants/EmployerConstants"
import { GET_PENDING_FOR_APPROVAL_IN_BU_SUCCESS } from "constants/EmployerConstants"
import { GET_COMPLETED_LOANS_IN_BU_REQUEST } from "constants/EmployerConstants"
import { GET_COMPLETED_LOANS_IN_BU_FAILURE } from "constants/EmployerConstants"
import { GET_APPROVED_LOANS_IN_BU_SUCCESS } from "constants/EmployerConstants"
import { GET_UNPAID_LOANS_IN_BU_REQUEST } from "constants/EmployerConstants"
import { GET_UNPAID_LOANS_IN_BU_FAILURE } from "constants/EmployerConstants"
import { GET_CURRENT_MONTH_DEDUCTIONS_IN_BU_SUCCESS } from "constants/EmployerConstants"
import { GET_CURRENT_MONTH_DEDUCTIONS_IN_BU_FAILURE } from "constants/EmployerConstants"
import { GET_CURRENT_MONTH_DEDUCTIONS_IN_BU_REQUEST } from "constants/EmployerConstants"
import { GET_UNPAID_LOANS_IN_BU_SUCCESS } from "constants/EmployerConstants"
import { GET_APPROVED_LOANS_IN_BU_FAILURE } from "constants/EmployerConstants"
import { GET_APPROVED_LOANS_IN_BU_REQUEST } from "constants/EmployerConstants"
import { GET_COMPLETED_LOANS_IN_BU_SUCCESS } from "constants/EmployerConstants"
import { GET_PENDING_FOR_APPROVAL_IN_BU_FAILURE } from "constants/EmployerConstants"
import { GET_PENDING_FOR_APPROVAL_IN_BU_REQUEST } from "constants/EmployerConstants"
import { GET_ALL_EMPLOYEES_IN_BU_SUCCESS } from "constants/EmployerConstants"
import { GET_ALL_EMPLOYEES_IN_BU_REQUEST } from "constants/EmployerConstants"

export const allEmployeesInBuReducer = (state = { employeesInBu: [] }, action) => {
    switch (action.type) {
        case GET_ALL_EMPLOYEES_IN_BU_REQUEST:
            return {
                ...state,
                loading: true,
                success:false

            }
        case GET_ALL_EMPLOYEES_IN_BU_SUCCESS:
            return {
                loadiing: false,

                employeesInBu: action.payload,
                success:true


            }
        case GET_ALL_EMPLOYEES_IN_BU_FAILURE:
            return {
                loading: false,
                error: action.payload,
                success:false

            }
        default: {
            return state

        }

    }
}


export const  pendingForApprovalInBuReducer = (state = { pendingForApproval: [] }, action) => {
    switch (action.type) {
        case GET_PENDING_FOR_APPROVAL_IN_BU_REQUEST:
            return {
                ...state,
                loading: true

            }
        case GET_PENDING_FOR_APPROVAL_IN_BU_SUCCESS:
            return {
                loadiing: false,

                pendingForApproval: action.payload

            }
        case GET_PENDING_FOR_APPROVAL_IN_BU_FAILURE:
            return {
                loading: false,
                error: true,
            }
        default: {
            return state

        }

    }
}




export const  completedLoansInBuReducer = (state = { completedLoans: [] }, action) => {
    switch (action.type) {
        case GET_COMPLETED_LOANS_IN_BU_REQUEST:
            return {
                ...state,
                loading: true

            }
        case GET_COMPLETED_LOANS_IN_BU_SUCCESS:
            return {
                loadiing: false,

                completedLoans: action.payload

            }
        case GET_COMPLETED_LOANS_IN_BU_FAILURE:
            return {
                loading: false,
                error: true,
            }
        default: {
            return state

        }

    }
}


export const  approvedLoansInBuReducer = (state = { completedLoans: [] }, action) => {
    switch (action.type) {
        case GET_APPROVED_LOANS_IN_BU_REQUEST:
            return {
                ...state,
                loading: true

            }
        case GET_APPROVED_LOANS_IN_BU_SUCCESS:
            return {
                loadiing: false,

                completedLoans: action.payload

            }
        case GET_APPROVED_LOANS_IN_BU_FAILURE:
            return {
                loading: false,
                error: true,
            }
        default: {
            return state

        }

    }
}


export const  unpaidLoansInBuReducer = (state = { unpaidLoans: [] }, action) => {
    switch (action.type) {
        case GET_UNPAID_LOANS_IN_BU_REQUEST:
            return {
                ...state,
                loading: true

            }
        case GET_UNPAID_LOANS_IN_BU_SUCCESS:
            return {
                loadiing: false,

                unpaidLoans: action.payload

            }
        case GET_UNPAID_LOANS_IN_BU_FAILURE:
            return {
                loading: false,
                error: true,
            }
        default: {
            return state

        }

    }
}

export const  currentMonthDeductionsInBuReducer = (state = { currentMonthDeduction: [] }, action) => {
    switch (action.type) {
        case GET_CURRENT_MONTH_DEDUCTIONS_IN_BU_REQUEST:
            return {
                ...state,
                loading: true

            }
        case GET_CURRENT_MONTH_DEDUCTIONS_IN_BU_SUCCESS:
            return {
                loadiing: false,

                unpaidLoans: action.payload

            }
        case GET_CURRENT_MONTH_DEDUCTIONS_IN_BU_FAILURE:
            return {
                loading: false,
                error: true,
            }
        default: {
            return state

        }

    }
}


