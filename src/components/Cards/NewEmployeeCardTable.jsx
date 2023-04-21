import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function NewEmployeeCardTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
       
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          
        </div>
      </div>
    </>
  );
}

NewEmployeeCardTable.defaultProps = {
  color: "light",
};

NewEmployeeCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
