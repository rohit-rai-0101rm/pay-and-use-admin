import React from "react";
import AadharValidationCard from "./Cards/AadharValidationCard";
import OnHoldCard from "./Cards/OnHoldCard";
import OverAllKycCard from "./Cards/OverAllKycCard";
import PanValidationCard from "./Cards/PanValidationCard";
import CardSettings from "components/Cards/CardSettings.js";
import LoanPendingForApprovalTable from "./Table/LoanPendingForApprovalTable";
import CardProfile from "./Cards/CardProfile";
import { useParams } from "react-router";
import ProductTable from "./Table/ProductTable";
import FileUploadTable from "./Table/FileUploadTable";
import LoanHistoryCardTable from "./Table/LoanHistoryTable";
import DisbursalCard from "./Cards/DisbursalCard";
import ComparisonCard from "./Cards/Compare";
import ValidationCard from "./Cards/ValidationCard";
import EmployeeDetailCard from "./Cards/EmployeeDetailCard";
import LoanDetailCard from "./Cards/LoanDetailCard";
import KycDetailsCard from "./Cards/KycDetailsCard";

const EmployeeProfileTabs = ({ employeeProfile }) => {
  console.log("employeeProfile", employeeProfile)
  const [openTab, setOpenTab] = React.useState(1);
  var { empCode, buCode } = useParams()
  const isNotMobileAuthenticated = true
  const { mobileAuthenticationDone, hrApprovalDone, kycVerificationDone, underwritingDone, loanDisbursalDone } = employeeProfile
  console.log("mobileAuthenticationDone", mobileAuthenticationDone, hrApprovalDone, kycVerificationDone, underwritingDone, loanDisbursalDone)

  const handleActiveTab = () => {
    if (isNotMobileAuthenticated) {
      setOpenTab(openTab)
    }
  }
  const tabApproved = "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-green"
  const tabDisabled = "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block  bg-gray"

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
                  "text-xs font-bold	 uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-theme"
                    : "text-black font-extrabold bg-whiteSmoke-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Employee Details
              </a>
            </li>


            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={openTab==2 ? "text-xs font-bold	 uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-theme" : "text-xs font-bold	 uppercase px-5 py-3 shadow-lg rounded block leading-normal text-black font-extrabold bg-whiteSmoke-500"}

                onClick={e => {
                  e.preventDefault();
                  setOpenTab(mobileAuthenticationDone ? 2 : openTab);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
                disabled={!mobileAuthenticationDone}

              >
                Kyc  Verification
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a

                className={underwritingDone ? tabApproved : tabDisabled}

                onClick={e => {
                  e.preventDefault();
                  setOpenTab(underwritingDone ? 3 : openTab);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
                disabled={!underwritingDone}

              >
                UnderWriting
              </a>
            </li>



            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a

                className={hrApprovalDone ? tabApproved : tabDisabled}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(hrApprovalDone ? 4 : openTab);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
                disabled={!hrApprovalDone}

              >
                HR Approval              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a

                className={loanDisbursalDone ? tabApproved : tabDisabled}

                onClick={e => {
                  e.preventDefault();
                  setOpenTab(hrApprovalDone ? 5 : openTab);

                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Disbursal
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4">
                      <CardProfile description={empCode} code={buCode} employeeInformation={employeeProfile} />
                    </div>
                    <div className="w-full lg:w-8/12 px-4">
                      <CardSettings employeeInformation={employeeProfile} />
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <KycDetailsCard employeeInformation={employeeProfile} />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link2">

                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4">
                      <LoanPendingForApprovalTable />
                    </div>
                    <div className="w-full lg:w-8/12 px-4">
                      <ValidationCard />
                    </div>

                  </div>


                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">

                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4">
                      <EmployeeDetailCard description={empCode} code={buCode} employeeInformation={employeeProfile} />
                    </div>
                    <div className="w-full lg:w-8/12 px-4">
                      <LoanDetailCard />
                    </div>

                  </div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4">
                      <CardSettings employeeInformation={employeeProfile} />
                    </div>
                    <div className="w-full lg:w-8/12 px-4">
                      <DisbursalCard description={empCode} code={buCode} employeeInformation={employeeProfile} />
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeProfileTabs;