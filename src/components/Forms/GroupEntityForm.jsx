import { createLegalEntityApi } from "actions/legalEntityActions";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { createPopper } from '@popperjs/core';
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Autocomplete from "react-autocomplete"
import classNames from "classnames";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

import {

    Select,
    MenuItem,

} from "@material-ui/core";
import AutoComplete from "./AutoComplete";
import { createGroupEntity } from "actions/groupEntityActions";
// components

export default function GroupEntityForm() {
    const history = useHistory();
    const { loading, error, success } = useSelector((state) => state.groupEntity);

    const alert = useAlert();
    const [flag, setFlag] = useState("Y")
    const dispatch = useDispatch()
    const [groupCode, setGroupCode] = useState('')
    const [zip, setZip] = useState('')
    const [groupName, setGroupName] = useState('')
    const token = sessionStorage.getItem('user')
    const { register, errors, handleSubmit, control } = useForm({
        mode: "onTouched",
    });
    //console.log(token)

    const handleGroupCode = (e) => {
        setGroupCode(e.target.value)
    }

    const handleGroupName = (e) => {
        setGroupName(e.target.value)
    }

    //console.log(companyCode,companyDescription,flag,addressLine1,addressLine2,city,pincode,phone,fax,email,town,contactPerson,contactPersonPhone,contactPersonEmail,countryCode,stateCode,zip,companyGroupCode)
    const onSubmit = (formData) => {
        console.log(formData)
        console.log("hi")
        dispatch(createGroupEntity(formData, flag))

    }

    useEffect(() => {
        if (error) {
            alert.error("Legal Entity Creation Failed");
        }

        if (success) {
            alert.success("Group Entity Created Successfully");
            
            window.location.reload()
        }
    }, [dispatch, alert, error, success]);


    return (
        <>
            <div className="relative items-stretch flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">ADMIN</h6>
                      
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            GROUP ENTITY FORM
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-2/5 lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        GROUP NAME
                                    </label>
                                    <input
                                        name="groupName"
                                        onChange={(e) => handleGroupName(e)}
                                        placeholder="Mitr Paisa Group"
                                        ref={register({
                                            required: "this field is required",
                                            minLength: {
                                                value: 6,
                                                message: "must be 6 characters",
                                            },
                                        })}
                                        type="text"
                                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +

                                            (errors.groupName ? " border-red-500" : "")}
                                    />

                                    {errors.groupName && (
                                        <div className="text-red-500">
                                            {errors.groupName.message}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        GROUP CODE
                                    </label>
                                    <input
                                        onChange={(e) => handleGroupCode(e)}
                                        type="text"
                                        name="groupCode"
                                        placeholder="Enter your group code"
                                        ref={register({
                                            required: 'Enter your group code',
                                            pattern: {
                                                value: /^([a-zA-Z0-9 _-]+)$/,
                                                message: 'Enter a valid company code',
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "must be 3 atleast characters",
                                            },
                                            maxLength: {
                                                value: 50,
                                                message: "maximum 50 characters allowed",
                                            },
                                        })}
                                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                                            (errors.groupCode ? " border-red-500" : "")}
                                    />
                                    {errors.groupCode && (
                                        <div className="text-red-500">
                                            {errors.groupCode.message}
                                        </div>
                                    )}

                                </div>
                            </div>


                        </div>


                        <hr className="mt-6 border-b-1 border-blueGray-300" />






                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">

                                    <button type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        Create Group ENtity
                                    </button>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}