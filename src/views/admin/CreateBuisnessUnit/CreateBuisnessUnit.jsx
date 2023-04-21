import React from "react";
import Checkbox from "@material-tailwind/react/Checkbox"

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import LegalEntityForm from "components/Forms/LegalEntityForm";
import BuisnessUnitForm from "components/Forms/BuisnessUnitForm";
export default function CreateBuisnessUnit() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <BuisnessUnitForm />
        </div>
        <div className="w-full lg:w-4/12 px-4">
        
        </div>
      </div>
    </>
  );
}
