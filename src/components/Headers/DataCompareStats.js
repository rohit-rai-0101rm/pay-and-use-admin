import React from "react";
import { createPopper } from "@popperjs/core";

// components
import EmployeeCardActiveLoansStats from "components/Cards/EmployeeCardActiveLoansStats";
import EmployeeCardTotalDueStats from "components/Cards/EmployeeCardTotalDueStats";
import EmployeeCarActiveSavings from "components/Cards/EmployeeCarActiveSavings";
import EmployeeTotalPayableCard from "components/Cards/EmployeeTotalPayableCard";
import LoanCard from "./LoanCard";
import BasicButtons from "./ButtonCard";
import Action from "./Action";

export default function DataCompareStats() {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 ">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex justify-between flex-wrap">
              <div className="w-full bg-lightGreen-600 lg:w-6/12 xl:w-3/12 px-4">
                <LoanCard />
              </div>

              <div className="w-full space-x-8 lg:w-6/12 xl:w-3/12 px-4">
                <Action />
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
