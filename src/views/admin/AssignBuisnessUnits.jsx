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
import { groupEntityListApi } from "actions/groupEntityActions";
import { legalEntitesInAGroupApi } from "actions/legalEntityActions";
import { MultiSelect } from "react-multi-select-component";
import BuSelectionForAssignment from "./BuSelectionForAssignment";
import BuSelectionToAssignHr from "./BuSelectionToAssignHr";

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
export default function AssignBuisnessUnits() {
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
    const [open, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }
    const [groupCode, setGroupCode] = useState(null)
    const color = "light"
    const label = { inputProps: { 'aria-label': 'is legal entity a group entity' } };
    const history = useHistory();
    const { loading: ldd, error: er, success: sc } = useSelector((state) => state.groupEntity);
    const { groupEntityList, loading: ld } = useSelector((state) => state.groupEntityList);
    const [selected, setSelected] = useState([]);
    const { loading: lding, legalEntitiesInAGroup } = useSelector((state) => state.legalEntitiesInAGroup)
    console.log(legalEntitiesInAGroup)
    if (legalEntitiesInAGroup) {
        console.log(legalEntitiesInAGroup)
    }
    const length = legalEntitiesInAGroup?.length
    console.log(length)
    let legalEntityCodes = []
    let options = []
    const [isClicked, setIsClicked] = useState(false)
    const [code, setCode] = useState("");

    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(groupEntityListApi(code, description, sort, sortType, size, (pageNo + 1)), [pageNo])


        if (groupCode) {
            dispatch(legalEntitesInAGroupApi(groupCode))

        }

    }, [size, pageNo, groupCode, isClicked])

    console.log("legalEntitiesInAGroup", legalEntitiesInAGroup)

    if (legalEntitiesInAGroup.length > 0) {
        legalEntitiesInAGroup.map((le, i) => {
            console.log(le)
            let obj = {}
            obj.label = le.companyDescription
            obj.value = le.companyCode
            options.push(obj)
            obj = {}
        })
    }
    const handleGroupChange = (e) => {
        setGroupCode(e.target.value)
    }
    const handleProceed = () => {
        //history.push(`/admin/selectLegalEntities/${groupId}`)
    }

    console.log("options", options)
    console.log("selected", selected)
    if (selected.length > 0) {
        selected.map((sel, i) => {
            legalEntityCodes.push(sel.value)
        })
    }
    console.log("legalEntityCodes", legalEntityCodes)
    const handleAssignBuisnessUnits = () => {
        setIsClicked(true)
    }
    const { loading, error, success } = useSelector((state) => state.legalEntity);
    const classes = useStyles();

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

        alert.success("HR created succesfully")

    }
    console.log(companyGroupCode)

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

    }, [dispatch, alert, companyGroupCode, error, success, er, sc]);

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
                        Assign Bu
                    </h6>
                    <div class="flex mt-8">

                        <div class="flex items-center mr-4">

                            <input onChange={(e) => setVal1(e.target.value)} id="inline-radio" size="large" type="radio" value="choose" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Create New</label>
                        </div>
                        <div class="flex items-center mr-4">
                            <input onChange={(e) => setVal1(e.target.value)} id="inline-2-radio" type="radio" value="create" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-2-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Assign Existing HR's</label>
                        </div>


                    </div>
                    {
                        val1 === "choose" &&

                        <div className="w-full  lg:w-6/12 px-4">
                            <div className="relative w-6/12 mb-3">

                                {errors.companyCode && (
                                    <div className="text-red-500">
                                        {errors.companyCode.message}
                                    </div>
                                )}

                            </div>

                        </div>

                    }
                    {
                        val1 === "choose" &&

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>


                                <div className="flex flex-wrap">

                                </div>

                                <div className="flex py-4 flex-wrap">







                                </div>
                                <div className="flex flex-wrap">
                                    <div className="w-1/3 lg:w-3/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Name
                                            </label>
                                            <input
                                                onChange={(e) => handleTown(e)}
                                                placeholder="Rohit Rai"
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
                                                Phone
                                            </label>
                                            <input
                                                onChange={(e) => handleCity(e)}
                                                placeholder="DEL"
                                                type="number"
                                                name="city"
                                                ref={register({
                                                    required: 'Enter your pin code',
                                                    pattern: {
                                                        value: /^[0-9]{10}$/,
                                                        message: 'Enter a valid 10 digit phone number',
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
                                                type="email"
                                                name="pincode"
                                                onChange={(e) => handleEmail(e)}
                                                placeholder="rohit@gmail.com"
                                                ref={register({
                                                    required: 'Enter your pin code',

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


                                    <center>

                                        <button type="submit" className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                            Create HR
                                        </button>

                                    </center>

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
                        <BuSelectionToAssignHr/>
                    }
                </div>
            </div>
        </>
    );
}