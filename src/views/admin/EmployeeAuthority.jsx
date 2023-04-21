import { employeeproductAuthorityMessagePostApi } from 'actions/EmployeeActions';
import { employeeProductAuthorityApi } from 'actions/EmployeeActions';
import { manualAuthorityPreRequisites } from 'actions/loanActions';
import GlobalFilterForGroup from 'components/Filters/GlobalFilterForGroup';
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { useAlert } from "react-alert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGlobalFilter, usePagination, useRowSelect, useTable } from 'react-table';
import Modal from 'react-modal';
import Accordion from "@mui/material/Accordion";
import ReactTooltip from "react-tooltip";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import EmployeeAuthorityDetails from './EmployeeAuthorityDetails';
import { Typography } from '@mui/material';
import LoanCard from 'components/Cards/LoanCard';
import EmiCard from 'components/Cards/EmiCard';
import { Hidden } from '@material-ui/core';
const EmployeeAuthority = () => {
  let totalInterest = 0
  const alert = useAlert()
  const [isOpen, setIsOpen] = useState(false)
  const { loadiing, success } = useSelector((state) => state.employeeProductAuthorityMessagePost)
  console.log(loadiing, success)
  const color = "light"
  const history = useHistory();
  const dispatch = useDispatch()

  const { buCode, empCode } = useParams()
  const { employeeProductAuthority } = useSelector((state) => state.employeeProductAuthority)
  console.log("employeeProductAuthority", employeeProductAuthority)
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  const handleManualAuthority = () => {
    history.push(`/admin/manualAuthority/employee/${buCode}/${empCode}`)
  }
  useEffect(() => {
    if (success) {
      alert.success("Sms sent succesfully")

    }
    dispatch(employeeProductAuthorityApi(buCode, empCode));
  }, [success]);



  const handleManual = (code, loan) => {
    console.log("code", code)
    console.log("loanAmount", loan)

    dispatch(manualAuthorityPreRequisites(code, loan))
    history.push(`/admin/manualAuthority/employee/${buCode}/${empCode}`)
  }
  const handleSmsSend = () => {

    dispatch(employeeproductAuthorityMessagePostApi(employeeProductAuthority))
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const renderHeader = () => {
    let headerElement = ['Installment No.', 'Outstanding Principle', 'EMI', 'Interest', 'Principle']

    return headerElement.map((key, index) => {
      return <th className={
        "px-12 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
        (color === "light"
          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
      } key={index}>{key.toUpperCase()}</th>
    })
  }
  const renderHeader2 = () => {
    let headerElement2 = ['Installment No.', 'Outstanding Principle', 'EMI', 'Interest', 'Principle']

    return headerElement2.map((key, index) => {
      return <th className={
        "px-12 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
        (color === "light"
          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
      } key={index}>{key.toUpperCase()}</th>
    })
  }
  const EmiHeaders = () => {
    return (
      <tr>
        <th className={
          "border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
        } >{"MONTH"}</th>


        <th className={
          "px-12  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
        }>{"Outstanding Principle(₹)"}</th>
        <th className={
          "px-12  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
        }>{"Emi(₹)"}</th>
        <th className={
          "px-12  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
        }>{"Interest(₹)"}</th>
        <th className={
          "px-12  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right " +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
        }>{"Principle(₹)"}</th>
      </tr>
    )

  }


  const EmiHeaders2 = () => {
    return (
      <tr>
        <th className={
          "border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
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
  
    return mpEmployeeAuthorityDetailBeans && mpEmployeeAuthorityDetailBeans.map(({ emiSeries, outstandingPrinciple, emi, interest, principle }, index) => {
      return (
        <tr key={index}>


          <td className="text-left border-t-0  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{index + 1}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{outstandingPrinciple.toFixed(2)}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{emi.toFixed(2)}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{interest.toFixed(2)}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{principle.toFixed(2)}</td>
        </tr>
      )
    })
  }
  const renderBodyEmiDetails = (totalEmi,mpEmployeeAuthorityDetailEMIs) => {
    let popped=mpEmployeeAuthorityDetailEMIs.pop()
    console.log("popped",popped)
    let sumOfRestOftheEmis=0
    mpEmployeeAuthorityDetailEMIs?.map((item,index)=>{
      sumOfRestOftheEmis=sumOfRestOftheEmis+item?.emi

    }

    )
    popped.emi=totalEmi-sumOfRestOftheEmis
    mpEmployeeAuthorityDetailEMIs.push(popped)
    return mpEmployeeAuthorityDetailEMIs && mpEmployeeAuthorityDetailEMIs.map(({ emiSeries, outstandingPrinciple, emi, interest, principle, index }) => {
      return (
        <tr key={index}>


          <td className="text-left border-t-0  border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{emiSeries}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{"NA"}</td>
          <td className="text-right border-t-0 px-12 border-l-0 border-r-0 text-sm whitespace-nowrap p-4">{emi}</td>

        </tr>
      )
    })
  }
  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
      {
        employeeProductAuthority?.map((item, index) => {

          return (
            <Accordion className='mb-4'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="text-xl text-center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">

                  {item?.loanTypeDescription}
                </h3>

              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                      <div className="px-6">
                        <div className="flex flex-wrap justify-center">

                          <div className="w-full px-4 text-center">
                            <div className="flex justify-between py-4 lg:pt-4">
                              <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  {item?.mpEmployeeAuthorityDetailEMIs?.length}
                                </span>
                                <span className="text-sm text-blueGray-400">Number of Emi's</span>
                              </div>
                              <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  {item?.interestRate.toFixed(2)}{"%"}
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
                          <hr />
                          <div className="flex justify-between flex-row font-bold text-blueGray-600 mt-4">
                            <p>Salary Cycle</p>
                            <p className='text-xl'>{item?.salaryType}</p>

                          </div>

                          <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                            <p> Loan Amount </p>
                            <p className='text-xl'>{item?.loanAmount.toFixed(2)}</p>

                          </div>
                          <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">


                            <p data-tip data-for="registerTip">
                              Total FEE
                              <ManageSearchIcon />

                            </p>
                            <p>{(item?.totalProcessingCharges).toFixed(2)}</p>

                          </div>
                          <ReactTooltip id="registerTip" place="top" effect="float">
                            <div className='text-white'>
                              <div className="flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                                <p className='text-white'>FEE</p>
                                <p className=' px-6 text-white'>{item?.processingCharges.toFixed(2)}</p>

                              </div>



                              {
                                item?.gstCharges &&
                                <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                                  <p className='text-white' >GST </p>
                                  <p className='px-6 text-white'>{item?.gstCharges.toFixed(2)}</p>

                                </div>

                              }
                            </div>

                          </ReactTooltip>
                          <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                            <p>Amount Financed</p>
                            <p>{item?.loanAmountRecovered.toFixed(2)}</p>

                          </div>



                          <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                            <p>Total Interest</p>
                            <p>{item?.totalInterest.toFixed(2)}</p>

                          </div>

                          <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                            <p>Amount to be Recovered from Customer</p>
                            <p>{Math.round(item?.loanAmountRecovered + item?.totalInterest).toFixed(2)}</p>

                          </div>


                          <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                            <p>Average Outstanding Principle</p>
                            <p>{item?.averageOutstandingPrinciple.toFixed(2)}</p>

                          </div>
                          <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                            <p>Annual Percentage Rate</p>
                            <p>{item?.apr}{"%"}</p>


                          </div>



                          <div className="mb-2 flex justify-between flex-row font-bold text-blueGray-600 mt-2">
                            <p>Total EMI</p>
                            <p>{Math.round(item?.totalEmi.toFixed(2))}</p>

                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-8/12 px-4 shadow-lg">

                    <h6 className="text-blueGray-700 text-lg font-bold"> LOAN DETAILS</h6>

                    <table className=" mt-4 items-center w-full bg-transparent border-collapse">
                      {EmiHeaders()}
                      {

                        item?.mpEmployeeAuthorityDetailBeans &&


                        renderBody(item?.mpEmployeeAuthorityDetailBeans)
                      }

                    </table>

                    <hr />
                    <Accordion className='mt-4'>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <h6 className="text-blueGray-700 text-lg font-bold"> VIEW EMI DETAILS</h6>

                      </AccordionSummary>
                      <AccordionDetails>

                        <table className=" mt-6 items-center w-full bg-transparent border-collapse">

                          {EmiHeaders2()}
                          {

                            item?.mpEmployeeAuthorityDetailEMIs &&


                            renderBodyEmiDetails(item?.totalEmi,item?.mpEmployeeAuthorityDetailEMIs)
                          }

                        </table>


                      </AccordionDetails>
                    </Accordion>


                  </div>

                </div>
                <center>
                  <button onClick={() => handleManual(item?.loanTypeCode, item?.loanAmount)} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Check Manually
                  </button>
                </center>


              </AccordionDetails>
            </Accordion>

          )



        })

      }
      <center>
        <button onClick={handleSmsSend} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          COnfirm and send sms
        </button>
      </center>

    </>
  );
}

export default EmployeeAuthority














