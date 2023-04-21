import { groupEntityListApi } from 'actions/groupEntityActions';
import { legalEntitesInAGroupApi } from 'actions/legalEntityActions';
import Loader from 'layouts/Loader/Loader';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const AddNewEmployee = () => {
    const { groupEntityList, loading } = useSelector((state) => state.groupEntityList);

    const { loading: lod, legalEntitiesInAGroup } = useSelector((state) => state.legalEntitiesInAGroup)

    console.log(groupEntityList)
    console.log("legalEntitiesInAGroup", legalEntitiesInAGroup)




    const dispatch = useDispatch()
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [groupId, setGroupId] = useState("");
    const [sort, setSort] = useState("id");
    const [legalEntityId, setLegalEntityId] = useState("");
    const [sortType, setSortType] = useState("desc");
    const [size, setSize] = useState(25);
    const [page, setPage] = useState(1)
    const [pageNo, setPageNo] = useState(-1);

    const handleGroupChange = (e) => {
        setGroupId(e.target.value)
    }
    console.log(groupId)
    const handleLegalEntityChange = (e) => {
        setLegalEntityId(e.target.value)

    }
    useEffect(() => {
        dispatch(groupEntityListApi(code, description, sort, sortType, size, (pageNo + 1)), [pageNo])
        dispatch(legalEntitesInAGroupApi(groupId))
    }, [size, pageNo, groupId])
    return (
        <div className="flex py-4 flex-wrap">
            <div className="w-1/3 lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Select group
                    </label>
                    <select onChange={(e) => handleGroupChange(e)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">
                        <option className="text-base border-0 outline-none capitalize bg-white text-black ">
                            Select one option
                        </option>
                        {groupEntityList.map((item, index) => (
                            <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.id}>
                                {item.groupName}
                            </option>
                        ))}


                    </select>

                </div>
            </div>

            {
                lod ?
                   <Loader/>
                    :
                   legalEntitiesInAGroup?.map((item, index) => {
                        return (
                            <div className="w-1/3 lg:w-8/12 px-4" key={index}>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Select legal entity
                                    </label>
                                    <select onChange={(e) => handleLegalEntityChange(e)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">
                                        <option className="text-base border-0 outline-none capitalize bg-white text-black ">
                                            Select one option
                                        </option>
                                        {item.map((item, index) => (
                                            <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-black " value={item.id}>
                                                {item.companyName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )
                    })
                
}              

        </div>
    )
}

export default AddNewEmployee