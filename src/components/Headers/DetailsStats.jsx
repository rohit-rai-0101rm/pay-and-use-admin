import React from "react";
import { createPopper } from '@popperjs/core';


// components

import CardStats from "components/Cards/CardStats.js";

export default function DetailsStats({ details }) {
    console.log(details)
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
            <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                        {/* Card stats */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <CardStats
                                    statSubtitle="Contact Person"
                                    statTitle={details.contactPerson}


                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <CardStats
                                    statSubtitle="Contact Person Email"
                                    statTitle={details.contactPersonEmail}

                                    statIconName="fas fa-chart-pie"

                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <CardStats
                                    statSubtitle="Contact person Phone"
                                    statTitle={details.contactPersonMobile}


                                    statIconName="fas fa-users"
                                    statIconColor="bg-pink-500"
                                />
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
