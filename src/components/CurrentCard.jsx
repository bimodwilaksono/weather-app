import React from "react";
import dayjs from 'dayjs'
import { WiDayCloudy } from "react-icons/wi";

const CurrentCard = (props) => {
  const {city, cityDetail} = props;
  const currentDate = dayjs(new Date()).format('MMM D, hh:mm a')
  const cityName = city?.[0]?.EnglishName
  const countryName = city?.[0]?.Country?.EnglishName
  const currentTemp = cityDetail?.[0]?.Temperature?.Metric?.Value
  const currentWeather = cityDetail?.[0]?.WeatherText

    return (
        <div className='Card mx-auto text-center py-5 rounded-md w-48 h-48 bg-[#1b1c48] text-white'>
            <p className="text-left">{currentDate}</p>
            <p>{cityName}, {countryName}</p>
            <p>{`${currentTemp}°C`}</p>
            {/* <img src={WiDayCloudy} alt="" /> */}
            <p>{currentWeather}</p>
        </div>
    );
};

export default CurrentCard;
