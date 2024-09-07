import React from "react";
import RoomCard from "../components/RoomCard";
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
        <RoomCard/>
        <div className="my-10">
          <button className="btn btn-wide btn-info font-bold text-lg">
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
