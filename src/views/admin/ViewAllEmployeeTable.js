import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import AllEmployeeCardTable from "components/Cards/AllEmployeeCardTable";

export default function ViewAllEmployee() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <AllEmployeeCardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
