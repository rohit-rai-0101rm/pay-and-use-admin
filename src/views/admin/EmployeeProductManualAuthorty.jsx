import { manualAuthorityApi } from "actions/loanActions";
import CardProfile from "components/Cards/CardProfile";
import CardSettings from "components/Cards/CardSettings";
import PayDayAuthority from "components/Cards/PayDayAuthority";
import ShortTermAuthority from "components/Cards/ShortTermAuthority";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Tables from "../admin/Table"
import { useTable, useGlobalFilter, usePagination, useRowSelect } from 'react-table'
import EmiData from "./EmiData";
import Loader from "layouts/Loader/Loader";

const EmployeeProductManualAuthorty = () => {
  const { loading, manualAuthorityProduct } = useSelector((state) => state.manualAuthority)
  console.log(manualAuthorityProduct)
  const { mpEmployeeAuthorityDetailBeans } = manualAuthorityProduct
  const dispatch = useDispatch();
  const preRequisites = JSON.parse(localStorage.getItem("preRequisites"))
  console.log("preRequisites", preRequisites)
  const { code, amount } = preRequisites
  const { buCode, empCode } = useParams()
  console.log(buCode, empCode)

  const [inputVal, setInputVal] = useState('')

  const [loanTypeCode, setLoanTypeCode] = useState(code)
  const [loanAmount, setLoanAmount] = useState(amount)
  console.log(loanAmount)

  console.log(loanTypeCode)
  const handleInputVal = (e) => {
    setInputVal(e.target.value)
  }
  useEffect(() => {


    dispatch(manualAuthorityApi(buCode, empCode, loanTypeCode, parseInt(inputVal)));
  }, [dispatch, buCode, empCode, loanTypeCode, amount, inputVal]);
  return (

    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">Manual Authority </h6>

        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div>

          <div className="flex flex-wrap mt-2">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative  w-full mb-3">
                <input
                  onChange={(e) => handleInputVal(e)}
                  placeholder="100000"
                  type="range"
                  step={1000}
                  min={1000}
                  max={loanAmount}
                  className=" px-3 py-3   bg-white rounded text-sm   w-full ease-linear transition-all duration-150"
                />
                <input
                  value={inputVal}
                  placeholder="drag the above font-bold slider for loan amount"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>

          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Loan Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Loan Amount
                </label>
                <input
                  disabled
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={manualAuthorityProduct.loanAmount}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Amount Financed
                </label>
                <input
                  disabled
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={manualAuthorityProduct.loanAmountRecovered}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Annual Percentage Rate
                </label>
                <input
                  disabled
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={manualAuthorityProduct.apr}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Interest Rate
                </label>
                <input
                  disabled
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={manualAuthorityProduct.interestRate}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  GST CHARGES
                </label>
                <input
                  disabled
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={manualAuthorityProduct.gstCharges}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Amount to be Recovered from Customer
                </label>
                <input
                  disabled
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={(manualAuthorityProduct.loanAmountRecovered + manualAuthorityProduct.totalInterest).toFixed(2)}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Amount to be Recovered from Customer
                </label>
                <input
                  disabled
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={manualAuthorityProduct?.averageOutstandingPrinciple}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Total Processing Charges
                </label>
                <input
                  disabled
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={manualAuthorityProduct.totalProcessingCharges}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Total Interest
                </label>
                <input
                  disabled
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={manualAuthorityProduct.totalInterest}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Total Emi
                </label>
                <input
                  disabled
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={manualAuthorityProduct.totalEmi}
                />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Emi Details
          </h6>
          <div className="flex flex-wrap">
            {
              mpEmployeeAuthorityDetailBeans?.map((data, index) => {
                return (
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-3/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Outstanding Principle
                        </label>
                        <input
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={data?.outstandingPrinciple}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-3/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          EMI
                        </label>
                        <input
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={data?.emi}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-3/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Principle
                        </label>
                        <input

                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={data.principle}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-3/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Interest
                        </label>
                        <input

                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={data.interest}
                        />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default EmployeeProductManualAuthorty;