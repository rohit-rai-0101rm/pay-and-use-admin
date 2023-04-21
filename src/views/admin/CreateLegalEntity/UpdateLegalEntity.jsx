import React from "react";
import Checkbox from "@material-tailwind/react/Checkbox"

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import LegalEntityForm from "components/Forms/LegalEntityForm";
import { useSelector } from "react-redux";
import UpdateLegalEntityForm from "components/Forms/UpdateLegalEntityForm";

export default function UpdateLegalEntity() {
  const { companyMasterDetails } = useSelector((state) => state.singleCompanyMasterDetails)
  console.log(companyMasterDetails)

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <UpdateLegalEntityForm details={companyMasterDetails} />
        </div>

      </div>
    </>
  );
}
