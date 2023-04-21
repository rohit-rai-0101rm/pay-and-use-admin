import { loanRequestDetailsApi } from 'actions/loanActions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DisbursalCardParameters = ({employeeInformation}) => {
    const { loanRequestDetails } = useSelector((state) => state.loanRequestDetails)
    const dispatch = useDispatch()
    const loanId = localStorage.getItem("selectedloanId")
    console.log(loanId)
    useEffect(() => {
      dispatch(loanRequestDetailsApi(loanId))
  
    }, [loanId])
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
    <div className="px-6">
        <div className="text-left mt-12">


            <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                <p className='text-lg font-bold'> Employee Name </p>
                <p className='text-lg'>{employeeInformation?.firstName + " " + employeeInformation?.lastName}</p>

            </div>


            <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                <p className='text-lg font-bold'>Buisness Unit</p>
                <p className='text-lg'>{employeeInformation?.buDescription}</p>

            </div>



            <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                <p className='text-lg font-bold'>Group Name</p>
                <p className='text-lg'>{employeeInformation?.groupDescription}</p>

            </div>

            <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                <p className='text-lg font-bold'>Legal Entity</p>
                <p className='text-lg'>{employeeInformation?.legalDescription}</p>

            </div>


            <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                <p className='text-lg font-bold'>Monthly Take Home</p>
                <p className='text-lg'>{employeeInformation?.ctcPm}</p>

            </div>
            <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                <p className='text-lg font-bold'>Date of Joining</p>
                <p className='text-lg'>{employeeInformation?.doj}</p>


            </div>
            <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                <p className='text-lg font-bold'>Loan Amount</p>
                <p className='text-lg'>{loanRequestDetails?.loanAmount?.toFixed(2)}</p>


            </div>


        </div>

    </div>
</div>
  )
}

export default DisbursalCardParameters