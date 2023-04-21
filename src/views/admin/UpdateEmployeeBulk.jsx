import { getBuInACompanyApi } from 'actions/buisnessUnitActions';
import { groupEntityListApi } from 'actions/groupEntityActions';
import { legalEntitesInAGroupApi } from 'actions/legalEntityActions';
import { salaryScheduleExistsApi } from 'actions/salaryScheduleActions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FilteredEmployeeUpdate from './FilteredEmployeeUpdate';

const UpdateEmployeeBulk = () => {
    const { groupEntityList, loading } = useSelector((state) => state.groupEntityList);
    const { loading: ld, legalEntitiesInAGroup } = useSelector((state) => state.legalEntitiesInAGroup)
    const { loading: ldng, buisnessUnitsInAGroup } = useSelector((state) => state.buisnessUnitInAGroup)
    const [buCode, setBuCode] = useState(null)
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [sort, setSort] = useState("id");
    const [sortType, setSortType] = useState("desc");
    const [leCode, setLeCode] = useState(null)
    const [size, setSize] = useState(25);
    const [page, setPage] = useState(1)
    const [pageNo, setPageNo] = useState(-1);
    const [groupCode, setGroupCode] = useState(null);
    const dispatch = useDispatch()
    console.log("groupCode", groupCode)
    useEffect(() => {
        if (buCode) {
            dispatch(salaryScheduleExistsApi(buCode))

        }
        dispatch(groupEntityListApi(code, description, sort, sortType, size, (pageNo + 1)), [pageNo])
        dispatch(legalEntitesInAGroupApi(groupCode))

        dispatch(getBuInACompanyApi(leCode))



    }, [size, pageNo, groupCode, leCode, buCode])
    const handleGroupChange = (e) => {
        setGroupCode(e.target.value)
    }
    const handleLegalEntityChange = (e) => {
        setLeCode(e.target.value)
    }
    const handleBuCodeChange = (e) => {
        setBuCode(e.target.value)
    }

    console.log("buCode", buCode)


    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Group
                                    </label>
                                    <select onChange={(e) => handleGroupChange(e)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                        <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                            Group Filter
                                        </option>
                                        {
                                            groupEntityList?.map((item, index) => {
                                                return (

                                                    <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.id}>
                                                        {item.groupName}
                                                    </option>
                                                )
                                            })
                                        }


                                    </select>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Legal Entity
                                    </label>
                                    <select onChange={(e) => handleLegalEntityChange(e)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                        <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                            Legal Entity Filter

                                        </option>
                                        {
                                            legalEntitiesInAGroup?.map((item, index) => {
                                                return (

                                                    <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.id}>
                                                        {item.companyDescription}
                                                    </option>
                                                )
                                            })
                                        }


                                    </select>

                                </div>
                            </div>

                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Buisness Unit
                                    </label>
                                    <select onChange={(e) => handleBuCodeChange(e)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                        <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                            Buisness Unit Filter

                                        </option>
                                        {
                                            buisnessUnitsInAGroup?.map((item, index) => {
                                                return (

                                                    <option key={item.buCode} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.buCode}>
                                                        {item.buDescription}
                                                    </option>
                                                )
                                            })
                                        }


                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            {
                                buCode &&
                                <FilteredEmployeeUpdate bu={buCode} />

                            }

                        </div>



                        <hr className="mt-6 border-b-1 border-blueGray-300" />


                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateEmployeeBulk


