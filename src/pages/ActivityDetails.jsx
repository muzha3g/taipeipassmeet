import React from "react";
import ActivityCard from "../components/ActivityCard";
import RoomCard from "../components/RoomCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdInformationCircleOutline } from "react-icons/io";
import myImage from "../assets/images/image.jpg";

const ActivityDetails = () => {
  const { eid } = useParams();

  const [event, setEvent] = useState([]);
  const [roomList, setRooms] = useState([{}]);

  useEffect(() => {
    axios
      .get(`http://si8a1.asuscomm.com:8000/id=${eid}`)
      .then((response) => {
        // console.log(response.data);
        setEvent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event list:", error);
      });
    axios
      .get(`http://si8a1.asuscomm.com:8000/roomList=${eid}`)
      .then((response) => {
        // sconsole.log(response.data);
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event list:", error);
      });
  }, []);
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <ActivityCard
          key={event.event_id}
          id={event.event_id}
          event_name={event.event_name}
          date={event.date}
          time={event.time}
          location={event.location}
          img_url={myImage}
        />
        <div>
          <div className=" w-80 mp-2 mx-14 rounded-lg px-5 py-5 border-2 border-[#93D4DF]">
              <div className="flex flex-row items-center gap-5">
              <IoMdInformationCircleOutline size={36} color="#93D4DF"/>
              <p>{event.description}</p>
              </div>
          </div>
        </div>
        {roomList.map((room) => (
          <RoomCard
            key={room.roomID}
            eid={eid}
            rid={room.roomID}
            name={room.roomName}
            date={room.date}
            time={room.time}
          />
        ))}
      </main>
    </>
  );
};

export default ActivityDetails;
