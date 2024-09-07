import React from "react";
import { Link } from "react-router-dom";

const ActivityCard = () => {
  return (
    <>
      <div className="card bg-base-100 w-80 mb-8 shadow-xl rounded-lg">
        <Link to="activity">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              活動名稱
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>日期 / 時間 / 地點</p>
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
