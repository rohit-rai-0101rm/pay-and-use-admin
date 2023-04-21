import { useAlert } from "react-alert";
import moment from 'moment'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { underwritingMasterApi } from "actions/underwritingMasterActions";
import { underwritingMasterSaveApi } from "actions/underwritingMasterActions";

const ValidationCard = () => {
    const {underwritingSave,loading,success,error}=useSelector((state)=>state.underwritingSave)
    const { underwriting } = useSelector((state) => state.underwritingMaster)
    const loanId = localStorage.getItem("selectedloanId")
    const [statusObj, setStatusObj] = useState({});
    const [remarksObj, setRemarksObj] = useState({})
    let codesArr = []
    let descriptionArr = []
    let dates = []
    let values = []
    let resultArray = []
    let underwritingDetailsArray = []
    const statusButtonText = (hrFlagStatus) => {
        switch (hrFlagStatus) {
            case "Y":
                return "APPLICATION SENT TO HR"
            case "N":
                return "APPLICATION REJECTED"
            case "Z":
                return "APPLICATION ON HOLD"

        }

    }
    underwriting?.underwritingDetailsBeans?.map((item, inex) => {
        codesArr.push(item?.code)
        descriptionArr.push(item?.description)

    })

    const underwritingDetailsBeansArray = []

    console.log(codesArr)
    console.log(descriptionArr)

    const dispatch = useDispatch()
    const alert = useAlert();
    const [remarks, setRemarks] = useState(null);
    const [count, setCount] = useState(0);
    const numberOfUnderwritings = 10;





    //console.log(emiArray)
    let firstEmiDatee;
    //console.log(momentStartDateTemp)
    //console.log(momentStartDateTemp.date());

    const color = "light"









    useEffect(() => {
        if(error){
            alert.error("cannot be shared with HR")
        }
        if(success){
            alert.success("shared with HR successfully")
        }

        dispatch(underwritingMasterApi(loanId))

    }, [error,success])


    const handleReject = () => {
        alert.error("Application Rejected")
    }
    const handleRemarkChange = ev => {
        const idx = ev.target.id;       // to access specific array element
        const val = ev.target.value;

        console.log(idx)
        console.log(val)

        // to access the date-value selected by user
        setRemarks(prev => {            // "prev" is the current array
            const nd = [...prev];
            console.log(nd)       // shallow-copy "prev" into "nd" (new-data) array
            nd[idx].remarks = (val);
            values.push(nd[idx].remarks)


            // update the "tenureDate" at position "idx"
            return nd;                    // return the updated "nd" array to store into state
        });
    };
    const propertyValues = Object.values(statusObj);
    let remarksArray = []
    remarks?.map((item, index) => {
        remarksArray.push(item?.remarks)

    })
    
    const handleShareWithHr = e => {
        e.preventDefault()
        console.log("hii")
        for (let i = 0; i < codesArr.length; i++) {
            let obj = {}
            let code = codesArr[i]
            let description = descriptionArr[i]
            let flag = propertyValues[i]
            let remarks = remarksArray[i]
            obj.code=code
            obj.description=description
            obj.flag=flag
            obj.remarks=remarks
            console.log(obj)

            underwritingDetailsArray.push(obj)
            console.log(underwritingDetailsArray)
            obj = {}
        }

dispatch(underwritingMasterSaveApi(loanId,"Y",underwritingDetailsArray))

    }
    useEffect(() => setRemarks(
        (numberOfUnderwritings && numberOfUnderwritings > 0)
            ? ([...Array(+numberOfUnderwritings).keys()].map(
                id => ({ id, remarks: '' })
            )) : null
    ), [numberOfUnderwritings]);




    console.log(remarks)

    console.log(propertyValues)
    console.log("values", remarksArray)
    console.log("underwritingDetailsArray", underwritingDetailsArray)
    const getAadharButtonColor = (aadharStatus) => {
        switch (aadharStatus) {
            case null:
                return `mt-10 justify-end bg-theme text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`

                return
            case "Y":
                return `mt-10 justify-end bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`

            case "N":

                return `mt-10 justify-end bg-red-200 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`
            case "Z":
                return `mt-10 justify-end bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`

        }

    }
    return (
        <>
            <div className="relative flex h-64 flex-col lg:w-12/12 min-w-0 break-words w-full mb-6  shadow-lg rounded-lg bg-blueGray-100 border-0">

                <div className="flex-auto flex:col px-4 lg:px-10 py-0 pt-0">
                    <form onSubmit={handleShareWithHr}>
                        {
                            underwriting?.underwritingDetailsBeans?.map((item, index) => {
                                return (
                                    <div className="w-full  py-2  px-2">



                                        <div className="flex w-ful flex-row py-1">

                                            <div className="relative  px-2 w-full">

                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                </label>
                                                <input
                                                    disabled
                                                    value={item?.description}

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

                                                    <div class="flex items-center mr-4">

                                                        <input value="true" size="large" type="radio" name={`inlimne-radio-group+${item?.code}`} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

                                                            onChange={() => setStatusObj({
                                                                ...statusObj, [index]: true,
                                                            })}

                                                            required />
                                                        <label for="inline-radi0o" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Approve</label>
                                                    </div>
                                                    <div class="flex items-center mr-4">
                                                        <input value="false" type="radio" name={`inlimne-radio-group+${item?.code}`} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

                                                            onChange={() => setStatusObj({
                                                                ...statusObj, [index]: false,
                                                            })}

                                                            required />
                                                        <label for="inline-2-radi0o" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Reject</label>
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
                                                    key={index} id={index}


                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                />
                                            </div>

                                        </div>














                                    </div>


                                )

                            })
                        }
                        <center>
                            {
                                underwritingSave?.approvedFlag!=null?
                                <button className={getAadharButtonColor(underwritingSave?.approvedFlag)}>{statusButtonText(underwritingSave?.approvedFlag)}</button>

                                :

                                <div className="flex justify-end">
                                <button onClick={handleReject} className=" mt-10 justify-end bg-orange-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Approval On Hold</button>

                                <button onClick={handleReject} className=" mt-10 justify-end bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Reject Application</button>

                                <button type="submit" className=" mt-10 justify-end bg-darkGreen-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Proceed and Share With HR</button>
                            </div>

                            }
                          

                        </center>

                    </form>


                    <div className="px-100">



                    </div>

                </div>
            </div>


        </>
    )
}

export default ValidationCard