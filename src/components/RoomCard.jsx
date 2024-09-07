import React from "react";
import { Link } from "react-router-dom";

const RoomCard = () => {
  return (
    <>
      <div className="bg-base-200 w-80 mt-5 mx-14 rounded-lg p-8 py-5 shadow-lg">
        <Link to="room">
          <div className="text-xl font-bold">房間名稱</div>
          <div className="">
            <p>房間說明_房間說明_房間說明</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RoomCard;
