import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { payDayBreakUpApi } from 'actions/breakupActions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment from 'moment'

const LoanDetails = () => {
    const color = "light"
    const { payDayBreakup: pd, loading } = useSelector((state) => state.payDayBreakUp)
    const dispatch = useDispatch()
    const { loanId } = useParams()
    useEffect(() => {
        dispatch(payDayBreakUpApi(loanId))

    }, [loanId])

    const renderHeader = () => {
        let headerElement = ['S.No.', 'Fee Name', 'Amount', 'GST', 'Fee Type']

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
                    <td className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{item?.amount}</td>
                    <td className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{item?.gstApplicable === true ? "✅" : "❌"}</td>
                    <td className="text-right border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{item?.feeTypeCodeDescription}</td>
                </tr>
            )
        })
    }
    return (
        <center>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-6/12 mb-6 shadow-xl rounded-lg mt-4">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">

                        <div className="w-full px-4 text-center mt-2">
                            <div className="flex justify-between py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {pd?.tenure}
                                    </span>
                                    <span className="text-sm text-blueGray-400">tenure(month)</span>
                                </div>
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {pd?.interestRate}
                                    </span>
                                    <span className="text-sm text-blueGray-400">Interest(%)</span>
                                </div>
                                <div className="lg:mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {pd?.gstApplicable === true ? "✅" : "❌"}
                                    </span>
                                    <span className="text-sm text-blueGray-400">Gst</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left mt-4">
                        <h3 className="text-xl text-center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            {pd?.productDescription}
                        </h3>
                        <div className="text-sm text-center leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            {pd?.productCode}
                        </div>

                        <div className='flex justify-between  mt-2'>
                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                                Created

                            </p>
                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">

                                {moment(pd?.createdDate).fromNow()}
                            </p>

                        </div>
                        <div className='flex justify-between  mt-2'>
                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                                Created By

                            </p>
                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">

                                {pd?.createdBy}
                            </p>

                        </div>
                        <div className='flex justify-between  mt-2'>
                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                                Loan Type

                            </p>
                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">

                                {pd?.loanTypeCode}
                            </p>

                        </div>

                        <div className='flex justify-between  mt-2'>
                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                                Fee Type
                            </p>

                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                                {pd?.feeTypeDescription}
                            </p>

                        </div>
                        <div className='flex justify-between  mt-2'>
                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                                Cut Off Day
                            </p>

                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                                {pd?.cutOffDay}
                            </p>

                        </div>

                        <div className='flex justify-between  mt-2'>
                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                                Fee
                            </p>

                            <p className="text-sm text-center font-bold leading-normal mb-2 text-blueGray-700 mb-2">
                                ₹ {pd?.processingFee}
                            </p>

                        </div>
                    </div>

                    {

                        pd?.mpProductFeeDetailsBeans?.length > 0 &&
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

pd?.mpProductFeeDetailsBeans &&


                                        renderBody(pd?.mpProductFeeDetailsBeans)
                                    }

                                </table>


                            </AccordionDetails>
                        </Accordion>


                    }

                </div>
            </div>
        </center>
    )
}

export default LoanDetails