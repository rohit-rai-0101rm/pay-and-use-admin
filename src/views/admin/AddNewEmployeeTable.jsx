
  
import React from "react";

// components

import CardTable from "components/Cards/NewEmployeeCardTable";
import AllEmployeeCardTable from "components/Cards/AllEmployeeCardTable";
import DragnDrop from "components/DragnDrop";
import EmployeeSheetTable from "components/Cards/EmployeeSheetTable";

export default function AddNewEmployeeTable() {
  return (
    <div>
      <CardTable/>
          <div className="h-40">
          <DragnDrop/>

          </div>
          <EmployeeSheetTable/>
        
    
    </div>
  );
}