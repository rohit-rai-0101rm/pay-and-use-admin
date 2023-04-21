import { createLegalEntityApi } from "actions/legalEntityActions";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { createPopper } from '@popperjs/core';
import { updateLegalEntityApi } from "actions/legalEntityActions";
import { useForm, Controller } from "react-hook-form";
import {

  Select,
  MenuItem,

} from "@material-ui/core";
// components

export default function UpdateLegalEntityForm({ details }) {
  console.log(details)

  const dispatch = useDispatch()
  const [companyCode, setCompanyCode] = useState(details.companyCode)
  const [pan, setPan] = useState(details.panNo)
  const [city, setCity] = useState(details.city)
  const [companyDescription, setCompanyDescription] = useState(details.companyDescription)
  const [flag, setFlag] = useState("Y")
  const [addressLine1, setAddressLine1] = useState(details.addressLine1)
  const [addressLine2, setAddressLine2] = useState(details.addressLine2)
  const [pincode, setPincode] = useState(details.pincode)
  const [cinNo, setCinNo] = useState(details.cinNo)
  const [gstNo, setGstNo] = useState(details.gstNo)
  const [panNo, setPanNo] = useState(details.panNo)


  const [phone, setPhone] = useState(details.phone)
  const [fax, setFax] = useState(details.fax)
  const [email, setEmail] = useState(details.email)
  const [town, setTown] = useState(details.town)
  const [contactPerson, setContactPerson] = useState(details.contactPerson)
  const [contactPersonMobile, setContactPersonMobile] = useState(details.contactPersonMobile)
  const [contactPersonEmail, setContactPersonEmail] = useState(details.contactPersonEmail)
  const [countryCode, setCountryCode] = useState(details.countryCode)
  const [stateCode, setStateCode] = useState(details.stateCode)
  const [companyGroupCode, setCompanyGroupCode] = useState(details.companyGroupCode)
  const token = sessionStorage.getItem('user')
  const { register, errors, handleSubmit, control } = useForm({
    mode: "onTouched",
  });
  //console.log(token)
  const id = details.id
  const handleCompanyCode = (e) => {
    setCompanyCode(e.target.value)
  }

  const handleCompanyDescription = (e) => {
    setCompanyDescription(e.target.value)
  }
  const handleAddressLine1 = (e) => {
    setAddressLine1(e.target.value)
  }
  const handleAddressLine2 = (e) => {
    setAddressLine2(e.target.value)
  }
  const handleTown = (e) => {
    setTown(e.target.value)
  }

  const handlePincode = (e) => {
    setPincode(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleFax = (e) => {
    setFax(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePan = (e) => {
    setPan(e.target.value)
  }

  const handleContactPerson = (e) => {
    setContactPerson(e.target.value)
  }

  const handleContactPersonEmail = (e) => {
    setContactPersonEmail(e.target.value)
  }
  const handleContactPersonMobile = (e) => {
    setContactPersonMobile(e.target.value)
  }
  const handleCountryCode = (e) => {
    setCountryCode(e.target.value)
  }
  /*const handleStateCode = (e) => {
    setStateCode(e.target.value)
  }*/
  const handlePinCode = (e) => {
    setPincode(e.target.value)
  }
  const handleCity = (e) => {
    setCity(e.target.value)
  }
  const handleCompanyGroupCode = (e) => {
    setCompanyGroupCode(e.target.value)
  }

  const updateLegalEntity = (e) => {
    e.preventDefault()
    //console.log(companyCode,companyDescription,flag,addressLine1,addressLine2,city,pincode,phone,fax,email,town,contactPerson,contactPersonPhone,contactPersonEmail,countryCode,stateCode,zip,companyGroupCode)

    dispatch(updateLegalEntityApi(id, companyCode, companyDescription, flag, addressLine1, addressLine2, city, phone, fax, email, cinNo, gstNo, panNo, town, contactPerson, contactPersonMobile, contactPersonEmail, countryCode, stateCode, pincode, companyGroupCode))

  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">ADMIN</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Update LEGAL ENTITY FORM
            </h6>
            <div className="flex flex-wrap">
              <div className="w-2/5 lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    COMPANY NAME
                  </label>
                  <input
                    defaultValue={details.companyDescription}
                    name="companyDescription"
                    onChange={(e) => handleCompanyDescription(e)}
                    placeholder="ABC PVT LTD"
                    ref={register({
                      required: "this field is required",
                      minLength: {
                        value: 6,
                        message: "must be 6 characters",
                      },
                    })}
                    type="text"
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +

                      (errors.companyDescription ? " border-red-500" : "")}
                  />

                  {errors.companyDescription && (
                    <div className="text-red-500">
                      {errors.companyDescription.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-2/5 lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    COMPANY CODE
                  </label>
                  <input
                    defaultValue={details.companyCode}
                    onChange={(e) => handleCompanyCode(e)}
                    name="companyCode"
                    placeholder="SEH"
                    ref={register({
                      required: "this field is required",
                      pattern: {
                        value: /^([a-zA-Z0-9 _-]+)$/,
                        message: 'Enter a valid company code',
                      },

                      minLength: {
                        value: 3,
                        message: "must be 3 atleast characters",
                      },
                      maxLength: {
                        value: 10,
                        message: "maximum 10 characters allowed",
                      },
                    })}
                    type="text"
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.companyCode ? " border-red-500" : "")}
                  />
                  {errors.companyCode && (
                    <div className="text-red-500">
                      {errors.companyCode.message}
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
                    Address Line 1
                  </label>
                  <input
                    defaultValue={details.addressLine1}

                    onChange={(e) => handleAddressLine1(e)}
                    type="text"
                    name="addressLine1"
                    placeholder="okhla phase 1"
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
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.addressLine1 ? " border-red-500" : "")}
                  />
                  {errors.addressLine1 && (
                    <div className="text-red-500">
                      {errors.addressLine1.message}
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
                    Address Line 2
                  </label>
                  <input
                                      defaultValue={details.addressLine2}

                    onChange={(e) => handleAddressLine2(e)}
                    type="text"
                    name="addressLine2"
                    placeholder="123,industrial line 1"
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
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.addressLine2 ? " border-red-500" : "")}

                  />
                  {errors.addressLine2 && (
                    <div className="text-red-500">
                      {errors.addressLine2.message}
                    </div>
                  )}
                </div>

              </div>

            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Town
                  </label>
                  <input
                                      defaultValue={details.town}

                    onChange={(e) => handleTown(e)}
                    placeholder="CHR"
                    type="text"
                    name="town"
                    ref={register({
                      required: "this field is required",

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
                      (errors.town ? " border-red-500" : "")}
                  />
                  {errors.town && (
                    <div className="text-red-500">
                      {errors.town.message}
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
                    CITY
                  </label>
                  <input
                                      defaultValue={details.city}

                    onChange={(e) => handleCity(e)}
                    placeholder="DEL"
                    type="text"
                    name="city"
                    ref={register({
                      required: "this field is required",

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
                      (errors.city ? " border-red-500" : "")}
                  />
                  {errors.city && (
                    <div className="text-red-500">
                      {errors.city.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-6/12 mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                                      defaultValue={details.email}

                    name="email"
                    onChange={(e) => handleEmail(e)}
                    type="email"
                    placeholder="abc@gmail.com"
                    ref={register({
                      required: 'Enter your e-mail',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Enter a valid e-mail address',
                      },
                    })}
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.email ? " border-red-500" : "")}
                  />
                  {errors.email && (
                    <div className="text-red-500">
                      {errors.email.message}
                    </div>
                  )}
                </div>

              </div><div className="w-full lg:w-6/12 px-4">
                <div className="relative w-6/12 mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Phone
                  </label>
                  <input
                    defaultValue={details.phone}
                    name="phone"
                    onChange={(e) => handlePhone(e)}
                    type="number"
                    placeholder="9999999999"
                    ref={register({
                      required: 'Enter your phone number',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Enter a valid phone number',
                      },
                    })}
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.phone ? " border-red-500" : "")}
                  />
                  {errors.phone && (
                    <div className="text-red-500">
                      {errors.phone.message}
                    </div>
                  )}
                </div>

              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-6/12 mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Fax
                  </label>
                  <input
                    defaultValue={details.fax}
                    name="fax"
                    onChange={(e) => handleFax(e)}
                    type="number"
                    placeholder="222222"
                    ref={register({
                      required: 'Enter your fax number',
                      pattern: {
                        value: /^[0-9]{8}$/,
                        message: 'Enter a valid 8 digit fax number',
                      },
                    })}
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.fax ? " border-red-500" : "")}
                  />
                  {errors.fax && (
                    <div className="text-red-500">
                      {errors.fax.message}
                    </div>
                  )}
                </div>

              </div>

            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    CIN NO.
                  </label>
                  <input
                    defaultValue={details.cinNo}

                    onChange={(e) => handleTown(e)}
                    placeholder="CHR"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    PAN No
                  </label>
                  <input
                    defaultValue={details.panNo}

                    onChange={(e) => handleCity(e)}
                    placeholder="DEL"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                  />
                </div>
              </div>
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-6/12 mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    GST Number
                  </label>
                  <input
                    defaultValue={details.gstNo}
                    onChange={(e) => handlePan(e)}
                    type="number"
                    placeholder="445566778899545"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                  />
                </div>

              </div>

              <div className="w-ful lg:w-/12 px-4">
                <div className=" w-full relative  mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    COUNTRY
                  </label>
                  <Controller
                    render={(props) => (
                      <Select name="country" value={props.value} onChange={props.onChange}>
                        <MenuItem value="">Choose your country</MenuItem>
                        <MenuItem value="IN">IN</MenuItem>
                        <MenuItem value="NZ">NZ</MenuItem>
                        <MenuItem value="AUS">AUS</MenuItem>
                      </Select>
                    )}
                    name="countryCode"
                    control={control}
                    defaultValue={details.countryCode}

                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.countryCode ? " border-red-500" : "")}
                    rules={{
                      required: "please choose your country.",
                    }}
                  />
                  {errors.countryCode && (
                    <div className="text-red-500">
                      {errors.countryCode?.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-1/3 lg:w-/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    State
                  </label>
                  <Controller
                    render={(props) => (
                      <Select name="state" value={props.value} onChange={(props.onChange)}>
                        <MenuItem value="">Choose your state</MenuItem>
                        <MenuItem value="UP">UP</MenuItem>
                        <MenuItem value="DEL">DEL</MenuItem>
                        <MenuItem value="MP">MP</MenuItem>
                      </Select>
                    )}
                    name="stateCode"
                    control={control}
                    defaultValue={details.stateCode}
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.stateCode ? " border-red-500" : "")}
                    rules={{
                      required: "please choose your state.",
                    }}
                  />
                  {errors.stateCode && (
                    <div className="text-red-500">
                      {errors.stateCode?.message}
                    </div>
                  )}

                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-6/12 mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    PIN CODE
                  </label>
                  <input
                    onChange={(e) => handlePinCode(e)}
                    type="number"
                    placeholder="222222"
                    ref={register({
                      required: 'Enter your pin code',
                      pattern: {
                        value: /^[0-9]{6}$/,
                        message: 'Enter a valid 6 digit pin code',
                      },
                    })}
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.pincode ? " border-red-500" : "")}
                  />
                  {errors.pin && (
                    <div className="text-red-500">
                      {errors.pincode.message}
                    </div>
                  )}


                </div>

              </div>


            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-6/12 mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  COMPANY GROUP CODE
                </label>
                <input
                defaultValue={details.companyGroupCode}
                  onChange={(e) => handleCompanyGroupCode(e)}
                  name="companyGroupCode"
                  type="text"
                  placeholder="codesss"
                  ref={register({
                    required: "this field is required",
                    pattern: {
                      value: /^([a-zA-Z0-9 _-]+)$/,
                      message: 'Enter a valid 8 digit fax number',
                    },

                    minLength: {
                      value: 3,
                      message: "must be 3 atleast characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "maximum 10 characters allowed",
                    },
                  })}
                  className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                    (errors.companyGroupCode ? " border-red-500" : "")}
                />
                {errors.companyGroupCode && (
                  <div className="text-red-500">
                    {errors.companyGroupCode.message}
                  </div>
                )}

              </div>

            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Person Details
            </h6>
            <div className="flex flex-wrap">

              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => { handleContactPerson(e) }}
                    defaultValue={details.contactPerson}
                    placeholder="Mr. Rahul"
                    ref={register({
                      required: "this field is required",
                      minLength: {
                        value: 3,
                        message: "must be 3 characters",
                      },
                    })}
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +

                      (errors.contactPerson ? " border-red-500" : "")}
                  />

                  {errors.contactPerson && (
                    <div className="text-red-500">
                      {errors.contactPerson.message}
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
                    Phone
                  </label>
                  <input
                    onChange={(e) => { handleContactPersonMobile(e) }}
                    defaultValue={details.contactPersonMobile}
                    type="number"
                    placeholder="9999999999"
                    name="contactPersonMobile"
                    ref={register({
                      required: 'Enter your phone number',
                      minLength: {
                        value: 3,
                        message: "must be 3 characters",
                      },
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Enter a valid phone number',
                      },
                    })}
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.contactPersonMobile ? " border-red-500" : "")}
                  />
                  {errors.contactPersonMobile && (
                    <div className="text-red-500">
                      {errors.contactPersonMobile.message}
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
                    Email
                  </label>
                  <input
                    onChange={(e) => { handleContactPersonEmail(e) }}

                    defaultValue={details.contactPersonEmail}
                    type="email"
                    name="contactPersonEmail"
                    placeholder="rahul@gmail.com"
                    ref={register({
                      required: 'Enter your e-mail',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Enter a valid e-mail address',
                      },
                    })}
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                      (errors.contactPersonEmail ? " border-red-500" : "")}
                  />
                  {errors.contactPersonEmail && (
                    <div className="text-red-500">
                      {errors.contactPersonEmail.message}
                    </div>
                  )}

                </div>
              </div>
            </div>



            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">

                  <button onClick={updateLegalEntity} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Update Legal ENtity
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