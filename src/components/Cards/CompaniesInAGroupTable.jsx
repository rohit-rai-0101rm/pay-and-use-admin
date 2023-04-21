import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CompaniesInAGroupCardTable({ grpName,color,companiesInAGroup }) {
  console.log(companiesInAGroup)
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
          "px-6 align-middle border border-solid py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-purple-500 text-white")
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
      companiesInAGroup &&
      companiesInAGroup.map(
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

              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {companyDescription}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {mpCountryMaster.countryName}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {mpStateMaster.stateDescription}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {email}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {phone}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {fax}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {contactPerson}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {contactPersonEmail}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {contactPersonMobile}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
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
            (color === "light" ? "bg-white" : "bg-purple-500 text-white")
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
                All Master Companies in {grpName}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr></tr>
            </thead>
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

CompaniesInAGroupCardTable.defaultProps = {
  color: "dark",
};

CompaniesInAGroupCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};