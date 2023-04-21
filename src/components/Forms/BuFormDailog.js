import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// theme css file
import { createPopper } from "@popperjs/core";
import { createBuisnessUnitApi } from "actions/buisnessUnitActions";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import TextField from "@mui/material/TextField";
import { useAlert } from "react-alert";

import Autocomplete from "@mui/material/Autocomplete";
import { Select, MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import {
  FormLabel,
  FormHelperText,
  RadioGroup,
  Radio,
  Switch,
  Button,
} from "@material-ui/core";
import AutoComplete from "./AutoComplete";
import { getCodesList } from "actions/codesActions";
import DateRangeFilter from "./DateRangeFilter";
import { getFinancialYearApi } from "actions/financialYearActions";
import { DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { Dialog } from "material-ui";
const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));
export default function BuFormDialog() {
  const classes = useStyles();

  const history = useHistory();
  const alert = useAlert();

  const { codesList } = useSelector((state) => state.codes);
  const { loading, error, success } = useSelector(
    (state) => state.buisnessUnit
  );

  console.log(codesList);
  const cl = codesList?.map((c) => {
    return c.companyDescription + "-" + c.companyCode;
  });
  console.log(cl);
  //console.log(ccoodd)

  const { register, errors, handleSubmit, control } = useForm({
    mode: "onTouched",
  });
  const [companyCode, setCompanyCode] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (event, value) => {
    setCompanyCode(value.split("-").pop());
    setIsLeSelected(true);
  };

  console.log(companyCode);
  const [open, setOpen] =useState(false);
  const [showModal, setShowModal] = useState(false);
  const [buCode, setBuCode] = useState("");
  const [buDescription, setBuDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [sort, setSort] = useState("companyDescription");
  const [sortType, setSortType] = useState("desc");
  const [check, setCheck] = useState(true);
  const dispatch = useDispatch();
  const [isLeSelected, setIsLeSelected] = useState(false);
  const [pan, setPan] = useState("");
  const [city, setCity] = useState("");
  const [flag, setFlag] = useState("Y");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [pincode, setPincode] = useState("");
  const [cinNo, setCinNo] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pageNo, setPageNo] = useState(0);
  const [isBuALe, setIsBuALe] = useState(false);
  const handleCheckbox = () => {
    setIsBuALe(!isBuALe);
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  const minDate = new Date(2022, 3, 1, 11, 47, 55, 0);
  const maxDate = new Date(2023, 3, 1, 11, 47, 55, 0);
  console.log(isBuALe);
  const selectionRange = {
    startDate: new Date(2022, 3, 1, 11, 47, 55, 0),
    endDate: new Date(2023, 3, 1, 11, 47, 55, 0),
    key: "selection",
  };
  console.log(selectionRange);
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");
  const [town, setTown] = useState("");
  const [size, setSize] = useState(50);
  const [val1, setVal1] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactPersonMobile, setContactPersonMobile] = useState("");
  const [contactPersonEmail, setContactPersonEmail] = useState("");
  const [countryCode, setCountryCode] = useState("IN");
  const [stateCode, setStateCode] = useState("UP");
  const [zip, setZip] = useState("");
  const [gst, setGst] = useState("");
  const [companyGroupCode, setCompanyGroupCode] = useState("");
  const token = sessionStorage.getItem("user");
  useEffect(() => {
    dispatch(getFinancialYearApi);

    dispatch(getCodesList(code, description, sort, sortType, size, pageNo));
  }, [dispatch, code]);
  //console.log(token)
  const handleCompanyCode = (e) => {
    setCompanyCode(e.target.value);
  };

  const handleAddressLine1 = (e) => {
    setAddressLine1(e.target.value);
  };
  const onChange = (ranges) => {
    // ranges ...
    console.log(ranges);
  };
  const handleAddressLine2 = (e) => {
    setAddressLine2(e.target.value);
  };
  const handleTown = (e) => {
    setTown(e.target.value);
  };

  const handleBuDescription = (e) => {
    setBuDescription(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleFax = (e) => {
    setFax(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePan = (e) => {
    setPan(e.target.value);
  };
  const handleGst = (e) => {
    setGst(e.target.value);
  };

  const handleContactPerson = (e) => {
    setContactPerson(e.target.value);
  };
  const handleCompanyCreation = (event) => {
    setVal1(event.target.value);

    console.log(companyCode);
  };
  const handleContactPersonEmail = (e) => {
    setContactPersonEmail(e.target.value);
  };
  const handleContactPersonMobile = (e) => {
    setContactPersonMobile(e.target.value);
  };
  const handleCountryCode = (e) => {
    setCountryCode(e.target.value);
  };
  /*const handleStateCode = (e) => {
      setStateCode(e.target.value)
    }*/
  const handlePinCode = (e) => {
    setPincode(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleBuCode = (e) => {
    setBuCode(e.target.value);
  };

  const onSubmit = (formData) => {
    console.log(formData);
    dispatch(createBuisnessUnitApi(formData, companyCode, flag));
  };
  //console.log(codesList)
 
 const handleCreateLegalEntity=()=>{
  history.push("/admin/create/legalEntity")
 }
  useEffect(() => {
    if (error) {
      alert.error("buisness unit not created");
    }

    if (success) {
      alert.success("Buisness Unit Created Successfully");
      history.push("/admin/dashboard");
    }
  }, [dispatch, alert, success, error]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
   
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Legal Entity CREATION FORM</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To proceed furthur you need to create a Legal Entity.
          </DialogContentText>
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
                      business unit name
                    </label>
                    <input
                      name="buDescription"
                      onChange={(e) => handleBuDescription(e)}
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

                        (errors.buDescription ? "border-red-600" : "")}
                    />

                    {errors.buDescription && (
                      <div className="text-red-500">

                        {errors.buDescription.message}


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
                          Create Buisness Unit
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            type="submit"
            className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Cancel
          </button>
          <button
            
            type="submit"
            className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Create Legal Entity
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
