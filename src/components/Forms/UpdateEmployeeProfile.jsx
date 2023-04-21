import { HearingDisabledOutlined } from '@mui/icons-material';
import { clearUpdateEmployeeState } from 'actions/EmployeeActions';
import { employeeprofileUpdateApi } from 'actions/EmployeeActions';
import { employeeProfileApi } from 'actions/EmployeeActions';
import Loader from 'layouts/Loader/Loader';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useForm, Controller } from "react-hook-form";

const UpdateEmployeeProfile = () => {

    //co
    const history = useHistory()
    const dispatch = useDispatch()
    const { empCode, buCode } = useParams()
    const alert = useAlert()
    const { loadiing,
        employeeProfile
    } = useSelector((state) => state.employeeProfile);

    const { employeeProfileUpdate, success, loadiing: ld } = useSelector((state) => state.updateEmployeeProfile)
    useEffect(() => {


        if (success) {
            alert.success("Profile update successfully")

            history.push(`/admin/employeeProfile/${empCode}/${buCode}`)
        }
        dispatch(employeeProfileApi(empCode, buCode));
    }, [dispatch, empCode, buCode, success, employeeProfileUpdate]);
    const [fatherName, setFatherName] = useState(employeeProfile?.fatherName)
    const [aadhar, setAadhar] = useState(employeeProfile?.aadhar)
    const [pan, setPan] = useState(employeeProfile?.pan)
    const [commAdressLine1, setCommAdressLine1] = useState(employeeProfile?.commAddressLine1)

    const [commAdressLine2, setCommAdressLine2] = useState(employeeProfile?.commAddressLine2)


    const [commCountry, setCommCountry] = useState(employeeProfile?.commCountry)
    const [commState, setCommState] = useState(employeeProfile?.commState)
    const [commTown, setCommTown] = useState(employeeProfile?.commTown)
    const [commCity, setCommCity] = useState(employeeProfile?.commCity)
    const [commPincode, setCommPincode] = useState(employeeProfile?.commPincode)

    const [perAddressLine1, setPerAddressLine1] = useState(employeeProfile?.perAddressLine1)
    const [perAddressLine2, setPerAddressLine2] = useState(employeeProfile?.perAddressLine2)

    const [perCountry, setPerCountry] = useState(employeeProfile?.commCountry)
    const [perState, setPerState] = useState(employeeProfile?.perState)
    const [perTown, setPerTown] = useState(employeeProfile?.perTown)
    const [perCity, setPerCity] = useState(employeeProfile?.perCity)
    const [perPincode, setPerPincode] = useState(employeeProfile?.perPincode)

    const [bankName, setbankName] = useState(employeeProfile?.bankName)

    const [bankIfsc, setBankIfsc] = useState(employeeProfile?.bankIfsc)

    const [accountNumber, setAccountNumber] = useState(employeeProfile?.acNumber)

    const [ctcPm, setCtcPm] = useState(employeeProfile?.ctcPm)
    const [ctcPa, setCtcPa] = useState(employeeProfile?.ctcPa)

    const [isPf, setIsPf] = useState(employeeProfile?.isPf)

    const [isEsi, setIsEsi] = useState(employeeProfile?.isEsi)

    const [dot, setDot] = useState(employeeProfile?.dot)


    const [pfUan, setPfUan] = useState(employeeProfile?.pfUan)

    const [designation, setDesignation] = useState(employeeProfile?.designation)
    const [maritalStatus, setMaritalStatus] = useState(employeeProfile?.maritalStatus)

    const [noChildren, setNoChildren] = useState(employeeProfile?.noChildren)
    console.log("employeeProfile", employeeProfile)
    const { register, errors, handleSubmit, control } = useForm({
        mode: "onTouched",
    });
    const handleFatherChange = (e) => {
        setFatherName(e.target.value)

    }
    const handleDot = (e) => {
        console.log("changing dot")
        setDot(moment(e.target.value).format("DD-MM-YYYY"))
    }

    const hanmdlePanChange = (e) => {
        setPan(e.target.value)
    }

    const handleAadharChange = (e) => {
        setAadhar(e.target.value)
    }

    const handlePerAddressLine1Change = (e) => {
        setPerAddressLine1(e.target.value)
    }

    const handlePerAddressLine2Change = (e) => {
        setPerAddressLine2(e.target.value)
    }

    const handlePerCountryChange = (e) => {
        setPerCountry(e.target.value)
    }

    const handlePerStateChange = (e) => {
        setPerState(e.target.value)
    }
    const handlePerTownChange = (e) => {
        setPerTown(e.target.value)
    }
    const handlePerCityChange = (e) => {
        setPerCity(e.target.value)
    }
    const handlePerPincodeChange = (e) => {
        setPerPincode(e.target.value)
    }


    const handleCommAddressLine1Change = (e) => {
        setCommAdressLine1(e.target.value)
    }

    const handleCommAddressLine2Change = (e) => {
        setCommAdressLine2(e.target.value)
    }

    const handleCommCountryChange = (e) => {
        setCommCountry(e.target.value)
    }

    const handleCommStateChange = (e) => {
        setCommState(e.target.value)
    }
    const handleCommTownChange = (e) => {
        setCommTown(e.target.value)
    }
    const handleCommCityChange = (e) => {
        setCommCity(e.target.value)
    }
    const handleBankNameChange = (e) => {
        setbankName(e.target.value)
    }
    const handleBankIfscChange = (e) => {
        setBankIfsc(e.target.value)
    }

    const handleAccountNumberChange = (e) => {
        setAccountNumber(e.target.value)
    }

    const handleCommPincodeChange = (e) => {
        setCommPincode(e.target.value)
    }

    const handleCtcPmChange = (e) => {
        setCtcPm(e.target.value)
    }


    const handleCtcPaChange = (e) => {
        setCtcPa(e.target.value)
    }
    const handleIsPfChange = (e) => {
        setIsPf(e.target.value)
    }
    const handleIsEsiChange = (e) => {
        setIsEsi(e.target.value)
    }

    const handlePfUanChange = (e) => {
        setPfUan(e.target.value)
    }

    const handleDesignationChange = (e) => {
        setPfUan(e.target.value)
    }

    const handleNoChildrenChange = (e) => {
        setPfUan(e.target.value)
    }

    const handleMaritalStatusChange = (e) => {
        setPfUan(e.target.value)
    }


    const onSubmit = (formData) => {
        console.log("formData", fatherName)
        dispatch(employeeprofileUpdateApi(employeeProfile?.id, fatherName, aadhar, pan, commAdressLine1, commAdressLine2, commCountry, commState, commTown, commCity, commPincode, perAddressLine1, perAddressLine2, perCountry, perState, perTown, perCity, perPincode, bankName, bankIfsc, accountNumber, parseInt(ctcPm), parseInt(ctcPa), isPf, isEsi, dot, pfUan, designation, maritalStatus, noChildren))

    }
    console.log(typeof (employeeProfile?.ctcPm))

    if (ld) {
        return (
            <Loader />
        )
    }
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">

                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Father's Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fatherName"
                                        onChange={(e) => handleFatherChange(e)}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 3,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={fatherName}
                                    />
                                    {errors.fatherName && (
                                        <div className="text-red-500">

                                            {errors.fatherName.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Aadhar
                                    </label>
                                    <input
                                        onChange={(e) => handleAadharChange(e)}
                                        type="number"
                                        name="aadhar"


                                        ref={register({
                                            required: 'Enter aadhar No.',
                                            pattern: {
                                                value: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
                                                message: 'Enter a valid  aadhar',
                                            },
                                        })}
                                        value={aadhar}
                                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +

                                            (errors.aadhar ? "border-red-600" : "")}
                                    />

                                    {errors.aadhar && (
                                        <div className="text-red-500">

                                            {errors.aadhar.message}


                                        </div>
                                    )}


                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        PAN
                                    </label>
                                    <input
                                        onChange={(e) => hanmdlePanChange(e)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={pan}
                                        ref={register({
                                            required: 'Enter aadhar No.',
                                            pattern: {
                                                value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, message: 'Enter a valid  aadhar',
                                            },
                                        })}
                                    />

                                    {errors.pan && (
                                        <div className="text-red-500">

                                            {errors.pan.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Commmunication Address Line 1
                                    </label>
                                    <input
                                        onChange={(e) => handleCommAddressLine1Change(e)}
                                        type="text"
                                        name="commAdressLine1"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={commAdressLine1}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 5,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.commAdressLine1 && (
                                        <div className="text-red-500">

                                            {errors.commAdressLine1.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Commmunication Address Line 2
                                    </label>
                                    <input
                                        type="text"
                                        name="commAdressLine2"
                                        onChange={(e) => handleCommAddressLine2Change(e)}

                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={commAdressLine2}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 5,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.commAdressLine2 && (
                                        <div className="text-red-500">

                                            {errors.commAdressLine1.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Commmunication Country
                                    </label>
                                    <input
                                        onChange={(e) => handleCommCountryChange(e)}

                                        type="text"
                                        name="commCountry"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={commCountry}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 5,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.commCountry && (
                                        <div className="text-red-500">

                                            {errors.commCountry.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Commmunication State
                                    </label>
                                    <input
                                        onChange={(e) => handleCommStateChange(e)}
                                        type="text"
                                        name="commState"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={commState}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 5,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.commState && (
                                        <div className="text-red-500">

                                            {errors.commState.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-4">

                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Commmunication Town

                                    </label>
                                    <input
                                        onChange={(e) => handleCommTownChange(e)}
                                        type="text"
                                        name="commTown"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={commTown}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 5,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.commTown && (
                                        <div className="text-red-500">

                                            {errors.commTown.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Commmunication City

                                    </label>
                                    <input
                                        onChange={(e) => handleCommCityChange(e)}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={commCity}
                                        name="commCity"
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 5,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}

                                    />
                                    {errors.commCity && (
                                        <div className="text-red-500">

                                            {errors.commCity.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Commmunication Pincode
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) => handleCommPincodeChange(e)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={commPincode}
                                        name="commPincode"
                                        ref={register({
                                            required: 'Enter pincode',
                                            pattern: {
                                                value: /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/, message: 'Enter a valid  pincode',
                                            },
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Permanent Address Line 1
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) => handlePerAddressLine1Change(e)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={perAddressLine1}
                                        name="perAddressLine1"
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 5,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.perAddressLine1 && (
                                        <div className="text-red-500">

                                            {errors.perAddressLine1.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Permanent Address Line 2
                                    </label>
                                    <input
                                        onChange={(e) => handlePerAddressLine2Change(e)}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={perAddressLine2}
                                        name="perAddressLine2"
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 5,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.perAddressLine2 && (
                                        <div className="text-red-500">

                                            {errors.perAddressLine2.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Permanent Country
                                    </label>
                                    <input
                                        type="text"
                                        onChange={(e) => handlePerCountryChange(e)}

                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={perCountry}
                                        name="perCountry"
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 3,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.perCountry && (
                                        <div className="text-red-500">

                                            {errors.perCountry.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Permanent State
                                    </label>
                                    <input
                                        type="state"
                                        onChange={(e) => handlePerStateChange(e)}

                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={perState}
                                        name="perState"
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 3,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.perState && (
                                        <div className="text-red-500">

                                            {errors.perState.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-4">

                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Permanent Town

                                    </label>
                                    <input
                                        onChange={(e) => handlePerTownChange(e)}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={perTown}
                                        name="perTown"
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 3,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.perTown && (
                                        <div className="text-red-500">

                                            {errors.perTown.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Permanent City

                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={perCity}
                                        name="perCity"
                                        onChange={(e) => handlePerCityChange(e)}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 3,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.perCity && (
                                        <div className="text-red-500">

                                            {errors.perCity.message}


                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Permanent Pincode
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={perPincode}
                                        name="perPincode"
                                        onChange={(e) => handlePerPincodeChange(e)}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 3,
                                                message: "must be 5 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.perPincode && (
                                        <div className="text-red-500">

                                            {errors.perPincode.message}


                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        CTC-per month
                                    </label>
                                    <input
                                        type="number"
                                        onChange={(e) => handleCtcPmChange(e)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={parseInt(ctcPm)}
                                        name="ctcPm"
                                        ref={register({
                                            required: "this field is required",


                                        })}
                                    />
                                    {errors.ctcPm && (
                                        <div className="text-red-500">

                                            {errors.ctcPm.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        CTC-per annumn
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={parseInt(ctcPa)}
                                        name="ctcPa"
                                        onChange={(e) => handleCtcPaChange(e)}
                                        ref={register({
                                            required: "this field is required",


                                        })}
                                    />
                                    {errors.ctcPa && (
                                        <div className="text-red-500">

                                            {errors.ctcPa.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        IS PF
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={isPf}
                                        name="isPf"
                                        onChange={(e) => handleIsPfChange(e)}
                                        ref={register({
                                            required: "this field is required",


                                        })}
                                    />
                                    {errors.isPf && (
                                        <div className="text-red-500">

                                            {errors.isPf.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        IS ESI
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={isEsi}
                                        onChange={(e) => handleIsEsiChange(e)}
                                        name="isEsi"
                                        ref={register({
                                            required: "this field is required",


                                        })}
                                    />
                                    {errors.isEsi && (
                                        <div className="text-red-500">

                                            {errors.isEsi.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Date of Transaction
                                    </label>
                                    <input
                                        type="date"
                                        onChange={(e) => handleDot(e)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                        name="date"
                                        ref={register({
                                            required: "this field is required",


                                        })}

                                    />
                                    {errors.date && (
                                        <div className="text-red-500">

                                            {errors.date.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap mt-4">

                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Bank Name

                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={bankName}
                                        name="bankName"
                                        onChange={(e) => handleBankNameChange(e)}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 3,
                                                message: "must be 3 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.bankName && (
                                        <div className="text-red-500">

                                            {errors.bankName.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Bank IFSC

                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={bankIfsc}
                                        name="bankIfsc"
                                        onChange={(e) => handleBankIfscChange(e)}

                                        ref={register({
                                            required: 'Enter ifsc code',
                                            pattern: {
                                                value: /^[A-Z]{4}0[A-Z0-9]{6}$/, message: 'Enter a valid  Ifsc code',
                                            },
                                        })}
                                    />
                                    {errors.bankIfsc && (
                                        <div className="text-red-500">

                                            {errors.bankIfsc.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Account Number
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={accountNumber}
                                        name="accountNumber"
                                        onChange={(e) => handleAccountNumberChange(e)}
                                        ref={register({
                                            required: 'Enter Account number',
                                            pattern: {
                                                value: /^\d{9,18}$/, message: 'Enter a valid  account number',
                                            },
                                        })}
                                    />
                                    {errors.accountNumber && (
                                        <div className="text-red-500">

                                            {errors.accountNumber.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        PF UAN
                                    </label>
                                    <input

                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={pfUan}
                                        name="pfUan"
                                        onChange={(e) => handlePfUanChange(e)}
                                        ref={register({
                                            required: 'Enter Uan number',
                                            pattern: {
                                                value: /^([A-Z]{2}\s)([A-Z]{3}\s)([0-9]{1,7}\s)([0-9]{3}\s)?([0-9]{1,7})$/, message: 'Enter a valid  uan number',
                                            },
                                        })}

                                    />
                                    {errors.pfUan && (
                                        <div className="text-red-500">

                                            {errors.pfUan.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-4">

                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Designation

                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={designation}
                                        name="designation"
                                        onChange={(e) => handleDesignationChange(e)}
                                        ref={register({
                                            required: "this field is required",

                                            minLength: {
                                                value: 3,
                                                message: "must be 3 atleast characters",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "maximum 100 characters allowed",
                                            },
                                        })}
                                    />
                                    {errors.designation && (
                                        <div className="text-red-500">

                                            {errors.designation.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Marital Status

                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={maritalStatus}
                                        onChange={(e) => handleMaritalStatusChange(e)}
                                        name="maritalStatus"
                                        ref={register({
                                            required: "this field is required"


                                        })}
                                    />
                                    {errors.maritalStatus && (
                                        <div className="text-red-500">

                                            {errors.maritalStatus.message}


                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Number of Children
                                    </label>
                                    <input
                                        type="number"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={noChildren}
                                        name="noChildren"
                                        onChange={(e) => handleNoChildrenChange(e)}

                                    />
                                    {errors.noChildren && (
                                        <div className="text-red-500">

                                            {errors.noChildren.message}


                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>


                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                        <button type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            SAVE AND UPDATE
                        </button>


                    </form>

                </div>

            </div>
        </>
    )
}

export default UpdateEmployeeProfile