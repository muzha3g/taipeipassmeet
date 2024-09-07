import React from "react";
import { Link } from "react-router-dom";

const ActivityCard = ({ id, event_name, date, time, location, img_url }) => {
  return (
    <>
      <div className="card bg-base-100 w-80 mb-8 shadow-xl rounded-lg">

        <Link to={`/activity/${id}`}>
          <figure>
            <img src={img_url} alt="圖片" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {event_name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              {date} / {time} / {location}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">藝文</div>
              <div className="badge badge-outline">音樂</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ActivityCard;
