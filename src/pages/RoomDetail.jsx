import React from "react";
import RoomCard from "../components/RoomCard";

const RoomDetail = () => {
  return (
    <>
      <div className="mb-20">
        <RoomCard />
      </div>
      <br />
      <div className="flex items-center justify-center">
        <button className="btn btn-wide btn-info">Join</button>
      </div>
    </>
  );
};

export default RoomDetail;
