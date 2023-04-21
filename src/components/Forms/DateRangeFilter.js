import React, { useState } from "react";
import PropTypes from "prop-types";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays, subDays } from "date-fns";

const DateRangeFilter = ({ onChange }) => {
    const [state, setState] = useState([
        {
          startDate: subDays(new Date(), 7),
          endDate: addDays(new Date(), 1),
          key: "selection"
        }
      ]);
    
      const handleOnChange = ranges => {
        const { selection } = ranges;
        onChange(selection);
        setState([selection]);
      };
      const [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndDate] = useState(new Date());


  return (
    <DateRangePicker
    onChange={handleOnChange}
    showSelectionPreview={true}
    moveRangeOnFirstSelection={false}
    months={12}
    color={"#2E318C"}
    rangeColors={"#2E318C"}
    ranges={state}
    direction="vertical"
  
   
    />
  );
};

DateRangeFilter.propTypes = {
  onChange: PropTypes.func
};

export default DateRangeFilter;
