import { groupEntityListApi } from 'actions/groupEntityActions';
import { legalEntitesInAGroupApi } from 'actions/legalEntityActions';
import CheckoutSteps3 from 'components/Forms/CheckoutSteps3';
import ViewEmployeesCheckoutSteps from 'components/Forms/ViewEmployeesCheckoutSteps';
import React, { useEffect, useState } from 'react'
import { MultiSelect } from 'react-multi-select-component';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import BuSelectionToViewEmployees from './BuSelectionToViewEmployees';
import LegalEntitesInAGroupViewEmployees from './LegalEntitesInAGroupViewEmployees';

const BuSelectionToAssignHr = () => {
    const history = useHistory()
    const color = "light"
    const { groupEntityList, loading } = useSelector((state) => state.groupEntityList);
    const [selected, setSelected] = useState([]);
    const { loading: lding, legalEntitiesInAGroup } = useSelector((state) => state.legalEntitiesInAGroup)
    console.log(legalEntitiesInAGroup)
    if (legalEntitiesInAGroup) {
        console.log(legalEntitiesInAGroup)
    }
    const length = legalEntitiesInAGroup?.length
    console.log(length)
    let legalEntityCodes = []
    let options = []
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [sort, setSort] = useState("id");
    const [sortType, setSortType] = useState("desc");
    const [size, setSize] = useState(25);
    const [page, setPage] = useState(1)
    const [pageNo, setPageNo] = useState(-1);
    const [groupCode, setGroupCode] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(groupEntityListApi(code, description, sort, sortType, size, (pageNo + 1)), [pageNo])


        if (groupCode) {
            dispatch(legalEntitesInAGroupApi(groupCode))

        }

    }, [size, pageNo, groupCode])

    console.log("legalEntitiesInAGroup", legalEntitiesInAGroup)

    if (legalEntitiesInAGroup.length > 0) {
        legalEntitiesInAGroup.map((le, i) => {
            console.log(le)
            let obj = {}
            obj.label = le.companyDescription
            obj.value = le.companyCode
            options.push(obj)
            obj = {}
        })
    }
    const handleGroupChange = (e) => {
        setGroupCode(e.target.value)
    }
    const handleProceed = () => {
        //history.push(`/admin/selectLegalEntities/${groupId}`)
    }

    console.log("options", options)
    console.log("selected", selected)
    if (selected.length > 0) {
        selected.map((sel, i) => {
            legalEntityCodes.push(sel.value)
        })
    }
    console.log("legalEntityCodes", legalEntityCodes)
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Select Group</h6>

                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">


                    <div className="flex flex-wrap">

                        <div className="w-full px-4">
                            <div className="relative py-2 w-full mb-3">
                                <select onChange={(e) => handleGroupChange(e)} className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"} aria-label="Default select example">

                                    <option className="text-base border-0 outline-none capitalize bg-white text-black " >
                                        Please select an option
                                    </option>
                                    {
                                        groupEntityList.map((item, index) => {
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




                        {
                            legalEntitiesInAGroup.length > 0 &&
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3
                                    className={
                                        "font-semibold text-lg " +
                                        (color === "light" ? "text-blueGray-700" : "text-white")
                                    }
                                >
                                    Select Legal Entites                                 </h3>
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
                {
                    legalEntityCodes.length > 0 &&
                    <BuSelectionToViewEmployees groupCode={groupCode} legalCodes={legalEntityCodes} />

                }




            </div>
        </>

    )
}

export default BuSelectionToAssignHr;