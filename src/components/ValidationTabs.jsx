import React from "react";
import AadharValidationCard from "./Cards/AadharValidationCard";
import OnHoldCard from "./Cards/OnHoldCard";
import OverAllKycCard from "./Cards/OverAllKycCard";
import PanValidationCard from "./Cards/PanValidationCard";

const ValidationTabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-orange-500"
                    : "text-white bg-theme")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Check Aadhar
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-orange-500"
                    : "text-white bg-theme")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Check Pan
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-orange-500"
                    : "text-white bg-theme")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Kyc Status
              </a>
            </li>
         
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                 <AadharValidationCard/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 <PanValidationCard/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                 <OverAllKycCard/>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidationTabs;