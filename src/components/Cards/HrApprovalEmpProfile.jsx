import { loanRequestDetailsApi } from 'actions/loanActions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const HrApprovalEmpProfile = ({ employeeInformation }) => {
    const dispatch = useDispatch()
    const { loanRequestDetails } = useSelector((state) => state.loanRequestDetails)

    const loanId = localStorage.getItem("selectedloanId")
    console.log(loanId)
    useEffect(() => {
        dispatch(loanRequestDetailsApi(loanId))

    }, [loanId])
    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
            <div className="px-6">
                <div className="text-left mt-12">

                    <div className="mb-2 mt-2 flex justify-between flex-row text-blueGray-600 mt-2">
                        <p className="text-lg font-bold"> Employee Name </p>
                        <p className="text-lg">{employeeInformation?.firstName + " " + employeeInformation?.lastName}</p>

                    </div>


                    <div className="mb-2 mt-4 flex justify-between flex-row text-blueGray-600 mt-2">
                        <p className="text-lg font-bold">Buisness Unit</p>
                        <p className="text-lg">{employeeInformation?.buDescription}</p>

                    </div>



                    <div className="mb-2 mt-4 flex justify-between flex-row text-blueGray-600 mt-2">
                        <p className="text-lg font-bold">Group Name</p>
                        <p className="text-lg">{employeeInformation?.groupDescription}</p>

                    </div>

                    <div className="mb-2 mt-4 flex justify-between flex-row text-blueGray-600 mt-2">
                        <p className="text-lg font-bold">Legal Entity</p>
                        <p className="text-lg">{employeeInformation?.legalDescription}</p>

                    </div>


                    <div className="mb-2 flex mt-4 justify-between flex-row text-blueGray-600 mt-2">
                        <p className="text-lg font-bold">Monthly Take Home</p>
                        <p className="text-lg">{Math.ceil(employeeInformation?.ctcPm)}</p>

                    </div>
                    <div className="mb-2 flex mt-4 justify-between flex-row text-blueGray-600 mt-2">
                        <p className="text-lg font-bold">Loan Amount</p>
                        <p className="text-lg">                    {loanRequestDetails?.loanAmount?.toFixed(2)}
                        </p>

                    </div>
                    <div className="mb-2 flex mt-4 justify-between flex-row text-blueGray-600 mt-2">
                        <p className="text-lg font-bold">FEE</p>
                        <p className="text-lg">{(loanRequestDetails?.othersCharges + loanRequestDetails?.othersGstCharges + loanRequestDetails?.processingGstCharges + loanRequestDetails?.processingCharges)?.toFixed(2)}

                        </p>

                    </div>
                    <div className="mb-2 flex mt-4 justify-between flex-row text-blueGray-600 mt-2">
                        <p className="text-lg font-bold">Date of Joining</p>
                        <p className="text-lg">{employeeInformation?.doj}</p>


                    </div>


                </div>

            </div>
        </div>
    )
}

export default HrApprovalEmpProfile