import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Modal from 'react-modal';

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { employeeproductFetchApi } from "actions/EmployeeActions";
import { useAlert } from "react-alert";
import { panUploadApi } from "actions/fileUploadActions";

export default function PanFileUploadTable({ }) {
    var {empCode,buCode}=useParams()
    const alert = useAlert();
const dispatch=useDispatch()
    const [file, setFile] = useState(null)
    const [fileSize, setFileSize] = useState(null)
    const [isFileUploaded, setIsFileUploaded] = useState(null)
    Modal.setAppElement('#root');
    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(true);
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
            if (isFileUploaded) {
                dispatch(panUploadApi(file,empCode,buCode))
                alert.success("image uploaded succesfully")
                window.location.reload()


            }
        }
    }


    return (
        <>
            

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



             
        </>
    );
}

PanFileUploadTable.defaultProps = {
    color: "light",
};

PanFileUploadTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
