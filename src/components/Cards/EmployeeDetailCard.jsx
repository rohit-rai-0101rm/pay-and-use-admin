import { Typography } from "@mui/material";
import { employeePanDownloadApi } from "actions/filesDownloadActions";
import { employeeAadharDownloadApi } from "actions/filesDownloadActions";
import AadharFileUploadTable from "components/Table/AadharFileUploadTable";
import PanFileUploadTable from "components/Table/PanFileUploadTable";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProfile from "./CardProfile";
import HrApprovalEmpProfile from "./HrApprovalEmpProfile";

// components

export default function EmployeeDetailCard({
    description,
    code,
    employeeInformation,
}) {
    const [enableAdharDownload, setEnableAdharDownload] = useState(null);

    const [enablePanDownload, setEnablePanDownload] = useState(null);
    const [aadharUploaded, setAadharUploaded] = useState(false);
    const [panUploaded, setPanUploaded] = useState(false);

    const { id,
        aadharFile,
        panFile,
        firstName,
        lastName,
        empCode,
        mpBusinessUnit,
        mpCompanyGroupMaster,
        fatherName,
    } = employeeInformation;
    console.log(id)
    const { file } = useSelector((state) => state.filesDownload);
   
    const base64 = file;
    if (aadharFile && aadharFile == null) {
        setEnableAdharDownload(false);
    }
    if (panFile && panFile == null) {
        setEnablePanDownload(false);
    }
    const dispatch = useDispatch();
    const downloadPan = () => {
        dispatch(employeePanDownloadApi(code, description));
    };

    const downloadAdhaar = () => {
        dispatch(employeeAadharDownloadApi(code, description));
    };
    const viewBureauScore = () => {
    };
    const uploadAdhaar = () => {
        setAadharUploaded(true);
    };
    const uploadPan = () => {
        setPanUploaded(true);
    };
   
    const color = "light"
    
    return (
        <>
            <HrApprovalEmpProfile description={empCode} code={employeeInformation?.buCode} employeeInformation={employeeInformation} />

        </>
    );
}
