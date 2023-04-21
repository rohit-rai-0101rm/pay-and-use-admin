import React, { useEffect } from "react";
import moment from "moment";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCompanyMasterDetails } from "actions/companyMasterActions";
import { useParams } from "react-router-dom";
import { deleteLegalEntity } from "actions/legalEntityActions";
import { useHistory } from "react-router-dom";
import DeleteButton from "./CreateLegalEntity/DeleteButton";
import { getBuInACompanyApi } from "actions/buisnessUnitActions";
import UnitsInAGroupCardTable from "components/Cards/UnitsInACompanyTable";

export default function CompanyMasterDeails() {
  const history=useHistory()
  const{companyMasterDetails}=useSelector((state)=>state.singleCompanyMasterDetails)
  const{buisnessUnitsInAGroup}=useSelector((state)=>state?.buisnessUnitInAGroup)
  const {companyCode}=companyMasterDetails
  const dispatch=useDispatch()
  const{id}=useParams()
useEffect(()=>{
  dispatch(getSingleCompanyMasterDetails(id))
  dispatch(getBuInACompanyApi(id))
},[dispatch,id])
//console.log(companyMasterDetails)

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
       
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
             
                  
                  <div className="flex flex-row w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                     onClick={()=>history.push(`/admin/update/legalEntity/${id}`)}
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Update
                      </button>
                     
                    </div>
                    <div className="py-6  px-12 mt-32  sm:mt-0">
                     <DeleteButton id={id}/>
                     
                    </div>
                    
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {companyMasterDetails.companyCode}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Company Code
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {companyMasterDetails.stateCode}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          State Code
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-red-500">
                          {companyMasterDetails.countryCode}
                        </span>
                        <span className="text-xs text-blueGray-400">
                          Country Code
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {companyMasterDetails.companyDescription}
                  </h3>
                  
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    {companyMasterDetails.addressLine1}{companyMasterDetails.addressLine2}{"  "}{companyMasterDetails.town}{"  "}{companyMasterDetails.city}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Contact Person - {companyMasterDetails.contactPerson}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-2">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Contact Person Email- {companyMasterDetails.contactPersonEmail}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-2">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Contact Person Phone- {companyMasterDetails.contactPersonMobile}
                  </div>
                 
                </div>
                <div className="mt-10  border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        created{"  "}{moment(companyMasterDetails.createdDate).fromNow()}
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                      <UnitsInAGroupCardTable companyName={companyMasterDetails.companyDescription} unitsInACompany={buisnessUnitsInAGroup}/>
                    </div>
                  </div>
                </div>
              
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
