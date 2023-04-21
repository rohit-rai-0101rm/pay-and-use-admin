import { productFilterApi2 } from "actions/loanActions";
import { productFilterApi } from "actions/loanActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components

export default function ShortTermSelectionCard() {
  const [shortTermTenure, setShortTermTenure] = useState('')
  const {productFilter2}=useSelector((state)=>state.productFilter2)


  const [payDayTenure, setPayDaTenure] = useState('')

  const [code,setCode] = useState('SHORTTERM')
  const [description, setDescription] = useState('')
  const [size, setSize] = useState(10000)
const [sort, setSort] = useState('id')
const [sortType, setSortType] = useState('desc')
const [pageNo, setPageNo] = useState(0)
const dispatch=useDispatch()
const [productId,setProductId] = useState('')
console.log(description)
console.log(productId)
useEffect(()=>{
  dispatch(productFilterApi2(code,sort,sortType,size,pageNo,description))

},[])

  return (
    <>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">SHORT TERM selection</h6>

        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>

          <div className="flex flex-wrap">

            <div className="w-full px-4">
              <div className="relative py-2 w-full mb-3">
                <select onChange={(e)=>setProductId(e.target.value)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                  <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                    Please select an option
                  </option>
                  {productFilter2.map((item) => (
                  <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.productCode}>
                    {item.productDescription}
                  </option>
                ))}

                </select>
              </div>

            </div>


            <div className="w-full px-4">
              <div className="relative py-2 w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  TENURE
                </label>
                <input
                  type="number"
                  value={shortTermTenure}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                />
              </div>

            </div>

            <div className="w-full  px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Intrest
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                />
              </div>
            </div>
            <div className="w-full  px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  FEE TYPE
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                />
              </div>
            </div>


            <div className="w-full  px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  FEE AMOUNT
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                />
              </div>
            </div>

          
          </div>

         
        
        








        </form>
      </div>
    </div>
  </>
  );
}
