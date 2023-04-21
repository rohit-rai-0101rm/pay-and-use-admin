import Navbar from 'components/Navbars/AdminNavbar'
import React from 'react'
import CalenderTable from './CalenderTable'

const Calender = () => {
    return (
<>
    <Navbar/>
      <div className="flex bg-blue flex-wrap mt-4">
        
        <div className="w-full mb-12 pt-12 px-4">
          <CalenderTable month={"April"} noOfCheckboxes={30} color="dark" />
        </div>
     
        
      </div>
    </>
    )
    
}
export default Calender