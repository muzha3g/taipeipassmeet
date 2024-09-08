import React from "react";
import { GiPartyFlags } from "react-icons/gi";


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

const RoomCardDetail = ({key, rid, description, name, date, time, low_age, high_age, condition, participant, roomCapacity}) => {
    return (
        <>
            <div className="bg-base-200 w-80 mt-5 mx-14 rounded-lg p-8 py-5 shadow-lg">
                <div className="flex flex-row items-center gap-5">
                    <div className="text-5xl ml-2" style={{ color: '#71C5D5' }}>
                        <GiPartyFlags />
                    </div>
                    <div>
                        <div className="text-xl font-bold" style={{ color: '#468D9B' }}>{name}</div>
                        <div className="my-2" style={{ color: '#468D9B' }}>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className=" p-2 rounded-lg bg-white mt-3 flex flex-row gap-8">
                    <div>
                    <Detail context={"日期"}></Detail>
                    <Detail context={"時間"}></Detail>
                    <Detail context={"年齡區間"}></Detail>
                    <Detail context={"期望條件"}></Detail>
                    <Detail context={"期望人數"}></Detail>
                    <Detail context={"目前人數"}></Detail>
                    </div>
                    <div>
                    <Answer context={date}></Answer>
                    <Answer context={time}></Answer>
                    <Answer context={`${low_age}-${high_age}`}></Answer>
                    <Answer context={condition}></Answer>
                    <Answer context={roomCapacity}></Answer>
                    <Answer context={participant}></Answer>
                    {/* <Answer context={`${participant}/${roomCapacity}`}></Answer> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomCardDetail