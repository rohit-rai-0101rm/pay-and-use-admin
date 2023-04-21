import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import './GroupEntityCard.css'
const GroupEntityCard = ({ group }) => {

  return (
    <Link className="groupEntityCard" to={`/admin/companiesInAGroup/${group.id}`}>

      <p>{group.groupName}</p>
      <div>

        <span className="groupCardSpan">
          {" "}
          ({group.groupCode} )
        </span>
        <div className="createdAt">
          <p> created  {moment(group.createdDate).fromNow()}
          </p>

        </div>
      </div>

    </Link>
  );
};

export default GroupEntityCard;