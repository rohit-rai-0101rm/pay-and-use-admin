import { AADHAR_KYC_STATUS_FAILURE } from "constants/kycApprovalConstants";
import { PAN_KYC_STATUS_SUCCESS } from "constants/kycApprovalConstants";
import { OVERALL_KYC_STATUS_REQUEST } from "constants/kycApprovalConstants";
import { OVERALL_KYC_STATUS_FAILURE } from "constants/kycApprovalConstants";
import { OVERALL_KYC_STATUS_SUCCESS } from "constants/kycApprovalConstants";
import { PAN_KYC_STATUS_FAILURE } from "constants/kycApprovalConstants";
import { PAN_KYC_STATUS_REQUEST } from "constants/kycApprovalConstants";
import { AADHAR_KYC_STATUS_SUCCESS } from "constants/kycApprovalConstants";
import { AADHAR_KYC_STATUS_REQUEST } from "constants/kycApprovalConstants";

export const kycAadhaReducer = (
    state = { aadharKycStatus: {} },
    action
  ) => {
    switch (action.type) {
      case AADHAR_KYC_STATUS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case AADHAR_KYC_STATUS_SUCCESS:
        return {
          loading: false,
          success: true,
          aadharKycStatus: action.payload,
        };
      case AADHAR_KYC_STATUS_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };

  export const kycPanReducer = (
    state = {panKycStatus: {} },
    action
  ) => {
    switch (action.type) {
      case PAN_KYC_STATUS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case PAN_KYC_STATUS_SUCCESS:
        return {
          loading: false,
          success: true,
          panKycStatus: action.payload,
        };
      case PAN_KYC_STATUS_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };

  export const overAllKycReducer = (
    state = {overAllKyc: {} },
    action
  ) => {
    switch (action.type) {
      case OVERALL_KYC_STATUS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case OVERALL_KYC_STATUS_SUCCESS:
        return {
          loading: false,
          success: true,
          overAllKyc: action.payload,
        };
      case OVERALL_KYC_STATUS_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };