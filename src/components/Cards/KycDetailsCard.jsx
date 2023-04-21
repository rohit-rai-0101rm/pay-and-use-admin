import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoanHistoryCardTable from "components/Table/LoanHistoryTable";
import ProductTable from "components/Table/ProductTable";
import { useParams } from "react-router";
import { employeePanDownloadApi } from "actions/filesDownloadActions";
import { useDispatch, useSelector } from "react-redux";
// components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { employeeAadharDownloadApi } from "actions/filesDownloadActions";
import AadharValidationCard from "./AadharValidationCard";
import PanValidationCard from "./PanValidationCard";
import ProgressBar from "@ramonak/react-progress-bar";
import LoanCard from "components/Headers/LoanCard";
import { useAlert } from "react-alert";
import { employeeAadharBackDownloadApi } from "actions/filesDownloadActions";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { makeStyles } from "@mui/styles";
import { kycAadharApprovalApi } from "actions/loanActions";
import { kycPanApprovalApi } from "actions/loanActions";
import { centralDBCheckApi } from "actions/hyperVergeActions";
import { centralDbApprovalApi } from "actions/loanActions";
import { overAllKycApprovalApi } from "actions/loanActions";
import Loader from "layouts/Loader/Loader";

export default function KycDetailsCard({ employeeInformation }) {
    const { loading, success, error, centralDBCheck, list } = useSelector((state) => state.hyperverge)
    const { loading: aadharKycLoading, success: aadharKycSuccess, aadharKycStatus } = useSelector((state) => state.aadharKyc)
    const { loading: panKycLoading, success: panKycSuccess, panKycStatus } = useSelector((state) => state.panKyc)

    const { loading: centralDbCheckLoading, success: centralDbCheckSuccess, centralDbCheck } = useSelector((state) => state.centralDbCheck)

    const { loading: overAllKycLoading, success: overAllKycSuccess, overAllKyc } = useSelector((state) => state.overAllKyc)


    const loanId = localStorage.getItem("selectedloanId")

    const [aadharApprovalFlag, setAadharApprovalFlag] = useState(null)
    const [panApprovalFlag, setPanApprovalFlag] = useState(null)
    const [centralDbFlag, setCentralDbFlag] = useState(null)
    const [overallKycFlag, setOverallKycFlag] = useState(null)
    const useStyles = makeStyles({
        root: {
            maxWidth: 310,
            transition: "transform 0.15s ease-in-out"
        },
        cardHovered: {
            transform: "scale3d(2.05, 2.05, 1)"
        }
    });
    const { file } = useSelector((state) => state.filesDownload);
    const { loadiing, aadharImage } = useSelector(
        (state) => state.aadharDownload
    );
    const { aadharBackImage } = useSelector((state) => state.aadharBackDownload);
    const alert = useAlert()
    const [isAadharApproved, setIsAadharApproved] = useState(false);
    const [isHold, setIsHold] = useState(false);
    const [isRejected, setIsRejected] = useState(false);
    const [upload, setUpload] = useState(false)
    console.log("employeeInformation", employeeInformation);
    var { empCode, buCode } = useParams();
    const dispatch = useDispatch();
    const {
        aadhar,
        aadharFile,
        acNumber,
        bankIfsc,
        bankName,
        commAddressLine1,
        commAddressLine2,
        commCity,
        commCountry,
        authorized,
        commPincode,
        commState,
        commTown,
        createdBy,
        createdDate,
        ctcPa,
        ctcPm,
        designation,
        dob,
        doj,
        email,
        empCode: code,
        fatherName,
        firstName,
        id,
        isEsi,
        isPf,
        lastName,
        maritalStatus,
        salaryCycle,
        dot,
        mobile,
        pan,
        panFile,
        perAddressLine1,
        perAddressLine2,
        perCity,
        perCountry,
        perPincode,
        perState,
        perTown,
        mpBusinessUnit,
        mpCompanyGroupMaster,
        mpCompanyMaster,
        pfUan,

        noChildren,
    } = employeeInformation;
    useEffect(() => { });
    console.log(empCode, buCode);

    const [progressStatus, setProgressStatus] = useState(0);
    useEffect(() => {
        dispatch(employeePanDownloadApi(buCode, empCode));

        dispatch(employeeAadharDownloadApi(buCode, empCode));
    }, [dispatch, buCode, empCode]);

    const calc = () => {
        setProgressStatus(progressStatus + 33);
    }
    const getCustomLabel = (progressStatus) => {
        switch (progressStatus) {
            case 0:
                return "Aadhar";
            case 33:
                return "Pan";
            case 66:
                return "NSDL";
            case 100:
                return "Done";
        }
    }

    const getBgColor = (progressStatus) => {
        switch (progressStatus) {
            case 0:
                return "#FF0000";
            case 33:
                return "#FFFF00";
            case 66:
                return "#FFFF00";
            case 100:
                return "bg-success";
        }
    }
    const approveAadhar = () => {
        setProgressStatus(progressStatus + 25)


        dispatch(kycAadharApprovalApi(loanId, "Y"))

    }
    const rejectAadhar = () => {

        dispatch(kycAadharApprovalApi(loanId, "N"))

    }
    const holdAadhar = () => {

        dispatch(kycAadharApprovalApi(loanId, "Z"))

    }
    const approvePan = () => {
        setProgressStatus(progressStatus + 25)


        dispatch(kycPanApprovalApi(loanId, "Y"))

    }
    const rejectPan = () => {

        dispatch(kycPanApprovalApi(loanId, "N"))

    }
    const holdPan = () => {

        dispatch(kycPanApprovalApi(loanId, "Z"))

    }




    const approveCentralDb = () => {
        setProgressStatus(progressStatus + 25)
        dispatch(centralDbApprovalApi(loanId, "Y"))


    }
    const rejectCentralDb = () => {
        dispatch(centralDbApprovalApi(loanId, "N"))


    }

    const submitOverAllKyc = () => {
        dispatch(overAllKycApprovalApi(loanId, overallKycFlag))

    }
    const approveOverAllKyc = () => {
        setProgressStatus(progressStatus + 25)
        dispatch(overAllKycApprovalApi(loanId, "Y"))

    }
    const rejectOverAllKyc = () => {
        dispatch(overAllKycApprovalApi(loanId, "N"))

    }
    useEffect(() => {
        if (aadharKycSuccess) {
            alert.success("aadhar status saved")
        }

        if (panKycSuccess) {
            alert.success("pan status saved")



        }
        if (centralDbCheckSuccess) {
            alert.success("central dbCheck status saved")

        }
        if (overAllKycSuccess) {
            alert.success("overall kyc status saved")

        }
        dispatch(employeePanDownloadApi(buCode, empCode));

        dispatch(employeeAadharDownloadApi(buCode, empCode));
        dispatch(employeeAadharBackDownloadApi(buCode, empCode));
    }, [dispatch, buCode, empCode, aadharKycSuccess, panKycSuccess, centralDbCheckSuccess]);
    const classes = useStyles();
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    });
    const [state1, setState1] = useState({
        raised: false,
        shadow: 1,
    });

    const [state2, setState2] = useState({
        raised: false,
        shadow: 1,
    });


    const getAadharButtonText = (aadharStatus) => {
        switch (aadharStatus) {
            case "Y":
                return "AADHAR APPROVED"
            case "N":
                return "AADHAR REJECTED"
            case "Z":
                return "AADHAR ON HOLD"

        }

    }
    const getPanButtonText
        = (panStatus) => {
            switch (panStatus) {
                case "Y":
                    return "PAN APPROVED"
                case "N":
                    return "PAN REJECTED"
                case "Z":
                    return "PAN ON HOLD"

            }

        }

    const getCentralDbCheckButtonText
        = (centralDbSatus) => {
            switch (centralDbSatus) {
                case "Y":
                    return "CENTRAL DB APPROVED"
                case "N":
                    return "CENTRAL DB REJECTED"


            }

        }
    const getOverAllKycText
        = (overAllKyc) => {
            switch (overAllKyc) {
                case "Y":
                    return "OVERALL KYC APPROVED"
                case "N":
                    return "OVERALL KYC REJECTED"


            }

        }
    const getAadharButtonColor = (aadharStatus) => {
        switch (aadharStatus) {
            case null:
                return `mt-10 justify-end bg-theme text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`

                return
            case "Y":
                return `mt-10 justify-end bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`

            case "N":

                return `mt-10 justify-end bg-red-200 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`
            case "Z":
                return `mt-10 justify-end bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`

        }

    }

    const validatePanWithNsdl = () => {

        dispatch(centralDBCheckApi(employeeInformation?.pan))
    }
    return (
        <>
            <div className="relative mt-6 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-2xl font-bold">
                            KYC
                        </h6>
                    </div>
                </div>
                <div className="flex-auto  mt-2 py-10 pt-0">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Aadhar Details
                            </h6>{" "}
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                User Information from Employer
                                            </h6>
                                            <div className="flex flex-wrap">
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Name</p>

                                                    <p className="text-lg">{firstName + " " + lastName}</p>
                                                </div>
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Father's Name</p>

                                                    <p className="text-lg">{fatherName}</p>
                                                </div>
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Dob</p>

                                                    <p className="text-lg">{dob}</p>
                                                </div>
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Aadhar</p>

                                                    <p className="text-lg">{aadhar}</p>
                                                </div>
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Permanent Address </p>
                                                    <p className="text-lg">{employeeInformation?.perAddressLine1 + employeeInformation?.perAddressLine2 + employeeInformation?.perPincode + "," + employeeInformation?.perState}</p>
                                                </div>
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Communication Address </p>
                                                    <p className="text-lg">{employeeInformation?.commAddressLine1 + employeeInformation?.commAddressLine2 + employeeInformation?.commPincode + "," + employeeInformation?.commState}</p>
                                                </div>





                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                            <center>
                                                <div className="flex flex-row justify-center">

                                                    {aadharImage != null && (
                                                        <div className="hover:scale-125">
                                                            <Card
                                                                classes={{ root: state.raised ? classes.cardHovered : "" }}
                                                                onMouseOver={() => setState({ raised: true, shadow: 3 })}
                                                                onMouseOut={() => setState({ raised: false, shadow: 1 })}
                                                                raised={state.raised} zdepth={state.shadow}
                                                                sx={{ maxWidth: 345 }}

                                                            >
                                                                <a href={`data:image/jpeg;base64,${aadharImage}`} download>
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="140"
                                                                        image={`data:image/jpeg;base64,${aadharImage}`}
                                                                        alt="green iguana"
                                                                    />
                                                                </a>
                                                            </Card>
                                                        </div>
                                                    )}

                                                </div>
                                                <div className="flex flex-row mt-2 justify-center">


                                                    {aadharBackImage != null && (
                                                        <div className="hover:scale-125">
                                                            <Card

                                                                onMouseOver={() => setState1({ raised: true, shadow: 3 })}
                                                                onMouseOut={() => setState1({ raised: false, shadow: 1 })}
                                                                raised={state.raised} zDepth={state.shadow}
                                                                classes={{ root: state1.raised ? classes.cardHovered : "" }}

                                                                sx={{ maxWidth: 345 }}

                                                            >


                                                                <a href={`data:image/jpeg;base64,${aadharBackImage}`} download>
                                                                    <CardMedia
                                                                        component="img"
                                                                        height="240"
                                                                        image={`data:image/jpeg;base64,${aadharBackImage}`}
                                                                        alt="green iguana"
                                                                    />
                                                                </a>



                                                            </Card>
                                                        </div>
                                                    )}

                                                </div>


                                                <center>

                                                    {
                                                        aadharKycStatus?.aadharApprovalFlag != null ?
                                                            <button disabled={aadharKycStatus?.aadharApprovalFlag != null} className={aadharKycStatus?.aadharApprovalFlag == null ? "mt-10 justify-end bg-theme text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" : getAadharButtonColor(aadharKycStatus?.aadharApprovalFlag)}>{aadharKycStatus?.aadharApprovalFlag == null ? "SUBMIT" : getAadharButtonText(aadharKycStatus?.aadharApprovalFlag)}</button>

                                                            :
                                                            <div>
                                                                <button onClick={holdAadhar} className={"mt-10 justify-end bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{aadharKycStatus?.aadharApprovalFlag == null ? "HOLD" : getAadharButtonText(aadharKycStatus?.aadharApprovalFlag)}</button>
                                                                <button onClick={rejectAadhar} className={"mt-10 justify-end bg-red-200 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{aadharKycStatus?.aadharApprovalFlag == null ? "REJECT" : getAadharButtonText(aadharKycStatus?.aadharApprovalFlag)}</button>
                                                                <button onClick={approveAadhar} className={"mt-10 justify-end bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{aadharKycStatus?.aadharApprovalFlag == null ? "APPROVE" : getAadharButtonText(aadharKycStatus?.aadharApprovalFlag)}</button>

                                                            </div>



                                                    }


                                                </center>

                                                {/* <center>
                                                    <div className="flex justify-end">
                                                        <button onClick={handleAadharSuccess} className=" mt-10 bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                            Accept
                                                        </button>
                                                        <button onClick={handleAadharReject} className=" mt-10 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                            Reject
                                                        </button>
                                                        <button onClick={aadharOnHold} className=" mt-10 bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                            Hold
                                                        </button>
                                                    </div>
                                                    </center>*/}


                                            </center>

                                        </div>
                                    </div>
                                </div>

                            </div>




                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="mt-4">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Pan Details
                            </h6>{" "}
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                User Information from Employer
                                            </h6>
                                            <div className="flex flex-wrap">
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Name</p>

                                                    <p className="text-lg">{firstName + " " + lastName}</p>
                                                </div>
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Father's Name</p>

                                                    <p className="text-lg">{fatherName}</p>
                                                </div>
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Dob</p>

                                                    <p className="text-lg">{dob}</p>
                                                </div>
                                                <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                    <p className="text-lg font-bold">Pan</p>

                                                    <p className="text-lg">{pan}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-6/12 px-4">

                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                            <center>
                                                {file != null && (
                                                    <div>
                                                        <Card

                                                            onMouseOver={() => setState2({ raised: true, shadow: 3 })}
                                                            onMouseOut={() => setState2({ raised: false, shadow: 1 })}
                                                            raised={state.raised} zDepth={state.shadow}
                                                            classes={{ root: state2.raised ? classes.cardHovered : "" }}

                                                            sx={{ maxWidth: 345 }}
                                                        >
                                                            <a href={`data:image/jpeg;base64,${file}`} download>
                                                                <CardMedia
                                                                    component="img"
                                                                    height="340"
                                                                    image={`data:image/jpeg;base64,${file}`}
                                                                    alt="green iguana"
                                                                />
                                                            </a>
                                                        </Card>
                                                    </div>
                                                )}


                                                <center>
                                                    {
                                                        panKycStatus?.panApprovalFlag != null ?
                                                            <button disabled={panKycStatus?.panApprovalFlag != null} className={panKycStatus?.panApprovalFlag == null ? "mt-10 justify-end bg-theme text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" : getAadharButtonColor(panKycStatus?.panApprovalFlag)}>{panKycStatus?.panApprovalFlag == null ? "SUBMIT" : getPanButtonText(panKycStatus?.panApprovalFlag)}</button>

                                                            :
                                                            <div>
                                                                <button onClick={holdPan} className={"mt-10 justify-end bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{panKycStatus?.panApprovalFlag == null ? "HOLD" : getAadharButtonText(panKycStatus?.panApprovalFlag)}</button>
                                                                <button onClick={rejectPan} className={"mt-10 justify-end bg-red-200 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{panKycStatus?.panApprovalFlag == null ? "REJECT" : getAadharButtonText(panKycStatus?.panApprovalFlag)}</button>
                                                                <button onClick={approvePan} className={"mt-10 justify-end bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{panKycStatus?.panApprovalFlag == null ? "APPROVE" : getAadharButtonText(panKycStatus?.panApprovalFlag)}</button>

                                                            </div>



                                                    }






                                                </center>


                                            </center>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="mt-4">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                bureau score details
                            </h6>{" "}
                        </AccordionSummary>
                        <AccordionDetails>
                            <h1>Bureau Score APi response goes here</h1>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="mt-4">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Central DB CHECK
                            </h6>{" "}
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-blueGray-100 border-0">

                                <div className="flex-auto px-4 mt-10 lg:px-10 py-10 pt-0">
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                        User Information from Employer
                                                    </h6>
                                                    <div className="flex flex-wrap">
                                                        <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                            <p className="text-lg font-bold">Name</p>

                                                            <p className="text-lg">{employeeInformation?.firstName + " " + employeeInformation?.lastName}</p>
                                                        </div>
                                                        <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                            <p className="text-lg font-bold">Father's Name</p>

                                                            <p className="text-lg">{employeeInformation?.fatherName}</p>
                                                        </div>
                                                        <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                            <p className="text-lg font-bold">Dob</p>

                                                            <p className="text-lg">{employeeInformation?.dob}</p>
                                                        </div>
                                                        <div className="w-full justify-between lg:w-12/12 flex flex-row px-4">
                                                            <p className="text-lg font-bold">PAN</p>

                                                            <p className="text-lg">{employeeInformation?.pan}</p>
                                                        </div>
                                                    </div>
                                                    <center>
                                                        <button onClick={validatePanWithNsdl} className=" mt-20 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                            {list ? "PAN RESULT FETCHED" : "VALIDATE PAN"}
                                                        </button>

                                                    </center>

                                                </div>

                                            </div>


                                        </div>


                                        <div className="w-full lg:w-6/12 px-4 ">
                                            <div className="relative flex flex-col min-w-0 break-words bg-blueGray-400 w-full mb-6 shadow-xl rounded-lg">

                                                {
                                                    loading ?
                                                        <Loader />
                                                        :

                                                        <div className="px-6">
                                                            {
                                                                !list &&
                                                                <center><h1 className="text-blueGray-700 text-xl font-bold">Awaiting Validation</h1></center>


                                                            }
                                                            {list &&
                                                                <div className="flex flex-wrap justify-center">

                                                                    <div className="w-full px-4 text-center">
                                                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                                            <div className="mr-4 p-3 text-center">
                                                                                <span className="text-xl  block uppercase tracking-wide">
                                                                                    {list?.result?.data?.message}
                                                                                </span>
                                                                                <span className="text-sm  font-bold">PAN EXISTS</span>
                                                                            </div>
                                                                            <div className="mr-4 p-3 text-center">
                                                                                <span className="text-xl  block uppercase tracking-wide">
                                                                                    {list?.result?.data?.panData?.maskedAadhaarNumber == null ? "NA" : list?.result?.data?.panData?.maskedAadhaarNumber}
                                                                                </span>
                                                                                <span className="text-sm font-bold">Masked Aadhar Number</span>
                                                                            </div>
                                                                            <div className="lg:mr-4 p-3 text-center">
                                                                                <span className="text-xl  block uppercase tracking-wide text-blueGray-600">
                                                                                    {list?.result?.data?.panData?.aadhaarLinked === true ? "✔️" : "❌"}
                                                                                </span>
                                                                                <span className="text-sm font-bold">Aadhar Linked</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            }

                                                            {
                                                                list &&
                                                                <div className="text-left mt-12">
                                                                    <h3 className="text-xl text-center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                                                        {list?.result?.data?.panData?.name == null ? "No PAN Associated With this Name" : list?.result?.data?.panData?.name}
                                                                    </h3>

                                                                    <div className="mb-2 mt-4 flex justify-between flex-row  mt-2">
                                                                        <p className='font-bold text-lg'>PAN</p>
                                                                        <p className='text-lg'>                                            {list?.result?.data?.panData?.pan == null ? "NA" : list?.result?.data?.panData?.pan}
                                                                        </p>

                                                                    </div>


                                                                    <div className="mb-2 mt-4 flex justify-between flex-row  mt-2">
                                                                        <p className='text-lg font-bold'>Email</p>
                                                                        <p className='text-lg'>
                                                                            {list?.result?.data?.panData?.email == null ? "NA" : list?.result?.data?.panData?.email}


                                                                        </p>

                                                                    </div>
                                                                    <div className="mb-2 flex justify-between flex-row  mt-2">
                                                                        <p className='font-bold text-lg'>Phone</p>
                                                                        <p className='text-lg'>                                            {list?.result?.data?.panData?.phone == null ? "NA" : list?.result?.data?.panData?.phone}
                                                                        </p>

                                                                    </div>

                                                                    <div className="mb-2 flex justify-between flex-row  mt-2">
                                                                        <p className='font-bold text-lg'>Gender</p>
                                                                        <p className='text-lg'>{list?.result?.data?.panData?.gender == null ? "NA" : list?.result?.data?.panData?.gender}
                                                                        </p>

                                                                    </div>


                                                                    <div className="mb-2 flex justify-between flex-row  mt-2">
                                                                        <p className='font-bold text-lg'>date Of birth</p>
                                                                        <p className='text-lg'>                                            {list?.result?.data?.panData?.dateOfBirth == null ? "NA" : list?.result?.data?.panData?.dateOfBirth}
                                                                        </p>

                                                                    </div>


                                                                </div>
                                                            }
                                                        </div>

                                                }

                                                {
                                                    list &&
                                                    <center>
                                                        {
                                                            centralDbCheck?.centralDbFlag != null ?
                                                                <button disabled={centralDbCheck?.centralDbFlag != null} className={centralDbCheck?.centralDbFlag == null ? "mt-10 justify-end bg-theme text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" : getAadharButtonColor(centralDbCheck?.centralDbFlag)}>{centralDbCheck?.centralDbFlag == null ? "SUBMIT" : getCentralDbCheckButtonText(centralDbCheck?.centralDbFlag)}</button>

                                                                :
                                                                <div>
                                                                    <button onClick={rejectCentralDb} className={"mt-10 justify-end bg-red-200 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{centralDbCheck?.centralDbFlag == null ? "REJECT" : getCentralDbCheckButtonText(centralDbCheck?.centralDbFlag)}</button>
                                                                    <button onClick={approveCentralDb} className={"mt-10 justify-end bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{centralDbCheck?.centralDbFlag == null ? "APPROVE" : getCentralDbCheckButtonText(centralDbCheck?.centralDbFlag)}</button>

                                                                </div>



                                                        }



                                                    </center>

                                                }

                                            </div>



                                        </div>

                                    </div>







                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <center>
                    <h6 className="text-blueGray-500 text-sm mt-3 mb-6 font-bold uppercase">
                        Overall Kyc Status
                    </h6>
                </center>
                <ProgressBar bgColor={getBgColor(progressStatus)} labelAlignment="center" customLabel={getCustomLabel(progressStatus)} completed={progressStatus > 100 ? "done" : progressStatus} />


                <center>

                    {
                        overAllKyc?.overallKycFlag != null ?
                            <button disabled={overAllKyc?.overallKycFlag != null} className={overAllKyc?.overallKycFlag == null ? "mt-10 justify-end bg-theme text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" : getAadharButtonColor(overAllKyc?.overallKycFlag)}>{overAllKyc?.overallKycFlag == null ? "SUBMIT" : getOverAllKycText(overAllKyc?.overallKycFlag)}</button>

                            :
                            <div>
                                <button onClick={rejectOverAllKyc} className={"mt-10 justify-end bg-red-200 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{overAllKyc?.overallKycFlag == null ? "REJECT" : getAadharButtonText(overAllKyc?.overallKycFlag)}</button>
                                <button onClick={approveOverAllKyc} className={"mt-10 justify-end bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}>{overAllKyc?.overallKycFlag == null ? "Approve" : getAadharButtonText(overAllKyc?.overallKycFlag)}</button>


                            </div>



                    }



                </center>


            </div>
        </>
    );
}