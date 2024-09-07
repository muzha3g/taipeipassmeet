import React from "react";
import ActivityCard from "../components/ActivityCard";
import RoomCard from "../components/RoomCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ActivityDetails = () => {
  const { id } = useParams();

  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get(`http://si8a1.asuscomm.com:8000/id=${id}`)
      .then((response) => {
        console.log(response.data);
        setEvent(response.data);
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
        <RoomCard />
      </main>
    </>
  );
};

export default ActivityDetails;
