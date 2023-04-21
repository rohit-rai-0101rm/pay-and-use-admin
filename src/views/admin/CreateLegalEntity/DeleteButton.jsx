import { deleteLegalEntity } from 'actions/legalEntityActions'
import React from 'react'
import { useDispatch } from 'react-redux'

const DeleteButton = ({id}) => {
    const dispatch=useDispatch()
    
   
    return (
        <div>
            <button
            onClick={()=>{dispatch(deleteLegalEntity(id))}}

                className=" bg-red-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
            >
                Delete
            </button>
        </div>
    )
}

export default DeleteButton