import { payDayBreakUpApi } from "actions/breakupActions";
import { productFilterApi } from "actions/loanActions";
import PayDaybreakup from "components/Forms/PayDaybreakup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components

export default function PayDaySelectionCard() {
  const { productFilter } = useSelector((state) => state.productFilter)
const {payDayBreakUp}=useSelector((state)=>state.payDayBreakUp)
const pageNo=1
  const [payDayTenure, setPayDaTenure] = useState('')
  const [shortTermTenure, setShortTermTenure] = useState('')
  const [code,setCode]=useState('PAYDAY')
  const [size, setSize] = useState(20)
  const [sort, setSort] = useState('id')
  const [sortType, setSortType] = useState('asc')
  const dispatch = useDispatch()
  const [productId1, setProductId1] = useState('')
  useEffect(() => {
    dispatch(productFilterApi(code, sort, sortType, size, pageNo))
    dispatch(payDayBreakUpApi(productId1))

  }, [productId1])
console.log(payDayBreakUp)
  console.log(productId1)
  
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">PAY Day selection</h6>

          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>

            <div className="flex flex-wrap">

              <div className="w-full px-4">
                <div className="relative py-2 w-full mb-3">
                  <select onChange={(e) => setProductId1(e.target.value)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                    <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                      Please select an option
                    </option>
                    {productFilter.map((item) => (
                      <option key={item.productCode} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.productCode}>
                        {item.productDescription}
                      </option>
                    ))}

                  </select>
                </div>

              </div>
              {
                productId1 &&
                <PayDaybreakup  productId1={productId1} />

              }









            </div>












          </form>
        </div>
      </div>
    </>
  );
}
