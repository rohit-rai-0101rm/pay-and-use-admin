import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-col md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-2">
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
            to="/admin/dashboard"
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
            {/* Heading */}

            {/* Navigation */}
            <Link
              className={
                "text-xs px-4 uppercase py-3 font-bold font-mono " +
                (window.location.href.indexOf("/admin/dashboard") !== -1
                  ? "text-lightBlue-500 hover:text-lightBlue-600"
                  : "text-blueGray-700 hover:text-blueGray-500")
              }
              to="/admin/dashboard"
            >
              <i
                className={
                  "fas fa-home mr-2 text-sm " +
                  (window.location.href.indexOf("/admin/dashboard") !== -1
                    ? "opacity-75"
                    : "text-blue-300")
                }
              ></i>{" "}
              HOME
            </Link>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h6 className="text-sm mt-2 font-bold uppercase">
                  CREATION SECTION
                </h6>{" "}
              </AccordionSummary>
              <AccordionDetails>
                <ul className="md:flex-col  md:min-w-full flex flex-row list-none">
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/admin/createGroup") !==
                        -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/createGroup"
                    >
                      <i
                        className={
                          "fas fa-file-contract mr-2 text-sm  " +
                          (window.location.href.indexOf(
                            "/admin/createGroup"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Create Group
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/create/legalEntity") !==
                        -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/create/legalEntity"
                    >
                      <i
                        className={
                          "fas fa-file-contract mr-2 text-sm  " +
                          (window.location.href.indexOf(
                            "/create/buisnessUnit"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Create Legal Entity
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/create/buisnessUnit"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-lightBlue-600")
                      }
                      to="/admin/create/buisnessUnit"
                    >
                      <i
                        className={
                          "fas fa-briefcase mr-2 text-sm " +
                          (window.location.href.indexOf(
                            "/admin/create/buisnessUnit"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Create Buisness Unit
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/LoanMasterForm"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-lightBlue-600")
                      }
                      to="/admin/LoanMasterForm"
                    >
                      <i
                        className={
                          "fas fa-briefcase mr-2 text-sm " +
                          (window.location.href.indexOf(
                            "/admin/LoanMasterForm"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Create Loan Master
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/assignBuisnessUnits"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-lightBlue-600")
                      }
                      to="/admin/assignBuisnessUnits"
                    >
                      <i
                        className={
                          "fas fa-briefcase mr-2 text-sm " +
                          (window.location.href.indexOf(
                            "/admin/assignBuisnessUnits"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Create and Assign HR login
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            {/* section2  */}

            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h6 className="text-sm mt-2 font-bold uppercase">
                  Employees SECTION
                </h6>{" "}
              </AccordionSummary>
              <AccordionDetails>
                <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/viewEmployees"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/viewEmployees"
                    >
                      <i
                        className={
                          "fas fa-users mr-2 text-sm " +
                          (window.location.href.indexOf(
                            "/admin/viewEmployees"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      View All Employees
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/addNewEmployees"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/addNewEmployees"
                    >
                      <i
                        className={
                          "fas fa-address-book mr-2 text-sm " +
                          (window.location.href.indexOf(
                            "/admin/addNewEmployees"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Add New Employees
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/updateEmployees"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/updateEmployees"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> EMPLOYEE
                      LEVEL PRE APRROVAL
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/admin/updateBuPlan") !==
                        -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/updateBuPlan"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> Update loan
                      Bu level
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            {/* In progress section*/}

            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h6 className="text-sm mt-2 font-bold uppercase">
                  Progress SECTION
                </h6>{" "}
              </AccordionSummary>
              <AccordionDetails>
                <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/authorizedAndSmsSent"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/authorizedAndSmsSent"
                    >
                      <i
                        className={
                          "fas fa-users mr-2 text-sm " +
                          (window.location.href.indexOf(
                            "/admin/authorizedAndSmsSent"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Authorized & SMS Sent
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/admin/addEmployee") !==
                        -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/mobileNumberAuthenticated"
                    >
                      <i
                        className={
                          "fas fa-address-book mr-2 text-sm " +
                          (window.location.href.indexOf(
                            "/admin/addEmployee"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Mobile number Authenticated
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/submittedAndUnderReview"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/submittedAndUnderReview"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> Application
                      Submitted & Under Review
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/applicationOnkycHold"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/applicationOnkycHold"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> Application
                      on kyc Hold
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/applicationKycCompleted"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/applicationKycCompleted"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> application
                      kyc completed
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/applicationApproved"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/applicationApproved"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> Application
                      Approved
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/applicationOnValidationHold"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/applicationOnValidationHold"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> application
                      on validation hold
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/applicationRejected"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/applicationRejected"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> Application
                      Rejected
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/admin/hrApproved") !==
                        -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/hrApproved"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> HR APPROVED
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/admin/hrRejected") !==
                        -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/hrRejected"
                    >
                      <i className="fas fa-marker mr-2 text-sm"></i> HR Rejected
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h6 className="text-sm mt-2 font-bold uppercase">
                  LOAN SECTION
                </h6>{" "}
              </AccordionSummary>
              <AccordionDetails>
                <ul
                  data-dropdown-toggle="dropdownId"
                  className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
                >
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf("/admin/activeLoans") !==
                        -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/activeLoans"
                    >
                      <i
                        className={
                          "fas fa-coins mr-2 text-sm " +
                          (window.location.href.indexOf("/admin/tables") !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Active Loans
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/loanCaseDetails"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/foreClosureRequest"
                    >
                      <i
                        className={
                          "fas fa-users mr-2 text-sm " +
                          (window.location.href.indexOf(
                            "/admin/foreClosureRequest"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Foreclosure Request
                    </Link>
                  </li>

                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/foreClosureCompleted"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/admin/foreClosureCompleted"
                    >
                      <i
                        className={
                          "fas fa-users mr-2 text-sm " +
                          (window.location.href.indexOf(
                            "/admin/foreClosureCompleted"
                          ) !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Foreclosure Completed
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/completedLoans"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-500"
                          : "text-blueGray-700 hover:text-lightBlue-500")
                      }
                      to="/admin/completedLoans"
                    >
                      <i
                        className={
                          "fas fa-handshake mr-2 text-sm " +
                          (window.location.href.indexOf("/admin/tables") !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      Completed Loans
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (window.location.href.indexOf(
                          "/admin/allLoanProducts"
                        ) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-500"
                          : "text-blueGray-700 hover:text-lightBlue-500")
                      }
                      to="/admin/allLoanProducts"
                    >
                      <i
                        className={
                          "fas fa-handshake mr-2 text-sm " +
                          (window.location.href.indexOf("/admin/allLoanProducts") !== -1
                            ? "opacity-0"
                            : "text-blue-300")
                        }
                      ></i>{" "}
                      All Loan Products
                    </Link>
                  </li>
                </ul>
                <hr className="my-4 md:min-w-full" />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </nav>
    </>
  );
}
