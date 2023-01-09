import React from "react";
import dayjs from "dayjs";

const CurrentCard = (props) => {
    const { city, cityDetail } = props;
    const currentDate = dayjs(new Date()).format("ddd, D MMM");
    const cityName = city?.EnglishName;
    const countryName = city?.Country?.EnglishName;
    const currentTemp = cityDetail?.Temperature?.Metric?.Value;
    const icon = cityDetail?.WeatherIcon

    return (
        <div className='Card mx-auto text-center py-5 rounded-md w-48 h-48 bg-[#1b1c48] text-white'>
            <div className='flex justify-between'>
                <p>Today</p>
                <p>{currentDate}</p>
            </div>
            <div className="flex">
                <p>{`${currentTemp}°C`}</p>
                <img src={icon.toString().length == 1 ? `https://developer.accuweather.com/sites/default/files/0${icon}-s.png` : `https://developer.accuweather.com/sites/default/files/${icon}-s.png`} />
            </div>
            <p>
                {cityName}, {countryName}
            </p>
        </div>
    );
};

export default CurrentCard;
