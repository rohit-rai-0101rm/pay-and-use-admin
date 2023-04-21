import { breakUpApi } from 'actions/breakupActions'
import { employeeproductUpdateApi } from 'actions/EmployeeActions'
import { productFilterApi } from 'actions/loanActions'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

const UpdateEmployeeProductForm = ({ wantToUpdate, setWantToUpdate, updatingLoanType, empCode, buCode, empId }) => {

    const alert = useAlert()

    const { productFilter } = useSelector((state) => state.productFilter)

    const { breakup } = useSelector((state) => state.breakup)

    console.log(breakup)
    console.log(productFilter)
    const [productId, setProductId] = useState(null)
    const [description, setDescription] = useState('')

    const [code, setCode] = useState(updatingLoanType)
    const [size, setSize] = useState(10000)
    const [sort, setSort] = useState('id')
    const [sortType, setSortType] = useState('desc')
    const [pageNo, setPageNo] = useState(0)
    const dispatch = useDispatch()
    const handleSave = () => {
        if (productId == null) {
            alert.error("Please select a plan")
        }
        else {
            dispatch(employeeproductUpdateApi(empId, buCode, empCode, updatingLoanType, productId))
            window.location.reload()
            setWantToUpdate(false)

        }

    }
    useEffect(() => {


        dispatch(productFilterApi(code, description, sort, sortType, size, pageNo));

        dispatch(breakUpApi(productId))


    }, [dispatch, updatingLoanType, empCode, buCode, empId, productId]);
    console.log(updatingLoanType, empCode, buCode, empId)
    return (
        <>
            {
                wantToUpdate &&
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl px-6 mr-2 font-bold">Updating Plan</h6>

                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>

                            <div className="flex flex-wrap">

                                <div className="w-full lg:w-6/12 px-4 py-2">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Select from below
                                    </label>
                                    <select onChange={(e) => setProductId(e.target.value)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                        <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                            Please select an option
                                        </option>
                                        {productFilter.map((item) => (
                                            <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.productCode}>
                                                {item.productDescription}
                                            </option>
                                        ))}

                                    </select>
                                </div>


                            </div>
                            {
                                breakup &&
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative py-2 w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                TENURE
                                            </label>
                                            <input
                                                disabled
                                                value={breakup?.tenure}
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                            />
                                        </div>

                                    </div>

                                    <div className="w-full  px-4">
                                        <div className="relative w-6/12 mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Intrest
                                            </label>
                                            <input
                                                disabled
                                                value={breakup?.interestRate}
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                            />
                                        </div>
                                    </div>
                                    <div className="w-full  px-4">
                                        <div className="relative w-6/12 mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                FEE TYPE
                                            </label>
                                            <input
                                                disabled
                                                value={breakup?.feeTypeDescription}
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                            />
                                        </div>
                                    </div>


                                    <div className="w-full  px-4">
                                        <div className="relative w-6/12 mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                PROCESSING FEE
                                            </label>
                                            <input
                                                disabled
                                                value={breakup?.processingFee}
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                            />
                                        </div>
                                        {
                                            breakup?.mpProductFeeDetailsBeans?.length > 0 &&
                                            <h1 className="text-blueGray-700 text-xl font-bold" text-blueGray-700 text-xl font-bold>Additional Charges</h1>

                                        }

                                    </div>

                                    {
                                        breakup?.mpProductFeeDetailsBeans &&
                                        breakup?.mpProductFeeDetailsBeans.map((item, index) => {
                                            return (

                                                <div className="flex flex-wrap">
                                                    <div className="w-1/3 lg:w-4/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Name of Fee
                                                            </label>
                                                            <input
                                                                disabled
                                                                value={item?.nameOfFee}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className="w-1/3 lg:w-4/12 px-4">

                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Amount
                                                            </label>
                                                            <input
                                                            disabled
                                                                value={item?.amount}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                                            />

                                                        </div>

                                                    </div>

                                                    <div className="w-1/3 lg:w-4/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Fee Type
                                                            </label>
                                                            <input
                                                            disabled
                                                                value={item?.feeTypeCode}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                                            />

                                                        </div>
                                                    </div>

                                                </div>




                                            )


                                        })
                                    }







                                </div>

                            }



                        </form>
                        <center>
                            <button onClick={handleSave} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                SAVE
                            </button>
                        </center>
                    </div>
                </div>

            }

        </>
    );
}

export default UpdateEmployeeProductForm