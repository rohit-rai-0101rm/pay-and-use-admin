import React,{useEffect, useState} from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilterForAuthandSmsSent = ({ filter, setFilter }) => {
    const placeholderText = ["Employee Code", "Employee Name", "BUISNESS UNIT NAME","PAY DAY ELIGIBLE AMOUNT","SHORT TERM ELIGIBLE AMOUNT"];
    const [index, setIndex] = useState(0);

    const [value, setValue] = useState(filter);
    const onChange=useAsyncDebounce(value=>{
        setFilter(value)
    },1000)
    useEffect(() => {
        const timer = () => {
          setIndex(prevIndex => {
            if(prevIndex === placeholderText.length - 1){
              return 0;
            } 
            return prevIndex + 1;
          })
        };
        setInterval(timer, 2000);
        
       
        return () => { clearInterval(timer); }
      }, []);
    
  return (
    <center>
       
        <input
        className={"border-8 mb-2 px-3 py-3  text-blueGray-600 bg-white rounded-full text-sm   w-18  transition-all duration-150"}
          type="text"
          value={value}
          placeholder={`Search`}
          onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
          }}
        />
     
    </center>
  );
};

export default GlobalFilterForAuthandSmsSent;