import React from "react";
import { Link } from "react-router-dom";

const ActivityCard = () => {
  return (
    <>
      <div className="card shadow-2xl bg-base-100  w-full max-w-48 ">
        <Link to="activity">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="活動圖片"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="flex flex-row justify-center items-center h-screen ">
              <h2 className="card-title">活動名稱</h2>
              <p>日期 / 時間</p>
            </div>
            <p>地點</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ActivityCard;
