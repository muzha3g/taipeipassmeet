import React from "react";


const Detail = ({context}) => {
    return (
        <div className="my-1 ml-2 font-bold">
            <p>{context}</p>
        </div>
    )
}

const Answer = ({context}) => {
    return(
        <div className="my-1 ml-2 font-medium">
            <p>{context}</p>
        </div>  
    )
}

const RoomCardDetail = () => {
    return (
        <>
            <div className="bg-base-200 w-80 mt-5 mx-14 rounded-lg p-8 py-5 shadow-lg">
                <div className="text-xl font-bold">房間名稱</div>
                <div className="my-2">
                    <p>房間說明_房間說明_房間說明</p>
                </div>
                <div className=" p-2 rounded-lg bg-white mt-3 flex flex-row gap-8">
                    <div>
                    <Detail context={"房間名稱"}></Detail>
                    <Detail context={"日期時間"}></Detail>
                    <Detail context={"年齡區間"}></Detail>
                    <Detail context={"性別"}></Detail>
                    <Detail context={"人數上限"}></Detail>
                    </div>
                    <div>
                    <Answer context={"一個禮拜不說話"}></Answer>
                    <Answer context={"2024-09-08"}></Answer>
                    <Answer context={"20-29"}></Answer>
                    <Answer context={"不限"}></Answer>
                    <Answer context={"10"}></Answer>
                    </div>
                    {/* <div>
                        <p>房間名稱</p>
                    </div>
                    <div>
                        <p>日期時間</p>
                    </div>
                    <div>
                        <p>年齡區間</p>
                    </div>
                    <div>
                        <p>性別</p>
                    </div>
                    <div>
                        <p>人數上限</p>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default RoomCardDetail