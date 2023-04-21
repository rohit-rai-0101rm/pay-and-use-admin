import React from "react";
import { createPopper } from '@popperjs/core';


// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats2({ show }) {
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
    console.log(show)
    return (
        <>
            {/* Header */}
            {
                show &&
                <div className="relative bg-lightBlue-600 md:pt-32 pb-32">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                            {/* Card stats */}
                            <div className="flex flex-wrap">
                                <div className="w-full bg-lightBlue-600 lg:w-6/12 xl:w-3/12 px-4">

                                    <CardStats
                                        statSubtitle="number of preapproved loans
                                        "
                                        statTitle="350,897"
                                        statArrow="up"
                                        statPercent="3.48"
                                        statPercentColor="text-emerald-500"
                                        statDescripiron="Since last month"
                                        statIconName="far fa-chart-bar"
                                        statIconColor="bg-purple-500"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <CardStats
                                        statSubtitle="no of loans disbursed
                                        "
                                        statTitle="2,356"
                                        statArrow="down"
                                        statPercent="3.48"
                                        statPercentColor="text-red-500"
                                        statDescripiron="Since last week"
                                        statIconName="fas fa-chart-pie"
                                        statIconColor="bg-purple-500"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <CardStats
                                        statSubtitle="number of employer
                                        "
                                        statTitle="924"
                                        statArrow="down"
                                        statPercent="1.10"
                                        statPercentColor="text-orange-500"
                                        statDescripiron="Since yesterday"
                                        statIconName="fas fa-users"
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
            }
            {
                !show &&
                <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                            {/* Card stats */}
                            <div className="flex flex-wrap">
                                <div className="w-full bg-lightBlue-600 lg:w-6/12 xl:w-3/12 px-4">

                                    <CardStats
                                        statSubtitle="preapproved loans
                                        "
                                        statTitle="350,897"
                                        statArrow="up"
                                        statPercent="3.48"
                                        statPercentColor="text-emerald-500"
                                        statDescripiron="Since last month"
                                        statIconName="far fa-chart-bar"
                                        statIconColor="bg-purple-500"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <CardStats
                                        statSubtitle=" loans disbursed
                                        "
                                        statTitle="2,356"
                                        statArrow="down"
                                        statPercent="3.48"
                                        statPercentColor="text-red-500"
                                        statDescripiron="Since last week"
                                        statIconName="fas fa-chart-pie"
                                        statIconColor="bg-purple-500"
                                    />
                                </div>
                              
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <CardStats
                                        statSubtitle=" employers with disbursed loans"
                                        statTitle="924"
                                        statArrow="down"
                                        statPercent="1.10"
                                        statPercentColor="text-orange-500"
                                        statDescripiron="Since yesterday"
                                        statIconName="fas fa-users"
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
            }

        </>
    );
}
