import React from "react";

const UserRoomCard = () => {
    return (
        <>
            <div className="text-center">
                <p className="font-bold text-2xl" style={{ color: '#468D9B' }}>我的房間</p>
            </div>
            <div className="card flex flex-row bg-base-200 w-80 h-24 shadow-lg mt-5 mx-14 rounded-none rounded-l-lg rounded-r-lg">
                <figure className="w-1/2 h-full rounded-none rounded-l-lg">
                    <img className="h-full w-full object-cover" 
                        src="https://www.nuk.edu.tw/var/file/0/1000/pictures/337/m/mczh-tw1920x1920_large35845_242034431430.jpg" 
                        alt="圖片" />
                </figure>
                <div className="flex flex-col justify-center p-4 w-1/2">
                    <div className="text-lg font-bold">名稱</div>
                    <div className="text-md">日期</div>
                    <div className="text-md">時間</div>
                </div>
            </div>
         </>
    );
};
export default UserRoomCard;