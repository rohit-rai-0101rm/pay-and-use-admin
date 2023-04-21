import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Modal from 'react-modal';

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { employeeproductFetchApi } from "actions/EmployeeActions";
import { useAlert } from "react-alert";

export default function FileUploadTable({ }) {
    const alert = useAlert();

    const [file, setFile] = useState(null)
    const [fileSize, setFileSize] = useState(null)
    const [isFileUploaded, setIsFileUploaded] = useState(null)
    Modal.setAppElement('#root');
    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    const fileHandler = (event) => {
        let fileObj = event.target.files[0];
        //just pass the fileObj as parameter
        console.log(fileObj)
        setFile(fileObj)
        setFileSize((event.target.files[0].size) * 0.000001)
        setIsFileUploaded(true)

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
    console.log(file)

    const handleConfirm = () => {
        if (!isFileUploaded) {
            alert.error("please upload your image")

        }
        else {
            if(isFileUploaded){
                alert.success("image uploaded succesfully")

            }
        }
    }


    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                <div className="flex-auto flex justify-between mt-4 px-4 lg:px-10 py-10 pt-0">
                    <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        onClick={openModal}>Upload Aadhar</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <center>
                            <label for="formFile" class=" pl-24 form-label inline-block mb-2 text-gray-700">Recommendation: Please upload png,jpeg file less than 05MB
                            </label>
                            <input class="form-control
                                      block
                                      w-full
                                      px-3
                                      py-1.5
                                      text-base
                                      font-normal
                                      text-gray-700
                                      bg-white bg-clip-padding
                                      border border-solid border-gray-300
                                      rounded
                                      transition
                                      ease-in-out
                                      m-0
                                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={fileHandler} type="file" accept="image/png, image/gif, image/jpeg" id="formFile" />

                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">

                                        <button onClick={handleConfirm} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                            Confirm
                                        </button>
                                        <button onClick={closeModal} className=" mt-10 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                            Cancel
                                        </button>

                                    </div>
                                </div>
                            </div>

                        </center>


                    </Modal>
                    <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        onClick={openModal}>Upload Pan</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <center>
                            <label for="formFile" class=" pl-24 form-label inline-block mb-2 text-gray-700">Recommendation: Please upload png,jpeg file less than 05MB
                            </label>
                            <input class="form-control
                                      block
                                      w-full
                                      px-3
                                      py-1.5
                                      text-base
                                      font-normal
                                      text-gray-700
                                      bg-white bg-clip-padding
                                      border border-solid border-gray-300
                                      rounded
                                      transition
                                      ease-in-out
                                      m-0
                                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={fileHandler} type="file" accept="image/png, image/gif, image/jpeg" id="formFile" />

                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">

                                        <button onClick={handleConfirm} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                            Confirm
                                        </button>
                                        <button onClick={closeModal} className=" mt-10 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                            Cancel
                                        </button>

                                    </div>
                                </div>
                            </div>

                        </center>


                    </Modal>



                </div>
            </div>
        </>
    );
}

FileUploadTable.defaultProps = {
    color: "light",
};

FileUploadTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
