import React, { useState } from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import RadioGroup, { Radio } from "react-radio-group"
import Checkbox from "./Checkbox";
export default function CalenderTable({ month, noOfCheckboxes }) {
  console.log(noOfCheckboxes);
  console.log(month);
  const [checked, setChecked] =useState('false');

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
       <Checkbox
       id="checkbox1"
        label="My Value"
        value={checked}
        onChange={handleChange}
      />

      
    </div>
  );
}

CalenderTable.defaultProps = {
  color: "light",
};

CalenderTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
