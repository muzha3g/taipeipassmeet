import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ActivityCard from "../components/ActivityCard";

const Home = () => {
  const [eventList, setEvents] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://si8a1.asuscomm.com:8000/event_list")
      .then((response) => {
        console.log(response.data["event"]);
        setEvents(response.data["event"]);
      })
      .catch((error) => {
        console.error("Error fetching event list:", error);
      });
  }, []);

  return (
    <main className="flex flex-col flex-wrap justify-center items-center">
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </main>
  );
};

export default Home;
