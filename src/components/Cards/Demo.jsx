import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import { Catalogues } from "./mock";

const Demo = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Catalogues);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  console.log(isCheck);

  const catalog = list.map(({ id, name }) => {
    console.log(id,name)
    return (
     
      <div className="cCom">
      <Checkbox
        key={id}
        type="checkbox"
        name={name}
        id={id}
        handleClick={handleClick}
        isChecked={isCheck.includes(id)}
      />
      {name}
    </div>
     
    );
  });

  return (

    
      list.map(({ id, name }) => {
        return (
          <div>
            <Checkbox
              key={id}
              type="checkbox"
              name={name}
              id={id}
              handleClick={handleClick}
              isChecked={isCheck.includes(id)}
            />
            {name}
          </div>
        );
      }))
    }
   
 


export default Demo;
