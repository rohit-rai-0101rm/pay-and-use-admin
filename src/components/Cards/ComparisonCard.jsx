import React, { Fragment, useEffect, useState } from "react";
import Modal from 'react-modal';
import { useAlert } from "react-alert";


import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import CardSettingsCom from "./CardSettingsCom";
import CardProfileCom from "./CardProfileCom";
import AadharValidationCard from "./AadharValidationCard";
import PanValidationCard from "./PanValidationCard";
import OverAllKycCard from "./OverAllKycCard";
import ValidationTabs from "components/ValidationTabs";

const ComparisonCard = ({ }) => {
  const [isApproved, setIsApproved] = useState(false);

  const alert = useAlert();

  const notApproved = "mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
  const Approved = "mt-10 bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
  const isOnHold = "mt-10 bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"




  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");


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
    alert.success("Successfully Approved")
    setIsApproved(true);
    setIsOpen(false);
  }


  const onHold = () => {
    alert.show('Put on hold')
  }

  return (

    <>
      <div class=" w-full bg-lightBlue-600 p-10 flex justify-evenly		  flex:row">

        <ValidationTabs />
        

      </div>

    </>

  );
};

export default ComparisonCard;