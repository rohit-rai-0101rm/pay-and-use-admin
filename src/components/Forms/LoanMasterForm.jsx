import { feeTypeApi } from 'actions/feeActions';
import { loanTypeApi } from 'actions/loanActions';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { createLoanProductMaster } from '../../actions/loanActions';
import { useAlert } from "react-alert";

const LoanMasterForm = () => {

    const { loading, sucess, error } = useSelector((state) => state.loanMaster)

    const options = [

        {
            name: "1",
            val: 1,
        },
        {
            name: "2",
            val: 2,
        },
        {
            name: "3",
            val: 3,
        },
        {
            name: "4",
            val: 4,
        },
        {
            name: "5",
            val: 5,
        },
        {
            name: "6",
            val: 6,
        },
        {
            name: "7",
            val: 7,
        },
        {
            name: "8",
            val: 8,
        },
        {
            name: "9",
            val: 9,
        },
        {
            name: "10",
            val: 10,
        },
        {
            name: "11",
            val: 11,
        },
        {
            name: "12",
            val: 12,
        },
        {
            name: "13",
            val: 13,
        },
        {
            name: "14",
            val: 14,
        },
        {
            name: "15",
            val: 15,
        },
        {
            name: "16",
            val: 16,
        },
        {
            name: "17",
            val: 17,
        },
        {
            name: "18",
            val: 18,
        },
        {
            name: "19",
            val: 19,
        },
        {
            name: "20",
            val: 20,
        },
        {
            name: "21",
            val: 21,
        },
        {
            name: "22",
            val: 22,
        },
        {
            name: "23",
            val: 23,
        },
        {
            name: "24",
            val: 24,
        },
        {
            name: "25",
            val: 25,
        },
        {
            name: "26",
            val: 26,
        },
        {
            name: "27",
            val: 27,
        },
        {
            name: "28",
            val: 28,
        },
        {
            name: "29",
            val: 29,
        },
        {
            name: "30",
            val: 30,
        },

    ]


    const { loanType } = useSelector(state => state.loanType)
    const { feeType: fees } = useSelector(state => state.feeType)

    let amountsArray = []
    let nameOfFeeASrray = []
    let feeTypeCodesArray = []
    let gstApplicableArray = []
    const { register, errors, handleSubmit, control } = useForm({
        mode: "onTouched",
    });
    console.log(loanType)
    const dispatch = useDispatch()
    const history = useHistory();
    const [cutOffDay1, setCutOffDay1] = useState('')
    const [numberOfAdditionalFee, setNumberOfAdditionalFee] = useState('')
    const [cutOffDay2, setCutOffDay2] = useState('')

    const [productDescription, setProductDescription] = useState('')
    const [addFee, setAddFee] = useState(false);
    const [loanTypeCode1, setLoanTypeCode1] = useState('PAYDAY')
    const [loanTypeCode2, setLoanTypeCode2] = useState('SHORTTERM')
    const [interestRate1, setInterestRate1] = useState()
    const [interestRate2, setInterestRate2] = useState()

    const [loanTypeDescription1, setLoanTypeDescription1] = useState('PAY DAY')
    const [loanTypeDescription2, setLoanTypeDescription2] = useState('SHORT TERM')
    const [processingFee1, setProcessingFee1] = useState()
    let mpProductFeeDetailsBeans = []

    const [mpProductFeeDetailsBeans2, setMpProductFeeDetailsBeans2] = useState([{
        nameOfFee: "",

        amount: "",

        feeTypeCode: ""
    }])
    const alert = useAlert()
    const [nameOfFee, setNameOfFee] = useState(null)
    const [feeTypeCode, setFeeTypeCode] = useState()
    const [fType, setFType] = useState(null)
    const [feeType, setFeeType] = useState(null)
    const [gstApplicable, setGstApplicable] = useState(true)
    const [amount, setAmount] = useState(null)
    const [selectedLoanType, setSelectedLoanType] = useState('')
    console.log(nameOfFee)
    const [loanTypeDescription, setLoanTypeDescription] = useState('PAY DAY')
    const [gst, setGst] = useState(null)
    const [payDayIntrest, setPayDayIntrest] = useState('')
    const [shortTermIntrest, setShortTermIntrest] = useState('')
    const [tenure1, setTenure1] = useState('1')
    const [tenure2, setTenure2] = useState('3')
    const [processingFee, setProcessingFee] = useState('')
    console.log(gstApplicable)
    useEffect(() => {
        dispatch(loanTypeApi())
        dispatch(feeTypeApi())
        if (error) {
            alert.error("Some error occured")
        }
        if (sucess) {
            alert.success("Loan Master Created")
            history.push('/admin/allLoanProducts')
        }

    }, [loading, sucess]);

    useEffect(() => {
        setNameOfFee(
            (numberOfAdditionalFee && numberOfAdditionalFee > 0)
                ? ([...Array(+numberOfAdditionalFee).keys()].map(
                    id => ({ id, nameOfFee: '' })
                )) : null
        )
        setAmount(
            (numberOfAdditionalFee && numberOfAdditionalFee > 0)
                ? ([...Array(+numberOfAdditionalFee).keys()].map(
                    id => ({ id, amount: '' })
                )) : null
        )
        setFType(
            (numberOfAdditionalFee && numberOfAdditionalFee > 0)
                ? ([...Array(+numberOfAdditionalFee).keys()].map(
                    id => ({ id, fType: '' })
                )) : null
        )
        setGst(
            (numberOfAdditionalFee && numberOfAdditionalFee > 0)
                ? ([...Array(+numberOfAdditionalFee).keys()].map(
                    id => ({ id, gst: '' })
                )) : null
        )
    }, [numberOfAdditionalFee]);





    console.log(selectedLoanType)


    console.log(nameOfFee)
    console.log(amount)
    console.log(fType)


    const handleAddFee = (e) => {
        e.preventDefault(
            setAddFee(true)
        )
    }

    const submitss = (e) => {
        e.preventDefault()
        console.log(productDescription)

        if (feeTypeCode === '' || processingFee === "" || productDescription === "" || cutOffDay1 === "") {
            alert.error('Please fill all the fields')

        }
        else {
            dispatch(createLoanProductMaster(productDescription, cutOffDay1, loanTypeCode1, loanTypeDescription1, interestRate1, tenure1, processingFee, feeTypeCode, mpProductFeeDetailsBeans,gstApplicable))
        }


    }
    const submitss2 = (e) => {
        e.preventDefault()
        if (productDescription === "", cutOffDay2 === "", loanTypeCode2 === "", loanTypeDescription2 === "", interestRate2 === "", tenure2 === "", processingFee === "", feeTypeCode === "") {
            alert.error('Please fill all the fields')

        }
        else {
            dispatch(createLoanProductMaster(productDescription, cutOffDay2, loanTypeCode2, loanTypeDescription2, interestRate2, tenure2, processingFee, feeTypeCode, mpProductFeeDetailsBeans,gstApplicable))
        }

    }
    console.log(mpProductFeeDetailsBeans2)
    console.log(numberOfAdditionalFee)
    const handleFeeNameChange = ev => {
        const idx = ev.target.id;      
        const val = ev.target.value;    
        setNameOfFee(prev => {            
            const nd = [...prev];        
            nd[idx].nameOfFee = val;   
            return nd;                   
        });
    };

    const handleAmountChange = ev => {
        const idx = ev.target.id;      
        const val = ev.target.value;    
        setAmount(prev => {           
            const nd = [...prev];        
            nd[idx].amount = val;     
            return nd;     
        });
    };


    const handleFeetypeChange = ev => {
        const idx = ev.target.id;       // to access specific array element
        const val = ev.target.value;    // to access the date-value selected by user
        setFType(prev => {            // "prev" is the current array
            const nd = [...prev];         // shallow-copy "prev" into "nd" (new-data) array
            nd[idx].fType = val;     // update the "tenureDate" at position "idx"
            return nd;                    // return the updated "nd" array to store into state
        });
    };
    const handleGstApplicable = ev => {
        const idx = ev.target.id;       // to access specific array element
        const val = ev.target.value;    // to access the date-value selected by user
        setGst(prev => {            // "prev" is the current array
            const nd = [...prev];         // shallow-copy "prev" into "nd" (new-data) array
            nd[idx].gst = val;     // update the "tenureDate" at position "idx"
            return nd;                    // return the updated "nd" array to store into state
        });
    };

    nameOfFee?.map((item, index) => {
        nameOfFeeASrray.push(item.nameOfFee)
    })
    amount?.map((item, index) => {
        let amount = parseInt(item.amount)
        amountsArray.push(amount)
    })
    fType?.map((item, index) => {
        feeTypeCodesArray.push(item.fType)
    })
    gst?.map((item, index) => {
        gstApplicableArray.push(item.gst)
    })


    console.log(nameOfFeeASrray)
    console.log(amountsArray)
    console.log(feeTypeCodesArray)
    console.log(gstApplicableArray)

    for (let i = 0; i < nameOfFeeASrray.length; i++) {
        mpProductFeeDetailsBeans.push({
            nameOfFee: nameOfFeeASrray[i],
            amount: amountsArray[i],
            feeTypeCode: feeTypeCodesArray[i],
            gstApplicable: gstApplicableArray[i]
        })
    }
    console.log(mpProductFeeDetailsBeans)
    console.log(gstApplicable)
    const gstArray = [

        {
            value: true,
            label: 'Include Gst'
        },
        {
            value: false,
            label: 'exclude Gst'
        }
    ]
    console.log(gst)
    return (
        <div>
            <div className="rounded-t bg-white mb-0 px-6 py-6">

            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    PRODUCT MASTER
                </h6>

                <form >
                    <div>


                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">


                                </div>
                            </div>
                        </div>

                        <div className="flex py-4 flex-wrap">
                            <div className="w-1/3 lg:w-3/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Please Select a loan type to proceed
                                    </label>
                                    <select onChange={(e) => setSelectedLoanType(e.target.value)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                        <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                            Please select an option
                                        </option>                                        {loanType.map((item) => (
                                            <option key={item.loanTypeCode} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.loanTypeCode}>
                                                {item.loanTypeDescription}
                                            </option>
                                        ))}


                                    </select>

                                </div>
                            </div>

                        </div>


                        {
                            selectedLoanType == "PAYDAY" &&

                            <form >
                                <div>


                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-3/12 px-4">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Cut off Day
                                            </label>
                                            <select onChange={(e) => setCutOffDay1(parseInt(e.target.value))} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                                <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                                    Please select an option
                                                </option> {options.map((item) => (
                                                    <option className="text-base border-0 outline-none capitalize bg-white text-black " value={item.val}>
                                                        {item.name}
                                                    </option>
                                                ))}


                                            </select>
                                        </div>
                                    </div>




                                    <div className="w-full lg:w-6/12 px-4 mt-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Product  DESCRIPTION
                                            </label>
                                            <input
                                                type="text"
                                                onChange={(e) => setProductDescription(e.target.value)}
                                                placeholder="intrest 0% & processing FLAT 50"
                                                className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}

                                            />

                                        </div>

                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                LOAN  CODE
                                            </label>
                                            <input
                                                type="text"
                                                value={loanTypeCode1}

                                                className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}

                                            />

                                        </div>

                                    </div>


                                    <div className="flex flex-wrap">
                                        <div className="w-1/3 lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Interest
                                                </label>
                                                <input
                                                    placeholder="5"
                                                    onChange={(e) => setInterestRate1(e.target.value)}
                                                    type="text"

                                                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                                />

                                            </div>
                                        </div>
                                        <div className="w-1/3 lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    TENURE in months
                                                </label>
                                                <input
                                                    placeholder="DEL"
                                                    type="number"
                                                    value={tenure1}

                                                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                                />

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
                                                    Processing Fee
                                                </label>
                                                <input
                                                    placeholder="50"
                                                    onChange={(e) => setProcessingFee(e.target.value)}
                                                    type="number"
                                                    r
                                                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                                />

                                            </div>
                                        </div>
                                        <div className="w-1/3 lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    FEE type
                                                </label>
                                                <select
                                                    onChange={(e) => {
                                                        setFeeTypeCode(e.target.value);
                                                    }}
                                                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                                >
                                                    <option value="others" className="sm:text-bg bg-white">Select Category</option>
                                                    {fees.map((item) => (
                                                        <option className="text-base border-0 outline-none capitalize bg-white text-black " value={item.feeTypeCode}>
                                                            {item.feeTypeDescription}
                                                        </option>
                                                    ))}
                                                </select>

                                            </div>


                                        </div>


                                    </div>

                                    <div class="px-4 flex mt-8">

                                        <div class="flex items-center mr-4">

                                            <input onChange={(e) => setGstApplicable(e.target.value)} value={true} id="inline-radio" size="large" type="radio" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={gstApplicable} />
                                            <label for="inline-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Incuding Gst</label>
                                        </div>
                                        <div class="flex items-center mr-4">
                                            <input onChange={(e) => setGstApplicable(e.target.value)} value={false} id="inline-2-radio" type="radio" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="inline-2-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Excluding Gst</label>
                                        </div>


                                    </div>

                                    <button onClick={(e) => handleAddFee(e)} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        ADD FEE
                                    </button>


                                    {
                                        addFee &&

                                        <div className=" py-4 flex flex-wrap">


                                            <div className="w-1/3 lg:w-3/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Number of aDDITIONAL fEE
                                                    </label>
                                                    <input onChange={(e) => setNumberOfAdditionalFee(e.target.value)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">


                                                    </input>
                                                </div>

                                            </div>

                                        </div>

                                    }
                                    {nameOfFee &&
                                        Array.isArray(nameOfFee) &&
                                        nameOfFee.length > 0 &&
                                        nameOfFee.map(
                                            ({ id, loan }) => (
                                                <div className="flex w-ful flex-row py-1">



                                                    <div className="relative w-full">

                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >

                                                        </label>
                                                        <input
                                                            onChange={handleFeeNameChange}
                                                            placeholder={`Enter name ${id + 1}`}
                                                            key={id} id={id} type="text"
                                                            required={true}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        />
                                                    </div>
                                                    <div className="relative  px-2 w-full">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                        </label>
                                                        <input
                                                            onChange={handleAmountChange}
                                                            placeholder={`Enter amount ${id + 1}`}
                                                            key={id} id={id} type="number"
                                                            required={true}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        />
                                                    </div>
                                                    <div className="relative  px-2 w-full">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                        </label>
                                                        <select
                                                            onChange={handleFeetypeChange}
                                                            placeholder={`Enter name ${id + 1}`}
                                                            key={id} id={id}
                                                            required={true}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"



                                                        >
                                                            <option value="others" className="sm:text-bg bg-white">Select Category</option>
                                                            {fees.map((item) => (
                                                                <option className="text-base border-0 outline-none capitalize bg-white text-black " value={item.feeTypeCode}>
                                                                    {item.feeTypeDescription}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="relative  px-2 w-full">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                        </label>
                                                        <select
                                                            onChange={handleGstApplicable}
                                                            placeholder={`Enter name ${id + 1}`}
                                                            key={id} id={id}
                                                            required={true}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"



                                                        >
                                                            <option value="others" className="sm:text-bg bg-white">Select Gst option</option>
                                                            {gstArray.map((item) => (
                                                                <option className="text-base border-0 outline-none capitalize bg-white text-black " value={item.value}>
                                                                    {item.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                </div>


                                            )
                                        )}

                                    <div className="relative w-full mb-3">

                                        <button onClick={(e) => { submitss(e) }} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                            Create this Loan Product
                                        </button>

                                    </div>




                                </div>
                            </form>

                        }






                        {
                            selectedLoanType == "SHORTTERM" &&

                            <form >
                                <div>


                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-3/12 px-4">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Cut off Day
                                            </label>
                                            <select onChange={(e) => setCutOffDay2(parseInt(e.target.value))} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                                <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                                    Please select an option
                                                </option> {options.map((item) => (
                                                    <option className="text-base border-0 outline-none capitalize bg-white text-black " value={item.val}>
                                                        {item.name}
                                                    </option>
                                                ))}


                                            </select>
                                        </div>
                                    </div>




                                    <div className="w-full lg:w-6/12 px-4 mt-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Product  DESCRIPTION
                                            </label>
                                            <input
                                                type="text"
                                                onChange={(e) => setProductDescription(e.target.value)}
                                                placeholder="intrest 0% & processing FLAT 50"

                                                className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}

                                            />

                                        </div>

                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                LOAN  CODE
                                            </label>
                                            <input
                                                type="text"
                                                value={loanTypeCode2}

                                                className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}

                                            />

                                        </div>

                                    </div>


                                    <div className="flex flex-wrap">
                                        <div className="w-1/3 lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Intrest
                                                </label>
                                                <input
                                                    placeholder="5"
                                                    onChange={(e) => setInterestRate2(e.target.value)}
                                                    type="text"

                                                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                                />

                                            </div>
                                        </div>
                                        <div className="w-1/3 lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    TENURE in months
                                                </label>
                                                <input
                                                    placeholder="DEL"
                                                    type="number"
                                                    value={tenure2}

                                                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                                />

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
                                                    Processing Fee
                                                </label>
                                                <input
                                                    placeholder="50"
                                                    onChange={(e) => setProcessingFee(e.target.value)}
                                                    type="number"
                                                    r
                                                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                                />

                                            </div>
                                        </div>
                                        <div className="w-1/3 lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    FEE type
                                                </label>
                                                <select
                                                    onChange={(e) => {
                                                        setFeeTypeCode(e.target.value);
                                                    }}
                                                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                                                >
                                                    <option value="others" className="sm:text-bg bg-white">Select Category</option>
                                                    {fees.map((item) => (
                                                        <option className="text-base border-0 outline-none capitalize bg-white text-black " value={item.feeTypeCode}>
                                                            {item.feeTypeDescription}
                                                        </option>
                                                    ))}
                                                </select>

                                            </div>


                                        </div>


                                    </div>
                                    <div class="px-4 flex mt-8">

                                        <div class="flex items-center mr-4">

                                            <input id="inline-radio" size="large" type="radio" value="choose" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked />
                                            <label for="inline-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Including Gst</label>
                                        </div>
                                        <div class="flex items-center mr-4">
                                            <input id="inline-2-radio" type="radio" value="create" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="inline-2-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Excluding Gst</label>
                                        </div>


                                    </div>
                                    <button onClick={(e) => handleAddFee(e)} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        ADD FEE
                                    </button>

                                    {
                                        addFee &&

                                        <div className=" py-4 flex flex-wrap">


                                            <div className="w-1/3 lg:w-3/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Number of aDDITIONAL fEE
                                                    </label>
                                                    <input onChange={(e) => setNumberOfAdditionalFee(e.target.value)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">


                                                    </input>
                                                </div>

                                            </div>

                                        </div>

                                    }
                                    {nameOfFee &&
                                        Array.isArray(nameOfFee) &&
                                        nameOfFee.length > 0 &&
                                        nameOfFee.map(
                                            ({ id, loan }) => (
                                                <div className="flex w-ful flex-row py-1">



                                                    <div className="relative w-full">

                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >

                                                        </label>
                                                        <input
                                                            onChange={handleFeeNameChange}
                                                            placeholder={`Enter name ${id + 1}`}
                                                            key={id} id={id} type="text"
                                                            required={true}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        />
                                                    </div>
                                                    <div className="relative  px-2 w-full">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                        </label>
                                                        <input
                                                            onChange={handleAmountChange}
                                                            placeholder={`Enter amount ${id + 1}`}
                                                            key={id} id={id} type="number"
                                                            required={true}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        />
                                                    </div>
                                                    <div className="relative  px-2 w-full">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                        </label>
                                                        <select
                                                            onChange={handleFeetypeChange}
                                                            placeholder={`Enter name ${id + 1}`}
                                                            key={id} id={id}
                                                            required={true}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"



                                                        >
                                                            <option value="others" className="sm:text-bg bg-white">Select Category</option>
                                                            {fees.map((item) => (
                                                                <option className="text-base border-0 outline-none capitalize bg-white text-black " value={item.feeTypeCode}>
                                                                    {item.feeTypeDescription}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="relative  px-2 w-full">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                        </label>
                                                        <select
                                                            onChange={handleGstApplicable}
                                                            placeholder={`Enter name ${id + 1}`}
                                                            key={id} id={id}
                                                            required={true}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"



                                                        >
                                                            <option value="others" className="sm:text-bg bg-white">Select Gst option</option>
                                                            {gstArray.map((item) => (
                                                                <option className="text-base border-0 outline-none capitalize bg-white text-black " value={item.value}>
                                                                    {item.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>


                                            )
                                        )}

                                    <div className="relative w-full mb-3">

                                        <button onClick={(e) => { submitss2(e) }} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                            Create this Loan Product
                                        </button>

                                    </div>




                                </div>
                            </form>

                        }


                        <div className=" px-4 py-8 flex flex-wrap">


                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">


                                </div>
                            </div>
                        </div>

                    </div>

                </form>







            </div>
        </div>
    )
}

export default LoanMasterForm