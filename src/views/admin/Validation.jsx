import { useAlert } from "react-alert";
import moment from 'moment'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Validation = () => {

    let noOfDaysArr = []
    let difff = []
    let dates = []
    let values = []
    let resultArray = []

    const dispatch = useDispatch()
    const alert = useAlert();
    const [emiAmount, setEmiAmount] = useState(false);
    const [remarks, setRemarks] = useState(null);
    const [count, setCount] = useState(0);
    const numberOfInstallments = 10;





    //console.log(emiArray)
    let firstEmiDatee;
    //console.log(momentStartDateTemp)
    //console.log(momentStartDateTemp.date());

    const color = "light"


    const handleAmountChange = ev => {
        const idx = ev.target.id;       // to access specific array element
        const val = ev.target.value; 
        console.log("val",val)   // to access the date-value selected by user
        setEmiAmount(prev => {            // "prev" is the current array
            const nd = [...prev];         // shallow-copy "prev" into "nd" (new-data) array
            nd[idx].emiAmount = (val);
            values.push(nd[idx].emiAmount)


            // update the "tenureDate" at position "idx"
            return nd;                    // return the updated "nd" array to store into state
        });
    };
    const handleRemarkChange = ev => {
        const idx = ev.target.id;       // to access specific array element
        const val = ev.target.value;    // to access the date-value selected by user
        setRemarks(prev => {            // "prev" is the current array
            const nd = [...prev];         // shallow-copy "prev" into "nd" (new-data) array
            nd[idx].remarks = (val);
            values.push(nd[idx].remarks)


            // update the "tenureDate" at position "idx"
            return nd;                    // return the updated "nd" array to store into state
        });
    };


    useEffect(() => setEmiAmount(
        (numberOfInstallments && numberOfInstallments > 0)
            ? ([...Array(+numberOfInstallments).keys()].map(
                id => ({ id, emiAmount: '' })
            )) : null
    ), [numberOfInstallments]);
    console.log("emiAmount", emiAmount)
    emiAmount && emiAmount.map((emi, idx) => {

        values.push(emi.emiAmount)
    })
    useEffect(() => setRemarks(
        (numberOfInstallments && numberOfInstallments > 0)
            ? ([...Array(+numberOfInstallments).keys()].map(
                id => ({ id, emiAmount: '' })
            )) : null
    ), [numberOfInstallments]);
    console.log("emiAmount", emiAmount)
    remarks && remarks.map((remark, idx) => {

        values.push(remark.emiAmount)
    })


    console.log(remarks)





    const handleShareWithHr = () => {
        console.log("success")
    }
    const handleReject = () => {
        alert.error("Application Rejected")
    }
    return (
        <>
            <div className="relative flex h-64 flex-col lg:w-12/12 min-w-0 break-words w-full mb-6  shadow-lg rounded-lg bg-blueGray-100 border-0">

                <div className="flex-auto flex:col px-4 lg:px-10 py-0 pt-0">
                    <form>
                        <div className="w-full  py-2  px-2">


                            {emiAmount &&
                                Array.isArray(emiAmount) &&
                                emiAmount.length > 0 &&
                                emiAmount.map(
                                    ({ id, loan }) => (
                                        <div className="flex w-ful flex-row py-1">

                                            <div className="relative  px-2 w-full">

                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                </label>
                                                <input
                                                    key={id} id={id}
                                                    value={`Validation ${id + 1}`}
                                                    required={true}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                />
                                            </div>
                                            <div className="relative  px-2 mt-2 w-9">

                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                </label>
                                                <div class="flex mt-3">

                                                    <div  class="flex items-center mr-4">

                                                        <input  value="approve"  key={id} id={id} size="large" type="radio"  name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="inline-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Approve</label>
                                                    </div>
                                                    <div class="flex items-center mr-4">
                                                        <input value="reject" key={id} id={id} type="radio"  name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="inline-2-radio" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Reject</label>
                                                    </div>


                                                </div>
                                            </div>


                                            <div className="relative  px-2 w-full">

                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                </label>
                                                <input
                                                    onChange={handleRemarkChange}
                                                    placeholder={`Enter Remark ${id + 1}`}
                                                    key={id} id={id}
                                                    required={true}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                />
                                            </div>

                                        </div>


                                    )
                                )}
                            <center>
                                <div className="flex justify-end">
                                    <button onClick={handleReject} className=" mt-10 justify-end bg-orange-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Approval On Hold</button>

                                    <button onClick={handleReject} className=" mt-10 justify-end bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Reject Application</button>

                                    <button onClick={handleShareWithHr} className=" mt-10 justify-end bg-darkGreen-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Proceed and Share With HR</button>
                                </div>

                            </center>

                        </div>


                    </form>
                    <div className="px-100">



                    </div>

                </div>
            </div>


        </>
    )
}

export default Validation