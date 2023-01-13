import React from "react";
import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import { forecastState } from "../App";

const ForecastCard = () => {
    const forecast = useRecoilValue(forecastState);

    return (
        <div className='forecastCardWrapper flex justify-center gap-8 mt-8'>
            {forecast?.DailyForecasts?.slice(1)?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className='forecastCard text-center text-white w-32 h-32 py-3 rounded-md bg-[#1b1c48]'>
                        <p>{dayjs(item.Date).format("ddd")}</p>
                        <img
                            className='mx-auto mt-2 mb-2'
                            src={
                                item.Day.Icon.toString().length == 1
                                    ? `https://developer.accuweather.com/sites/default/files/0${item.Day.Icon}-s.png`
                                    : `https://developer.accuweather.com/sites/default/files/${item.Day.Icon}-s.png`
                            }></img>
                        <p>{Math.floor(item.Temperature.Maximum.Value)}°C</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ForecastCard;
