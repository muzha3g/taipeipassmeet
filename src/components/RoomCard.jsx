import React from "react";
import { Link } from "react-router-dom";
// import { CiCalendar } from "react-icons/ci";

const RoomCard = ({eid, rid, name, date, time}) => {
  return (
    <>
      <div className="bg-base-200 w-80 mt-5 mx-14 rounded-lg p-8 py-5 shadow-lg">
        <Link to={`/activity/${eid}/room/${rid}`}>
          <div className="text-xl font-bold">{name}</div>
          <div className="">
            <p>{date} {time}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RoomCard;
