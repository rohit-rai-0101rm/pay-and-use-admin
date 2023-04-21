import React, { useEffect, useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { getBusInaLe } from 'actions/buisnessUnitActions';
import { useDispatch, useSelector } from 'react-redux';
import { employeesInMultipleLeandBuApi } from 'actions/EmployeeActions';
import { saveFilteredParams } from 'actions/formActions';

const ViewAllEmployeesFilter = ({ groupCode, legalEntityCodes }) => {
    console.log(groupCode)
    const { busInaLe, loading: ld, error, success } = useSelector((state) => state.busInaLe)
    let optionsArray = []
    let buCodes = []
    if (busInaLe) {
        busInaLe.map((item, index) => {
            let obj = {}
            obj.value = item.buCode
            obj.label = item.buDescription
            buCodes.push(item.buCode)

            optionsArray.push(obj)
            obj = {}

        })
    }
    const dispatch = useDispatch()
    const [selected, setSelected] = useState([]);
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [sort, setSort] = useState("id");
    const [sortType, setSortType] = useState("desc");
    const [size, setSize] = useState(25);
    const [page, setPage] = useState(1)
    const [pageNo, setPageNo] = useState(0);
    useEffect(() => {
        dispatch(getBusInaLe(legalEntityCodes))
        dispatch(saveFilteredParams(groupCode,legalEntityCodes,buCodes))



    }, [dispatch, buCodes.length])
    console.log(groupCode)
    console.log("buCodes",buCodes)
    

    return (
        <>
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                        className="block px-4 uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Country
                    </label>
                    {
                        busInaLe.length > 0 &&
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">

                            <MultiSelect
                                options={optionsArray}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                        </div>
                    }


                </div>
               
            </div>
        </>
    )
}

export default ViewAllEmployeesFilter