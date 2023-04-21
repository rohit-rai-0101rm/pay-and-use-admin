


import { manualAuthorityApi } from "actions/loanActions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useTable } from "react-table";
import EmiTable from "./EmiTable";
// components

export default function ShortTermAuthority() {
  const color = "light"
  const COLUMNS = [
    {
      Header: "S.No",
      accessor: "sNo",
      minWidth: "200px",
      width: "12.5%",
    },
    {
      Header: "Principle",
      accessor: "principle",
      minWidth: "200px",
      width: "12.5%",
    },

    {
      Header: "EMI",
      accessor: "emi",
      width: "12.5%",

    },
    {
      Header: "Interest",
      accessor: "interest",
      minWidth: "200px",

      width: "12.5%",

    },
    {
      Header: "Outstanding Principle",
      accessor: "outstandingPrinciple",
      minWidth: "200px",

      width: "12.5%",

    },
    {
      Header: "Principal(Paid)",
      Footer: "Principal(Paid)",
      accessor: "principalAmount",
      minWidth: "200px",

      width: "12.5%",

    },

    {
      Header: "Intrest(Paid)",
      Footer: "Intrest(Paid)",
      accessor: "intrestComponent",
      minWidth: "200px",

      width: "12.5%",

    },
    {
      Header: "Closing Balance(Principal)",
      Footer: "Closing Balance(Principal)",
      accessor: "closingPrincipal",
      minWidth: "200px",

      width: "12.5%",

    },
  ];





  const { manualAuthorityProduct } = useSelector((state) => state.manualAuthority)
  console.log(manualAuthorityProduct)
  const dispatch = useDispatch()


  const [loanTypeCode, setLoanTypeCode] = useState('SHORTTERM')
  const [loanAmount, setLoanAmount] = useState(0)
  const { buCode, empCode } = useParams()
  console.log(buCode, empCode)

  const { mpEmployeeAuthorityDetailBeans } = manualAuthorityProduct
  console.log(mpEmployeeAuthorityDetailBeans)
  mpEmployeeAuthorityDetailBeans?.map((item, index) => {
    item.sNo = index + 1
  })

  const handleLoanAmount = (e) => {
    setLoanAmount(e.target.value * 200)
  }
  console.log(loanAmount)
  useEffect(() => {

    dispatch(manualAuthorityApi(buCode, empCode, loanTypeCode, loanAmount));
  }, [dispatch, buCode, empCode, loanAmount]);
  const columns = COLUMNS;
  const data = mpEmployeeAuthorityDetailBeans;


  console.log(data)



  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Short term Authority</h6>

          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>

            <div className="flex flex-wrap mt-4">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    onChange={(e) => handleLoanAmount(e)}
                    placeholder="100000"
                    type="range"
                    className=" px-3 py-3   bg-white rounded text-sm   w-full ease-linear transition-all duration-150"
                  />
                  <input
                    value={loanAmount}
                    placeholder="drag the above font-bold slider for loan amount"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>


              </div>

              {
                data?.map((item, index) => {
                  return (
                    <div className="flex-auto px-4  pt-0">
                      <form>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                          Emi Information{index + 1}
                        </h6>
                        <div className="flex flex-wrap">
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Opening Principle
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="lucky.jesse"
                                value={item.outstandingPrinciple}
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Emi
                              </label>
                              <input

                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="jesse@example.com"
                                value={item.emi}
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Intrest
                              </label>
                              <input

                                value={item.interest}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="Lucky"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                 Principle
                              </label>
                              <input
                                value={item.principle}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="Jesse"
                              />
                            </div>
                          </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />







                      </form>
                    </div>
                  )


                })
              }




            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />


          </form>
        </div>
      </div>
    </>
  );
}