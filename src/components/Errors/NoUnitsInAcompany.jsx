import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

const NoUnitsInAcompany = () => {
    const [createLeinGrp, setCreateLeinGrp] = useState(false)
    const { loading, legalEntitiesInAGroup } = useSelector((state) => state.legalEntitiesInAGroup)
    const color="light"
const history=useHistory()

const handleCreate=()=>{

history.push("/admin/create/buisnessUnit")
}


return (


        <div
        className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-theme text-bold text-white")
          }
        >
            <div class="px-40 py-20 bg-white rounded-md shadow-xl">
                <div class="flex flex-col items-center">

                    <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span class="text-red-500">Oops!</span> No Buisness Units Found in this Legal Entity
                    </h6>

                    <button onClick={handleCreate} className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-theme uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Create Now
                    </button>
                </div>
            </div>
        </div>

    )

}

export default NoUnitsInAcompany