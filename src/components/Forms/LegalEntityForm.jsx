import { createLegalEntityApi } from "actions/legalEntityActions";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { createPopper } from '@popperjs/core';
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { FormControl, FormControlLabel } from '@material-ui/core';
import {

  Checkbox,
  FormLabel,
  FormHelperText,
  RadioGroup,
  Radio,

  Switch,

  Button,
} from "@material-ui/core";
import 'react-phone-input-2/lib/style.css'
import {

  Select,
  MenuItem,

} from "@material-ui/core";
import { getGroupCodesList } from "actions/codesActions";
import { borderColor } from "tailwindcss/defaultTheme";
import Modal from 'react-modal';
import { createGroupEntity } from "actions/groupEntityActions";
import { clearGroupEntityState } from "actions/groupEntityActions";

// components
const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    fontFamily: "Montserrat",
    margin: theme.spacing(1, 0),

  },
}));
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function LegalEntityForm() {
  const [open, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  const label = { inputProps: { 'aria-label': 'is legal entity a group entity' } };
  const history = useHistory();
  const { loading:ld, error:er, success:sc } = useSelector((state) => state.groupEntity);

  const { loading, error, success } = useSelector((state) => state.legalEntity);
  const classes = useStyles();
  const [groupName, setgroupName] = useState("")
  const alert = useAlert();
  const [val1, setVal1] = useState('')
  const dispatch = useDispatch()
  const [pan, setPan] = useState('')
  const [createGroup, setCreateGroup] = useState(false)
  const [city, setCity] = useState('')
  const [isLegalEntityAGroup, setIsLegalEntityAGroup] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [companyDescription, setCompanyDescription] = useState('')
  const [companyCode, setCompanyCode] = useState(companyDescription)
  const [flag, setFlag] = useState("Y")
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [pincode, setPincode] = useState('')
  const [cinNo, setCinNo] = useState('')
  const [gstNo, setGstNo] = useState('')
  const [panNo, setPanNo] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [isLeAGroup, setIsLeAGroup] = useState(false)
  const [description, setDescription] = useState('')
  const [sort, setSort] = useState('groupCode')
  const [sortType, setSortType] = useState('desc')
  const [size, setSize] = useState(50)
  const [pageNo, setPageNo] = useState(0)
  const [gst, setGst] = useState('')
  const [phone, setPhone] = useState('')
  const [fax, setFax] = useState('')
  const [email, setEmail] = useState('r@gmail.com')
  const [town, setTown] = useState('')
  const [contactPerson, setContactPerson] = useState('')
  const [contactPersonMobile, setContactPersonMobile] = useState('')
  const [contactPersonEmail, setContactPersonEmail] = useState('')
  const [countryCode, setCountryCode] = useState('IN')
  const [stateCode, setStateCode] = useState('UP')
  const [suffix, setSuffix] = useState(0)
  const [zip, setZip] = useState('')
  const [companyGroupCode, setCompanyGroupCode] = useState('')
  const token = sessionStorage.getItem('user')
  const { register, errors, handleSubmit, control } = useForm({
    mode: "onTouched",
  });
  //console.log(token)
  const handleCompanyCode = (e) => {
    setCompanyCode(e.target.value)
  }
  console.log(companyCode)
  const { groupCodesList } = useSelector(state => state.groupCodes)

  const gcl = groupCodesList?.map((c) => {
    return c.groupName + "-" + c.groupCode
  })
  //console.log(gcl)

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
  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }
  const handleChange = (event, value) => setCompanyGroupCode(value.split('-').pop());

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
  const handleGst = (e) => {
    setGst(e.target.value)
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
  const handleisLeAGroup = () => {
    setIsLeAGroup(!isLeAGroup)
  }
  const handleCreateGroup = () => {
    setCreateGroup(!createGroup)
  }
  console.log(createGroup)
  const handleGroupCreation = (event) => {

    setVal1(event.target.value)



    console.log(companyCode)


  }
  //console.log(companyCode,companyDescription,flag,addressLine1,addressLine2,city,pincode,phone,fax,email,town,contactPerson,contactPersonPhone,contactPersonEmail,countryCode,stateCode,zip,companyGroupCode)
  const onSubmit = (formData) => {

    dispatch(createLegalEntityApi(formData, companyGroupCode, flag))

  }
  console.log(companyGroupCode)


  const handleGroupChange = (e) => {
    setgroupName(e.target.value)

  }
  const handleConfirm = () => {
    if (groupName == "") {
      alert.error("Please enter group name")
    }
    else {
      dispatch(createGroupEntity(groupName, flag))
      setIsOpen(false)

    }
  }
  useEffect(() => {
    dispatch(clearGroupEntityState())
    dispatch(getGroupCodesList(companyGroupCode, description, sort, sortType, size, pageNo));
    if (error) {
      alert.error("Legal Entity Creation Failed");
    }


    if (success) {
      alert.success("Legal Entity Created Successfully");
      history.push("/admin/create/buisnessUnit");

    }
  
  }, [dispatch, alert, companyGroupCode, error, success,er,sc]);

  console.log(val1)
  return (
    <>
      <div className="relative items-stretch flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">ADMIN</h6>

          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            LEGAL ENTITY FORM
          </h6>
          <h3 className="font-bold text-lg">A group is required to create legal entity</h3>
          <div class="flex mt-8">

            <div class="flex items-center mr-4">

              <input onChange={(e) => setVal1(e.target.value)} id="inline-radio" size="large" type="radio" value="choose" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="inline-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Choose from existing</label>
            </div>
            <div class="flex items-center mr-4">
              <input onChange={(e) => setVal1(e.target.value)} id="inline-2-radio" type="radio" value="create" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="inline-2-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Create New Group</label>
            </div>


          </div>
          {
            val1 === "choose" &&

            <div className="w-full  lg:w-6/12 px-4">
              <div className="relative w-6/12 mb-3">
                <Autocomplete
                  disablePortal
                  onChange={(handleChange)}
                  control={control}
                  rules={{
                    required: "please choose your group code.",
                  }}

                  id="combo-box-demo"
                  name="companyCode"
                  options={gcl}
                  sx={{ width: 300 }}
                  className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                    (errors.companyCode ? " border-red-500" : "")}
                  renderInput={(params) => <TextField {...params} label="choose your group code" />}
                />
                {errors.companyCode && (
                  <div className="text-red-500">
                    {errors.companyCode.message}
                  </div>
                )}

              </div>

            </div>

          }
          {
            companyGroupCode && val1 === "choose" &&

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>


                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">


                    </div>
                  </div>
                </div>

                <div className="w-2/5 lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      COMPANY NAME
                    </label>
                    <input
                      onChange={(e) => handleCompanyDescription(e)}
                      name="companyDescription"

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

                        (errors.companyDescription ? "border-red-600" : "")}
                    />

                    {errors.companyDescription && (
                      <div className="text-red-500">

                        {errors.companyDescription.message}


                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-2/5 lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Address Line 1
                      </label>
                      <input
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

                <div className="flex py-4 flex-wrap">

                  <div className="w-1/3 lg:w-/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Country
                      </label>
                      <Controller
                        render={(props) => (
                          <Select style={{ minWidth: 326 }} name="state" value={props.value} onChange={(props.onChange)}>
                            <MenuItem value="IN">INDIA</MenuItem>

                          </Select>
                        )}
                        name="countryCode"
                        control={control}
                        defaultValue=""
                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                          (errors.countryCode ? " border-red-500" : "")}
                        rules={{
                          required: "please choose your state.",
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
                          <Select style={{ minWidth: 326 }} name="state" value={props.value} onChange={(props.onChange)}>
                            <MenuItem value="">Choose your state</MenuItem>
                            <MenuItem value="AN">Andaman and Nicobar Islands</MenuItem>
                            <MenuItem value="AP">Andhra Pradesh</MenuItem>
                            <MenuItem value="AR">Arunachal Pradesh</MenuItem>
                            <MenuItem value="AS">Assam</MenuItem>
                            <MenuItem value="BR">Bihar</MenuItem>
                            <MenuItem value="CH">Chandigarh</MenuItem>
                            <MenuItem value="CT">Chhattisgarh</MenuItem>
                            <MenuItem value="DN">Dadra and Nagar Haveli</MenuItem>
                            <MenuItem value="DD">Daman and Diu</MenuItem>
                            <MenuItem value="DL">Delhi</MenuItem>
                            <MenuItem value="GA">Goa</MenuItem>
                            <MenuItem value="GJ">Gujarat</MenuItem>


                            <MenuItem value="HR">Haryana</MenuItem>
                            <MenuItem value="HP">Himachal Pradesh</MenuItem>
                            <MenuItem value="JK">Jammu and Kashmir</MenuItem>
                            <MenuItem value="JH">Jharkhand</MenuItem>
                            <MenuItem value="KA">Karnataka</MenuItem>
                            <MenuItem value="KL">Kerala</MenuItem>
                            <MenuItem value="LD">Lakshadweep</MenuItem>
                            <MenuItem value="MP">Madhya Pradesh</MenuItem>
                            <MenuItem value="MH">Maharashtra</MenuItem>
                            <MenuItem value="MN">Manipur</MenuItem>
                            <MenuItem value="ML">Meghalaya</MenuItem>
                            <MenuItem value="MZ">Mizoram</MenuItem>


                            <MenuItem value="NL">Nagaland</MenuItem>
                            <MenuItem value="OR">Odisha</MenuItem>
                            <MenuItem value="PY">Puducherry</MenuItem>
                            <MenuItem value="PB">Punjab</MenuItem>
                            <MenuItem value="RJ">Rajasthan</MenuItem>
                            <MenuItem value="SK">Sikkim</MenuItem>
                            <MenuItem value="TN">Tamil Nadu	</MenuItem>
                            <MenuItem value="TG">Telangana</MenuItem>
                            <MenuItem value="TR">Tripura</MenuItem>
                            <MenuItem value="UP">Uttar Pradesh</MenuItem>
                            <MenuItem value="UT">Uttarakhand</MenuItem>
                            <MenuItem value="WB">West Bengal	</MenuItem>

                          </Select>
                        )}
                        name="stateCode"
                        control={control}
                        defaultValue=""
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






                </div>
                <div className="flex flex-wrap">
                  <div className="w-1/3 lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Town
                      </label>
                      <input
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
                  <div className="w-1/3 lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        CITY
                      </label>
                      <input
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
                        Pin Code
                      </label>
                      <input
                        type="number"
                        name="pincode"
                        onChange={(e) => handleEmail(e)}
                        placeholder="275101"
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
                      {errors.pincode && (
                        <div className="text-red-500">
                          {errors.pincode.message}
                        </div>
                      )}
                    </div>

                  </div>
                </div>



                <div className="flex flex-wrap">
                  <div className="w-1/3 lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        onChange={(e) => handlePhone(e)}
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
                  <div className="w-1/3 lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Fax
                      </label>
                      <input
                        type="number"
                        name="fax"
                        onChange={(e) => handleFax(e)}
                        placeholder="22222222"

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

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-6/12 mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => handleEmail(e)}
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

                  </div>



                </div>

                <div className="flex flex-wrap">
                  <div className="w-1/3 lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Cin Number
                      </label>
                      <input
                        type="number"
                        name="cin"
                        onChange={(e) => handlePhone(e)}
                        placeholder="9999999999"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                          (errors.phone ? " border-red-500" : "")}
                      />

                    </div>
                  </div>
                  <div className="w-1/3 lg:w-3/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Pan Number
                      </label>
                      <input
                        name="pan"

                        onChange={(e) => handlePan(e)}
                        placeholder="ENEPR6236N"

                        ref={register({
                          required: 'Enter your pan No.',
                          pattern: {
                            value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                            message: 'Enter a valid pan no address',
                          },
                        })}
                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                          (errors.pan ? " border-red-500" : "")}
                      />
                      {errors.pan && (
                        <div className="text-red-500">
                          {errors.pan.message}
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
                        Gst Number
                      </label>
                      <input
                        name="gst"
                        onChange={(e) => handleGst(e)}

                        placeholder="445566778899545"
                        ref={register({
                          required: 'Enter your gst No.',
                          pattern: {
                            value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i,
                            message: 'Enter a valid gst no address',
                          },
                        })}
                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                          (errors.gst ? " border-red-500" : "")}
                      />
                      {errors.gst && (
                        <div className="text-red-500">
                          {errors.gst.message}
                        </div>
                      )}

                    </div>

                  </div>



                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Person Details --primary
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
                        placeholder="Mr. Rahul"
                        name="contactPerson"
                        type="text"
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
                        onChange={(e) => handleContactPersonEmail(e)}
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

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Person Details --alternate 1
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
                        placeholder="Mr. Rahul"
                        name="contactPerson1"
                        type="text"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                      />



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
                        type="number"
                        placeholder="9999999999"
                        name="contactPersonMobile1"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                      />


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
                        onChange={(e) => handleContactPersonEmail(e)}
                        type="email"
                        name="contactPersonEmail1"
                        placeholder="rahul@gmail.com"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                      />


                    </div>
                  </div>

                </div>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Person Details --alternate 2
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
                        placeholder="Mr. Rahul"
                        name="contactPerson1"
                        type="text"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                      />



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
                        type="number"
                        placeholder="9999999999"
                        name="contactPersonMobile1"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                      />


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
                        onChange={(e) => handleContactPersonEmail(e)}
                        type="email"
                        name="contactPersonEmail1"
                        placeholder="rahul@gmail.com"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                      />


                    </div>
                  </div>

                </div>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Person Details --alternate 3
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
                        placeholder="Mr. Rahul"
                        name="contactPerson1"
                        type="text"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                      />


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
                        type="number"
                        placeholder="9999999999"
                        name="contactPersonMobile1"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                      />


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
                        onChange={(e) => handleContactPersonEmail(e)}
                        type="email"
                        name="contactPersonEmail1"
                        placeholder="rahul@gmail.com"

                        className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                      />


                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">

                        <button type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                          Create Legal ENtity
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

          }


          <Modal
            isOpen={open}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal"
          >
            <center>
              <input
                type="text"
                onChange={(e) => handleGroupChange(e)}
                className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="GROUP NAME"
              />

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


          {

            val1 == "create" &&
            <button onClick={openModal} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Create NEW GROUP
            </button>
          }
        </div>
      </div>
    </>
  );
}