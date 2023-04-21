import React from "react";

const Checkbox = ({ id,label, value, onChange }) => {
  console.log(id,label, value, onChange)
  return (
    <label>
      <input id={id} type="checkbox" value={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
