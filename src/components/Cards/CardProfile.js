import { Typography } from "@mui/material";
import { employeePanDownloadApi } from "actions/filesDownloadActions";
import { employeeAadharDownloadApi } from "actions/filesDownloadActions";
import AadharBackUploadTable from "components/Table/AadharBackUploadTable";
import AadharFileUploadTable from "components/Table/AadharFileUploadTable";
import PanFileUploadTable from "components/Table/PanFileUploadTable";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloudUpload } from "react-icons/ai";

// components

export default function CardProfile({
  description,
  code,
  employeeInformation,
}) {
  console.log("employeeProfileprofile", employeeInformation);
  const [enableAdharDownload, setEnableAdharDownload] = useState(null);
  const [enablePanDownload, setEnablePanDownload] = useState(null);
  const [aadharUploaded, setAadharUploaded] = useState(false);
  const [panUploaded, setPanUploaded] = useState(false);
  const [aadharBackUploaded, setAadharBackUploaded] = useState(false);

  const {
    id,
    aadharFile,
    panFile,
    firstName,
    buDescription,
    legalDescription,
    groupDescription,
    lastName,
    empCode,
    groupCode,
    mpBusinessUnit,
    mpCompanyGroupMaster,
    fatherName,
    aadharBackFile,
  } = employeeInformation;
  console.log(id);
  const { file } = useSelector((state) => state.filesDownload);
  console.log("aadharcard", aadharFile);
  console.log("pancard", panFile);

  console.log("aadharBackFile", aadharBackFile);

  const base64 = file;
  if (aadharFile && aadharFile == null) {
    setEnableAdharDownload(false);
  }
  if (panFile && panFile == null) {
    setEnablePanDownload(false);
  }
  console.log("file", file);
  const dispatch = useDispatch();
  const downloadPan = () => {
    dispatch(employeePanDownloadApi(code, description));
  };

  const downloadAdhaar = () => {
    console.log(code, description);
    dispatch(employeeAadharDownloadApi(code, description));
  };
  const viewBureauScore = () => {
    console.log("viewBureauScore");
  };
  console.log(file);
  const uploadAdhaar = () => {
    setAadharUploaded(true);
  };

  const uploadAdhaarBack = () => {
    setAadharBackUploaded(true);
  };

  const uploadPan = () => {
    setPanUploaded(true);
  };
  console.log("aadharUploaded", aadharUploaded);
  console.log("panUploaded", panUploaded);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
        <div className="px-6">
          <div className="text-left mt-12 ont-bold">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {firstName} {lastName} s/o {fatherName}
            </h3>
            <div className="text-sm  leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              Employee Code - {empCode}
            </div>
            <div className="mb-2 font-bold text-blueGray-600 mt-10">
              <i className="fas font-bold fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              {"Buisness Unit"} {buDescription}
            </div>
            <div className="mb-2 font-bold text-blueGray-600 mt-4">
              <i className="fas font-bold fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              {"Legal Entity"} {legalDescription}
            </div>
            <div className="mb-2 font-bold text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              {"Group:"} {groupDescription}
            </div>
            <div className="mb-2 text-blueGray-600 font-bold">
              <i className="fas fa-coins mr-2 text-lg text-blueGray-400"></i>
              {"Monthly Take Home"} {"₹"}
              {employeeInformation?.ctcPm}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12">
                <div>
                  <center>
                    <div className=" py-4 w-full lg:w-9/12 px-4">
                      <button
                        onClick={uploadAdhaar}
                        class="w-full  h-12  text-white transition-colors duration-150 bg-theme rounded-lg focus:shadow-outline hover:bg-indigo-800"
                      >
                        UPLOAD AADHAR FRONT
                      </button>
                    </div>
                    <div className=" py-4 w-full lg:w-9/12 px-4">
                      <button
                        onClick={uploadAdhaarBack}
                        class="w-full  h-12 text-white transition-colors duration-150 bg-theme rounded-lg focus:shadow-outline hover:bg-indigo-800"
                      >
                        {aadharBackFile == null
                          ? "UPLOAD AADHAR BACK"
                          : "VIEW AADHAR BACK"}
                      </button>
                    </div>
                    
                    
                      <div className=" py-4 w-full lg:w-9/12 px-4">
                        <button
                          onClick={ uploadPan }
                          class="w-full  h-12 text-white transition-colors bg-theme duration-150  rounded-lg focus:shadow-outline hover:bg-indigo-800"
                        >
                    UPLOAD PAN
                        </button>
                      </div>
                    
                  </center>
                </div>
              </div>
              {aadharUploaded && <AadharFileUploadTable />}
              {panUploaded && <PanFileUploadTable />}
              {aadharBackUploaded && <AadharBackUploadTable />}

              <div className=" py-4 w-full lg:w-9/12 px-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
