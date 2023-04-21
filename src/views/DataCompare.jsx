import React from 'react'
import { useAlert } from "react-alert";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import ComaprisonCard from 'components/Cards/Compare';
const DataCompare = () => {
  const alert = useAlert()

  return (
    <>
      <div className="mt-6 flex flex-wrap">
        <div className="w-full lg:w-full py-24 px-4">


        </div>
        <ComaprisonCard />


      </div>
      
    </>
  )
}

export default DataCompare