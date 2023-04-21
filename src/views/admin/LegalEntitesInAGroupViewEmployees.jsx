import React from 'react'

const LegalEntitesInAGroupViewEmployees = ({ lesInAGroup }) => {
    console.log(lesInAGroup)
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
                                {
                                    lesInAGroup?.map((item, index) => {

                                        return (
                                            <div key={item.id} className="flex flex-wrap">
                                                <div className="w-full px-4">
                                                   <h1>{item?.companyCode}</h1>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>









                    </div>














                </div>

                <center>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">

                                <button className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    PROCEED
                                </button>


                            </div>
                        </div>
                    </div>
                </center>


            </div>
        </>

    )
}

export default LegalEntitesInAGroupViewEmployees