/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function EmployerSidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/employer/dashboard"
          >
            <img src={logo} />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/admin/dashboard"
                  >
                    <img src={logo} />
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Employer Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold font-mono " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/employer/dashboard"
                >
                  <i
                    className={
                      "fas fa-home mr-2 text-sm " +
                      (window.location.href.indexOf("/employer/dashboard") !==
                      -1
                        ? "opacity-75"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  HOME
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/employer/employees/BU00001"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/employer/employees/BU00001"
                >
                  <i
                    className={
                      "fas fa-file-contract mr-2 text-sm  " +
                      (window.location.href.indexOf(
                        "/employer/employees/BU00001"
                      ) !== -1
                        ? "opacity-0"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  VIEW ALL EMPLOYEES
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Loans
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/employer/employees/authAndSmsSent/BU0001"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/employer/employees/authAndSmsSent/BU0001"
                >
                  <i
                    className={
                      "fas fa-coins mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/employer/employees/authAndSmsSent/BU0001"
                      ) !== -1
                        ? "opacity-0"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  AUTHORIZED AND SMS SENT
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/employer/employees/mobileAuthenticated/BU0001"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/employer/employees/mobileAuthenticated/BU0001"
                >
                  <i
                    className={
                      "fas fa-coins mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/employer/employees/mobileAuthenticated/BU0001"
                      ) !== -1
                        ? "opacity-0"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  MOBILE NUMBER AUTHENTICATED
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/employer/employees/applicationSubmittedAndUnderReview/BU0001"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-500"
                      : "text-blueGray-700 hover:text-lightBlue-500")
                  }
                  to="/employer/employees/applicationSubmittedAndUnderReview/BU0001"
                >
                  <i
                    className={
                      "fas fa-handshake mr-2 text-sm " +
                      (window.location.href.indexOf("/employer/employees/applicationSubmittedAndUnderReview/BU0001") !== -1
                        ? "opacity-0"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  APPLICATION SUBMITTED AND UNDER REVIEW
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/employer/employees/HrApprovalPending"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/employer/employees/HrApprovalPending"
                >
                  <i
                    className={
                      "fas fa-hand-holding mr-2 text-sm " +
                      (window.location.href.indexOf("/employer/employees/HrApprovalPending") !== -1
                        ? "opacity-0"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  PENDING FOR HR Approval
                </Link>
              </li>

              <li className="items-center inline-block">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/employer/employees/hrApproved/BU0001"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/employer/employees/hrApproved/BU0001"
                >
                  <i
                    className={
                      "fas fa-hand-holding mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/employer/employees/hrApproved/BU0001"
                      ) !== -1
                        ? "opacity-0"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  HR Approved
                </Link>
              </li>

              <li className="items-center inline-block">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/employer/employees/loanDisbursed/BU0001"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/employer/employees/loanDisbursed/BU0001"
                >
                  <i
                    className={
                      "fas fa-hand-holding mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/employer/employees/loanDisbursed/BU0001"
                      ) !== -1
                        ? "opacity-0"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  Disbursed
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Emi Section{" "}
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/employer/employeesSummary"
                    ) !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/employer/employeesSummary"
                >
                  <i
                    className={
                      "fas fa-users mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/employer/employeesSummary"
                      ) !== -1
                        ? "opacity-0"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  Employees sUMMARY
                </Link>
              </li>
            </ul>

            {/* Navigation */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}

            {/* Navigation */}
          </div>
        </div>
      </nav>
    </>
  );
}
