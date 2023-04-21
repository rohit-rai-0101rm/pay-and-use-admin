import GroupEntityForm from 'components/Forms/GroupEntityForm'
import LegalEntityForm from 'components/Forms/LegalEntityForm'
import React from 'react'

const CreateGroupEntity = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <GroupEntityForm />
        </div>
        
      </div>
    </>
  )
}

export default CreateGroupEntity