import React from "react";

const ActivityCard = () => {
  return (
    <>
      <div className="card bg-base-100 w-full max-w-48 shadow-xl border-sm">
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
      </div>
      ;
    </>
  );
};

export default ActivityCard;
