import { payDayBreakUpApi } from 'actions/breakupActions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PayDaybreakup = ({ productId1 }) => {
    const dispatch = useDispatch()

    console.log(productId1)
 

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">

                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>

                        <div className="flex flex-wrap">




                            <div className="w-full px-4">
                                <div className="relative py-2 w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        TENURE
                                    </label>
                                    <input
                                        type="number"
                                        value={"payDayTenure"}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                    />
                                </div>

                            </div>

                            <div className="w-full  px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Intrest
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                    />
                                </div>
                            </div>
                            <div className="w-full  px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        FEE TYPE
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                    />
                                </div>
                            </div>


                            <div className="w-full  px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        FEE AMOUNT
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                    />
                                </div>
                            </div>


                        </div>












                    </form>
                </div>
            </div>
        </>
    )
}

export default PayDaybreakup