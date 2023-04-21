import React from 'react'

const LoanCard = ({ item }) => {
    console.log(item)
    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">

                    <div className="w-full px-4 text-center mt-20">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                            <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    {item?.loanAmount}
                                </span>
                                <span className="text-sm text-blueGray-400">Loan(₹)</span>
                            </div>
                            <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    {item?.interestRate}{"%"}
                                </span>
                                <span className="text-sm text-blueGray-400">Interest</span>
                            </div>
                            <div className="lg:mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                    {item?.tenure}
                                </span>
                                <span className="text-sm text-blueGray-400">Tenure(months)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-left mt-12">
                    <h3 className="text-xl text-center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        {item?.productDescription}
                    </h3>
                    <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-10">
                        <p>FEE</p>
                        <p>₹{item?.processingCharges}</p>

                    </div>


                    {
                        item?.gstCharges &&
                        <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                            <p>GST CHARGES</p>
                            <p>₹{item?.gstCharges}</p>

                        </div>

                    }

                    <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                        <p>Total FEE</p>
                        <p>₹{item?.totalProcessingCharges}</p>

                    </div>
                    <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                        <p>Amount to be Recovered from Customer</p>
                        <p>₹{item?.loanAmountRecovered + item?.totalInterest}</p>

                    </div>

                    <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                        <p>Amount Financed</p>
                        <p>₹{item?.loanAmountRecovered}</p>

                    </div>

                    <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                        <p>Average Outstanding Principle</p>
                        <p>₹{item?.averageOutstandingPrinciple}</p>

                    </div>
                    <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                        <p>Total Emi</p>
                        <p>₹{item?.totalEmi}</p>

                    </div>
                    <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                        <p>Total Interest</p>
                        <p>₹{item?.totalInterest}</p>

                    </div>
                    <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                        <p>Annual Percentage Rate</p>
                        <p>{item?.apr}{"%"}</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanCard