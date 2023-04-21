


import { manualAuthorityApi } from "actions/loanActions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useTable } from "react-table";
// components

export default function EmiTable({data}) {
console.log(data)
  

  const { manualAuthorityProduct } = useSelector((state) => state.manualAuthority)
  console.log(manualAuthorityProduct)
  const dispatch = useDispatch()


  const [loanTypeCode, setLoanTypeCode] = useState('SHORTTERM')
  const [loanAmount, setLoanAmount] = useState(0)
  const { buCode, empCode } = useParams()
  console.log(buCode, empCode)

  const { mpEmployeeAuthorityDetailBeans } = manualAuthorityProduct
  console.log(mpEmployeeAuthorityDetailBeans)
  mpEmployeeAuthorityDetailBeans?.map((item,index)=>{
    item.sNo=index+1
  })

  const handleLoanAmount = (e) => {
    setLoanAmount(e.target.value * 200)
  }
  console.log(loanAmount)
  useEffect(() => {

    dispatch(manualAuthorityApi(buCode, empCode, loanTypeCode, loanAmount));
  }, [dispatch, buCode, empCode, loanAmount]);
  
  




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
              <EmiTable    data={data}/>
            
            </div>

        

            

          </form>
        </div>
      </div>
    </>
  );
}