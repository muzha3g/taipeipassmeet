import React from "react";
import RoomCard from "../components/RoomCard";

const RoomDetail = () => {
  return (
    <>
      <div className="mb-20 flex flex-col items-center justify-center">
        <RoomCard />
        <div className="my-10">
          <button className="btn btn-wide btn-info font-bold text-lg">
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
