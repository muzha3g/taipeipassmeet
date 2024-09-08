import React, { useState, useEffect } from "react";
import axios from "axios";
import ActivityCard from "../components/ActivityCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [eventList, setEvents] = useState([]); // 初始值應為空數組
  const [loading, setLoading] = useState(true); // 初始化 loading 狀態

  useEffect(() => {
    // 記錄 API 請求開始
    console.log("Fetching event list...");
    axios
      .get("http://si8a1.asuscomm.com:8000/event_list")
      .then((response) => {
        console.log("Event list fetched:", response.data.event);
        setEvents(response.data.event);
        setLoading(false); // 請求完成後將 loading 設為 false
      })
      .catch((error) => {
        console.error("Error fetching event list:", error);
        setLoading(false); // 即使錯誤也要將 loading 設為 false
      });
  }, []);

  return (
    <div className="bg-gray-200">
      <main className="m-5 px-5 d-flex flex-column">
        <div className="py-5 flex flex-row justify-between gap-1">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow w-64" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>

        {/* 顯示加載狀態 */}
        {loading ? (
          <>
            <Skeleton count={40} />
          </>
        ) : (
          eventList.map((event) => (
            <ActivityCard
              key={event.event_id}
              id={event.event_id}
              event_name={event.event_name}
              date={event.date}
              time={event.time}
              location={event.location}
              img_url={event.img_url}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
