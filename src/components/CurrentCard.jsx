import React from "react";
import dayjs from "dayjs";

import { MdLocationPin } from "react-icons/md";

const CurrentCard = (props) => {
    const { city, cityDetail } = props;
    const currentDate = dayjs(new Date()).format("ddd, D MMM");
    const cityName = city?.EnglishName;
    const countryName = city?.Country?.EnglishName;
    const currentTemp = cityDetail?.Temperature?.Metric?.Value;
    const icon = cityDetail?.WeatherIcon;

    return (
        <div className='Card mx-auto text-center py-4 px-3 rounded-md w-60 h-60 bg-[#1b1c48] text-white'>
            <div className='flex justify-between'>
                <p>Today</p>
                <p>{currentDate}</p>
            </div>
            <img
                className='mx-auto mt-5 mb-3 h-20'
                src={
                    icon?.toString().length == 1
                        ? `https://developer.accuweather.com/sites/default/files/0${icon}-s.png`
                        : `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
                }
            />
            <p>{`${Math.floor(currentTemp)}°C`}</p>
            <div className='flex gap-2 items-center mt-4'>
                <MdLocationPin />
                <p>
                    {cityName}, {countryName}
                </p>
            </div>
        </div>
    );
};

export default CurrentCard;
