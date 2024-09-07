import React from "react";
import RoomCard from "../components/RoomCard";

const RoomDetail = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <RoomCard />
      <div className="flex justify-center items-center h-screen">
        <button className="btn btn-info text-center">Join</button>
      </div>
    </div>
  );
};

export default RoomDetail;
