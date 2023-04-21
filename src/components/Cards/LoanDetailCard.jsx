import { hrApprovalApi } from "actions/loanActions";
import { loanRequestDetailsApi } from "actions/loanActions";
import Loader from "layouts/Loader/Loader";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

// components

export default function LoanDetailCard() {
  const alert = useAlert()
  const { hrApproval, loading, success, error } = useSelector((state) => state.hrApproval)
  const { loanRequestDetails } = useSelector((state) => state.loanRequestDetails)
  const [hrApprovalFlag, setHrApprovalFlag] = useState(null)
  const dispatch = useDispatch()
  const loanId = localStorage.getItem("selectedloanId")
  console.log(loanId)
  useEffect(() => {
    dispatch(loanRequestDetailsApi(loanId))
    if (success) {
   alert.success("hr status updated")
    }

  }, [dispatch,loading,success])
  const color = "light"

  console.log("hrApprovalFlag", hrApprovalFlag)

  const sendToHr = () => {
    dispatch(hrApprovalApi(loanId, hrApprovalFlag))

  }
  const EmiHeaders2 = () => {
    return (
      <tr>
        <th className={
          "px-12 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
        } >{"Installment Number"}</th>


        <th className={
          "px-12  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
        }>{"DUE DATE"}</th>
        <th className={
          "px-12  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
        }>{"Emi(₹)"}</th>

      </tr>
    )

  }
  const renderBody = (mpEmployeeAuthorityDetailBeans) => {
    return mpEmployeeAuthorityDetailBeans && mpEmployeeAuthorityDetailBeans.map(({ emiSeries, emiDate, emi, interest, principle }, index) => {
      return (
        <tr key={index}>

          <td className="text-left border-t-0 px-12  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{index + 1}</td>

          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{emiDate}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{emi}</td>

        </tr>
      )
    })
  }
  if(loading){
    return (
      <Loader/>
    )
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">            EMI SCHEDULE
            </h6>

          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">

              <table className=" mt-6 items-center w-full bg-transparent border-collapse">

                {EmiHeaders2()}
                {

                  loanRequestDetails &&


                  renderBody(loanRequestDetails?.details)
                }

              </table>
            </div>
          </div>
          <center>
            <div class="flex justify-center mt-12">

              <div class="flex items-center mr-4">

                <input onChange={(e) => setHrApprovalFlag(e.target.value)} id="inline-radio" size="large" type="radio" value="Z" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="inline-radio" class="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Hold</label>
              </div>
              <div class="flex items-center mr-4">
                <input onChange={(e) => setHrApprovalFlag(e.target.value)} id="inline-2-radio" type="radio" value="N" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="inline-2-radio" class="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Reject</label>
              </div>
              <div class="flex items-center mr-4">
                <input onChange={(e) => setHrApprovalFlag(e.target.value)} id="inline-2-radio" type="radio" value="Y" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-green border-gray-300 focus:ring-blue-500 text-lg dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="inline-2-radio" class="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Approve</label>
              </div>


            </div>

            <button onClick={sendToHr} className=" mt-10 justify-end bg-theme text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">SUBMIT</button>

          </center>
        </div>
      </div>
    </>
  );
}