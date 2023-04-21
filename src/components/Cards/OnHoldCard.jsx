import React, { useState } from 'react'
import Modal from 'react-modal';
import { useAlert } from "react-alert";
import { getJSDocClassTag } from 'typescript';
import FileUploadTable from 'components/Table/FileUploadTable';

const OnHoldCard = () => {
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
    return (
        <>
                        <FileUploadTable/>

        </>
    )
}

export default OnHoldCard