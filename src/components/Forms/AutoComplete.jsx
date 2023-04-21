import { getCodesList } from "actions/codesActions";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutoComplete = () => {
    const { loading,codes } = useSelector(state => state.codes);
    const top100Films = [
      
    ]
    console.log(codes)
    if(loading) return("loading")
    
    return (
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    )
}

export default AutoComplete