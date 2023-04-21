import React from "react";
import InfoCard from "./InfoCard";

// components

export default function CardSettingsCom() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t flex flex:row bg-white mb-0 px-6 py-6">
          <div className="text-center  justify-start">
            <h6 className="text-blueGray-700 text-xl px-2 font-bold">
              Loan Case Details
            </h6>
            <h6 className="text-blueGray-700 text-xl pl-0 font-bold">
              #2020-20-102
            </h6>
            <div class="flex flex-wrap justify-center">
              <div class="w-6/12 sm:w-4/12 px-4">
                <img
                  src="https://imgctcf.aeplcdn.com/thumbs/p-nc-p-s600-ver4/images/cars/The-man-who-turned-Maruti-800-into-a-sports-car.jpg?q=75"
                  alt="..."
                  class="shadow-lg rounded max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-6 py-10 pt-0">
          <h6 className="text-purple px-4 text-3xl mt-3 mb-0 font-bold uppercase">
            RAMAN IYER
          </h6>

          <p className="text-xs font-bold px-4 Montserrat">
            {" "}
            EMPLOYEE CODE:AJ097567
          </p>

          <p className="text-xs font-bold px-4 Montserrat"> BU NAME:SEHPL</p>

          <p className="text-xs font-bold px-4 Montserrat">
            {" "}
            AADHAR NUMBER:2134 2323 4234 3423
          </p>
          <p className="text-xs font-bold px-4 Montserrat">
            {" "}
            PAN NUMBER:ENEPR6236N
          </p>
         

         

          <button
            type="button"
            class="w-full rounded-2xl bg-theme inline-block px-6 py-2 mt-2  border-blue-600 text-white font-medium text-xl leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Call  Applicant
          </button>

          <button
            type="button"
            class="w-full rounded-2xl bg-theme inline-block px-6 py-2 mt-2  border-blue-600 text-white font-medium text-xl leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Send to hr
          </button>
          <button
            type="button"
            class="w-full rounded-2xl bg-theme inline-block px-6 py-2 mt-2  border-blue-600 text-white font-medium text-xl leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            View emi schedule
          </button>

          <hr className="mt-6 border-b-1 border-blueGray-300" />
        </div>
      </div>
    </>
  );
}
