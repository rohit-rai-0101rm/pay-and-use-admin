import { productFetchApi } from 'actions/loanActions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

const BuDetails = () => {
    const { product } = useSelector((state) => state.productFetch)
    const dispatch = useDispatch()
    const { id: buCode } = useParams()
    console.log(buCode)

    useEffect(() => {
        dispatch(productFetchApi(buCode))
    }, [buCode])
    return (
        <div className="relative items-stretch flex flex-wrap flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div>
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">ADMIN</h6>

                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">




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
                                        Loan Type
                                    </label>
                                    <select className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                        {product.map((item) => (
                                            <option key={item.loanTypeCode} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.loanTypeCode}>
                                                {item.loanTypeDescription}
                                            </option>
                                        ))}

                                    </select>

                                </div>
                            </div>

                        </div>








                    </div>









                </div>
            </div>


        </div>
    )
}

export default BuDetails