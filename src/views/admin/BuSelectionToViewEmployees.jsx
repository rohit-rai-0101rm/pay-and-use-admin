import { getBusInaLe } from 'actions/buisnessUnitActions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MultiSelect } from 'react-multi-select-component';
import { employeesInMultipleLeandBuApi } from 'actions/EmployeeActions';
import EmployeesInMultipleLeandBu from './EmployeesInMultipleLeandBu';

const BuSelectionToViewEmployees = ({ groupCode, legalCodes }) => {
    console.log("hii")
    const [sort, setSort] = useState("id");
    const [viewEmployeesButtonClicked, setViewEmployeesButtonClicked] = useState(false)

    const [sortType, setSortType] = useState("desc");
    const [size, setSize] = useState(25);
    const [page, setPage] = useState(1)
    const [pageNo, setPageNo] = useState(0);
    const color = "light"
    const [selected, setSelected] = useState([]);

    let buCodes = []
    const { busInaLe, loading, error, success } = useSelector((state) => state.busInaLe)

    if (busInaLe.length > 0) {
        busInaLe.map((bu, i) => {

            buCodes.push(bu.buCode)
        })
    }

    console.log("busInaLe", busInaLe)
    const dispatch = useDispatch()
    console.log("groupCode", groupCode)
    console.log("legalCodes", legalCodes)
    console.log("buCodes", buCodes)
    let options = []
    if (busInaLe) {
        busInaLe.map((item, index) => {
            let obj = {}
            obj.value = item.buCode
            obj.label = item.buDescription
            options.push(obj)
            obj = {}

        })
    }
    useEffect(() => {
        dispatch(getBusInaLe(legalCodes))





    }, [dispatch, groupCode])

    const handleViewEmployees=()=>{
        setViewEmployeesButtonClicked(true)
    }
   if(viewEmployeesButtonClicked){
    return (
        
        <EmployeesInMultipleLeandBu groupCode={groupCode} legalCodes={legalCodes} buCodes={buCodes}/>
    )
   }
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-100 border-0">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                    <div className="w-full px-4">
                        <div className="relative  py-2 w-full mb-3">


                            {
                                busInaLe.length > 0 &&
                                <div className="relative w-full  max-w-full flex-grow flex-1">
                                    <h3
                                        className={
                                            "font-semibold text-lg " +
                                            (color === "light" ? "text-blueGray-700" : "text-white")
                                        }
                                    >
                                        Select Buisness Units In
                                    </h3>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
}
                        </div>
                    </div>
                </div>





                <center>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">

                                <button onClick={handleViewEmployees}  className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    View Employees
                                </button>


                            </div>
                        </div>
                    </div>
                </center>






















            </div>
        </>
    )
}

export default BuSelectionToViewEmployees