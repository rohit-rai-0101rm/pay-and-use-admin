import React, { useState } from 'react'
import Modal from 'react-modal';
import { useAlert } from "react-alert";
import { getJSDocClassTag } from 'typescript';
import FileUploadTable from 'components/Table/FileUploadTable';
import PanFileUploadTable from 'components/Table/PanFileUploadTable';

const PanValidationCard = ({ employeeInformation }) => {
    const [isPanApproved, setIsPanApproved] = useState(false);
    const alert = useAlert();
    const [isHold, setIsHold] = useState(false);
    const [isRejected, setIsRejected] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            backgroundColor: '#F5F5F5',
            transform: 'translate(-50%, -50%)',
            borderRadius: '5px'
        },
    };
    const handleSuccess = () => {

        setIsOpen(false);
        setIsPanApproved(true);
        setIsHold(false)
        setIsRejected(false)
        alert.success("Successfully Approved")
    }

    const handleReject = () => {
        setIsOpen(false);
        setIsPanApproved(false);
        setIsHold(false)
        setIsRejected(true);

        alert.error("Rejected")
    }
    const onHold = () => {
        setIsHold(true);
        setIsOpen(false);
        alert.show('Put on hold')
    }
    const rejected = "mt-10 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    const notApproved = "mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    const Approved = "mt-10 bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    const isOnHold = "mt-10 bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"


    const getText = (isHold, isPanApproved) => {
        if (isHold) {
            return "ON HOLD"
        }
        if (isPanApproved) {
            return "APPROVED"
        }
        if (isRejected) {
            return "REJECTED"
        }
        return "Awaiting for Approval"
    }
    const getClass = (isPanApproved, isHold) => {
        if (isHold) {
            return isOnHold
        }
        if (isPanApproved) {
            return Approved
        }
        if (isRejected) {
            return rejected
        }
        return notApproved
    }
    return (
        <>
            <center>
                <div class=" w-full bg-lightBlue-600 p-10  flex justify-between  flex:row">
                    <div class="rounded h-48 overflow-hidden shadow-lg">
                        <img class="object-contain	 h-48" src="https://proudly.in/wp-content/uploads/2020/06/PAN-Card.jpg" alt="Mountain" />

                        <center>
                            <button onClick={openModal} className={getClass(isPanApproved, isHold)}>
                                {getText(isHold, isPanApproved)}
                            </button>
                        </center>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div className="w-full px-4 text-center mt-2">

                            <center>
                                <img class="object-contain	 h-48" src="https://www.fastrupee.com/wp-content/uploads/2015/05/PAN-Card-Sample.jpg" alt="no pan image found" />

                                <div className="mb-2 mt-10 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                                    <p>Employee Name</p>
                                    <p>{employeeInformation?.firstName + " " + employeeInformation?.lastName}</p>

                                </div>
                                <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                                    <p>Fsther's Name</p>
                                    <p>{employeeInformation?.fatherName}</p>

                                </div>
                                <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                                    <p>Date of Birth</p>
                                    <p>{employeeInformation?.dob}</p>

                                </div>
                                <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                                    <p>Pan Number</p>
                                    <p>{employeeInformation?.pan}</p>

                                </div>
                                <center>
                                    <button onClick={handleSuccess} className=" mt-10 bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        Accept
                                    </button>
                                    <button onClick={handleReject} className=" mt-10 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        Reject
                                    </button>
                                    <button onClick={onHold} className=" mt-10 bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        Hold
                                    </button>

                                </center>


                            </center>
                        </div>




                    </Modal>
                </div>

            </center>

        </>
    )
}

export default PanValidationCard