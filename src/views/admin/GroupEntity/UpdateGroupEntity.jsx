import UpdateGroupEntityForm from "components/Forms/UpdateGroupEntityForm";
import React from "react";

import { useSelector } from "react-redux";

export default function UpdateGroupEntity() {
  const { groupEntityDetails } = useSelector((state) => state.groupEntityDetails)
  console.log(groupEntityDetails)

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
           <UpdateGroupEntityForm details={groupEntityDetails}/>
        </div>

      </div>
    </>
  );
}
