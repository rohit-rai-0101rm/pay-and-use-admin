import React, { useState } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";

import { useTable } from "react-table";

// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import FormDialog from "components/FormDailog";
import Loader from "layouts/Loader/Loader";
export default function GroupEntityPageVisitsData({ color }) {
  const [editGroup, setEditGroup] = useState('false');


  const { groupEntityList, loading } = useSelector((state) => state.groupEntityList);
  const recentGroupEntityList = groupEntityList.slice(0, 5)
  //console.log(recentGroupEntityList)
  console.log(loading)





  const history = useHistory()
  const renderHeader = () => {
    let headerElement = [
      "GROUP CODE",
      "GROUP NAME",
      "CREATION DATE",
      "STATUS",
      "CREATED BY",
      "ACTION"
    ];
    return headerElement.map((key, index) => {
      return (
        <th
          className={
            "px-6 align-middle   text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
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
  console.log(recentGroupEntityList)
  const renderBody = () => {
    return (
      recentGroupEntityList &&
      recentGroupEntityList.map(
        ({
          id,
          groupCode,
          groupName,
          createdDate,
          createdBy,
          flag
        }) => {
          return (
            <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" key={id}>
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
                {flag ? "Active" : "Inactive"}
              </td>
              <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
                {createdBy}
              </td>
              <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
                <button onClick={(e) => history.push(`/admin/companiesInAGroup/${id}`)} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Details</button>


              </td>
              <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">



              </td>



            </tr>
          );
        }
      )
    );
  };
  if (loading) {
    return (
      <Loader />
    )
  }
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-theme text-bold text-white")
        }
      >
        <div className="rounded-t mb-0 px- py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Recent Group Entities
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right mr-6">
              <Link className="mr-6" to="/admin/list/groupEntity">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-500 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
            <thead>
              {renderHeader()}
            </thead>
            <tbody>
              {renderBody()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
GroupEntityPageVisitsData.defaultProps = {
  color: "light",
};
GroupEntityPageVisitsData.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};