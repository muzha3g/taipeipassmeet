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
  const [showSuccessAlert, setSuccessAlert] = useState(false);

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
  }, [eid, rid]);

  const handleJoinClick = () => {
    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 3000);
  };

  return (
    <>
      {showSuccessAlert && (
          <div class="flex items-center p-4 px-8 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="flex justify-center font-medium">Success: request sent!</span>
            </div>
          </div>
        )}
      <div className="mb-20 flex flex-col items-center justify-center">
        <RoomCardDetail
          key={room.roomID}
          rid={room.roomID}
          description={"臺北發大財 !"}
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
          ))} {Array.from({ length: room.roomCapacity-room.participant }).map((_, index) => (
            <Profile
              key={index}
              lightdark={1}/>
          ))}
          <div className="font-bold text-lg" style={{ color: '#93D4DF' }}>{room.participant}/{room.roomCapacity}</div>
          <Profile
            lightdark={2}/>
          <div className="font-bold text-lg" style={{ color: '#F5BA4B' }}>+1</div>
          {/* <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile> */}
        </div>
        <div className="my-10">
          <button onClick={handleJoinClick} className="btn btn-wide btn-info font-bold text-white text-lg bg-[#5AB4C5]">
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
