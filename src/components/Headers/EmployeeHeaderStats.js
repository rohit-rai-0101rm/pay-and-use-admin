import React from "react";
import { createPopper } from '@popperjs/core';


// components
import EmployeeCardActiveLoansStats from "components/Cards/EmployeeCardActiveLoansStats";
import EmployeeCardTotalDueStats from "components/Cards/EmployeeCardTotalDueStats";
import EmployeeCarActiveSavings from "components/Cards/EmployeeCarActiveSavings";
import EmployeeTotalPayableCard from "components/Cards/EmployeeTotalPayableCard";

export default function EmployeeHeaderStats() {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
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
            <div className="flex flex-wrap">
              <div className="w-full bg-lightGreen-600 lg:w-6/12 xl:w-3/12 px-4">
                
                <EmployeeCardActiveLoansStats
                  statSubtitle="Buisness Units"
                  statTitle="2"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fa fa-bars"
                  statIconColor="bg-purple-500"
                />
              </div>
              <div className="w-full bg-lightBlue-600 lg:w-6/12 xl:w-3/12 px-4">
                
                <EmployeeCardTotalDueStats
                  statSubtitle="Employees"
                  statTitle="200"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fa fa-database"
                  statIconColor="bg-purple-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <EmployeeCarActiveSavings
                  statSubtitle="Approved Loans"
                  statTitle="12"
                
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fa fa-battery-half"
                  statIconColor="bg-purple-500"
                />
              </div>
       
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div className="flex flex-wrap">
      
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
