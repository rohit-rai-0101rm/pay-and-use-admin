import { employeeProfileApi } from "actions/EmployeeActions";
import { feeTypeApi } from "actions/feeActions";
import { productFilterApi } from "actions/loanActions";
import { loanTypeApi } from "actions/loanActions";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

// components

export default function EmployeeProductUpdate() {
    const dispatch = useDispatch()
    const {employeeProfile}=useSelector((state)=>state.employeeProfile)
    const {id}=employeeProfile
    console.log(id)
    const { loanType } = useSelector((state) => state.loanType)
    const {productFilter } = useSelector(state => state.productFilter)
    console.log(productFilter)
    const [productDescription, setProductDescription] = useState()
    const [addFee, setAddFee] = useState(false);
    const [loanTypeCode, setLoanTypeCode] = useState()
    const [interestRate1, setInterestRate1] = useState()
    const [interestRate2, setInterestRate2] = useState()
    const [productCode, setProductCode] = useState()
    const { register, errors, handleSubmit, control } = useForm({
        mode: "onTouched",
    });
    const [loanTypeDescription1, setLoanTypeDescription1] = useState('PAY DAY')
    const [loanTypeDescription2, setLoanTypeDescription2] = useState('SHORT TERM')
    const [processingFee1, setProcessingFee1] = useState()

    const [mpProductFeeDetailsBeans, setMpProductFeeDetailsBeans] = useState([{
        nameOfFee: "",

        amount: "",

        feeTypeCode: ""
    }])

    const [mpProductFeeDetailsBeans2, setMpProductFeeDetailsBeans2] = useState([{
        nameOfFee: "",

        amount: "",

        feeTypeCode: ""
    }])
    const [nameOfFee, setNameOfFee] = useState('')
    const [feeTypeCode, setFeeTypeCode] = useState()
    const [amount, setAmount] = useState('')
    const [selectedLoanType, setSelectedLoanType] = useState('')
    console.log(nameOfFee)
    const [loanTypeDescription, setLoanTypeDescription] = useState('PAY DAY')

    const [payDayIntrest, setPayDayIntrest] = useState('')
    const [shortTermIntrest, setShortTermIntrest] = useState('')
    const [tenure1, setTenure1] = useState('1')
    const [tenure2, setTenure2] = useState('3')
    const [processingFee, setProcessingFee] = useState('')
   const [code,setCode]=useState('')
   const [description,setDescription]=useState('')
   const [sort,setSort]=useState('productDescription')
   const [sortType,setSortType]=useState('asc')
   const[size,setSize]=useState(20)
   const [pageNo,setPageNo]=useState(0)
       const {buCode,empCode}=useParams()
    const renderHeader = () => {
        let headerElement = ['Loan Type', 'Loan Name', 'Interest Rate', 'Tenure'];

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    useEffect(() => {


        dispatch(loanTypeApi());
        dispatch(employeeProfileApi(empCode, buCode))
        dispatch(productFilterApi(code,description,sort,sortType,size,pageNo))

    
    }, [dispatch,empCode, buCode]);


    const handleSave2 = () => {
        console.log(loanTypeCode)
        console.log(loanTypeDescription2)
        console.log(interestRate2)
        console.log(tenure2)
        console.log(processingFee)

    }
    const handleLoanType=(e)=>{
        setLoanTypeCode(e.target.value.substring(0,7))
        setProductCode(e.target.value.slice(-6))
    }
    console.log(loanTypeCode)
    console.log(productCode)
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Update Product</h6>

                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                 

                        <div className="flex py-4 flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Select a loan type
                                    </label>
                                    <select onChange={(e) => handleLoanType(e)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                        <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                            Please select an option
                                        </option>                                        {productFilter.map((item) => (
                                            <option key={item.productCode} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.productCode+item.loanTypeCode}>
                                                {item.productDescription}
                                            </option>
                                        ))}


                                    </select>
                                    <button onClick={handleSave2} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    Save Changes
                                </button>


                                </div>
                            </div>





                        </div>



                  
                </div>
            </div>
        </>
    );
}
