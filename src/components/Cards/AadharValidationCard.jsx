import React, { useState } from 'react'
import Modal from 'react-modal';
import { useAlert } from "react-alert";
import AadharFileUploadTable from 'components/Table/AadharFileUploadTable';
import PanFileUploadTable from 'components/Table/PanFileUploadTable';

const AadharValidationCard = ({ employeeInformation }) => {

    console.log("employeeInformation", employeeInformation)
    const [isAadharApproved, setIsAadharApproved] = useState(false);
    const alert = useAlert();
    const [isHold, setIsHold] = useState(false);
    const [isRejected, setIsRejected] = useState(false);
    const [upload, setUpload] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
        setIsHold(false)

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
        setIsAadharApproved(true);
        setIsHold(false)
        setIsRejected(false)
        alert.success("Successfully Approved")
    }

    const handleReject = () => {
        setIsOpen(false);
        setIsAadharApproved(false);
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
        if (isAadharApproved) {
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
                <div class=" w-12/12  bg-lightBlue-600 p-10 m-auto flex justify-between  flex:row">
                    <div class="rounded h-48 overflow-hidden shadow-lg">
                        <img class="object-cover h-48 w-full" src="https://i.pinimg.com/originals/aa/34/53/aa34538b884a1103e9cf82bbd52cfad7.jpg" alt="Mountain" />

                        <center>
                            <button onClick={openModal} className={getClass(isAadharApproved, isHold)}>
                                {getText(isHold, isAadharApproved)}
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
                                <img class="object-contain	 h-48" src={`data:image/jpeg;base64,${employeeInformation?.aadharFile}`} alt="no aadhar back image found" />

                                <img class="object-contain	 h-48" src={`data:image/jpeg;base64,${employeeInformation?.aadharBackImage}`} alt="no aadhar front image found" />

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
                                    <p>Aadhar Number</p>
                                    <p>{employeeInformation?.aadhar}</p>

                                </div>
                             



                            </center>
                        </div>


                    </Modal>
                </div>


            </center>

        </>
    )
}

export default AadharValidationCard