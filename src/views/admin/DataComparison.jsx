import React, { Fragment, useEffect, useState } from "react";
import Modal from 'react-modal';
import { useAlert } from "react-alert";
import Tabs from "components/Tabs";




const DataComparison = ({ }) => {
  const alert = useAlert();





  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");


  
  return (

    <>
<Tabs/>
       
    </>

  );
};

export default DataComparison;