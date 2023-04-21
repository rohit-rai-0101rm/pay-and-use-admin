import { createGroupEntity } from 'actions/groupEntityActions'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

const CreateGroup = () => {
    const alert = useAlert()
    const history=useHistory()
    const { loading, error, success } = useSelector(state => state.groupEntity)

    const [group, setGroup] = useState('')
    const [flag, setFlag] = useState('Y')
    const dispatch = useDispatch()

    const handleGroupChange = (e) => {

        setGroup(e.target.value)

    }
    const handleSubmits = (e) => {
        e.preventDefault()
        dispatch(createGroupEntity(group, flag))

    }
    useEffect(() => {
        if (error) {
            alert.error("Group entity creation falied")
        }
        if (success) {
            alert.success("Group entity created successfully")
            history.push("/admin/create/legalEntity")
        }

    }, [dispatch,error, success])
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <form onSubmit={handleSubmits}>
                    <div className="flex-auto px-4 mt-4 content-center lg:px-10 py-10 pt-0">


                        <div className="flex justify-center	mt-24 flex-wrap">
                            <div className="w-full text-center lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Group Name
                                    </label>
                                    <input
                                        onChange={handleGroupChange}
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        required
                                    />
                                </div>
                            </div>



                        </div>



                        <center>


                            <button type="submit" className=" mt-4 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                Confirm
                            </button>


                        </center>





                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateGroup