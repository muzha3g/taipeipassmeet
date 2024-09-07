import React from "react";
import RoomCard from "../components/RoomCard";
import Profile from "../components/Profile";
import RoomCardDetail from "../components/RoomCardDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RoomDetail = () => {
  const { eid, rid } = useParams();

  const [room, setRoom] = useState([]);

  useEffect(() => {
    axios
      .get(`http://si8a1.asuscomm.com:8000/roomInfo=${eid}&${rid}`)
      .then((response) => {
        console.log(response.data);
        setRoom(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event list:", error);
      });
  }, []);

  return (
    <>
      <div className="mb-20 flex flex-col items-center justify-center">
        <RoomCardDetail
          key={room.roomID}
          rid={room.roomID}
          description={"歡迎來玩"}
          name={room.roomName}
          date={room.date}
          time={room.time}
          low_age={room.lowest_age}
          high_age={room.highest_age}
          condition={room.condition}
          participant={room.participant}
          roomCapacity={room.roomCapacity}
        />
        <div className="h-16 w-2/3 mt-8 flex flex-row flex-wrap justify-start item-center gap-2" >
          {Array.from({ length: room.participant }).map((_, index) => (
            <Profile
              key={index}
              lightdark={0}/>
          ))} {Array.from({ length: room.roomCapacity }).map((_, index) => (
            <Profile
              key={index}
              lightdark={1}/>
          ))}
          {/* <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile> */}
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
