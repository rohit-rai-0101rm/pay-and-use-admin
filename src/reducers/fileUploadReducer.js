import { UPLOAD_AADHAR_FAILURE } from "constants/FileUploadConstants"
import { UPLOAD_PAN_SUCCESS } from "constants/FileUploadConstants"
import { UPLOAD_AADHAR__BACK_FAILURE } from "constants/FileUploadConstants"
import { UPLOAD_AADHAR_BACK_REQUEST } from "constants/FileUploadConstants"
import { UPLOAD_AADHAR__BACK_SUCCESS } from "constants/FileUploadConstants"
import { UPLOAD_PAN_FAILURE } from "constants/FileUploadConstants"
import { UPLOAD_PAN_REQUEST } from "constants/FileUploadConstants"
import { UPLOAD_AADHAR_SUCCESS } from "constants/FileUploadConstants"
import { UPLOAD_AADHAR_REQUEST } from "constants/FileUploadConstants"

export const aadharUploadReducer = (state = { aadharImage: {} }, action) => {
    switch (action.type) {
        case UPLOAD_AADHAR_REQUEST:
            return {
                ...state,
                loading: true

            }
        case UPLOAD_AADHAR_SUCCESS:
        
            return {
                loading: false,

                file: action.payload

            }
   
            case UPLOAD_AADHAR_FAILURE:
            return {
                loading: false,
                error: true
            }
        default: {
            return state

        }

    }
}


export const panUploadReducer = (state = { panImage: {} }, action) => {
    switch (action.type) {
        case UPLOAD_PAN_REQUEST:
            return {
                ...state,
                loading: true

            }
        case UPLOAD_PAN_SUCCESS:
        
            return {
                loading: false,

                file: action.payload

            }
   
            case UPLOAD_PAN_FAILURE:
            return {
                loading: false,
                error: true
            }
        default: {
            return state

        }

    }
}



export const aadharBackUploadReducer = (state = { aadharBackImage: {} }, action) => {
    switch (action.type) {
        case UPLOAD_AADHAR_BACK_REQUEST:
            return {
                ...state,
                loading: true

            }
        case UPLOAD_AADHAR__BACK_SUCCESS:
        
            return {
                loading: false,

                file: action.payload

            }
   
            case UPLOAD_AADHAR__BACK_FAILURE:
            return {
                loading: false,
                error: true
            }
        default: {
            return state

        }

    }
}
