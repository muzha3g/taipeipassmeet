import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock } from "react-icons/fi";

const RoomCard = ({eid, rid, name, date, time}) => {
  return (
    <>
      <div className="bg-base-200 w-80 mt-5 mx-14 rounded-lg p-8 py-5 shadow-lg">
        <Link to={`/activity/${eid}/room/${rid}`}>
          <div className="text-xl font-bold mb-2">{name}</div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-row items-center gap-2"><FiCalendar size={18} color="#356C77" /><p>{date}</p></div>
            <div className="flex flex-row items-center gap-2"><FiClock size={18} color="#356C77" /><p>{time}</p></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RoomCard;
