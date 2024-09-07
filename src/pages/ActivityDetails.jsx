import React from "react";
import ActivityCard from "../components/ActivityCard";
import RoomCard from "../components/RoomCard";

const ActivityDetails = () => {
  return (
    <div>
      <main className="m-5 px-5 d-flex flex-column ">
        <ActivityCard />
        <div className="RoomList flex">
          <RoomCard />
        </div>
      </main>
    </div>
  );
};

export default ActivityDetails;
