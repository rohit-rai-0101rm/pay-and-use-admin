import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { saveBuProductApi } from 'actions/buisnessUnitActions';
import { useHistory, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

const LonBreakupCard = ({ loanDetails }) => {
    const history=useHistory()
    const alert=useAlert()
    const dispatch=useDispatch()
    const { id, buCode } = useParams()
    const renderHeader = () => {
        let headerElement = ['S.No.', 'Fee Name', 'Amount(₹)', 'GST', 'Fee Type']

        return headerElement.map((key, index) => {
            return <th className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
                (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            } key={index}>{key.toUpperCase()}</th>
        })
    }


    const renderBody = (mpProductFeeDetailsBeans) => {
        return mpProductFeeDetailsBeans && mpProductFeeDetailsBeans.map((item, index) => {
            return (
                <tr key={index}>


                    <td className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{index + 1}</td>
                    <td className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{item?.nameOfFee}</td>
                    <td className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{item?.amount.toFixed(2)}</td>
                    <td className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{item?.gstApplicable === true ? "✅" : "❌"}</td>
                    <td className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{item?.feeTypeCodeDescription}</td>
                </tr>
            )
        })
    }
    const [productCode, setProductCode] = useState(id)
    const [loanTypeCode, setLoanTypeCode] = useState("PAYDAY")
    const [isSaved, setIsSaved] = useState(false)
    const saveProduct = () => {

        dispatch(saveBuProductApi(buCode, loanTypeCode, productCode))
        setIsSaved(true)
        alert.success("saved successfully")

    }
    const handleProceed = () => {

        history.push(`/admin/shortTermLoanSelection/${buCode}`)
    }
    const color = "light"
    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-4">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">

                    <div className="w-full px-4 text-center mt-2">
                        <div className="flex justify-between py-4 lg:pt-4 pt-8">
                            <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    {loanDetails?.tenure}
                                </span>
                                <span className="text-sm text-blueGray-400">tenure(month)</span>
                            </div>
                            <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    {loanDetails?.interestRate.toFixed(2)}
                                </span>
                                <span className="text-sm text-blueGray-400">Interest(%)</span>
                            </div>
                            <div className="lg:mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    {loanDetails?.gstApplicable === true ? "✅" : "❌"}
                                </span>
                                <span className="text-sm text-blueGray-400">Gst</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-left mt-4">
                    <h3 className="text-xl text-center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        {loanDetails?.productDescription}
                    </h3>
                    <div className="text-sm text-center leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        {loanDetails?.productCode}
                    </div>

                    <div className='flex justify-between  mt-2'>
                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                            Created

                        </p>
                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">

                            {moment(loanDetails?.createdDate).fromNow()}
                        </p>

                    </div>
                    <div className='flex justify-between  mt-2'>
                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                            Created By

                        </p>
                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">

                            {loanDetails?.createdBy}
                        </p>

                    </div>
                    <div className='flex justify-between  mt-2'>
                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                            Loan Type

                        </p>
                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">

                            {loanDetails?.loanTypeCode}
                        </p>

                    </div>

                    <div className='flex justify-between  mt-2'>
                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                            Fee Type
                        </p>

                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                            {loanDetails?.feeTypeDescription}
                        </p>

                    </div>
                    <div className='flex justify-between  mt-2'>
                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                            Cut Off Day
                        </p>

                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                            {loanDetails?.cutOffDay}
                        </p>

                    </div>

                    <div className='flex justify-between  mt-2'>
                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                            Fee
                        </p>

                        <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                            ₹ {loanDetails?.processingFee.toFixed(2)}
                        </p>

                    </div>
                </div>

                {

                    loanDetails?.mpProductFeeDetailsBeans?.length > 0 &&
                    <Accordion className='mt-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <h6 className="mt-2 text-blueGray-700 text-lg font-bold">View Additional Charges</h6>

                        </AccordionSummary>
                        <AccordionDetails>

                            <table className=" mt-6 items-center w-full bg-transparent border-collapse">

                                {renderHeader()}
                                {

                                    loanDetails?.mpProductFeeDetailsBeans &&


                                    renderBody(loanDetails?.mpProductFeeDetailsBeans)
                                }

                            </table>


                        </AccordionDetails>
                    </Accordion>


                }

            </div>
            {
                isSaved ?
                    <center>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">

                                    <button onClick={handleProceed} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        PROCEED
                                    </button>

                                </div>
                            </div>
                        </div>
                    </center>
                    :
                    <center>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">

                                    <button onClick={saveProduct} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                        SAVE
                                    </button>

                                </div>
                            </div>
                        </div>
                    </center>

            }
        </div>
    )
}

export default LonBreakupCard