import React from 'react'

const ErrorPopup = ({ title }) => {
    const color = "light"
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
                        <span class="text-red-500">Oops!</span> Some Error Occured
                    </h6>


                </div>
                <center>
                    <p className='text-red text-xl'> Uncaught type error {title}.props.data.map is not a function </p>


                </center>
            </div>
        </div>

    )
}

export default ErrorPopup