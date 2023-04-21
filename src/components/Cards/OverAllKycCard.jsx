import React, { useState } from 'react'
import Modal from 'react-modal';
import { useAlert } from "react-alert";
import { getJSDocClassTag } from 'typescript';
import { useHistory } from 'react-router';

const OverAllKycCard = () => {
    const [isApproved, setIsApproved] = useState(false);
    const alert = useAlert();

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
        setIsApproved(true);

        alert.success("Successfully Approved")
    }


    const onHold = () => {
        setIsApproved("onHold");
        alert.show('Put on hold')
    }
    const history=useHistory()
    const notApproved = "mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    const Approved = "mt-10 bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    const isOnHold = "mt-10 bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    const getClass = () => {
        switch (isApproved) {
            case true:
                return "mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            case false:
                return notApproved
            case "onHold":
                return isOnHold
        }
    }
    const handleProceed=()=>{
history.push("/admin/validations")
    }
    return (
        <>
            <>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                KYC Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Aaadhar Status
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-green-500 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            value="ok"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Pan Status
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-yellow-500 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            value="on hold(image blur)"
                                        />
                                    </div>
                                </div>
                               
                               


                            </div>





                        </form>
                    </div>
                    <center>
                                    <button onClick={handleProceed} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        Proceed
                                    </button>
                                </center>
                </div>
            </>
        </>
    )
}

export default OverAllKycCard