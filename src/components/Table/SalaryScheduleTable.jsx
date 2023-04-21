import React from "react";
import PropTypes from "prop-types";


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { Link } from "react-router-dom";

export default function SalaryScheduleTable({ color, schedule }) {
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    console.log(schedule)
    const { startDate, endDate, salaryDate } = schedule
    const [date, setDate] = React.useState(new Date());
    const handleEdit = () => {
        setShowDatePicker(true)
    }
    const renderHeader = () => {
        let headerElement = [ 'Start Date', 'End Date', 'Date of processing']

        return headerElement.map((key, index) => {
            return <th className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
            } key={index}>{key.toUpperCase()}

            </th>
        })
    }

    const renderBody = () => {
        return schedule && schedule.map(({ index, startDate, endDate,salaryDate,salaryDay }) => {
            return (

                <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">

                    <span
                        className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                        }
                    >
                        {index}
                    </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                   {startDate}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {endDate}


                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">


                        {salaryDate}
                    </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">


                        {salaryDay}
                    </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">

                        <button onClick={handleEdit} className="Edit">
                            Edit
                        </button>
                    </div>
                    {
                        showDatePicker &&
                        <div>
                            <h1>sdsd</h1>
                        </div>

                    }
                </td>

            </tr>




            )
        })
    }


    return (

        <>

            
            
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-bold text-xl " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                Salary Schedule (Monthly)                            </h3>
                        </div>
                    </div>
                </div>




                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                {renderHeader()}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {renderBody()}
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            
        </>
    );
}

SalaryScheduleTable.defaultProps = {
    color: "light",
};

SalaryScheduleTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
