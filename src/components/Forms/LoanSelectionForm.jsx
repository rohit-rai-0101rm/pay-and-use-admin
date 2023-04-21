
import PayDaySelectionCard from 'components/Cards/PayDaySelectionCard'
import ShortTermSelectionCard from 'components/Cards/ShortTermSelectionCard'
import React from 'react'

const LoanSelectionForm = () => {
    const basicInfo = localStorage.getItem('basicInfo')

 console.log(JSON.parse(basicInfo))   

 const{isBiweekly,isMonthly,isWeekly}=JSON.parse(basicInfo)
console.log(isBiweekly,isMonthly,isWeekly)


if(isMonthly){
    return (
        <>
        <div className="flex flex-wrap">
            
            <div className="w-full lg:w-6/12 px-4">
                <PayDaySelectionCard />
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <ShortTermSelectionCard />
            </div>
        </div>
    </>
    )
}

if(isWeekly || isBiweekly){
    return (
        <>
            <div className="flex flex-wrap">
               
                <div className="w-full  px-4">
                    <ShortTermSelectionCard />
                </div>
            </div>
        </>
    )
}


}

export default LoanSelectionForm