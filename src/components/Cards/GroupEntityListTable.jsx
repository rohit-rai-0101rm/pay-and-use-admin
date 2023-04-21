import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

// components
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function GroupEntityListTable({ color }) {
    const{loading,groupEntityList}=useSelector((state)=>state.groupEntityList)
    console.log(groupEntityList)
    const history=useHistory()
    const renderHeader = () => {
        let headerElement = [
          "GROUP CODE",
          "GROUP NAME",
          
          "CREATION DATE",
          "STATUS",
          "CREATED BY"
        ];
        return headerElement.map((key, index) => {
          return (
            <th
            className={
              "px-6  align-middle p-8 border border-solid py-2 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
              (color === "light"
                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                : "bg-theme font-extrabold	 text-white")
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
      groupEntityList &&
      groupEntityList.map(
        ({
          
          id,
          groupCode,
          groupName,
          createdDate,
          createdBy,
          flag
         
          
        }) => {
          return (
            <tr className="  cursor-pointer border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4" onClick={()=>history.push(`/admin/companiesInAGroup/${id}`)} key={id}>
              <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
                {groupCode}
              </td>

              <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
                {groupName}
              </td>
             
              <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
                {moment(createdDate).fromNow()}
              </td>
              <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
                {flag?"Active":"Inactive"}
              </td>
              <td className="px-6 py-4  align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
                {createdBy}
              </td>
            </tr>
          );
        }
      )
    );
  };
  return (
    <center>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-theme text-bold text-white")
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
               GROUP ENTITY LIST
              </h3>
            </div>
          
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <center>
          <table className="items-center  w-full bg-transparent border-collapse">
          <tbody>
              <thead>
                <tr>{renderHeader()}</tr>
              </thead>
              <tbody>{renderBody()}</tbody>
            </tbody>
          </table>
          </center>
          {/* Projects table */}
        
        </div>
      </div>
    </center>
  );
}

GroupEntityListTable.defaultProps = {
  color: "light",
};

GroupEntityListTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
