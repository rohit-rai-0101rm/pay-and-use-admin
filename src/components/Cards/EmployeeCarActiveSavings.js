import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export default function EmployeeCarActiveSavings({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
    <div className="relative flex flex-col min-w-0 break-words bg-yellow-500 rounded mb-6 xl:mb-0 shadow-lg">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <Typography>  {statSubtitle}</Typography>
            <span className="font-semibold text-xl text-blueGray-700">
              <div>
              <Typography>    {statTitle}</Typography>
              </div>
           
           
            </span>
          </div>
          <div className="relative w-auto pl-4 flex-initial">
            <div
              className={
                "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                statIconColor
              }
            >
              <i className={statIconName}></i>
            </div>
          </div>
        </div>
        <p className="text-sm text-blueGray-400 mt-4">
          <span className={statPercentColor + " mr-2"}>
            <i
              
            ></i>{" "}
           
          </span>
        </p>
      </div>
    </div>
  </>
  );
}

EmployeeCarActiveSavings.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  
  statPercentColor: "text-emerald-500",
  
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

EmployeeCarActiveSavings.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
