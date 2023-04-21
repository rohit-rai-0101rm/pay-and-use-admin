import { loanDisbursalApi } from 'actions/loanActions'
import { loanRequestDetailsApi } from 'actions/loanActions'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

const DisbursalCard = () => {
    const alert = useAlert()
    const { disbursal, loading, error, success } = useSelector((state) => state.loanDisburse)
    const dispatch = useDispatch()
    const [utrNumber, setUtrNumber] = useState(null)
    const [disbursalDate, setDisbursalDate] = useState(null)
    const loanId = localStorage.getItem("selectedloanId")
    console.log(loanId)

    useEffect(() => {
        if (success) {
            alert.success("Loan disbursed successfully")
        }
        if (error) {
            alert.error("Loan disbursed successfully")
        }

    }, [success, error])
    const handleUtrNumber = (e) => {
        setUtrNumber(e.target.value)

    }

    const handleDisbursalDate = (e) => {
        setDisbursalDate(moment(e.target.value))

    }


    const disburseLoan = (e) => {
        e.preventDefault()
        dispatch(loanDisbursalApi(loanId, utrNumber, disbursalDate))
    }
    return (

        <>
            <div className="relative flex mt-6  flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-2xl font-bold">
                            Disbursal Information
                        </h6>
                    </div>
                </div>
                <form onSubmit={(e) => disburseLoan(e)}>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                        <div className="flex flex-wrap mt-2">
                            <div className="w-full lg:w-8/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Utr Number
                                    </label>
                                    <input
                                    required
                                        onChange={(e) => handleUtrNumber(e)}


                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-8/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Date of Disbursal
                                    </label>
                                    <input
                                        required

                                        onChange={(e) => handleDisbursalDate(e)}
                                        type="date"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">

                                    <button type="submit" className=" mt-2 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        UPDATE LOAN AS DISBURSED
                                    </button>

                                </div>
                            </div>
                        </div>





                    </div>
                </form>

            </div>
        </>
    )
}

export default DisbursalCard