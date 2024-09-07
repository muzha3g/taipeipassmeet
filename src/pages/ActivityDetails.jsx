import React from "react";
import ActivityCard from "../components/ActivityCard";
import RoomCard from "../components/RoomCard";

const ActivityDetails = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <ActivityCard />
        <RoomCard />
      </main>
    </>
  );
};

export default ActivityDetails;
