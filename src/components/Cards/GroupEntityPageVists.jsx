import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function GroupListTable({ color }) {
  const { groupEntityList } = useSelector((state) => state.groupEntityList);
  console.log(companyMasterList)
  const history=useHistory()
  const renderHeader = () => {
    let headerElement = [
      "COMPANY CODE",
      "COMPANY NAME",
      "COUNTRY",
      "STATE",
      "EMAIL",
      "PHONE",
      "FAX",
      "CONTACT PERSON",
      "CONTACT PERSON EMAIL",
      "CONTACT PERSON PHONE",
      "CREATION DATE",
    ];
    return headerElement.map((key, index) => {
      return (
        <th
          className={
            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
            (color === "light"
              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
          }
          key={index}
        >
          {key.toUpperCase()}
        </th>
      );
    });
  };

  const renderBody = () => {
    return (
      companyMasterList &&
      companyMasterList.map(
        ({
          id,
          companyDescription,
          companyCode,
          mpCountryMaster,
          mpStateMaster,
          email,
          phone,
          fax,
          contactPerson,
          contactPersonEmail,
          contactPersonMobile,
          createdDate,
        }) => {
          return (
            <tr className="cursor-pointer" onClick={()=>history.push(`/companyMaster/${id}`)} key={id}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {companyCode}
              </td>

              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {companyDescription}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {mpCountryMaster.countryName}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {mpStateMaster.stateDescription}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {email}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {phone}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {fax}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {contactPerson}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {contactPersonEmail}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {contactPersonMobile}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {moment(createdDate).fromNow()}
              </td>
            </tr>
          );
        }
      )
    );
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                All Groups Entities
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to="/admin/list/companyMaster">
                    <button
                      className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      See all
                    </button>
                  </Link>
                  
                </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            
            <tbody>
              <thead>
                <tr>{renderHeader()}</tr>
              </thead>
              <tbody>{renderBody()}</tbody>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

GroupListTable.defaultProps = {
  color: "light",
};

GroupListTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};