import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// components

export default function CardPageVisitsData({loading,companyMasterList}) {
    
    const history=useHistory()
    console.log(loading)
   const  recentCompanyMasterList=companyMasterList?.slice(0,5)
    console.log(recentCompanyMasterList)
    const renderHeader = () => {
        let headerElement = ["COMPANY CODE", "COMPANY NAME", "COUNTRY", "STATE"];
        return headerElement.map((key, index) => {
          return (
            <th
              className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              key={index}
            >
              {key.toUpperCase()}
            </th>
          );
        });
      };
    
      const renderBody = () => {
        return (
        
          recentCompanyMasterList?.map(
            ({
              id,
              companyDescription,
              companyCode,
              mpCountryMaster,
              mpStateMaster,
            }) => {
              return (
                <tr onClick={()=>history.push(`/companyMaster/${id}`)} key={id}>
                 
                  <td className="text-blue-600 border-t-0 px-6 align-middle border-l-0 border-r-0   p-4 text-left">
                    {companyCode}
                  </td>
    
                  <td className="text-blue-600 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {companyDescription}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {mpCountryMaster.countryName}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {mpStateMaster.stateDescription}
                  </td>
                </tr>
              );
            }
          )
        );
      };
    
      console.log(companyMasterList);
      if(!companyMasterList) return ("loading")
      return (
        <>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    COMPANY MASTER LIST
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to="/admin/list/companyMaster">
                    <button
                      className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      See all
                    </button>
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className=" cursor-pointer items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>{renderHeader()}</tr>
                </thead>
                <tbody>{renderBody()}</tbody>
              </table>
            </div>
          </div>
        </>
      );
    }