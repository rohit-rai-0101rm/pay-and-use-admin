import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function LoanHistoryCardTable({ color }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showEmi, setShowEmi] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "#F5F5F5",
      transform: "translate(-50%, -50%)",
      borderRadius: "5px",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const history = useHistory();
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6  rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4  flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Loan History
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          {
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <p className="text-black text-2xl mt-3 mb-2 font-bold uppercase">
                Amount to Be Recovered {"₹10500"}
              </p>
              <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                Loan Id:{"  "}
                {"  "} 005
              </p>
              <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                Loan Amount{"  "}
                {"  "} ₹10000
              </p>
              <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                Repayment Status: {"  "}
                {"  "} UNPAID
              </p>
              <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                Rate Of Interest : {"  "}
                {"  "} 0%
              </p>
              <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                FEE : {"  "}
                {"  "} ₹500
              </p>

              <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                Tenure : {"  "}
                {"  "} 3 months
              </p>

              <button
                onClick={() => setShowEmi(true)}
                className=" mt-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                View Emi Schedule
              </button>
              {showEmi && (
                <div>
                  <div>
                    <p className="text-black text-2xl mt-3 mb-2 font-bold uppercase">
                      Emi Schedule{" "}
                    </p>
                    <div className="flex flex-row justify-between">
                      <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                        EMI No.
                      </p>
                      <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                        AMount
                      </p>
                      <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                        Outstanding
                      </p>
                      <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                        Status
                      </p>
                    </div>
                  </div>
                  <div></div>

                  <div className="flex flex-row justify-between">
                    <p className="px-24text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                      1
                    </p>
                    <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                      3500
                    </p>
                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                      6500
                    </p>
                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                      Paid
                    </p>
                  </div>

                  <div className="flex flex-row justify-between">
                    <p className="px-24text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                      2
                    </p>
                    <p className="text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                      3500
                    </p>
                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                      3000
                    </p>
                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                      Due
                    </p>
                  </div>

                  <div className="flex flex-row justify-between">
                    <p className="px-24text-black text-sm mt-3 mb-2 font-bold	 uppercase">
                      3
                    </p>
                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                      3000
                    </p>
                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                      0
                    </p>
                    <p className="text-black text-sm mt-3 mb-2 font-bold text-right	 uppercase">
                      Due
                    </p>
                  </div>
                </div>
              )}
            </Modal>
          }
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  LOAN ID
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  AMOUNT
                </th>
                <th
                  className={
                    "px-6 align-middle text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>

                <th
                  className={
                    "px-6 align-middle text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    <p className="text-xs">005</p>
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p className="text-xs"> ₹2,500 </p>
                </td>
                <td className="border-t-0 text-white text-center px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p
                    className="bg-orange-500 w-2.5 rounded-full

"
                  >
                    Pending
                  </p>
                </td>
                <td className="border-t-0 rounded-lg px-6 text-center text-black	fill-blue-500 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button onClick={openModal}>
                    <p
                      className="bg-theme-500 text-xs text-black rounded-full

"
                    >
                      view
                    </p>
                  </button>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    <p className="text-xs"> 004</p>
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p className="text-xs"> ₹18000 </p>
                </td>
                <td className="border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p
                    className="bg-green-500 rounded-full

"
                  >
                    Paid
                  </p>
                </td>
                <td className="border-t-0 rounded-lg px-6 text-center text-black	fill-blue-500 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button onClick={openModal}>
                    <p
                      className="bg-theme-500 text-xs text-black rounded-full

"
                    >
                      view
                    </p>
                  </button>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    <p className="text-xs"> 003</p>
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p className="text-xs"> ₹31550 </p>
                </td>
                <td className="border-t-0 text-white text-center px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p
                    className="bg-red-500 rounded-full

"
                  >
                    UnPaid
                  </p>
                </td>
                <td className="border-t-0 rounded-lg px-6 text-center text-black	fill-blue-500 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button onClick={openModal}>
                    <p
                      className="bg-theme-500 text-xs text-black rounded-full

"
                    >
                      view
                    </p>
                  </button>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    <p className="text-xs"> 002</p>
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p className="text-xs"> ₹4400 </p>
                </td>
                <td className="border-t-0 rounded-lg px-6 text-center text-black	fill-blue-500 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p
                    className="bg-yellow-500 rounded-full

"
                  >
                    Active
                  </p>
                </td>
                <td className="border-t-0 rounded-lg px-6 text-center text-black	fill-blue-500 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button onClick={openModal}>
                    <p
                      className="bg-theme-500 text-xs text-black rounded-full

"
                    >
                      view
                    </p>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

LoanHistoryCardTable.defaultProps = {
  color: "light",
};

LoanHistoryCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
