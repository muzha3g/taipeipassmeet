import React from "react";
import { Link } from "react-router-dom";

const RoomCard = () => {
  return (
    <div>
      <Link to="room">
        <div className="bg-base-200">
          <div className="collapse-title" border-3>
            <h3 className="fw-bold">房間名稱</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;
