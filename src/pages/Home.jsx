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
        // console.log(response.data.event);
        setEvents(response.data.event);
      })
      .catch((error) => {
        console.error("Error fetching event list:", error);
      });
  }, []);

  return (
    <div className="bg-gray-200">
      <main className="m-5 px-5 d-flex flex-column ">
        <div class="py-5 flex flex-row justify-between gap-1">
          <div>
            <label class="input input-bordered flex items-center gap-2">
              <input type="text" class="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd" />
              </svg>
            </label>
          </div>
          {/* <div className="py-5 w-12 bg-[#5AB4C5] rounded-lg"></div> */}
        </div>
        {/* <div className="flex flex-row justify-between gap-2 mb-4">
          <div className="py-10 w-48 bg-[#B4E2EA] rounded-lg"></div>
          <div className="py-10 w-48 bg-[#B4E2EA] rounded-lg"></div>
        </div> */}
        {/* <div><p>熱門</p></div> */}
        {eventList.map((event) => (
          <ActivityCard
            key={event.event_id}
            id={event.event_id}
            event_name={event.event_name}
            date={event.date}
            time={event.time}
            location={event.location}
            img_url={event.img_url}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
