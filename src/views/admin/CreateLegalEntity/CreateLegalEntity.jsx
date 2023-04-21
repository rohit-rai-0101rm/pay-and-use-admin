import React from "react";
import Checkbox from "@material-tailwind/react/Checkbox"


// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import GroupEntityForm from "components/Forms/GroupEntityForm";
import LegalEntityForm from "components/Forms/LegalEntityForm";

export default function CreateLegalEntity() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <LegalEntityForm />
        </div>
        
      </div>
    </>
  );
}
