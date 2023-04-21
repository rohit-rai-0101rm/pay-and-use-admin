import { Typography } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// components
import { useAlert } from "react-alert";

export default function CardProfileCom() {
  const alert = useAlert();
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative"></div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              {/* <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
  </div>*/}
            </div>
          </div>
          <div className=" flex flex:col text-center mt-12">
            <Carousel>
              <div>
                <img src="https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356" />
                <p className="legend">Pan Card</p>
              </div>
              <div>
                <img src="https://yourmoneywise.in/wp-content/uploads/2019/02/Aadhar-card.png" />
                <p className="legend">Aadhar Card</p>
              </div>
              <div>
                <img src="https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356" />
                <p className="legend">Pan Card</p>
              </div>
            </Carousel>
            <Carousel>
              <div>
                <img src="https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356" />
                <p className="legend">Pan Card</p>
              </div>
              <div>
                <img src="https://yourmoneywise.in/wp-content/uploads/2019/02/Aadhar-card.png" />
                <p className="legend">Aadhar Card</p>
              </div>
              <div>
                <img src="https://images.news18.com/ibnlive/uploads/2021/07/1625318976_pan.jpg?impolicy=website&width=510&height=356" />
                <p className="legend">Pan Card</p>
              </div>
            </Carousel>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="font-bold text-3xl">Admin Remarks</p>
              </div>

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <textarea
                    type="text"
                    className="border-stone-400	 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                    rows="9"
                    cols={300}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-end px-8 mb-0">
            <button
              onClick={() => alert.success("approved")}
              type="submit"
              className=" mt-10 bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Approve
            </button>
            <button
              onClick={() => alert.error("rejected")}
              type="submit"
              className=" mt-10 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
