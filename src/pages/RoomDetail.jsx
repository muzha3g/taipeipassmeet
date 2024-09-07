import React from "react";
import RoomCard from "../components/RoomCard";
import Profile from "../components/Profile";
import RoomCardDetail from "../components/RoomCardDetail";

const RoomDetail = () => {
  return (
    <>
      <div className="mb-20 flex flex-col items-center justify-center">
        {/* <RoomCard /> */}
        <RoomCardDetail />
        <div className="h-16 mt-8 flex flex-row item-center justify-around gap-2" >
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
        </div>
        <div className="my-10">
          <button className="btn btn-wide btn-info font-bold text-white text-lg bg-[#5AB4C5]">
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
