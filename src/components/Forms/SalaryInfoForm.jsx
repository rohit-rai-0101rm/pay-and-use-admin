import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import BiWeeklySalaryForm from './BiWeeklySalaryForm';
import CheckoutSteps from './CheckoutSteps'
import DateSpecific from './DateSpecific';
import DaySpecific from './DaySpecific';
import MonthlySalary from './MonthlySalary';
import WeeklySalaryForm from './WeeklySalaryForm';

const SalaryInfoForm = () => {
    const basicInfo = JSON.parse(localStorage.getItem('basicInfo'));
    //console.log(basicInfo)
    const { biweeklyType, financialYear, isBiweekly, isWeekly, isMonthly, salaryProcessingType, isDaySpecific, isDateSpecific } = basicInfo
    //console.log(biweeklyType,financialYear,isBiweekly,salaryProcessingType,isDaySpecific,isDateSpecific)
const {id:buCode}=useParams()
console.log(buCode)
    console.log("isBiweekly",isBiweekly)
    console.log("isDaySpecific", isDaySpecific)
    console.log("isDateSpecific", isDateSpecific)
    console.log("salaryProcessingType", salaryProcessingType)
    console.log("isMonthly", isMonthly)
    return (
        <div>
            <CheckoutSteps activeStep={1} />
            {
                isBiweekly &&
                <div>
                    <BiWeeklySalaryForm buCode={buCode}/>
                </div>
            }
           
            
            {
                isWeekly &&
                <div>
                    <WeeklySalaryForm buCode={buCode}/>
                </div>
            }
           
            {
               isMonthly &&
               <div>
                     <MonthlySalary buCode={buCode}/>
               </div>
            }
        </div>
    )
}

export default SalaryInfoForm