import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { loanRequestDetailsApi } from "actions/loanActions";
import { useDispatch, useSelector } from "react-redux";

export default function LoanPendingForApprovalTable({ color }) {
    const dispatch = useDispatch()
    const { loanRequestDetails } = useSelector((state) => state.loanRequestDetails)
    const loanId = localStorage.getItem("selectedloanId")
    console.log(loanId)
    useEffect(() => {
        dispatch(loanRequestDetailsApi(loanId))

    }, [loanId])
    const history = useHistory();

    const handleValidate = () => {
        history.push("/admin/compareData")
    }
    const [modalIsOpen, setIsOpen] = useState(false);
    const [showEmi, setShowEmi] = useState(false);
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            backgroundColor: "#F5F5F5",
            transform: "translate(-50%, -50%)",
            borderRadius: "5px",
        },
    };
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    console.log("typeof",typeof(loanRequestDetails.loanAmount))

    const EmiHeaders2 = () => {
        return (
            <tr>
                <th className={
                    "border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                } >{"Installment Number"}</th>


                <th className={
                    "px-12  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
                    (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }>{"DUE DATE"}</th>
                <th className={
                    "px-12  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
                    (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }>{"Emi(₹)"}</th>

            </tr>
        )

    }
    const renderBody = (mpEmployeeAuthorityDetailBeans) => {
        return mpEmployeeAuthorityDetailBeans && mpEmployeeAuthorityDetailBeans.map(({ emiSeries, emiDate, emi, interest, principle }, index) => {
            return (
                <tr key={index}>

                    <td className="text-left border-t-0  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{index + 1}</td>

                    <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{emiDate}</td>
                    <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{emi}</td>

                </tr>
            )
        })
    }
    return (
        <>
            <div
                className={
                    "relative w-12/12 flex flex-col min-w-0 break-words  mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                }
            >

                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4  flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                Loan Pending for Approval
                            </h3>
                        </div>
                    </div>
                </div>
                {
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <p className="text-black text-lg mt-3 mb-2 font-bold uppercase">
                            Amount to Be Recovered {"₹10500"}
                        </p>
                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                            Loan Id:{"  "}
                            {"  "} 005
                        </p>
                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                            Loan Amount{"  "}
                            {"  "} ₹10000
                        </p>
                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                            Repayment Status: {"  "}
                            {"  "} UNPAID
                        </p>
                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                            Rate Of Interest : {"  "}
                            {"  "} 0%
                        </p>
                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                            FEE : {"  "}
                            {"  "} ₹500
                        </p>

                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                            Tenure : {"  "}
                            {"  "} 3 months
                        </p>

                        <button
                            onClick={() => setShowEmi(true)}
                            className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                            View Emi Schedule
                        </button>
                        {showEmi && (
                            <div>
                                <div>
                                    <p className="text-black text-2xl mt-3 mb-2 font-bold uppercase">
                                        Emi Schedule{" "}
                                    </p>
                                    <div className="flex flex-row justify-between">
                                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                                            EMI No.
                                        </p>
                                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                                            AMount
                                        </p>
                                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                                            Outstanding
                                        </p>
                                        <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                                            Status
                                        </p>
                                    </div>
                                </div>
                                <div></div>

                                <div className="flex flex-row justify-between">
                                    <p className="px-24text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                                        1
                                    </p>
                                    <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                                        3500
                                    </p>
                                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                                        6500
                                    </p>
                                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                                        Paid
                                    </p>
                                </div>

                                <div className="flex flex-row justify-between">
                                    <p className="px-24text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                                        2
                                    </p>
                                    <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                                        3500
                                    </p>
                                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                                        3000
                                    </p>
                                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                                        Due
                                    </p>
                                </div>

                                <div className="flex flex-row justify-between">
                                    <p className="px-24text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                                        3
                                    </p>
                                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                                        3000
                                    </p>
                                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                                        0
                                    </p>
                                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                                        Due
                                    </p>
                                </div>
                            </div>
                        )}
                    </Modal>
                }
                {/* Projects table */}
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg mt-2">
                    <div className="px-6">
                        <div className="text-left mt-12">



                            <div className="flex justify-between flex-row  text-blueGray-600 mt-4">
                                <p className="font-bold text-lg">Loan Id</p>
                                <p className="text-lg">{loanRequestDetails?.id}</p>

                            </div>


                            <div className="mb-2 flex justify-between flex-row  text-blueGray-600 mt-2">
                                <p className="font-bold text-lg"> Loan Amount </p>
                                <p className="text-lg">{loanRequestDetails?.loanAmount?.toFixed(2)}</p>


                            </div>


                            <div className="mb-2 flex justify-between flex-row  text-blueGray-600 mt-2">
                                <p className="font-bold text-lg">Rate of Interest</p>
                                <p className="text-lg">{loanRequestDetails?.interestRate?.toFixed(2)}%</p>

                            </div>
                           



                            <div className="mb-2 flex justify-between flex-row  text-blueGray-600 mt-2">
                                <p className="font-bold text-lg">FEE</p>
                                <p className="text-lg">{(loanRequestDetails?.othersCharges + loanRequestDetails?.othersGstCharges + loanRequestDetails?.processingGstCharges + loanRequestDetails?.processingCharges)?.toFixed(2)}
                                </p>

                            </div>


                            <div className="mb-2 flex justify-between flex-row  text-blueGray-600 mt-2">
                                <p className="font-bold text-lg">Tenure</p>
                                <p className="text-lg">{loanRequestDetails?.tenure}</p>

                            </div>
                            <div className="flex justify-between flex-row  text-blueGray-600 mt-4">
                                <p className="font-bold text-lg">EMI</p>
                                <p className="text-lg">{loanRequestDetails?.emiAmount}</p>

                            </div>
                            <h6 className="text-lg font-bold text-sm mt-6   uppercase">
                                EMI SCHEDULE
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-4/12 px-4">

                                    <table className=" mt-6 items-center w-full bg-transparent border-collapse">

                                        {EmiHeaders2()}
                                        {

                                            loanRequestDetails &&


                                            renderBody(loanRequestDetails?.details)
                                        }

                                    </table>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>





            </div>
        </>
    );
}

LoanPendingForApprovalTable.defaultProps = {
    color: "light",
};

LoanPendingForApprovalTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
