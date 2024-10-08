import React from "react";
import ActivityCard from "../components/ActivityCard";
import RoomCard from "../components/RoomCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ActivityDetails = () => {
  const { eid } = useParams();
  const [loading, setLoading] = useState(true);

  const [event, setEvent] = useState([]);
  const [roomList, setRooms] = useState([{}]);

  useEffect(() => {
    axios
      .get(`http://si8a1.asuscomm.com:8000/id=${eid}`)
      .then((response) => {
        // console.log(response.data);
        setEvent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event list:", error);
      });
    axios
      .get(`http://si8a1.asuscomm.com:8000/roomList=${eid}`)
      .then((response) => {
        // console.log(response.data);
        setRooms(response.data);
        setLoading(false);
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
          img_url={event.img_url}
        />
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
