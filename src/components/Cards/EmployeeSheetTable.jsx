import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React,{useState} from 'react'

const EmployeeSheetTable = ({ data }) => {
  console.log(data)
  const color = "light"

  const renderHeader = () => {
    let headerElement = [
      "Employee Code",
      "Group Code",
      "Legal Code",
      "Bu Code",

      "Date of Birth",
      "Date of Joining",
      "Comm Address Line 1",
      "Comm Address Line 2",
      "COMM_TOWN",
      "COMM_CITY",
      "COMM_STATE",
      "COMM_COUNTRY",
      "COMM_Pin Code",


      "PER_ADDRESS_LINE_1",
      "PER_ADDRESS_LINE_2",
      "PER_CITY",
      "PER_COUNTRY",
      "PER_PINCODE",
      "PER_STATE",
      "PER_TOWN",



      "First Name",
      "Last Name",
      "Mobile Number",
      "Email",
      "Adhar Number",
      "PAN Number",

      "Bank Name",
      "Bank Account Number",
      "Bank IFSC Code",
      "CTC(PA)",
      "CTC(PM)",
      "PF(Y/N)",
      "ESI(Y/N)",
      "Date of Transaction",
      "Salary Cycle",
      "FATHER NAME ",
      "Marital Status",
      "Designation",
      "Number of Children",
    



    ];

    return headerElement.map((key, index) => {
      return (
        <th
          key={index}
          className={
            "px-6 align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
            (color === "light"
              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
          }
        >
          {key.toUpperCase()}
        </th>
      );
    });


  }
  const authenticate=(empCode)=>{
    console.log(empCode)
  }
  
  const renderBody = () => {
    return data && data.map((d, index) => {
      
      return (

        <tr key={d.empCode} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.empCode}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.groupCode}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.legalCode}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.buCode}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.dob}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.doj}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.commAddressLine1}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.commAddressLine2}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.commTown}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.commCity}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.commState}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.commCountry}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.commPincode}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.perAddressLine1}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.perAddressLine2}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.perCity}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.perCountry}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.perPincode}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.perState}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.perTown}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.firstName}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.lastName}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.mobile}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.email}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.aadhar}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.pan}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.bankName}
          </td>

          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.acNumber}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.bankIfsc}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.ctcPa}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.ctcPm}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.isPf}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.isEsi}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.dot}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.salaryCycle}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.fatherName}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.maritalStatus}
          </td>
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-left">
            {d.designation}
          </td>
         
          <td className="px-6 py-4 align-middle border-l-0 border-r-0 whitespace-nowrap text-center">
            {d.noChildren}
          </td>
         
        </tr>


      )
    })
  }

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Employees Record
              </h3>
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

              {renderBody()}



             



            </tbody>
          </table>
        </div>
      </div>
    </>

  )

}
export default EmployeeSheetTable