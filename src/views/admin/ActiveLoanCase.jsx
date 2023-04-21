import { activeLoanDetailApi } from 'actions/loanActions';
import ActiveLoanDetailsCard from 'components/Cards/ActiveLoanDetailsCard'
import CardProfile from 'components/Cards/CardProfile'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';



const ActiveLoanCase = () => {
  


  


  const { loading, loanRequestDetails } = useSelector((state) => state.activeLoanDetails)
  console.log(loanRequestDetails)
  const dispatch = useDispatch()
  const [loanId, setLoanId] = useState(null)
  const color = "light"
  const alert = useAlert()
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null)
  const [num, setNum] = useState(1000)
  const [fileSize, setFileSize] = useState(null)
  const [isFileUploaded, setIsFileUploaded] = useState(null)
  const renderHeader = () => {

    return <tr>
      <th className={
        "border border-solid py-3 px-4 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
        (color === "light"
          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
      } >{"Installment Number"}</th>


      <th className={
        "px-12  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
        (color === "light"
          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
      }>{"EMI AMOUNT"}</th>
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
      }>{"OUTSTANDING AMOUNT"}</th>

    </tr>

  }

  const renderBody = (details) => {

    return details && details.map(({ emi, emiDate, outstandingPrinciple }, index) => {
      return (
        <tr key={index}>


          <td className="text-left border-t-0 px-4  border-l-0 border-r-0 text-xs whitespace-nowrap">{index + 1}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{emi.toFixed(2)}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{emiDate}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{outstandingPrinciple.toFixed(2)}</td>
        </tr>
      )
    })
  }


  const openModal = (e) => {
    e.preventDefault()

    setIsOpen(true);
  }
  const [amountReceived, setAmountReceived] = useState(null)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '5px',
      border: 'none'
    },
  };
  const handleAmountChange = (e) => {
    setNum(num - e.target.value)
  }
  const fileHandler = (event) => {


  }
  const handleConfirm = () => {
    setIsOpen(false)

    alert.success("updated succesfully")
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {

    dispatch(activeLoanDetailApi("LRMP0000000001"))

  }, [])
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/12 px-4">

        

          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

              <h6 className="text-blueGray-400 font-extrabold text-sm mt-3 mb-6 font-bold uppercase">
                Loan Applicant Details
              </h6>
              <div className="flex mt-10 flex-wrap">
                <div className="w-full mt-2 justify-between lg:w-12/12 flex flex-row px-4">
                  <p className="font-bold  text-lg">Name</p>

                  <p className=" font-bold text-lg">{loanRequestDetails?.firstName} {loanRequestDetails?.lastName}</p>
                </div>
                <div className="w-full mt-2 justify-between lg:w-12/12 flex flex-row px-4">
                  <p className="font-bold  text-lg">Loan Amount</p>

                  <p className="font-bold  text-lg">{loanRequestDetails?.loanAmount}</p>
                </div>
                <div className="w-full mt-2 justify-between lg:w-12/12 flex flex-row px-4">
                  <p className="font-bold  text-lg">Interest</p>

                  <p className="font-bold  text-lg">{loanRequestDetails?.interestRate}{"%"}</p>
                </div>
                <div className="w-full mt-2 justify-between lg:w-12/12 flex flex-row px-4">
                  <p className="font-bold  text-lg">Amount to Be Recovered</p>

                  <p className=" font-bold text-lg">36084</p>
                </div>
                <div className="w-full mt-2 justify-between lg:w-12/12 flex flex-row px-4">
                  <p className="font-bold  text-lg">Amount Paid</p>

                  <p className=" font-bold text-lg">{loanRequestDetails?.paidAmount}</p>
                </div>
                <div className="w-full mt-2 justify-between lg:w-12/12 flex flex-row px-4">
                  <p className="font-bold  text-lg">Pending Amount</p>

                  <p className=" font-bold text-lg">{loanRequestDetails?.pendingAmount}</p>
                </div>
                <div className="w-full mt-2 justify-between lg:w-12/12 flex flex-row px-4">
                  <p className="font-bold  text-lg">FEE</p>

                  <p className=" font-bold text-lg">{loanRequestDetails?.processingFee}</p>
                </div>
                <div className="w-full mt-2 justify-between lg:w-12/12 flex flex-row px-4">
                  <p className="font-bold  text-lg">Date of Disbursal</p>

                  <p className=" font-bold text-lg">{loanRequestDetails?.datetimedisbursal}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <center>

            <form>

              <div className="flex justify-center flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <center>
                      <h6 className="text-blueGray-700 text-xl inline-block font-bold">UPDATE AMOUNT RECEIVED</h6>

                      <input
                        onChange={(e) => handleAmountChange(e)}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />

                    </center>

                  </div>
                </div>



              </div>





            </form>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">

                  <button onClick={handleConfirm} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Confirm
                  </button>
                  <button onClick={closeModal} className=" mt-10 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Cancel
                  </button>

                </div>
              </div>
            </div>

          </center>


        </Modal>
        <div className="w-full lg:w-8/12 px-4">
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
              (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
            }
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                  >
                    Emi details
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className=" mt-6 items-center w-full bg-transparent border-collapse">

                {renderHeader()}
                {

                  loanRequestDetails?.details &&


                  renderBody(loanRequestDetails?.details)
                }

              </table>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default ActiveLoanCase